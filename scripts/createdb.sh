#!/bin/bash 

#create image basing on dockerfile from database dir
docker build -t titanicdb ../database

#run image that create postgresql database container + create a volume 
docker run --rm --name titanicdb --network=titanic_network -v pgdata-volume:/var/lib/postgresql/data  -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=titanic -p 6666:5432 titanicdb

#If we want to run database on CLI
#docker exec -it titanicdb psql -U postgres -d titanic