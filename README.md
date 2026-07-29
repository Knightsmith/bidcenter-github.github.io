# AI 页面导航

AI 生成的页面集合，通过 GitHub Actions 自动更新导航索引页。

## 目录结构

```
├── .github/workflows/generate-index.yml   ← GitHub Actions 配置文件
├── 登录页面/index.html                     ← 示例页面（子目录）
├── 数据看板/index.html                     ← 示例页面（子目录）
├── 用户管理/index.html                     ← 示例页面（子目录）
├── 帮助中心/index.html                     ← 示例页面（子目录）
├── 产品介绍.html                           ← 示例页面（根目录）
└── index.html                              ← 自动生成，不用手动维护
```

## 使用方式

1. 将 AI 生成的 HTML 文件放入仓库
2. 可以建子目录放 `index.html`，也可以直接放 `.html` 文件
3. 执行 `git push`
4. GitHub Actions 自动更新导航页

## 访问地址

```
https://你的用户名.github.io/仓库名/
```
