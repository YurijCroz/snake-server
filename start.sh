#!/usr/bin/env bash

#################################
## Run application in DEV mode ##
#################################

# Stop PostgreSQL service
sudo systemctl stop postgresql

started_at=$(date +"%s")

echo "-----> Provisioning containers"
docker-compose --file docker-compose.yaml up
echo ""

ended_at=$(date +"%s")

minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done in ${minutes}m${seconds}s"
