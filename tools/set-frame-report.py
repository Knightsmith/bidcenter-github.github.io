#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
内容页地址上报脚本（幂等，可反复执行）

用途：让被 sidebar.html 以 iframe 托管的页面在加载时把自己的文件名 postMessage 给顶层，
      使顶层地址栏的 ?page= 能跟随 iframe 内部跳转（详情页顶部 tab 切页等）。
      file:// 下父页读不到 contentWindow.location，只能靠内容页主动上报。

用法：
    python tools/set-frame-report.py                # 处理 用户中心 目录
    python tools/set-frame-report.py --all          # 处理 用户中心 + Crm + 主站 + 移动端
    python tools/set-frame-report.py --dry-run
"""
import io
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {'.git', '.github', 'node_modules', 'dist', 'build', 'shadcn-lib', 'temp'}
DEFAULT_DIRS = ['用户中心']
ALL_DIRS = ['用户中心', 'Crm', '主站', '移动端']
EXCLUDE_FILES = {'sidebar.html'}  # 顶层框架自身不注入，避免无意义上报

MARK = 'data-frame-report'
SNIPPET = (
    '<script data-frame-report>\n'
    '(function () {\n'
    '  try {\n'
    '    if (window.parent === window) return;\n'
    '    var p = decodeURIComponent((location.pathname.split(\'/\').pop() || \'\'));\n'
    '    if (!/\\.html$/i.test(p)) return;\n'
    "    parent.postMessage({ type: 'bidcenter-location', page: p, title: document.title || '' }, '*');\n"
    '  } catch (e) {}\n'
    '})();\n'
    '</script>\n'
)


def target_dirs(argv):
    if '--all' in argv:
        return ALL_DIRS
    picked = [a for a in argv if a in ALL_DIRS]
    return picked or DEFAULT_DIRS


def iter_html(dirs):
    for d in dirs:
        base = os.path.join(ROOT, d)
        if not os.path.isdir(base):
            continue
        for dp, dns, fns in os.walk(base):
            dns[:] = [x for x in dns if x not in SKIP_DIRS]
            for fn in fns:
                if fn.lower().endswith(('.html', '.htm')) and fn not in EXCLUDE_FILES:
                    yield os.path.join(dp, fn)


def read_text(path):
    raw = io.open(path, 'rb').read()
    bom = raw[:3] == b'\xef\xbb\xbf'
    for enc in ('utf-8-sig', 'utf-8', 'gb18030'):
        try:
            return raw.decode(enc), bom
        except UnicodeDecodeError:
            continue
    raise UnicodeDecodeError('unknown', b'', 0, 1, 'decode failed')


def process(path, dry_run=False):
    try:
        text, bom = read_text(path)
    except Exception as e:
        return 'error:%s' % e
    if MARK in text:
        return 'skipped'
    m = re.search(r'([ \t]*)</body>', text, re.I)
    if m:
        new = text[:m.start()] + m.group(1) + SNIPPET + text[m.start():]
    elif re.search(r'</html>', text, re.I):
        i = re.search(r'</html>', text, re.I).start()
        new = text[:i] + SNIPPET + text[i:]
    else:
        new = text + '\n' + SNIPPET
    if not dry_run:
        with io.open(path, 'wb') as f:
            f.write((b'\xef\xbb\xbf' if bom else b'') + new.encode('utf-8'))
    return 'injected'


def main(argv):
    dry = '--dry-run' in argv
    stat = {}
    for path in iter_html(target_dirs(argv)):
        r = process(path, dry)
        key = r.split(':')[0]
        stat[key] = stat.get(key, 0) + 1
        if key == 'error':
            print('error', os.path.relpath(path, ROOT), r.split(':', 1)[1])
    print('目录:', target_dirs(argv), '统计:', stat, '(dry-run)' if dry else '')


if __name__ == '__main__':
    main(sys.argv[1:])
