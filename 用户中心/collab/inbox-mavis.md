# mavis 收件箱

> **本轮任务（2026-11-06）：MV-3、MV-4。** MV-1/MV-2 为 2026-11-05 建立：开工前先看 BOARD 状态与 collab/ 下是否已有对应 report——状态非「待办」或报告已存在的任务**不要重做**，直接跳过做下一个。

**启动语（用户粘贴给 mavis）**：请读 `D:\workspace\bidcenter-github.github.io\用户中心\collab\PROTOCOL.md` 和 `BOARD.md`，然后读本文件，执行 owner=mavis 的待办任务。

## 状态相框（2026-11-06 更新，leader 验收前以此为准）

| ID | 任务 | 状态 | 回执摘要 |
|---|---|---|---|
| MV-1 | 全站一致性巡检 | 待验收 | 只读未改文件；8 条问题清单 → `report-MV-1.md` |
| MV-2 | 18 页挂 sidebar 托管 | 待验收 | 18/18 已插入 head 首行，sidebar.html 未加 |
| MV-3 | 公司信息区统一 | 待验收 | 5 页改更新时间格式；2 类差异跳过并提问 |
| MV-4 | 容器宽 1400→1600 | 待验收 | 18 页已统一；grep 残留 0；2 页自有宽未改 |

- 三份报告均已落盘：`collab/report-MV-1.md`、`report-MV-3.md`、`report-MV-4.md`（MV-2 无独立报告，回执见下方）。
- 未改：版本号、CHANGELOG.md（协议规定由 leader 统一处理）。
- 待 leader 裁决 6 条提问，已写入 `BOARD.md` 提问区。

## MV-1 全站一致性巡检（只读，不改文件）

范围：`D:\workspace\bidcenter-github.github.io\用户中心\` 下全部 19 个 html。

检查项：
1. 每页 `.version-badge` 与 title 内版本引用一致，且等于 CHANGELOG.md 顶部当前版本。
2. main-nav 五 tab 按色族互链：红族 4 页（*-locked-vip + bid-analysis-locked-vip）互链；橙族 3 页（*-locked）互链、中标分析指基础版；蓝族 3 页（*-locked-count）同橙族规则；基础族 4 页互链；detail-template 同基础族。「中标业绩」应为占位。
3. 页面不自带侧边栏（无 `<aside` / sidebar-trigger 残留），外框统一 sidebar.html 托管；sidebar.html 菜单「企业详情」组含查企业/找人脉/中标分析/商机脉络。
4. 三族解锁门文案/数字格：橙=使用 10 积分+账户剩余积分格；蓝=剩余可解锁次数 962；红=开通会员与查企业/中标分析+数字格（18 种/185 个/523 条）+会员期内有效。
5. 每个数据区块分页是否遵守单页 10 条。

交付：`report-MV-1.md`，按「文件 → 行号 → 问题 → 建议改法」列表；**不要直接改任何文件**。完成后把 BOARD 的 MV-1 改「待验收」。

> **✅ 回执（2026-11-06）**：已完成，未改任何 html。结论 5 项检查全部执行：徽标 20/20 为 v3.14.0；main-nav 16 页互链全对；内容页无 `<aside>`；三族解锁门字段齐全；分页 PER=10 一致。共列 8 条问题（title 版本口径、`.sidebar-trigger` CSS 残留、红族「与/和」文案、联系电话「更多联系方式」链接口径、team-batch-auth 静态分页条等）。BOARD 已改「待验收」。→ `collab/report-MV-1.md`

## MV-2 内容页统一挂 sidebar 托管（改文件，但不动版本）

给以下 18 个文件的 `<head>` 标签后第一行插入一行 script（其余内容一律不动；**sidebar.html 绝对不能加**，会自循环）：

enterprise-detail.html、detail-template.html、enterprise-detail-locked.html、enterprise-detail-locked-count.html、enterprise-detail-locked-vip.html、contact.html、contact-locked.html、contact-locked-count.html、contact-locked-vip.html、bid-analysis.html、bid-analysis-locked-vip.html、business-network.html、business-network-locked.html、business-network-locked-count.html、business-network-locked-vip.html、workbench.html、search.html、team-batch-auth.html

插入代码（原样一行）：

```html
<script>if (window.top === window.self) location.replace('sidebar.html?page=' + encodeURIComponent(location.pathname.split('/').pop()));</script>
```

原理：不在 iframe 内（被直接双击打开）时自跳转 sidebar.html?page=本文件名；从 sidebar 入口进入时条件不成立不跳。

验收：双击任一页面自动跳到 sidebar.html?page=该页且菜单高亮；从 sidebar 菜单进入不二次跳转。不改版本号、不改 CHANGELOG（leader 统一处理）。完成后把 BOARD 的 MV-2 改「待验收」并回报文件清单。

> **✅ 回执（2026-11-06）**：18/18 全部插入 `<head>` 后第一行，代码与要求逐字一致；`sidebar.html` 确认未加（不会自循环）。校验脚本结果：OK=18，BAD=0。
> 文件清单：enterprise-detail.html、detail-template.html、enterprise-detail-locked.html、enterprise-detail-locked-count.html、enterprise-detail-locked-vip.html、contact.html、contact-locked.html、contact-locked-count.html、contact-locked-vip.html、bid-analysis.html、bid-analysis-locked-vip.html、business-network.html、business-network-locked.html、business-network-locked-count.html、business-network-locked-vip.html、workbench.html、search.html、team-batch-auth.html

## MV-3 顶部公司信息区与联系方式统一（2026-11-06 本轮）

基准：`enterprise-detail.html` 的顶部公司信息区——公司名「华为技术有限公司」+ 状态标签「存续（在营、开业、在册）」+「企业报告」「企业监控」按钮 +「2026-10-16更新」，以及 base-panel 的「复制企业信息」「关注」+ 企业法人/注册资本/联系电话/公司地址 四格。

要求：
1. 所有**含该区域**的页面（enterprise-detail 系 5 页、contact 系 4 页、bid-analysis 系 2 页、business-network 系 4 页中存在者）结构与文案对齐基准；无该区域的页面（workbench/search/sidebar 等）**不新增**。
2. 联系电话值统一 `0755-28780808`：基础族显示真实号；带锁族锁定态 `****`、解锁后真实号（现有逻辑保留，只统一值与格式）。
3. 注册资本等字段值以基准页为准对齐。
4. 结构差异过大无法直接对齐的页面：不改，记入 report-MV-3.md 并在 BOARD 提问区提问。

交付：改动文件清单 + report-MV-3.md（含跳过/提问项）。不改版本号/CHANGELOG。完成后 BOARD 的 MV-3 改「待验收」。

> **✅ 回执（2026-11-06）**：13 页核对与本区域一致（含 4 种带锁族锁定态 `****` 与解锁回填逻辑），未动。
> 改动 5 页（只统一「更新时间」文案格式，去掉日期后空格）：bid-performance.html:384、business-network.html:446、business-network-locked.html:548、business-network-locked-count.html:487、business-network-locked-vip.html:490。
> 跳过 2 类（结构差异过大、强行对齐会串数据，已进 BOARD 提问区）：① bid-performance.html 为六格（多注册日期、网址）；② business-network 系 4 页主体是「上海金戈电力」、双状态标签、三按钮、电话 0577-56671561。→ `collab/report-MV-3.md`

## MV-4 容器宽度统一 1600（2026-11-06 本轮）

要求：
1. 全部 html（含 sidebar.html）内容容器 `max-width: 1400px` → `1600px`，保持居中；同一文件内多处 1400 容器宽一并改。
2. 个别页硬编码其他宽度（如固定 width）导致与 1600 不一致的：记入 report-MV-4.md，不擅自重构布局。
3. 改完全站 grep 确认无残留 `max-width: 1400`。

交付：改动文件清单 + report-MV-4.md。不改版本号/CHANGELOG。完成后 BOARD 的 MV-4 改「待验收」。

> **✅ 回执（2026-11-06）**：18 个页面的 `.page` 容器宽已全部为 1600px（enterprise-detail 系 5 页 @95 行、contact 系 4 页 @33 行、bid-analysis 系 2 页 @143/156 行、bid-performance @142、business-network 系 4 页 @143 行、search @346 行）；sidebar.html 无该容器宽，无需改。
> `Select-String -Pattern "max-width:\s*1400px"` → 0 残留。
> 2 页硬编码宽未动（自有布局基准，已提问）：workbench.html:93 = 1560px、team-batch-auth.html:2007 = 1280px；`@media`/`@container` 断点与 SVG viewBox 均属正常，未改。→ `collab/report-MV-4.md`
