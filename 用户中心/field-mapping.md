# 页面区域 × 表格字段对照表（供技术对接新接口）

> 依据：`enterprise-detail.html`（v3.10.2）页面区块 与 新接口文档 `shuidi-api-doc.txt`（企业全维度信息 Full/V1）。
> 通用约定：各表「序号」列为前端生成（行号 i+1），非接口字段；日期列经前端 d10() 格式化为 YYYY-MM-DD；空值显示 `--`；每区块单页最多 10 条 + 独立分页。

## 1. 工商信息（kv 表，维度 Base / Industry / ContactInfo）

| 显示列 | 接口字段 | 备注 |
|---|---|---|
| 统一社会信用代码 | Base.CreditNo | |
| 注册号 | Base.CompanyCode | |
| 组织机构代码 | Base.OrgCode | |
| 工商注册类型 | Base.CompanyType | |
| 企业成立日期 | Base.EstablishDate | |
| 营业期限 | Base.BusinessDateFromStr + Base.BusinessDateToStr | 两字段拼接「起 至 止」 |
| 行业大类 | Industry.Industry | |
| 行业小类 | Industry.SubIndustry | |
| 注册资本 | Base.Capital | |
| 登记机关 | Base.Authority | |
| 发照日期 | Base.IssueDate | |
| 实缴出资额 | Base.RealCapital | v3.10.3 起由「实收资本」改名，值源不变；⚠️ 新接口文档 Base 无 RealCapital 字段（仅 Partners.StockRealCapital 实缴出资额），切换后此格无数据来源 |
| 经营范围 | Base.BusinessScope | 通栏行 |
| 网址 | ContactInfo.Website[].Url | ⚠️ 文档表格字段名为 Website、示例 JSON 为 WebSite，大小写需与技术确认；页面现取 ContactInfo.WebSite[].Url，无值显示 -- |

## 2. 工程信息（无接口维度）

| 显示列 | 接口字段 | 备注 |
|---|---|---|
| 项目编号 / 项目名称 / 项目属地 / 项目类别 / 建筑单位 | — | 前端演示假数据（3 条），新接口无此维度 |
| 操作 | — | 前端「查看」按钮，alert 占位 |

## 3. 股东信息（Partners）

| 显示列 | 接口字段 |
|---|---|
| 股东 | StockName |
| 股东类型 | StockType |
| 出资比例 | StockPercent |
| 认缴出资额 | StockCapital |
| 认缴出资时间 | ShouldDate |
| 认缴出资方式 | InvestType |
| 实缴出资额 | StockRealCapital |
| 实缴时间 | CapiDate |
| 实际出资方式 | InvestName |

## 4. 企业高管（Employees）

| 显示列 | 接口字段 |
|---|---|
| 姓名 | EmployeeName |
| 职位 | Position |

## 5. 分支机构（Branches）

| 显示列 | 接口字段 |
|---|---|
| 名称 | CompanyName |
| 注册号 | CompanyCode |
| 社会统一信用代码 | CreditNo |
| 登记机关 | Authority |
| 法人姓名 | LegalPerson |

## 6. 行政许可（Permissions）

| 显示列 | 接口字段 |
|---|---|
| 项目名称 | Name |
| 地域 | Province |
| 决定日期 | Liandate |
| 决定文书号 | CaseNo |

## 7. 纳税信息（TaxCreditItems）

| 显示列 | 接口字段 |
|---|---|
| 评价年度 | Year |
| 信用等级 | Level |
| 纳税人识别号 | TaxPayerNo |
| 纳税人名称 | TaxPayerName |

## 8. 曾用名（OriginalName）

| 显示列 | 接口字段 |
|---|---|
| 曾用名 | Name |
| 变更日期 | ChangeDate |

## 9. 历史变更（Changes）

| 显示列 | 接口字段 |
|---|---|
| 变更事项 | ChangeField |
| 变更前内容 | ChangeBefore |
| 变更后内容 | ChangeAfter |
| 变更日期 | ChangeDate |

## 10. 抽查检查（SpotChecks）

| 显示列 | 接口字段 | 备注 |
|---|---|---|
| 登记编号 | No | |
| 检查实施机关 | ExecutiveOrg | |
| 类型 | Type | |
| 日期 | Date | |
| 结果 | Consequence | |
| 备注 | Remark | 文档另有历史遗留无意义字段 Pledgee，页面未用 |

## 11. 经营异常（Exceptions）

| 显示列 | 接口字段 |
|---|---|
| 列入原因 | AddReason |
| 列入日期 | AddDate |
| 移出原因 | RemoveReason |
| 移出日期 | RemoveDate |
| 作出决定机关 | DecisionOffice |
| 移除决定机关 | RemoveDecisionOffice |

## 12. 行政处罚（Penalties）

| 显示列 | 接口字段 |
|---|---|
| 决定书文号 | DocNo |
| 违法行为类型 | PenaltyType |
| 处罚决定机关 | OfficeName |
| 处罚内容 | Content |
| 处罚决定日期 | PenaltyDate |
| 公示日期 | PublicDate |
| 备注 | Remark |

## 13. 被执行人（ZhiXingItems）

| 显示列 | 接口字段 |
|---|---|
| 名称 | Pname |
| 立案时间 | CaseCreateTime |
| 立案号 | CaseCode |
| 执行法院 | ExecCourtName |
| 标的金额 | ExecMoney |
| 状态 | CaseState |
| 最后更新时间 | LastUpdateTime |

## 14. 失信（ShiXinItems）

| 显示列 | 接口字段 |
|---|---|
| 公司名称 | Iname |
| 立案日期 | RegDate |
| 立案文书号 | CaseCode |
| 执行法院 | CourtName |
| 履约情况 | Performance |
| 行为备注 | DisreputTypeName |
| 发布时间 | PublishDate |

## 15. 动产抵押（MPledges）

| 显示列 | 接口字段 |
|---|---|
| 登记编号 | RegisterNo |
| 登记时间 | RegisterDate |
| 公示时间 | PublicDate |
| 登记机关 | RegisterOffice |
| 被担保债权数额 | DebtSecuredAmount |
| 状态 | Status |

## 16. 股权出质（Pledges）

| 显示列 | 接口字段 | 备注 |
|---|---|---|
| 设立登记日期 | RegDate | |
| 公示时间 | PublicDate | |
| 出质状态 | Status | |
| 质权登记编号 | RegistNo | |
| 出质人 | Pledgor | 文档另有 PledgorNo 证照编号，页面未用 |
| 质权人 | Pledgee | 文档另有 PledgeeNo 证照编号，页面未用 |
| 出质股权数额 | PledgedAmount | |

## 17. 清算信息（Liquidation）

| 显示列 | 接口字段 |
|---|---|
| 清算组负责人 | Leader |
| 清算组成员 | Member |

## 附：旧接口有、新接口没有的维度（切换后页面无对应区域）

企业资质、资质资格、裁判文书、法院公告、开庭公告、严重违法、商标信息、专利信息、软件著作权、工程项目（页面现以「工程信息」假数据区块存在，去留待定）

## 附：需技术确认的两处字段差异

1. **实缴出资额（原实收资本）**：v3.10.3 起页面格名改为「实缴出资额」，值仍取 Base.RealCapital（仅改名不换源）；新接口文档 Base 维度无此字段 → 切换后此格无来源，需确认删除该格或换数据源。
2. **网址**：文档表格写 ContactInfo.Website、示例 JSON 写 WebSite（大小写不一致）→ 需确认新接口实际返回键名。
