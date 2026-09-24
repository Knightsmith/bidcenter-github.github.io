---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 4db2a0f4b8ab2f035f3462697a88899a_967037e2b57d11f1a816525400cd780f
    ReservedCode1: /2+f+7ZqSupcyazhLAhoU14u3ih7LuJxE1qETQvAk0+iXo8HpVrbbfnbL4BJdATGMdF6KL9T6sgxzzU73x0ZjaCI0U87syTV+HhP69D0CFnfF/WY9qghQQS9RE5l4FPipmmN0VdgwxThBpex9VPqOWa5nTnRbotazPAQgLR5P4rYz7AzFB4r+K4SW/Y=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 4db2a0f4b8ab2f035f3462697a88899a_967037e2b57d11f1a816525400cd780f
    ReservedCode2: /2+f+7ZqSupcyazhLAhoU14u3ih7LuJxE1qETQvAk0+iXo8HpVrbbfnbL4BJdATGMdF6KL9T6sgxzzU73x0ZjaCI0U87syTV+HhP69D0CFnfF/WY9qghQQS9RE5l4FPipmmN0VdgwxThBpex9VPqOWa5nTnRbotazPAQgLR5P4rYz7AzFB4r+K4SW/Y=
---

# CRM 任务系统原型 — AI 交接说明

> 用途：供后续接手的 AI 快速恢复上下文，无需重读对话历史。
> 生成日期：2026-09-17
> 项目：采招网 / bidcenter CRM 任务管理模块（HTML 静态原型）

---

## 一、任务目标

为 CRM 场景的「任务系统」产出两类交付物：

1. **设计说明文档**（已完成，v1.2）
2. **HTML 静态原型页面**：使用本地 shadcn-lib 组件库，每个页面一个独立 HTML 文件

页面共 4 个：任务列表页、任务聚合处理页、领导任务页、任务报表页。

---

## 二、产出文件清单

| 文件 | 绝对路径 | 状态 |
|---|---|---|
| 任务系统设计说明.md | `C:\Users\knigh\AppData\Roaming\Tencent\Marvis\User\oAN1i2Yl-KKIU5yvEBcUthrJqIDU\workspace\conv_c63bf659ae9944ffa09c429fadafd56d\output\任务系统设计说明.md` | v1.2，已完成，含 7 项待确认 |
| 任务列表.html | 同上目录 `\任务列表.html` | **新版**（2026-09-17 14:50，81899 字节，1993 行，已按库原生重做） |
| 任务聚合处理.html | 同上目录 `\任务聚合处理.html` | **旧版**（2026-09-16 20:22，71204 字节，含自造样式，待重做） |
| 领导任务.html | 同上目录 `\领导任务.html` | **旧版**（2026-09-16 20:22，63719 字节，含自造样式，待重做） |
| 任务报表.html | 同上目录 `\任务报表.html` | **旧版**（2026-09-16 20:22，71668 字节，含自造样式，待重做） |

站点目录：`D:\workspace\bidcenter-github.github.io`，原型正式归属应为 `D:\workspace\bidcenter-github.github.io\Crm\`（尚未迁移，页面间相对跳转需同目录才有效）。

---

## 三、技术基准：本地 shadcn-lib（最关键）

**库路径**：`D:\workspace\bidcenter-github.github.io\shadcn-lib`

| 组成 | 说明 |
|---|---|
| `theme/default-semantic-tokens.css` | 138 行，`@layer` 外的 `:root` + `.dark` 两套 token，OKLCH 色彩空间 |
| `components/<name>/` | 共 55 个组件，每个含 `<name>.css` + `component-skill.md` |
| `documentation/index.html` | 库的官方示例页，是"什么才算原生 shadcn"的唯一视觉基准 |

**库里实际存在的语义 token（仅此一套）**

`--background / --foreground / --card / --card-foreground / --popover / --popover-foreground / --primary / --primary-foreground / --secondary / --secondary-foreground / --muted / --muted-foreground / --accent / --accent-foreground / --destructive / --destructive-foreground / --border / --input / --ring / --sidebar* / --chart-1~5 / --font-* / --radius + --radius-sm/md/lg/xl / --spacing / --tracking-normal / --shadow-*`

**库默认主题为中性灰**（例：`--primary: oklch(0.205 0 0)`、`--background: oklch(1 0 0)`、`--border: oklch(0.922 0 0)`、`--radius: 0.625rem`）。

**库的缺失项（踩坑根源，务必注意）**

| 缺失 | 后果 |
|---|---|
| 无 `--success`、无 `--orange`、无 `--warning` | 任何"绿色成功态""橙色中优先级"都无法用库 token 表达，不得自造 HEX |
| `badge` 只有 default / secondary / outline，**无 destructive 变体** | 高优先级、已逾期无法用红色标识 |
| 无 navbar 组件、无 toolbar 组件 | 顶部导航与筛选工具条只能用纯布局容器拼 |

---

## 四、硬约束与红线（接手必读）

用户对"看起来像 shadcn 但不是"零容忍，以下是强制约束：

1. **只用库原生**：页面中每个类名都必须能追溯到 shadcn-lib 的 token 或某个组件的 css，**自造样式数量必须为 0**。
2. **禁止自造色值**：不得新增任何非库来源的颜色（HEX / 自造 CSS 变量）。语义色只能用 `primary / secondary / muted / accent / destructive`，表达不了就改用纯布局规避。
3. **主题使用库默认 OKLCH**（用户已明确选择方案 A）。不得做品牌色覆写。
   - 说明：曾尝试覆写为 Crm 现有页面的品牌蓝 `#6F9BC4` 等 18 项 HEX，被用户否决。
4. **单文件、纯内联**：0 个 `<link>`、0 个 `<script src>`，保留库的 `@layer` 结构。
5. **页面级只允许纯布局容器**（宽高、栅格、间距、flex/grid）；不得自造颜色、边框、阴影、圆角、字重。
6. **库中没有的东西**：优先用库已有语义色或纯布局规避；如确实必需（例如红色高优先级标识），应向用户提议**在库侧补一个变体**，而不是在页面里手搓。
7. 每页单独一个独立 HTML 文件；页面之间通过顶部导航互跳。
8. 交互必须用原生 JS 真实生效，不接受静态假交互。

---

## 五、已确认的业务设计（来源：任务系统设计说明 v1.2）

### 5.1 字段

提醒时间、任务类型、客户名称、相关联系人、实际联系人、任务说明、处理结果、任务状态、当前响应负责人。

- **相关联系人**：任务创建时预设，非必填。
- **实际联系人**：处理任务时填写，**必填**，可与相关联系人不同。
- 两者相互独立，任务发起人与实际联系人可能为两个人。

### 5.2 任务分类

| 大类 | 子类型 | 优先级 |
|---|---|---|
| 新发任务 | 系统分发客户 | — |
| 系统任务 | 活动报名、会员升级、中标追踪 | 高 |
| 系统任务 | 项目追踪、邮件关闭、功能使用超限 | 中 |
| 自建任务 | 临时任务、重复任务、撞单任务 | — |

### 5.3 任务状态（独立字段，与处理结果解耦）

`待处理` / `待跟进` / `已处理` / `已逾期`

流转：未处理→待处理；处理结果=下次联系→待跟进；处理结果=已处理→已处理；超时未处理→已逾期。

### 5.4 逾期判定（以发起时间为基准）

- 当天 **18:00 前**发起 → 当天 **24:00** 前未处理即计为逾期
- 当天 **18:00 后**发起 → 当天仍计入「今日任务」，但**不纳入次日逾期**

### 5.5 处理与聚合

- 处理结果二选一：**已处理** / **下次联系**；选后者时联系时间为必填。
- 聚合触发条件：同一客户存在 **≥2 条未完成**任务。
- 批量规则：**统一处理结果 + 统一联系时间 + 统一实际联系人 + 一次性提交**。
- 单条任务：直接弹处理对话框；多条：跳转「任务聚合处理.html?customer=C0x」。

### 5.6 列表筛选

今日任务（**默认**）/ 过期任务 / 未来任务 / 全部任务；二级筛选：客户（可输入搜索）、任务分类、任务状态。

### 5.7 领导视图与报表

- 领导任务页：在列表基础上增加「**当前响应负责人**」筛选。
- 报表页：按人统计当天任务总数、已处理、待处理、待跟进、已逾期、处理率（progress 组件）；另附按任务类型的汇总表。

### 5.8 跳转约定

「查看客户」统一跳转 `D:/workspace/bidcenter-github.github.io/Crm/客户详情页-重构.html`（新版页面带 `customerId / customer / from` 参数）。

---

## 六、演进与返工记录（避免重蹈覆辙）

| 阶段 | 动作 | 结果 |
|---|---|---|
| 1 | 探查本地 shadcn-lib，确定以真实内联 token + 组件 css 的方式做原型 | 库路径、token、组件 API 摸清 |
| 2 | 生成 4 个页面（一次派发） | 用户中断，判断为任务过重 |
| 3 | 拆分为单页任务串行推进，补齐 4 页 | 4 页产出，但用户反馈「**长得一点都不像 shadcn**」 |
| 4 | 定位根因 | 见下 |
| 5 | 用户选定方案 A（库默认主题），只重做「任务列表.html」 | 新版完成，自造样式 0；另三页待重做 |

**返工根因（重要，别再犯）**

1. **指令要求了库中不存在的颜色**——要求"中优先级用橙色""处理率用绿色 success"，而库没有 `--orange` / `--success`，执行方只能自造 HEX。
2. **额外压了一层品牌色覆写**——把库的 OKLCH 中性主题整套换成 18 项 HEX 品牌蓝，库的原始观感被完全盖掉。
3. **留了"页面级扩展层"的口子**——产生自造徽标变体、工具类等非库样式。

结论：组件壳子是库的、颜色与外壳是自造的，整体观感必然变成"蓝色企业后台风"。

---

## 七、当前状态与待办

### 当前状态

- 「任务列表.html」为**新版**，符合全部硬约束；其余三页为旧版，仍含自造样式与品牌色覆写。

### 待办（按优先级）

| # | 待办 | 说明 |
|---|---|---|
| 1 | 重做剩余三页 | 照「任务列表.html」新版同一套基线推：任务聚合处理 / 领导任务 / 任务报表 |
| 2 | 决定 badge 红色标识 | 库无 destructive 变体，"高优先级/已逾期"当前无红色可用。要么在库侧补变体，要么永久放弃红色 |
| 3 | 演示数据基准日 | 当前为 2026-09-16，已过期一天，需更新为当前日期 |
| 4 | 迁移到站点目录 | 从临时 output 目录迁到 `D:\workspace\bidcenter-github.github.io\Crm\` |
| 5 | 设计文档 7 项待确认 | 见下一节 |

### 设计文档剩余待确认项

1. 相关联系人是单值还是多值（多选上限）
2. 提醒时间的默认值与可修改范围
3. 系统任务优先级分组是否支持后台配置
4. 18:00 后发起任务的逾期截止时间口径细化
5. 批量处理是否需支持按任务分别设置结果（当前为统一结果）
6. 「待跟进」任务在列表中的展示与再次提醒策略
7. 报表页是否支持时间范围切换（当前固定当天）

> 其中第 1、3 项会影响页面是否返工：新发任务 / 自建任务是否也带优先级；相关联系人是否多选。

---

## 八、协作对象偏好

- 称呼用户为 **boss**；沟通简要直接，不啰嗦。
- 有疑问先给选项让用户挑，不钻牛角尖。
- 交付物要真正原生，不接受"像但不是"的仿制。
- 用户会逐页验收，倾向于**先看一页样板、确认后再批量推**。
- 该用户为采招词元（招投标数据 API）运营/市场侧成员、页面负责人，常向刘总汇报。

---

## 九、给接手 AI 的一句话总结

> 库是 `D:\workspace\bidcenter-github.github.io\shadcn-lib`，主题用库默认 OKLCH 中性灰，页面上每个类名都要能追溯到库内出处、自造样式必须为 0；库缺色就回到 `primary/secondary/muted/accent/destructive` 或纯布局，绝不新造色值；当前「任务列表.html」是唯一达标的样板，其余三页照它推。
*（内容由AI生成，仅供参考）*
