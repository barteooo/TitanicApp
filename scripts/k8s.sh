#!/bin/bash

DIRECTORY=../charts/templates

kubectl apply -f $DIRECTORY/configmap.yaml

kubectl apply -f $DIRECTORY/db-volumes.yaml

kubectl apply -f $DIRECTORY/api.yaml

kubectl apply -f $DIRECTORY/db.yaml

kubectl apply -f $DIRECTORY/keycloak.yaml

kubectl apply -f $DIRECTORY/ml.yaml

kubectl apply -f $DIRECTORY/webapp.yaml

echo "Waiting for creating pods"
sleep 30 

POD_API=$(kubectl get pods -l app=titanic-api -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward $POD_API 8080:8000 &

POD_DB=$(kubectl get pods -l app=titanic-db -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward $POD_DB 5432:5432 &

POD_KEYCLOAK=$(kubectl get pods -l app=keycloak -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward $POD_KEYCLOAK 8081:8080 &

POD_ML=$(kubectl get pods -l app=titanic-ml -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward $POD_ML 8765:8765 &

POD_WEB=$(kubectl get pods -l app=titanic-web -o jsonpath="{.items[0].metadata.name}")
kubectl port-forward $POD_WEB 3000:3000 &