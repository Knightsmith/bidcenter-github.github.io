# 任务交接文档（供协作 AI 接手，人类使用者：knigh）

> 项目：bidcenter 用户中心（采招网/水滴信用复刻原型）
> 路径：`D:\workspace\bidcenter-github.github.io\用户中心\`
> 交接时版本：**v3.15.0**（2026-11-09）｜ 交接人：QwenWork
> 使用方式：接手前通读「项目约定」，按「任务清单」领任务；完成后按「回写协议」更新本文档与 CHANGELOG。

---

## 一、项目约定（必须遵守）

1. **版本管理（三位 X.Y.Z）**：第一位固定为 3 不动；只改第二、三位，无位数上限、不向上进位。新增页面/结构调整 = 第二位 +1 且第三位归 0；小改 = 第三位 +1。每次改动三步一体：升版本号 → 同步全站所有 HTML 右下角 `.version-badge` 与 title 里的版本引用 → `CHANGELOG.md` 顶部加条目（新版本在前，写清每文件变化）。
2. **页面形态**：单文件、零外部依赖 HTML（数据内嵌，file:// 双击可开）；容器 max-width 1400px 居中；主题蓝 #0063FF；文件名全英文。
3. **分页规则**：每个数据区块单页最多 10 条，超出用独立分页条（共 N 条 / 上一页 / 页码 10 个一窗+省略号+末页 / 下一页），各区块页码独立、只重渲染该区块。分页条容器类名为 `.pager`（内含 `ul.pagination-list`），**事件委托必须写 `.pager a[data-type]`**；写成 `.pagination a[data-type]` 会因 `closest()` 返回 null 而不执行 `preventDefault`，导致点击页码无效且 `href="#"` 把页面拉回页首（v3.13.1 已修）。
4. **模板同步**：改 `enterprise-detail.html` 必须同步改 `detail-template.html`（数据经 `__API_DATA__` 占位注入），否则重跑注入丢改动。
5. **接口口径**：`D:\workspace\shuidi-api-doc.txt`（Full/V1，18 维度）= **新接口**；原站截图 pill 栏 = **旧接口**。旧有新无的 10 个维度：企业资质、资质资格、裁判文书、法院公告、开庭公告、严重违法、商标信息、专利信息、软件著作权、工程项目。新接口没有的维度：区块和 pill 一并删除，**不补置灰 pill**；接口有但数据为空的维度补 3 条按文档字段写的示例数据点亮；真实数据优先。
6. **解锁门三家族（机制不可互串、不可因参考截图改动）**：
   - 橙=积分版 `enterprise-detail-locked.html` / `contact-locked.html` / `business-network-locked.html`
   - 蓝=预购次数版 `*-locked-count.html`（962 次，点一次 -1）
   - 红=会员版 `*-locked-vip.html`（纯演示不扣费不解锁；详情页 18 种信息 / 联系方式 185 个 / 中标分析 523 条）
   - 共同：遮罩只盖锁定内容区（.lock-area 内 absolute），不盖全页；锁定态遮罩下垫复制的工商信息表占位；无「前往试用」入口。
   - **遮罩不得覆盖面包屑与 `nav.main-nav`**：`.lock-area` 只包锁定区块，页面抬头（`.co-head`/`.base-panel`/`main-nav`）须为其兄弟节点；若整页被一个 `.lock-area` 包住，用 `.lock-scope { position: relative }` 包裹锁定区块、把 `.lock-overlay` 移入其中。`.lock-overlay` 用 `display:flex; align-items:center; justify-content:center`（不加 `padding-top`），判定标准：`document.elementFromPoint(nav 中心)` 须命中 `nav.main-nav`。
   - 带锁变体页同步新功能时**只加 pill 入口，不加区块和按钮**。
7. **tab 色族串联（v3.12.0 起）**：main-nav 五个 tab（中标分析/中标业绩/商机脉络/查企业/找人脉）在同色家族内互链；橙、蓝族「中标分析」指基础版 `bid-analysis.html`；「中标业绩」自 v3.13.0 起各族统一接到基础版 `bid-performance.html`（带锁变体不另做页面）。
8. **tab 外观与文案唯一口径（v3.14.0 起，改 tab 必须遵守）**：**样式一律以 `contact.html` 的 `nav.main-nav` 为准**，16 个含 main-nav 页面逐属性完全一致（差异项须为 0），不得按页面另写变体：`.main-nav` = `display:flex; gap:64px; padding:0 32px; margin-top:22px; border-bottom:1px solid #ebeef5`；`.main-nav a` = `position:relative; display:inline-flex; align-items:center; height:54px; color:#333; font:600 16px var(--font-sans); text-decoration:none`；`.main-nav a.active` = `color:#0063FF`；`.main-nav a.active::after` = `content:""; position:absolute; left:0; right:0; bottom:-1px; height:3px; background:#0063FF`；`.nav-badge` = `position:absolute; top:6px; right:-34px; background:#f5484d; color:#fff; font:400 10px/16px var(--font-sans); padding:0 6px; border-radius:3px`。**颜色用硬编码值**（不用 `var(--primary)`/`var(--border)`，因多数页面未定义这两个变量）。**文案口径**：中标分析 / **中标业绩（不带任何数字）** / 商机脉络（+徽标「关系网」）/ 查企业 / 找人脉（+徽标「联系方式」）；选中态不加 `onclick="return false"`。
9. **外框**：内容页不自带侧边栏，统一由 `sidebar.html`（iframe，?page= 定位）托管；sidebar 菜单「企业详情」组含查企业/找人脉/中标分析/中标业绩/商机脉络五个入口。
10. **行为红线**：需求不明确先问用户再动手；只改被要求的那一处；用户问「对比/查询」类问题只口头回答、不改源文件；界面文案精简、同一信息只说一次。

## 二、文件清单（20 页 + 3 文档）

- 基础族：`enterprise-detail.html`（+模板 `detail-template.html`）、`contact.html`、`bid-analysis.html`、`bid-performance.html`（中标业绩）、`business-network.html`
- 橙族：`enterprise-detail-locked.html`、`contact-locked.html`、`business-network-locked.html`
- 蓝族：`enterprise-detail-locked-count.html`、`contact-locked-count.html`、`business-network-locked-count.html`
- 红族：`enterprise-detail-locked-vip.html`、`contact-locked-vip.html`、`business-network-locked-vip.html`、`bid-analysis-locked-vip.html`
- 其他页：`workbench.html`、`search.html`、`team-batch-auth.html`、`sidebar.html`（外框）
- 文档：`CHANGELOG.md`（版本史）、`field-mapping.md`（区域×字段对照，供接口对接）、本文件

## 三、任务清单（按优先级）

| ID | 任务 | 状态 | 说明 |
|---|---|---|---|
| T1 | 新接口数据切换 | 待办 | 用新接口导出数据重跑注入（python 读导出 txt → 替换 detail-template.html 的 `__API_DATA__` → 写出 enterprise-detail.html）；按约定做维度对齐与空维度补 3 条示例 |
| T2 | field-mapping.md 三处待确认 | 待办 | ① 工商信息「实缴出资额」格值源仍为 Base.RealCapital，新接口 Base 无此字段——删格或换源待用户定；② 网址字段文档表格写 Website、示例 JSON 写 WebSite，大小写待确认；③ 「工程信息」区块（旧接口「工程项目」）去留待用户定 |
| T3 | 「中标业绩」tab 占位处理 | 完成 | v3.13.0 新增基础版 `bid-performance.html`（纯展示、无锁概念，`.back-top` 与 enterprise-detail 一致）；全站 15 个页面 tab 已统一接入。v3.14.0 起该 tab 文案统一为「中标业绩」，**不再带数字徽标**（原 523/57 三种写法已去除），见约定 8 |
| T4 | 切换后回归 | 进行中 | 只读体检已出报告，两项 P1 已于 v3.13.1 修复并回归通过（contact 四页分页选择器改 `.pager`；`business-network-locked-vip.html` 删除演示解锁逻辑，对齐红族纯演示）。剩余 P2 项待处理；注入新接口数据后仍需复查：分页（每页 10 条）、三族解锁门数据、tab 串联链接、sidebar 托管入口 |
| T5 | 全站 tab 样式与文案统一 | 完成 | v3.14.0：16 个含 main-nav 页面按 `contact.html` 逐属性对齐（5 条规则硬编码色值），computed style 差异项 0、同角色像素比对 56 对 0 差异、选中态像素比对 16 页 0 差异；「中标业绩」去数字、「商机联络」→「商机脉络」、徽标「关系网」「联系方式」保留；`bid-analysis*.html` 选中态去掉 `onclick="return false"`；`bid-analysis-locked-vip.html` 新增 `.lock-scope` 包裹锁定区块、遮罩移入其中并改居中，遮罩不再压住 tab（原覆盖 y=76–1464 → 现 y=414 起）；16 页 tab 中心 `elementFromPoint` 全部命中 `nav.main-nav`；1280/1440/1920×16 页共 48 次测量无横向溢出、控制台 0 报错 |
| T6 | contact 系四页取消页签改平铺 | 完成 | v3.15.0：`contact.html`、`contact-locked.html`、`contact-locked-vip.html`、`contact-locked-count.html` 删除「中标联系人/工商联系人」页签（DOM + 三行 CSS + 切换脚本），改为上下平铺两段，标题「中标联系方式」「工商联系方式」；中标表`电话来源`统一「中标信息」，工商表新增`电话来源`列统一「工商信息」；无 `.lock-area` 页留白用 `.card > .section:first-of-type`、锁定族用 `.lock-area > .section:first-of-type`（均 22px）；四页 Playwright 实测两段同可见、页签残留 0、横向溢出 0、pageerror 0，count 版解锁后电话还原与 toast 正常、vip 版按设计点击不解锁 |

## 四、回写协议（mavis 完成后必做）

1. 按约定升版本 + 同步全站徽标/title + CHANGELOG 顶部加条目。
2. 更新本文档：任务状态改「完成/阻塞」并附一句话结果；新增任务往表格追加。
3. 遇到与「项目约定」冲突的需求：先停下来问用户，不要自行变通。
