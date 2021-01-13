#!/bin/bash

set -e

if [[ "$OSTYPE" == "darwin"* ]]; then
  relate_data_path="$HOME/Library/Application Support/com.Neo4j.Relate/Data"
  [[ "$XDG_DATA_HOME" != "" ]] && relate_data_path="$XDG_DATA_HOME/com.Neo4j.Relate"
  [[ "$NEO4J_RELATE_DATA_HOME" != "" ]] && relate_data_path="$NEO4J_RELATE_DATA_HOME"
else
  relate_data_path="$HOME/.local/share/neo4j-relate"
  [[ "$XDG_DATA_HOME" != "" ]] && relate_data_path="$XDG_DATA_HOME/neo4j-relate"
  [[ "$NEO4J_RELATE_DATA_HOME" != "" ]] && relate_data_path="$NEO4J_RELATE_DATA_HOME"
fi

projects=$(ls "$relate_data_path/projects/")

for project in $projects; do
  rm -f "$relate_data_path/projects/$project/relate.project.json"
  rm "$relate_data_path/projects/$project"
done

echo "Unlinked projects"
