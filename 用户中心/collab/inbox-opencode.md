# opencode 收件箱

**启动方式（CLI，用户在终端执行）**：

```
cd /d D:\workspace\bidcenter-github.github.io\用户中心 && opencode run "读 collab/PROTOCOL.md、collab/BOARD.md、collab/inbox-opencode.md，执行 owner=opencode 的待办任务，按协议交付并回写 BOARD"
```

（若你的 opencode 版本非交互参数不同，把引号内 prompt 手动粘贴进 opencode 亦可。）

## OC-1 新接口注入脚本

背景：项目正从旧接口切到新接口（`D:\workspace\shuidi-api-doc.txt`，Full/V1，18 维度）。现有注入是手工 python 替换 `detail-template.html` 里的 `__API_DATA__` 占位符写出 `enterprise-detail.html`，需要固化成可复用脚本。

要求：
1. 脚本放 `collab/scripts/inject_new_api.py`，参数：导出数据文件路径（JSON 或 txt）、模板路径、输出路径，默认值指向本项目文件。
2. 注入前做维度对齐检查：对照 shuidi-api-doc.txt 的 18 维度列表，导出数据缺失的维度在报告里标出（页面侧删除由 leader 另行派任务，脚本不改页面结构）。
3. 空维度补 3 条示例数据的逻辑做成可选开关（--mock），示例字段严格按文档命名。
4. dry-run 模式（--dry）只输出 diff 摘要不写文件。
5. 禁止修改任何页面 html、禁止写版本号/CHANGELOG。

交付：脚本 + `report-OC-1.md`（用法、dry-run 输出样例、维度对齐检查结果）。完成后把 BOARD 的 OC-1 改「待验收」。
