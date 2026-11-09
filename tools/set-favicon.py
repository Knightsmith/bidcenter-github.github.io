#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
全站 favicon 统一化脚本（幂等，可反复执行）

用途：把仓库内所有自建页面的 favicon 统一为「紫色圆角方块 + 白色屿」，
      以后新增页面只需跑一次本脚本，无需逐页手改。
      另外在站点根目录维护 favicon.svg / favicon.ico，供未声明 icon 的页面兜底。

用法：
    python tools/set-favicon.py            # 执行统一化
    python tools/set-favicon.py --dry-run  # 只统计不落盘
    python tools/set-favicon.py --include-thirdparty  # 连 shadcn-lib 文档副本一起处理
"""
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {'.git', '.github', 'node_modules', 'dist', 'build'}

ICON_SVG = (
    "<link rel=\"icon\" type=\"image/svg+xml\" href=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'"
    "%20viewBox='0%200%2064%2064'%3E%3Crect%20width='64'%20height='64'%20rx='14'%20fill='%237c3aed'/%3E%3Ctext"
    "%20x='32'%20y='45'%20text-anchor='middle'%20font-size='40'%20font-weight='700'%20fill='%23ffffff'"
    "%20font-family='Microsoft%20YaHei,sans-serif'%3E%E5%B1%BF%3C/text%3E%3C/svg%3E\">"
)

ICON_RE = re.compile(r'[ \t]*<link[^>]+rel=["\']?(?:shortcut )?icon["\']?[^>]*>[ \t]*\r?\n?', re.I)


def iter_html(include_thirdparty=False):
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS
                       and (include_thirdparty or d != 'shadcn-lib')]
        for fn in filenames:
            if fn.lower().endswith(('.html', '.htm')):
                yield os.path.join(dirpath, fn)


def read_text(path):
    raw = io.open(path, 'rb').read()
    for enc in ('utf-8-sig', 'utf-8', 'gb18030'):
        try:
            return raw.decode(enc), enc, raw[:3] == b'\xef\xbb\xbf'
        except UnicodeDecodeError:
            continue
    raise UnicodeDecodeError('unknown', b'', 0, 1, 'decode failed')


def process(path, dry_run=False):
    """返回 'inserted' / 'replaced' / 'skipped' / 'error'"""
    try:
        text, enc, bom = read_text(path)
    except Exception as e:
        return 'error:%s' % e

    matches = list(ICON_RE.finditer(text))
    if matches:
        if len(matches) == 1 and ICON_SVG in matches[0].group(0):
            return 'skipped'
        first = matches[0]
        indent = re.match(r'[ \t]*', first.group(0)).group(0)
        # 保留原缩进，删除其余重复声明
        new = text
        for m in reversed(matches[1:]):
            new = new[:m.start()] + new[m.end():]
        m0 = ICON_RE.search(new)
        new = new[:m0.start()] + indent + ICON_SVG + '\n' + new[m0.end():]
        result = 'replaced'
    else:
        m = re.search(r'([ \t]*)</title>[ \t]*\r?\n', text, re.I)
        if m:
            indent = m.group(1)
            new = text[:m.end()] + indent + ICON_SVG + '\n' + text[m.end():]
        else:
            m = re.search(r'([ \t]*)</head>', text, re.I)
            if not m:
                return 'skipped'
            new = text[:m.start()] + m.group(1) + ICON_SVG + '\n' + text[m.start():]
        result = 'inserted'

    if not dry_run:
        with io.open(path, 'wb') as f:
            f.write((b'\xef\xbb\xbf' if bom else b'') + new.encode('utf-8'))
    return result


def main():
    dry = '--dry-run' in sys.argv
    inc = '--include-thirdparty' in sys.argv
    stat = {}
    for path in iter_html(inc):
        r = process(path, dry)
        key = r.split(':')[0]
        stat[key] = stat.get(key, 0) + 1
        if key in ('error', 'replaced'):
            print('%-10s %s' % (key, os.path.relpath(path, ROOT)) + (('  ' + r.split(':', 1)[1]) if ':' in r else ''))
    print('\n统计:', stat, '(dry-run)' if dry else '')


if __name__ == '__main__':
    main()
