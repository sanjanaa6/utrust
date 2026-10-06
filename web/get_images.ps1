$ProgressPreference = 'SilentlyContinue'
function Get-CarImage ($query, $filename) {
    $html = Invoke-WebRequest -Uri "https://html.duckduckgo.com/html/?q=$query+spinny+exterior" -UseBasicParsing | Select-Object -ExpandProperty Content
    if ($html -match 'src="(https://external-content\.duckduckgo\.com/iu/\?u=[^"]+)"') {
        $imgUrl = $matches[1].Replace('&amp;', '&')
        Write-Host "Found image for $query : $imgUrl"
        Invoke-WebRequest -Uri $imgUrl -OutFile "c:\Users\Sanjana Singh\OneDrive\Desktop\utrust\web\public\cars\$filename" -UseBasicParsing
    } else {
        Write-Host "No image found for $query"
    }
}

Get-CarImage "Toyota Glanza white" "glanza.jpg"
Get-CarImage "Tata Nexon blue" "nexon.jpg"
Get-CarImage "Maruti Suzuki Ignis white" "ignis.jpg"
Get-CarImage "Maruti Suzuki Baleno silver" "baleno.jpg"
Get-CarImage "Toyota Camry white" "camry.jpg"
Get-CarImage "Toyota Innova Crysta silver" "innova_crysta.jpg"
Get-CarImage "Toyota Innova Hycross blue" "innova_hycross.jpg"
Get-CarImage "Toyota Innova Crysta black" "innova_crysta_zx.jpg"
