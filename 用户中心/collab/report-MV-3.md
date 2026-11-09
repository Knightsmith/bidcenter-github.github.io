---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 4db2a0f4b8ab2f035f3462697a88899a_195bd19fd99211f1bff2525400cd780f
    ReservedCode1: shAOhC49TYKUfiXkrFxP2wXEPiXrJpyQLf2styzaCZoBVncrQGM8PATJEEADW2cThFhFjebuGHjN+AXwIM1CNoMan9lXrsBO5s/QfGTxCf0uCBgCxwrHfzn4hbz66kMTRTEgi+WhbV5zJW439JJaNyxHvvrQ19v3S0g1KlAkAPssHRkpOTkXjUX793M=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 4db2a0f4b8ab2f035f3462697a88899a_195bd19fd99211f1bff2525400cd780f
    ReservedCode2: shAOhC49TYKUfiXkrFxP2wXEPiXrJpyQLf2styzaCZoBVncrQGM8PATJEEADW2cThFhFjebuGHjN+AXwIM1CNoMan9lXrsBO5s/QfGTxCf0uCBgCxwrHfzn4hbz66kMTRTEgi+WhbV5zJW439JJaNyxHvvrQ19v3S0g1KlAkAPssHRkpOTkXjUX793M=
---

# report-MV-3 顶部公司信息区与联系方式统一

> 执行：mavis｜日期：2026-11-06｜基准页：`enterprise-detail.html`
> 基准结构：公司名「华为技术有限公司」+ 状态标签「存续（在营、开业、在册）」+「企业报告」「企业监控」+「2026-10-16更新」+ base-panel（复制企业信息 / 关注 + 企业法人 / 注册资本 / 联系电话 / 公司地址 四格）

## 一、改动文件清单（5 个，仅统一更新时间文案格式：去掉日期与「更新」之间的空格）

| 文件 | 行号 | 改前 | 改后 |
|---|---|---|---|
| bid-performance.html | 384 | `2026-11-05 更新` | `2026-11-05更新` |
| business-network.html | 446 | `2026-11-04 更新` | `2026-11-04更新` |
| business-network-locked.html | 548 | `2026-11-04 更新` | `2026-11-04更新` |
| business-network-locked-count.html | 487 | `2026-11-04 更新` | `2026-11-04更新` |
| business-network-locked-vip.html | 490 | `2026-11-04 更新` | `2026-11-04更新` |

> 版本号、CHANGELOG 未动（leader 统一处理）。

## 二、已核对一致、无需改动的页面（13 页）

| 页面 | 公司名 | 状态标签 | 按钮 | 更新时间 | 四格 | 联系电话 |
|---|---|---|---|---|---|---|
| enterprise-detail.html | 华为技术有限公司（JS/API 渲染） | 存续（在营、开业、在册） | 企业报告 / 企业监控 | API update + 更新 | 法人/注册资本/联系电话/地址 | 0755-28780808（API） |
| detail-template.html | `__API_DATA__` 占位 | 占位 | 同上 | 占位 | JS 渲染四格 | 占位（设计如此） |
| enterprise-detail-locked.html | 同上（API） | 同上 | 同上 | 同上 | 同上 | 0755-28780808；锁定态 `****`（`#base-phone`） |
| enterprise-detail-locked-count.html | 同上 | 同上 | 同上 | 同上 | 同上 | 同上 |
| enterprise-detail-locked-vip.html | 同上 | 同上 | 同上 | 同上 | 同上 | 同上（红族纯演示，不解锁，保持 `****`） |
| contact.html | 华为技术有限公司 | 存续（在营、开业、在册） | 企业报告 / 企业监控 | 2026-10-16更新 | 四格 | 0755-28780808 |
| contact-locked.html | 同上 | 同上 | 同上 | 同上 | 四格 | `****`（第 186 行 `#base-phone`），解锁后真实号（第 330 行有回填） |
| contact-locked-count.html | 同上 | 同上 | 同上 | 同上 | 四格 | 同上（第 186/330 行） |
| contact-locked-vip.html | 同上 | 同上 | 同上 | 同上 | 四格 | `****`（第 189 行），红族不解锁，无回填（符合族规则） |
| bid-analysis.html | 华为技术有限公司（JS） | 存续（在营、开业、在册） | 企业报告 / 企业监控 | 2026-10-16更新 | 四格 | 0755-28780808 |
| bid-analysis-locked-vip.html | 同上 | 同上 | 同上 | 同上 | 四格 | 0755-28780808 |
| search.html / sidebar.html / workbench.html / team-batch-auth.html | 无该区域 | — | — | — | — | 按要求**不新增** |

## 三、跳过项（结构差异过大，未改，已进 BOARD 提问区）

### 1. bid-performance.html（第 363-405 行）
- 基准四格 → 本页**六格**：企业法人 / 注册资本 / 联系电话 / **注册日期** / **网址** / 公司地址。
- 联系电话 0755-28780808 已符合；差异在字段数量与顺序。
- 未改原因：删字段=删信息，需 leader / 用户定夺「基准是四格还是六格」。

### 2. business-network 系 4 页（business-network.html 第 418-472、locked 520-574、-count 459-513、-vip 462-516）
与基准相比 5 处差异，且主体是另一家演示企业，强行对齐会串数据：
| 项 | 基准 | business-network 系 |
|---|---|---|
| 公司名 | 华为技术有限公司 | 上海金戈电力设备安装有限公司 |
| 状态标签 | 单个「存续（在营、开业、在册）」 | 两个标签「上海」+「在营」（绿色） |
| 按钮 | 企业报告 / 企业监控（2 个） | 企业数据报告下载 / 收藏 / 企业监控（3 个） |
| 信息格 | 四格 | 六格（含注册日期、网址） |
| 联系电话 | 0755-28780808 | 0577-56671561 |

未改原因：统一公司名/电话等于把华为数据套到金戈电力页面，会破坏该页商机脉络演示数据的自洽性；删「收藏」「企业数据报告下载」按钮属改功能。已在 BOARD 提问区提问。

## 四、附：其他观察（未改）
- contact 系 4 页 co-head 外层多一层 `channel-bar-wrap` 包裹（基准为 `channel-bar` 直挂），仅 DOM 层级差异，视觉一致。
- 顶部图标 SVG 描边色：基准 `#6d9bf2`，business-network 系 `#5b9bff`。
- 联系电话格是否带「更多联系方式」链接，全站两种口径（详见 report-MV-1 第 5 条）。
*（内容由AI生成，仅供参考）*
