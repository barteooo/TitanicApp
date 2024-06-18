from fastapi import FastAPI
from db_connection import get_all_crew_members
from fastapi.responses import JSONResponse


app = FastAPI()

@app.get("/")
async def root(): 
    return {"message": "Hello from root!"}

@app.get("/crew", response_class=JSONResponse)
async def get_crew():
    return get_all_crew_members()