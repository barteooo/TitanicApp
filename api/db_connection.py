import os
from typing import List
import dto.CrewMember
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session
from orm.CrewMember import CrewMember as CrewMemberORM

user = os.environ.get("POSTGRES_USER")
password = os.environ.get("POSTGRES_PASSWORD") 
ip = os.environ.get("POSTGRES_IP", "localhost") 
port = os.environ.get("POSTGRES_PORT",6666)
engine = create_engine(f"postgresql://{user}:{password}@{ip}:{port}/titanic")  
session = Session(engine)


def get_all_crew_members() -> List[CrewMemberORM]: 
    # member = CrewMember
    # statement = select(
    #     member.passenger_name,
    #     member.passenger_class,
    #     member.age,
    #     member.embarked
    #     )
    # return session.scalars(statement).all()
    return session.query(CrewMemberORM).all()


def create_crew_member(member: dto.CrewMember.CrewMember) -> CrewMemberORM:
    member_orm = CrewMemberORM(**member.model_dump())
    
    try:
        session.add(member_orm)
        session.commit()
        new_member = (
            session
            .query(CrewMemberORM)
            .where(CrewMemberORM.passenger_id.in_([member.passenger_id]))
            .first()
            )
        
        return new_member
        
    except Exception as e:
        print(e) 
        return None

def read_crew_member(passenger_id: str) -> CrewMemberORM: 
    return (
        session
        .query(CrewMemberORM)
        .where(CrewMemberORM.passenger_id.in_([passenger_id]))
        .first()
    )

def delete_crew_member(passenger_id: str) -> bool: 
    member = (
        session
        .query(CrewMemberORM)
        .where(CrewMemberORM.passenger_id == passenger_id)
        .first()
    )
    if member:
        session.delete(member)
        session.commit()
        return True;
    return False;

