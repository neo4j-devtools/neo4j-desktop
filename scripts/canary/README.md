# Scripts for v1.3.12

### Upgrade (only for Canary)

Required to upgrade the Canary from any version above 1.3.4 to >=1.3.12.

This script is needed to be able to discover DBMSs installed with older versions of Desktop correctly. Without running this, you'll see the DBMSs in your projects, but won't be able to start them. The script is only changing Desktop configuration and is not modifying any data.

- Start the upgraded version of Neo4j Desktop Canary.
- Once it's done loading close the application.
- Run the script.
- Start Neo4j Desktop Canary again.

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

- [upgrade-canary.ps1](https://github.com/neo4j-devtools/neo4j-desktop/raw/master/scripts/canary/1.3.12/upgrade-canary.ps1)

**Mac & Linux**

- [upgrade-canary.sh](https://github.com/neo4j-devtools/neo4j-desktop/raw/master/scripts/canar/1.3.12/upgrade-canary.sh)
