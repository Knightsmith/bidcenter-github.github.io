# ============================================================
# build-inline.ps1 — shadcn-html 内联单文件构建器
# 用法:
#   powershell -File build-inline.ps1 -InputHtml ".\页面.html"
#   powershell -File build-inline.ps1 -InputHtml ".\页面.html" -OutputHtml ".\out.html"
# 说明:
#   将页面中引用本地相对路径的 <link stylesheet> / <script src>
#   全部内联为 <style> / <script>，输出单个 HTML。
#   外部 http(s) 引用保留不动并打印警告。
# ============================================================
param(
    [Parameter(Mandatory = $true)]
    [string]$InputHtml,
    [string]$OutputHtml = ""
)

$ErrorActionPreference = 'Stop'

# 解析输入路径
$htmlFull = (Resolve-Path $InputHtml).Path
$baseDir  = Split-Path $htmlFull -Parent
if (-not $OutputHtml) {
    $name = [IO.Path]::GetFileNameWithoutExtension($htmlFull)
    $OutputHtml = Join-Path $baseDir ($name + "-single.html")
}
$OutputHtml = [IO.Path]::GetFullPath($OutputHtml)

$content = Get-Content $htmlFull -Raw -Encoding UTF8
$warnings = New-Object System.Collections.Generic.List[string]

function Resolve-LocalFile($ref, $baseDir) {
    # 仅处理相对路径且无协议前缀的引用
    if ($ref -match '^(https?:)?//' -or $ref -match '^[a-zA-Z]:\\' -or $ref -match '^(mailto|tel|data|javascript|#):') {
        return $null
    }
    $candidate = $ref -replace '/', '\'
    $full = Join-Path $baseDir $candidate
    if (Test-Path $full) { return $full }
    return $null
}

# ---- 1. 内联 <link rel="stylesheet" href="..."> ----
$cssRx = [regex]'<link[^>]*rel=["'']stylesheet["''][^>]*href=["'']([^"'']+)["''][^>]*>'
$content = $cssRx.Replace($content, {
    param($m)
    $href = $m.Groups[1].Value
    $full = Resolve-LocalFile $href $baseDir
    if ($null -eq $full) {
        $warnings.Add("保留外链/未命中 CSS: $href")
        return $m.Value
    }
    $css = Get-Content $full -Raw -Encoding UTF8
    return "`n<style>`n" + $css + "`n</style>`n"
})

# ---- 2. 内联 <script src="..."></script> ----
$jsRx = [regex]'<script[^>]*src=["'']([^"'']+)["''][^>]*>\s*</script>'
$content = $jsRx.Replace($content, {
    param($m)
    $src = $m.Groups[1].Value
    $full = Resolve-LocalFile $src $baseDir
    if ($null -eq $full) {
        $warnings.Add("保留外链/未命中 JS: $src")
        return $m.Value
    }
    $js = Get-Content $full -Raw -Encoding UTF8
    return "`n<script>`n" + $js + "`n</script>`n"
})

# 写文件（UTF-8 无 BOM）
$utf8 = New-Object System.Text.UTF8Encoding($false)
[IO.File]::WriteAllText($OutputHtml, $content, $utf8)

Write-Output "输入:  $htmlFull"
Write-Output "输出:  $OutputHtml"
if ($warnings.Count -gt 0) {
    Write-Output "警告($($warnings.Count) 条):"
    $warnings | ForEach-Object { Write-Output "  - $_" }
} else {
    Write-Output "所有本地引用均已内联，无外链残留。"
}
