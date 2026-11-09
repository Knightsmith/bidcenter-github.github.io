# 多 AI 协作协议（collab/PROTOCOL.md）

> 项目：bidcenter 用户中心（D:\workspace\bidcenter-github.github.io\用户中心）
> 成员：**QwenWork = leader**（拆任务、验收、合并、唯一版本号/CHANGELOG 写权限）；**opencode = 复杂内容**（脚本、注入、接口对齐、重构）；**mavis = 批量执行**（巡检、补页、同步、文案）。
> 项目约定总纲见上级目录 `HANDOFF.md` 与 `CHANGELOG.md` 顶部维护规则，本协议只规定协作流程。

## 一、开工流程（每个 AI 每次会话开始）

1. 读 `PROTOCOL.md`（本文件）→ 读 `BOARD.md` → 读自己的 `inbox-<名字>.md`。
2. 只认领 owner 是自己、状态为「待办」的任务；一次只做一个。**开工前核对任务建立时间与 collab/ 下已有 report：状态非「待办」或报告已存在的任务一律跳过，不重复执行**；每个任务有唯一 ID，inbox 里标注「本轮」的优先。
3. 做完：写结果报告 `report-<任务ID>.md` → 把 BOARD 里该任务状态改「待验收」→ 停手等 leader。

## 二、红线（违反即回滚）

1. **版本号与 CHANGELOG 只有 leader 能写**；worker 一律不动 `.version-badge`、title 版本、CHANGELOG.md。
2. **单文件单 owner**：任务开始时在 BOARD 的「占用文件」列登记；别人登记的文件不碰。
3. 不确定的需求/设计：**停手**，在 BOARD「提问区」写问题，等 leader 或用户答复，不自行变通。
4. 不改解锁门三家族机制、不改已确认文案/配色；用户截图只取版式。
5. worker 不新建页面文件（需要新页面时在提问区申请）。

## 三、leader 职责（QwenWork）

1. 拆任务、写 inbox、分配 owner；答复提问区。
2. 验收报告 → 合并冲突 → 统一升版本号 + 同步全站徽标/title + 写 CHANGELOG → BOARD 状态改「完成」。
3. 需要用户决策的事汇总后一次性问用户，不打断 worker。

## 四、交付物位置

- 脚本/工具：`collab/scripts/`
- 报告：`collab/report-<任务ID>.md`
- 正式页面改动：直接改上级目录页面文件（遵守 HANDOFF.md 约定），但版本相关留给 leader。
