---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 4db2a0f4b8ab2f035f3462697a88899a_aecd590ddc1f11f1bff2525400cd780f
    ReservedCode1: Yb8X9Dc/2yhbSmxF2UVMl8nNTerOyAulI/n5UEvjWhjJHdY9tythyCOGXA2ie7LbeLA6t4cHmrAh6PGFcEJVSKZgzA8DkhDrqyUngR7OTBB+C+JlnENImGnpdHH2Pm/iWXhFwOzqMoRugBVUxOiokTlbNrstVMf9hTUm0YTqEVqs4x3VNoWWbYUMoAY=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 4db2a0f4b8ab2f035f3462697a88899a_aecd590ddc1f11f1bff2525400cd780f
    ReservedCode2: Yb8X9Dc/2yhbSmxF2UVMl8nNTerOyAulI/n5UEvjWhjJHdY9tythyCOGXA2ie7LbeLA6t4cHmrAh6PGFcEJVSKZgzA8DkhDrqyUngR7OTBB+C+JlnENImGnpdHH2Pm/iWXhFwOzqMoRugBVUxOiokTlbNrstVMf9hTUm0YTqEVqs4x3VNoWWbYUMoAY=
---

# AI 协作规范（Crm 目录）

改完 `Crm` 下任何 html，必须同步更新 `Crm/版本记录/`。

## 规则

1. **必须记版本**：改动或新增 `Crm` 下任意 html 后，同一次操作内必须在该页面对应的 `版本记录/<页面名>.md` 追加一条版本条目（日期、文件名、改动摘要）。未更新版本记录视为任务未完成。
2. **同页同名合并**：同一页面名的所有版本（V1.1/V1.2/兼容版/bak/重构等）只写入同一个 md，禁止为同一页面新建第二个 md。
3. **无 md 则新建**：新增页面若 `版本记录/` 下无对应 md，则新建 `<页面名>.md`；判定页面名以页面 `<title>` 与功能归属为准。
4. **只增不改**：版本记录只追加新条目，历史条目的任何文字、顺序、文件均不得修改、删除或覆盖。
5. **md 平铺**：所有 md 直接放在 `Crm/版本记录/` 下，不建子目录。

## 追加条目模板

```
## YYYY-MM-DD · 文件名.html

- 路径：`Crm/子目录/文件名.html`
- 大小 / 行数：12345 B / 678 行
- 修改时间：YYYY-MM-DD HH:MM
- 页面标题：<title> 内容
- 关键结构：区块 / 页签 / 表格列清单
- 改动摘要：本次改了什么、影响哪些区块
```
*（内容由AI生成，仅供参考）*
