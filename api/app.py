from fastapi import FastAPI, HTTPException, status
from db_connection import get_all_crew_members
from fastapi.responses import JSONResponse 
from dto.CrewMember import CrewMember 
import db_connection as db

app = FastAPI()

@app.get("/")
async def root(): 
    return {"message": "Hello from root!"}

@app.get("/crew", response_class=JSONResponse)
async def get_crew():
    return get_all_crew_members()

@app.post("/crew", response_class=JSONResponse, status_code=status.HTTP_201_CREATED)
async def post_crew_member(member: CrewMember):
    new_member = db.create_crew_member(member)
    if new_member is not None and new_member.passenger_id == member.passenger_id:
        return {"message": f"Object with ID {member.passenger_id} created successfully."}
    else: 
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Member of ID {member.passenger_id} already exists."
        )
    
@app.get("/crew/{passenger_id}", response_class=JSONResponse)
async def get_crew_member(passenger_id: str):
    member = db.read_crew_member(passenger_id) 
    if not member: 
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f"Member with IF {passenger_id} not found"
        )
    return member       
    

@app.delete("/crew/{passenger_id}", response_class=JSONResponse)
async def delete_crew_member(passenger_id: str):
    pass





