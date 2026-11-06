# 任务看板（collab/BOARD.md）

> 状态流转：待办 → 进行中 → 待验收 → 完成｜阻塞。worker 只改自己任务的状态；「完成」由 leader 写。

## 任务

| ID | 任务 | owner | 状态 | 占用文件 | 验收标准 |
|---|---|---|---|---|---|
| OC-1 | 新接口注入脚本 inject_new_api.py（读新接口导出 → 替换 detail-template.html 的 __API_DATA__ → 写出 enterprise-detail.html；含维度对齐与空维度补 3 条示例逻辑） | opencode | 待办 | collab/scripts/*、仅读 detail-template.html | 脚本可跑通 dry-run；不直接改任何页面文件；report-OC-1.md 说明用法 |
| MV-1 | 全站一致性巡检：19 页徽标/title 版本一致、main-nav 同族互链正确、sidebar 菜单入口齐全、三族解锁门文案一致；只出报告不改文件 | mavis | 待办 | 只读全部 html | report-MV-1.md 列出问题清单（文件+行+建议），不直接修改 |
| QW-1 | field-mapping.md 三处待确认（实缴出资额值源 / WebSite 大小写 / 工程信息区块去留）汇总问用户 | leader | 阻塞-等用户 | — | 用户答复后转任务派发 |
| QW-2 | 「中标业绩」tab 占位去留问用户 | leader | 阻塞-等用户 | — | 同上 |

## 提问区

（格式：`[日期 提问者] 问题 … [日期 答复者] 答复`）

- 暂无

## 完成归档

（leader 验收后把任务行移到这里，保留 ID 与一句话结果）

- 暂无
