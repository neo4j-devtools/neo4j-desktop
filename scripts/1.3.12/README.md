# Scripts for v1.3.12

### Upgrade (only for Canary)

Required to upgrade the Canary from any version above 1.3.4 to 1.3.12.

This script is needed to be able to discover DBMSs installed with older versions of Desktop correctly. Without running this, you'll see the DBMSs in your projects, but won't be able to start them. The script is only changing Desktop configuration and is not modifying any data.

- Start the upgraded version of Neo4j Desktop.
- Once it's done loading close the application.
- Run the script.
- Start Neo4j Desktop again.

### Downgrade

Required to downgrade from 1.3.12 to any older version. The script needs to be executed after closing Neo4j Desktop 1.3.12 and before starting the older version.

This script is needed for projects to be discovered correctly by older versions of Desktop. Without it, you won't be able to startup Desktop (as it won't find the project you last opened). The script is removing some symbolic links and metadata used by Desktop, no data is modified by it.

**Projects directory not found**

If running the script returns an error about the "projects" directory not existing, you'll have to get the data path from Desktop 1.3.12. To do so follow the steps
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

- [upgrade-canary.ps1](https://github.com/neo4j-devtools/neo4j-desktop/raw/master/scripts/1.3.12/upgrade-canary.ps1)
- [downgrade.ps1](https://github.com/neo4j-devtools/neo4j-desktop/raw/master/scripts/1.3.12/downgrade.ps1)

**Mac & Linux**

- [upgrade-canary.sh](https://github.com/neo4j-devtools/neo4j-desktop/raw/master/scripts/1.3.12/upgrade-canary.sh)
- [downgrade.sh](https://github.com/neo4j-devtools/neo4j-desktop/raw/master/scripts/1.3.12/upgrade-canary.sh)
