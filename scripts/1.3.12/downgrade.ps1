$ErrorActionPreference = "Stop"

$relate_data_path = "$env:USERPROFILE\AppData\Local\Neo4j\Relate\Data"
if ($env:LOCALAPPDATA) {
    $relate_data_path = "$env:LOCALAPPDATA\Neo4j\Relate\Data"
}
if ($env:NEO4J_RELATE_DATA_HOME) {
    $relate_data_path = "$env:NEO4J_RELATE_DATA_HOME"
}

$projects_path = "$relate_data_path\projects"
Get-ChildItem "$projects_path" | Where-Object { $_.LinkType } | ForEach-Object -Process {
    Remove-Item "$projects_path\$_\relate.project.json" -Force -ErrorAction Ignore
    # Remove symbolic link https://superuser.com/a/595197
    cmd /c rmdir "$projects_path\$_"
}

Write-Output "Unlinked projects"
