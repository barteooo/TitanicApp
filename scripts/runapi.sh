# build image 
docker build -t titanic_api ../api 

# run container with image 
docker run --name titanic_api --env-file ../api/.env --network=titanic_network -p 8080:8000 titanic_api
