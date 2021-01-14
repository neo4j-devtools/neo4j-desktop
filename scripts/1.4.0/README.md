# Scripts for v1.4.0

### Downgrade

Required to downgrade from v1.4.0 to any older version. The script needs to be executed after closing Neo4j Desktop v1.4.0 and before starting the older version.

This script is needed for projects to be discovered correctly by older versions of Desktop. Without it, you won't be able to startup Desktop (as it won't find the project you last opened). The script is removing some symbolic links and metadata used by Desktop, no data is modified by it.

**Projects directory not found**

If running the script returns an error about the "projects" directory not existing, you'll have to get the data path from Desktop v1.4.0. To do so follow the steps
below.

- Start Desktop and click on Developer > Developer Tools.
- Run the following line in the console tab and copy the result:

```
require('electron').remote.app.relateEnvironment.dataPath
```

- In the terminal where you ran the script add an environment variable containing the path you just copied:

```
# Windows
$env:NEO4J_RELATE_DATA_HOME = "copied-path"

# Mac & Linux
export NEO4J_RELATE_DATA_HOME="copied-path"
```

- Run the script again and close the terminal.

## Running scripts

### Windows

Download the script you need. Open a Powershell window in the folder where the file is downloaded\* and run the following:

```powershell
Powershell -ExecutionPolicy Bypass -File ./script-name.ps1
```

\* In the file explorer you can hold shift, right click, and then click "Open PowerShell window here".

### Mac & Linux

Download the script you need. Open a terminal in the folder where the file is downloaded and run the following:

```shell
chmod +x script-name.sh
./script-name.sh
```

## Downloads

Right click any of the links below and click "Save link as..."

**Windows**

- [downgrade.ps1](https://github.com/neo4j-devtools/neo4j-desktop/raw/master/scripts/1.4.0/downgrade.ps1)

**Mac & Linux**

- [downgrade.sh](https://github.com/neo4j-devtools/neo4j-desktop/raw/master/scripts/1.4.0/upgrade-canary.sh)
