# -*- coding: utf-8 -*-
"""
opencode Token 消耗统计脚本
=====================================
读取 opencode 本地数据库（opencode.db），统计各模型每日的 token 消耗，
生成前端页面所需的数据文件 data.js。

用法:
    python stats.py                 # 使用默认数据库路径
    python stats.py <db路径>        # 指定数据库文件

输出:
    同目录下的 data.js（window.TOKEN_DATA = {...}）
"""

import json
import os
import sqlite3
import sys
import datetime

# ---------- 配置 ----------
# 默认数据库路径（Windows / Linux / macOS）
DEFAULT_DB_CANDIDATES = [
    os.path.join(os.path.expanduser("~"), ".local", "share", "opencode", "opencode.db"),
    os.path.join(os.environ.get("APPDATA", ""), "opencode", "opencode.db"),
    os.path.join(os.path.expanduser("~"), ".config", "opencode", "opencode.db"),
]

# 本地时区偏移（小时），按北京时间统计日期
LOCAL_TZ = datetime.timezone(datetime.timedelta(hours=8))

OUTPUT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.js")


def find_db_path():
    """查找 opencode 数据库路径"""
    if len(sys.argv) > 1:
        return sys.argv[1]
    for p in DEFAULT_DB_CANDIDATES:
        if p and os.path.isfile(p):
            return p
    return None


def load_messages(db_path):
    """从数据库中读取全部 assistant 消息的 token 使用数据。
    返回 [{day, model, variant, provider, tokens, cost}]"""
    # 以只读方式打开，避免与其他进程的写入发生冲突
    uri = "file:{}?mode=ro".format(db_path.replace("\\", "/"))
    con = sqlite3.connect(uri, uri=True)
    con.row_factory = sqlite3.Row
    rows = con.execute("SELECT data FROM message").fetchall()
    con.close()

    records = []
    for r in rows:
        try:
            d = json.loads(r["data"])
        except (json.JSONDecodeError, KeyError, TypeError):
            continue

        # 只统计 assistant（模型回复）消息，且必须带 tokens 使用数据
        if d.get("role") != "assistant":
            continue
        tokens = d.get("tokens")
        if not isinstance(tokens, dict) or "input" not in tokens:
            continue

        tinfo = d.get("time", {})
        created = tinfo.get("created") or 0
        if not created:
            continue

        # 时间戳 -> 本地日期
        day = datetime.datetime.fromtimestamp(created / 1000, LOCAL_TZ).strftime("%Y-%m-%d")
        cache = tokens.get("cache", {}) or {}

        records.append({
            "day": day,
            "model": d.get("modelID", "unknown") or "unknown",
            "variant": d.get("variant", "") or "",
            "provider": d.get("providerID", "") or "",
            "calls": 1,
            "input": int(tokens.get("input", 0) or 0),
            "output": int(tokens.get("output", 0) or 0),
            "reasoning": int(tokens.get("reasoning", 0) or 0),
            "cache_read": int(cache.get("read", 0) or 0),
            "cache_write": int(cache.get("write", 0) or 0),
            "total": int(tokens.get("total", 0) or 0),
            "cost": float(d.get("cost", 0) or 0),
        })
    return records


def aggregate(records):
    """按 模型ID × variant × 日期 聚合统计"""
    # 嵌套字典结构: series[model][variant][day] = stats
    series = {}
    model_variants = {}
    all_days = set()

    for rec in records:
        model, variant = rec["model"], rec["variant"]
        key = (model, variant)
        all_days.add(rec["day"])
        if model not in series:
            series[model] = {}
        if variant not in series[model]:
            series[model][variant] = {}
        if model not in model_variants:
            model_variants[model] = set()
        model_variants[model].add(variant)

        day_stats = series[model][variant].get(rec["day"])
        if day_stats is None:
            day_stats = {
                "calls": 0, "input": 0, "output": 0, "reasoning": 0,
                "cache_read": 0, "cache_write": 0, "total": 0, "cost": 0.0,
            }
            series[model][variant][rec["day"]] = day_stats

        day_stats["calls"] += rec["calls"]
        day_stats["input"] += rec["input"]
        day_stats["output"] += rec["output"]
        day_stats["reasoning"] += rec["reasoning"]
        day_stats["cache_read"] += rec["cache_read"]
        day_stats["cache_write"] += rec["cache_write"]
        day_stats["total"] += rec["total"]
        day_stats["cost"] += rec["cost"]

    days = sorted(all_days)
    return series, model_variants, days


def main():
    db_path = find_db_path()
    if not db_path or not os.path.isfile(db_path):
        print("[错误] 未找到 opencode 数据库文件 opencode.db")
        print("      请通过参数指定路径: python stats.py <opencode.db 路径>")
        sys.exit(1)

    print("[1/3] 读取数据库:", db_path)
    records = load_messages(db_path)
    print("      提取到 {} 条模型消息".format(len(records)))

    print("[2/3] 按模型 × 日期聚合...")
    series, model_variants, days = aggregate(records)

    # 模型按首次出现的名称排序（拼音/字符序即可）
    models = []
    for model in sorted(series.keys()):
        variants = sorted(model_variants[model])
        # 计算该模型总消耗，用于排序（消耗大的排前面）
        total_tokens = sum(
            day["total"]
            for variant in series[model].values()
            for day in variant.values()
        )
        models.append({
            "id": model,
            "variants": variants,
            "total_tokens": total_tokens,
        })
    # 按总消耗降序
    models.sort(key=lambda m: -m["total_tokens"])

    # 总体统计
    totals = {"input": 0, "output": 0, "reasoning": 0,
              "cache_read": 0, "cache_write": 0, "total": 0, "cost": 0.0, "calls": 0}

    # 序列化 series: {"model|variant": {"day": {...}}}
    series_out = {}
    for model in sorted(series.keys()):
        for variant in sorted(series[model].keys()):
            key = "{}|{}".format(model, variant)
            series_out[key] = dict(sorted(series[model][variant].items()))
            for day in series_out[key].values():
                for k in totals:
                    totals[k] += day[k]

    data = {
        "generated_at": datetime.datetime.now(LOCAL_TZ).strftime("%Y-%m-%d %H:%M:%S"),
        "db_path": db_path,
        "days": days,
        "models": models,
        "series": series_out,
        "totals": {k: (round(v, 4) if k == "cost" else v) for k, v in totals.items()},
    }

    print("[3/3] 写出数据文件:", OUTPUT_FILE)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("// 本文件由 stats.py 自动生成，请勿手动修改\n")
        f.write("// 刷新数据：python stats.py\n")
        f.write("window.TOKEN_DATA = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    print("完成！")
    print("  模型数: {}   日期范围: {} ~ {}   总消耗token: {:,}".format(
        len(models), days[0], days[-1], totals["total"]))
    print("  现在打开 index.html 查看统计页面。")


if __name__ == "__main__":
    main()