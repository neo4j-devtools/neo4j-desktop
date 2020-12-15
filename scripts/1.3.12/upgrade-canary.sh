#!/bin/bash

set -e

if [[ "$OSTYPE" == "darwin"* ]]; then
    relate_config_path="$HOME/Library/Application Support/com.Neo4j.Relate/Config"
    [[ "$XDG_CONFIG_HOME" != "" ]] && relate_config_path="$XDG_CONFIG_HOME/com.Neo4j.Relate"
    [[ "$NEO4J_RELATE_CONFIG_HOME" != "" ]] && relate_config_path="$NEO4J_RELATE_CONFIG_HOME"
else
    relate_config_path="$HOME/.config/neo4j-relate"
    [[ "$XDG_CONFIG_HOME" != "" ]] && relate_config_path="$XDG_CONFIG_HOME/neo4j-relate"
    [[ "$NEO4J_RELATE_CONFIG_HOME" != "" ]] && relate_config_path="$NEO4J_RELATE_CONFIG_HOME"
fi

tmp_file=$(mktemp)
env_name="Neo4j_Desktop_Canary"
env_config_path="$relate_config_path/environments/$env_name.json"

sed -i 's/"configPath":\s*"[^"]*",//' "$env_config_path"
sed -i 's/"relateDataPath":\s*"[^"]*",//' "$env_config_path"

echo "Environment updated"
