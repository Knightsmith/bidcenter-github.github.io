---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 4db2a0f4b8ab2f035f3462697a88899a_17e39417d99211f1bff2525400cd780f
    ReservedCode1: zN9lTve5HQ3HKRfgFUtLqR57790eeQtSi692NZgpi8ptKu1XvoxFdm5+0qDsPcUiymJGoxaXBOs2A+25TQkYtixMRsM6ygNHJSTmXP0ZwBf7tW0zSTSoNJHTbt5In5/9S1v5YPfzU8Yrmma+NqsBwgLPDI1nluNIec1sCQIZf1oSrQmYpuUdN7FJgmE=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 4db2a0f4b8ab2f035f3462697a88899a_17e39417d99211f1bff2525400cd780f
    ReservedCode2: zN9lTve5HQ3HKRfgFUtLqR57790eeQtSi692NZgpi8ptKu1XvoxFdm5+0qDsPcUiymJGoxaXBOs2A+25TQkYtixMRsM6ygNHJSTmXP0ZwBf7tW0zSTSoNJHTbt5In5/9S1v5YPfzU8Yrmma+NqsBwgLPDI1nluNIec1sCQIZf1oSrQmYpuUdN7FJgmE=
---

# report-MV-1 全站一致性巡检（只读）

> 执行：mavis｜日期：2026-11-06｜范围：`用户中心\` 下 20 个 html（inbox 写 19 个，实际 20 个：多出 `bid-performance.html` 已属本轮范围）
> 本任务**未修改任何文件**，仅出结论与建议。

## 一、结论速览

| 检查项 | 结论 | 问题数 |
|---|---|---|
| 1 版本徽标 / title 版本 | 徽标 20/20 均为 v3.14.0，与 CHANGELOG 顶部一致；title 版本引用仅 contact 系 4 页有 | 1（口径不统一） |
| 2 main-nav 五 tab 同族互链 | 16 页全部正确，中标业绩统一指 `bid-performance.html` | 0 |
| 3 无自带侧边栏 | 内容页均无 `<aside>`；`.sidebar-trigger` 属 CSS/JS 残留（无实体按钮） | 1 |
| 4 三族解锁门文案/数字格 | 橙/蓝/红三族字段齐全；红族「与/和」用词不统一 | 1 |
| 5 单区块单页 10 条 | 所有带分页区块 PER=10 一致；TOP-N 图表区无需分页；team-batch-auth 分页条为静态装饰 | 1 |

## 二、问题清单（文件 → 行号 → 问题 → 建议改法）

| # | 文件 | 行号 | 问题 | 建议改法 |
|---|---|---|---|---|
| 1 | contact.html / contact-locked.html / contact-locked-count.html / contact-locked-vip.html | title 第 7 行 | title 内含「\| v3.14.0」；其余 15 个页面 title 无版本号（徽标均有）。无冲突，但两种口径并存 | leader 决策：全站 title 去掉版本（推荐，版本只在 CHANGELOG/徽标体现），或全站补齐 |
| 2 | bid-analysis.html:128-130、bid-analysis-locked-vip.html:128-130、bid-performance.html:127-129、business-network.html:128-130、business-network-locked.html:128-130、business-network-locked-count.html:128-130、business-network-locked-vip.html:128-130 | 见左 | 仅存 `.sidebar-trigger` CSS 规则（3 行），页面内无对应按钮；侧边栏已由 sidebar.html 托管 | 删除这 3 行 CSS，不影响功能 |
| 3 | team-batch-auth.html | 1807（CSS）、2657（JS 选择器） | `.sidebar-trigger` 样式 + 选择器字符串残留，无实体按钮 | 同 #2，leader 确认后可清 |
| 4 | enterprise-detail-locked-vip.html、bid-analysis-locked-vip.html、contact-locked-vip.html | 解锁门内的按钮与描述句 | 红族文案用词不统一：`开通会员与查企业功能` / `开通会员与中标分析功能` / `开通会员与查企业`；描述句「和」与「与」混用 | 属已确认文案（协议红线 4），worker 未改，请 leader 统一口径 |
| 5 | enterprise-detail 系 5 页（362/402/402/405 附近）、bid-analysis 系 2 页（492/519）、business-network 系 4 页（465/567/506/509） | 见左 | 联系电话格带「更多联系方式」链接；contact 系 4 页与 bid-performance 无该链接 | 建议统一：基础族带、带锁族锁定态隐藏（需 leader 定） |
| 6 | team-batch-auth.html | 2369-2374 | 分页条为静态 markup，首页/上一页/下一页均为 `disabled`，无分页 JS；当前 6 条示例数据 ≤10 条，不触发翻页 | 补分页逻辑或加注释说明为演示占位 |
| 7 | business-network 系 4 页、bid-analysis 系 2 页 | 各区块 | 区块为 TOP10 / TOP6 / 图表，条数天然 ≤10，未放分页条 | 符合「单区块单页 10 条」，无需改 |
| 8 | 全站 16 页 main-nav | — | 五 tab 互链核对：基础族 4 页互链、detail-template 同基础族、橙族 3 页互链且中标分析指基础版、蓝族规则同橙族、红族 4 页互链；中标业绩统一指 `bid-performance.html`（占位） | 无问题，留档 |

## 三、附：核对到的关键事实

- 20 个 html 徽标均 `v3.14.0`；CHANGELOG.md 顶部当前版本 v3.14.0。
- 含 main-nav 的页面 16 个；`search.html`、`sidebar.html`、`team-batch-auth.html`、`workbench.html` 无 main-nav（非五 tab 内容页，符合预期）。
- `<aside>` 仅出现在 `sidebar.html`、`workbench.html`（各自宿主页，允许）。
- 解锁门数值：橙 = 使用 10 积分 + 账户剩余 50 积分 + 不会重复扣分；蓝 = 962 次；红 = 18 种信息 / 185 个联系方式 / 523 条 / 4 个模块 + 会员期内有效（全部命中）。
*（内容由AI生成，仅供参考）*
