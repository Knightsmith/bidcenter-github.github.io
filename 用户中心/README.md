---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 4db2a0f4b8ab2f035f3462697a88899a_7f9c4653d66311f1b4e4525400cd780f
    ReservedCode1: v+wh/vpzATo9b4CWzfA2nvs0f8GqJCy6ySlLLlqiUFz04yDBctvYRk2enPhWzlbTyFFXCt6e1m0wY6FNvGgkJ6LlbjJu1I8gRazBQu8CWsTZUaVlx4LFGsFPi0vIJ0HXZAErVMuiBnuHnJDbTVai2S4mzECCnOB6jhpuD81LPcY6687AVIh6LPfFWew=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 4db2a0f4b8ab2f035f3462697a88899a_7f9c4653d66311f1b4e4525400cd780f
    ReservedCode2: v+wh/vpzATo9b4CWzfA2nvs0f8GqJCy6ySlLLlqiUFz04yDBctvYRk2enPhWzlbTyFFXCt6e1m0wY6FNvGgkJ6LlbjJu1I8gRazBQu8CWsTZUaVlx4LFGsFPi0vIJ0HXZAErVMuiBnuHnJDbTVai2S4mzECCnOB6jhpuD81LPcY6687AVIh6LPfFWew=
---

# 采招网用户中心原型 — 项目说明

> 本文档供其他 AI / 开发者快速了解本项目结构与需求，避免重复踩坑。
> 生成日期：2026-11-02

## 1. 项目概述

采招网用户中心后台原型，前端样式严格对齐 **shadcn 官方 sidebar-07** block（[ui.shadcn.com/blocks#sidebar-07](https://ui.shadcn.com/blocks#sidebar-07)）的视觉规范，内容菜单取自两张原始截图（企业微信侧边菜单 + 采招网后台菜单面板）组合而成。

- 形态：**单文件 HTML + 独立工作台页**，零外部依赖（无 CDN、无字体引入、内联 SVG、OKLCH 语义 token）
- 主题：绿色（`--primary: oklch(0.508 0.118 165.612)`，`--sidebar-primary: oklch(0.596 0.145 163.225)`）
- 圆角：统一 `--radius: 8px`（全组件使用 `var(--radius)`，禁止直角）

## 2. 文件清单

| 文件 | 说明 |
|------|------|
| `sidebar.html` | 主入口：shadcn sidebar-07 风格侧边栏 + 内容区，含菜单切换、折叠、面包屑 |
| `workbench.html` | 「工作台」落地页（v3.7 按官网截图重构）：顶部「免费福利领取」横幅 + 待办事项 + 功能板 + 待支付订单 + 历史企业分析（中国地图/月度折线）+ 右栏会员信息/优质线索/商机工具/同行中标信息，在 sidebar.html 内容区 iframe 中加载此页 |
| `team-batch-auth.html` | 「账号中心 → 企业团队(子账户)」的真实落地页（v2.1 由中文名重命名） |
| `README.md` | 本文档 |
| `CHANGELOG.md` | 版本变更记录（新版本在前，每次改动必须更新） |

## 3. 用户核心要求（历史迭代结论，勿回退）

1. **样式框架**：严格按 shadcn 官方 sidebar-07 截图，不自行发挥；`SidebarHeader(站点标识) / SidebarContent(菜单) / SidebarFooter(用户卡)` + 主区域顶部 Header（折叠按钮 + 分隔线 + 面包屑）。
2. **内容菜单**：只使用两次截图（企业微信 + 采招网后台）组成的 **10 项一级菜单 + 二级菜单**，禁止自行增删项。
3. **菜单层级**：仅一级 + 二级，**无分组标签、无分割线、无中间分组层**；菜单项前不带圆点/感叹号图标。
4. **默认状态**：左侧侧边栏**默认收起**（icon 模式，`data-state="collapsed"`）；8 个折叠组 `data-state="open"`（展开侧栏后二级菜单直接可见）。
5. **顶部**：无顶部绿色横幅（早期版本有，已删除且**禁止加回**）；右上角页面标题区（page-title/page-desc）已删除（2026-11-02），标题由面包屑承担。
6. **面包屑**：主区域顶部 Header = 32px 折叠按钮 + 1px 垂直分隔线 + 面包屑「采招网 / 用户中心 / 当前文件名」，末节加粗，随菜单点击同步更新。
7. **左侧展开收起**：一级菜单（带二级的项）点击 = 展开/收起该组 + 联动内容区；SidebarRail / Header 折叠按钮均切换侧栏 expanded ↔ collapsed。
8. **工作台**：一级菜单「工作台」在内容区 `iframe#contentFrame` 内加载 `workbench.html`，**不是**折叠组、**不是**新页面直链。
9. **底部用户卡**：shadcn.jpg 圆形头像（onerror 回退文字）+ 用户名 + 邮箱 + 右侧上下箭头。
10. **禁止项**：硬编码 hex 色值、linear/radial-gradient 渐变、超粗阴影、`--radius: 0` 直角；改动必须用 shadcn 语义 token。

## 4. 页面结构（sidebar.html）

```
.app-shell (flex, 100vh)
├── aside#sidebar.sidebar (data-state=collapsed)
│   ├── .sidebar-header     站点标识：采招网 / www.bidcenter.com.cn（纯展示，无下拉）
│   ├── .sidebar-content
│   │   └── .sidebar-menu   10 个一级项（顺序固定）
│   │       ├── button.sidebar-menu-button  工作台（iframe 加载）
│   │       ├── .sidebar-group-item ×8（data-state=open）
│   │       │   ├── button.sidebar-menu-button  一级项（含 chevron 图标）
│   │       │   └── .sidebar-menu-sub
│   │       │       └── a.sidebar-menu-sub-item ×N（二级项）
│   │       └── button.sidebar-menu-button  采招服务（独立项，无二级）
│   ├── .sidebar-footer    NavUser：头像 + shadcn + m@example.com + 箭头
│   └── .sidebar-rail#sidebarRail   折叠细条（hover 变宽）
└── main.main
    └── .content
        ├── header.main-header
        │   ├── button#sidebarTrigger  32px 折叠按钮（PanelLeft 图标）
        │   ├── .header-separator      1px 垂直分隔线
        │   └── nav.breadcrumb         采招网 / 用户中心 / <当前文件名>
        └── .content-body
            ├── iframe#contentFrame   内容加载区
            └── #placeholderView      未生成页面占位提示
```

## 5. 菜单映射表

| 一级菜单 | 二级菜单 | 备注 |
|----------|----------|------|
| 工作台 | — | iframe 加载 `workbench.html`（不跳新页面） |
| 订阅中心 | 订阅信息 / 订阅管理 | 折叠组 |
| 收藏中心 | 商机收藏 | 折叠组 |
| 追踪与监控 | 中标追踪 / 项目追踪 | 折叠组 |
| 轻SaaS应用 | 潜在客户挖掘 / 潜在商机预测 / 合同商机 | 折叠组 |
| 行业解决方案 | 物业云商机 | 折叠组 |
| 信息发布 | 信息发布 / 发布管理 | 折叠组 |
| 数据中心 | 结构化数据导出 / 招投标大数据指数 / 大数据分析报告 / 营销大数据DBI / api接口定制 | 折叠组 |
| 采招服务 | — | 独立项 |
| 账号中心 | 个人信息 / 安全设置 / 积分余额 / 我的发票 / 企业团队(子账户) / 导出/下载 | 折叠组；企业团队(子账户) 直链真实页 |

## 6. 交互逻辑（JS 关键点）

- 一级折叠组按钮：点击 → 切换该组 `data-state`（open ↔ closed，驱动二级菜单显隐）+ 更新内容区（标题/面包屑/占位或 iframe）。
- 工作台：在 iframe 区域内加载 `workbench.html`，参与统一点击逻辑（`data-page="workbench.html"`），不跳新页面。
- 二级菜单：点击 → 更新内容区 + 面包屑末节；`data-page` 为真实路径时加载 iframe，否则显示「页面尚未生成」占位。
- 折叠：`toggleSidebar()` 切换 `#sidebar[data-state]`；SidebarRail 与 Header 按钮共用。
- **选择器坑（已修复）**：一级菜单绑定必须用 `.sidebar-menu button.sidebar-menu-button`，不能写 `.sidebar-menu > button.sidebar-menu-button`（后者会漏掉嵌套在 `.sidebar-group-item` 内的 8 个分组按钮）。

## 7. 修改注意事项（重要）

- **禁止并发编辑**：对 sidebar.html 的多次结构性修改必须**串行**执行（一次改完确认后再改下一次），并发 edit 会互相覆盖（历史多次踩坑）。
- 改完必须通读全文复查：grep 校验目标串已消失/无残留、HTML 标签配对、JS 无引用已删除元素（如早期 currentTitle/currentDesc 已删，勿再引用）。
- 严格遵循第 3 节「禁止项」，颜色只用 `:root` 中的 OKLCH token。
- 新增落地页时，把对应二级菜单 `data-page` 从 `placeholder` 改为真实文件名即可。
*（内容由AI生成，仅供参考）*
