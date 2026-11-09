---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 4db2a0f4b8ab2f035f3462697a88899a_1a5fbe0ed99211f1a0ca525400de85a5
    ReservedCode1: BsQ8OjBJ332LLM151Jp3Jhrg4Z+xGrBrC4L5VX1tCOIcFOrTXLA0AQpTCDqDQP+lbyY99yUbVHnbkk1lHJJtOz+l9YRwGbnyPY4l+d0BJTnStWxK4tRPoorYbVcb5Ug+/NjL7rWa1k3ijm7W2h0WCWRiuTtPwMpbAlUKvzpL332F6FoY54tCRvzUCCY=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 4db2a0f4b8ab2f035f3462697a88899a_1a5fbe0ed99211f1a0ca525400de85a5
    ReservedCode2: BsQ8OjBJ332LLM151Jp3Jhrg4Z+xGrBrC4L5VX1tCOIcFOrTXLA0AQpTCDqDQP+lbyY99yUbVHnbkk1lHJJtOz+l9YRwGbnyPY4l+d0BJTnStWxK4tRPoorYbVcb5Ug+/NjL7rWa1k3ijm7W2h0WCWRiuTtPwMpbAlUKvzpL332F6FoY54tCRvzUCCY=
---

# report-MV-4 全站容器宽度 1400 → 1600

> 执行：mavis｜日期：2026-11-06｜口径：内容容器 `.page { max-width }` 统一为 **1600px**，响应式断点（`@media` / `@container`）不动。

## 一、已统一为 1600px 的页面（18 页）

| 文件 | 行号 | 当前声明 |
|---|---|---|
| enterprise-detail.html | 95 | `.page { max-width: 1600px; margin: 0 auto; }` |
| detail-template.html | 95 | 同上 |
| enterprise-detail-locked.html | 95 | 同上 |
| enterprise-detail-locked-count.html | 95 | 同上 |
| enterprise-detail-locked-vip.html | 95 | 同上 |
| contact.html | 33 | `.page { max-width: 1600px; margin: 0 auto; padding-top: 12px; }` |
| contact-locked.html | 33 | 同上 |
| contact-locked-count.html | 33 | 同上 |
| contact-locked-vip.html | 33 | 同上 |
| bid-analysis.html | 143 | 同上 |
| bid-analysis-locked-vip.html | 156 | 同上 |
| bid-performance.html | 142 | 同上 |
| business-network.html | 143 | 同上 |
| business-network-locked.html | 143 | 同上 |
| business-network-locked-count.html | 143 | 同上 |
| business-network-locked-vip.html | 143 | 同上 |
| search.html | 346 | `.page { max-width: 1600px; margin: 0 auto; padding: 8px; }` |
| （sidebar.html） | — | 无 `.page` 容器宽，侧栏 iframe 全高自适应，无需改 |

## 二、残留（**未改**，需 leader/用户定夺）

| 文件 | 行号 | 现值 | 说明 |
|---|---|---|---|
| workbench.html | 93 | `.page { max-width: 1560px; margin: 0 auto; padding: 16px 20px 12px; }` | 工作台是独立三栏布局（左 nav + 中 `aside.col` + 右内容），直接改 1600 会改变栏宽配比，建议单独评估 |
| team-batch-auth.html | 2007 | `max-width: 1280px;` | 批量授权页为表单/卡片流布局，非 `.page` 主容器，改 1600 会拉动卡片排布 |

> 两处都属「页面自有布局基准」，不在本次统一范围内，故未动。

## 三、保留未改的 `max-width`（属响应式断点或特性宽，正常）

- `team-batch-auth.html`：403 `@container (max-width: 280px)`、1080 `@container (max-width: 480px)`、1633/2254 `@media (max-width: 767px)`、`max-width: calc(100vw - 2rem)`。
- `workbench.html`：332 `@media (max-width: 1180px)`、337 `@media (max-width: 640px)`。
- `search.html`：hero 装饰 SVG 的 `viewBox="0 0 1400 360"`（数据值，非容器宽）。
- 各页数据值中的 `1400`（如安徽 amount: 1400）、`15014005678`、`19620` 等：非样式声明。

## 四、验收命令与结果

```powershell
cd D:\workspace\bidcenter-github.github.io\用户中心
Select-String -Path *.html -Pattern "max-width:\s*1400px"
```
→ **无输出（0 残留）**，`.page` 容器宽已成体系。
*（内容由AI生成，仅供参考）*
