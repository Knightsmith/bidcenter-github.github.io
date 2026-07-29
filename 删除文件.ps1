# 删除文件/文件夹脚本
# 用法：powershell -ExecutionPolicy Bypass -File ".\删除文件.ps1"

$rootDir = $PSScriptRoot
Set-Location -LiteralPath $rootDir

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    Delete files from Git" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Current tracked HTML files:" -ForegroundColor Yellow
Write-Host ""

# Show all HTML files that are NOT the generated ones
git ls-files | Where-Object {$_ -match '\.html$' -and $_ -notmatch '^(index|nav-template)\.html$'} | ForEach-Object { Write-Host "  $_" }

Write-Host ""
Write-Host "Enter file/folder names to DELETE (space separated), or 'q' to quit:" -ForegroundColor Yellow
$input = Read-Host "> "

if ($input -eq 'q' -or $input -eq '') {
    Write-Host "Cancelled." -ForegroundColor Yellow
    exit
}

$names = $input -split ' ' | Where-Object {$_ -ne ''}

foreach ($name in $names) {
    Write-Host ""
    Write-Host ("Processing: " + $name) -ForegroundColor Cyan

    # Check if it's a tracked file or path
    $matched = git ls-files | Where-Object {$_ -match [regex]::Escape($name)}
    
    if ($matched.Count -eq 0) {
        Write-Host ("  No matches found for: " + $name) -ForegroundColor Red
        continue
    }

    foreach ($file in $matched) {
        Write-Host ("  git rm: " + $file) -ForegroundColor Gray
        git rm --cached "$file" 2>&1 | Out-Null
        # Also delete the actual file
        if (Test-Path -LiteralPath $file) {
            Remove-Item -LiteralPath $file -Force
            Write-Host ("  Deleted: " + $file) -ForegroundColor Green
        }
    }
}

Write-Host ""
Write-Host "Done! Now run push to sync." -ForegroundColor Green
Write-Host "Next step: double-click 'push.bat' to commit and push" -ForegroundColor Yellow
Read-Host "Press Enter to exit"
