$ErrorActionPreference = "Stop"

$relate_config_path = "$env:USERPROFILE\AppData\Roaming\Neo4j\Relate\Config"
if ($env:APPDATA) {
    $relate_config_path = "$env:APPDATA\Neo4j\Relate\Config"
}
if ($env:NEO4J_RELATE_DATA_HOME) {
    $relate_config_path = "$env:NEO4J_RELATE_DATA_HOME"
}

$env_name = "Neo4j_Desktop_Canary"
$env_config_path = "$relate_config_path\environments\$env_name.json"

$env_config = Get-Content "$env_config_path" -raw | ConvertFrom-Json

$env_config.PSObject.Properties.Remove('configPath')
$env_config.PSObject.Properties.Remove('relateDataPath')

$env_config | ConvertTo-Json | Set-Content "$env_config_path"

Write-Output "Environment updated"
