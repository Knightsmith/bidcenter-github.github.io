# mavis 收件箱

**启动语（用户粘贴给 mavis）**：请读 `D:\workspace\bidcenter-github.github.io\用户中心\collab\PROTOCOL.md` 和 `BOARD.md`，然后读本文件，执行 owner=mavis 的待办任务。

## MV-1 全站一致性巡检（只读，不改文件）

范围：`D:\workspace\bidcenter-github.github.io\用户中心\` 下全部 19 个 html。

检查项：
1. 每页 `.version-badge` 与 title 内版本引用一致，且等于 CHANGELOG.md 顶部当前版本。
2. main-nav 五 tab 按色族互链：红族 4 页（*-locked-vip + bid-analysis-locked-vip）互链；橙族 3 页（*-locked）互链、中标分析指基础版；蓝族 3 页（*-locked-count）同橙族规则；基础族 4 页互链；detail-template 同基础族。「中标业绩」应为占位。
3. 页面不自带侧边栏（无 `<aside` / sidebar-trigger 残留），外框统一 sidebar.html 托管；sidebar.html 菜单「企业详情」组含查企业/找人脉/中标分析/商机脉络。
4. 三族解锁门文案/数字格：橙=使用 10 积分+账户剩余积分格；蓝=剩余可解锁次数 962；红=开通会员与查企业/中标分析+数字格（18 种/185 个/523 条）+会员期内有效。
5. 每个数据区块分页是否遵守单页 10 条。

交付：`report-MV-1.md`，按「文件 → 行号 → 问题 → 建议改法」列表；**不要直接改任何文件**。完成后把 BOARD 的 MV-1 改「待验收」。
