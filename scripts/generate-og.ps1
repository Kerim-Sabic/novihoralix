Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$backgroundPath = Join-Path $projectRoot "assets\source\social-preview-background.png"
$markPath = Join-Path $projectRoot "public\brand\horalix-mark-white.png"
$outputPath = Join-Path $projectRoot "public\og.png"

$background = [System.Drawing.Bitmap]::FromFile($backgroundPath)
$mark = [System.Drawing.Bitmap]::FromFile($markPath)
$canvas = New-Object System.Drawing.Bitmap(1200, 630, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$graphics = [System.Drawing.Graphics]::FromImage($canvas)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$sourceHeight = [int]($background.Width * 630 / 1200)
$sourceY = [int](($background.Height - $sourceHeight) / 2)
$sourceRect = New-Object System.Drawing.Rectangle(0, $sourceY, $background.Width, $sourceHeight)
$destinationRect = New-Object System.Drawing.Rectangle(0, 0, 1200, 630)
$graphics.DrawImage($background, $destinationRect, $sourceRect, [System.Drawing.GraphicsUnit]::Pixel)

$graphics.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(92, 3, 12, 20))), 0, 0, 1200, 630)
$leftFade = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(0, 0, 760, 630)),
  [System.Drawing.Color]::FromArgb(245, 4, 16, 25),
  [System.Drawing.Color]::FromArgb(5, 4, 16, 25),
  [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
)
$graphics.FillRectangle($leftFade, 0, 0, 760, 630)

$graphics.DrawImage($mark, (New-Object System.Drawing.Rectangle(70, 52, 55, 73)))
$brandFont = New-Object System.Drawing.Font("Segoe UI", 16, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Point)
$headlineFont = New-Object System.Drawing.Font("Georgia", 51, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Point)
$supportFont = New-Object System.Drawing.Font("Segoe UI", 17, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Point)
$statusFont = New-Object System.Drawing.Font("Segoe UI", 10, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Point)
$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 253, 248))
$muted = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(194, 207, 210))
$aqua = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(118, 224, 211))

$graphics.DrawString("H O R A L I X", $brandFont, $white, 148, 75)
$graphics.DrawString("Make every echo`nready for review.", $headlineFont, $white, 66, 178)
$graphics.DrawString("AI-assisted echocardiography workflow", $supportFont, $muted, 70, 377)
$graphics.DrawLine((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(65, 118, 224, 211), 1)), 70, 493, 542, 493)
$graphics.DrawString("PILOT-STAGE   /   CLINICIAN SIGN-OFF", $statusFont, $aqua, 70, 518)

$canvas.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

$statusFont.Dispose()
$supportFont.Dispose()
$headlineFont.Dispose()
$brandFont.Dispose()
$aqua.Dispose()
$muted.Dispose()
$white.Dispose()
$leftFade.Dispose()
$graphics.Dispose()
$canvas.Dispose()
$mark.Dispose()
$background.Dispose()

Write-Output $outputPath
