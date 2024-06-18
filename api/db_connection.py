from typing import List
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session
from models.CrewMember import CrewMember

engine = create_engine(f"postgresql://postgres:1234@localhost:6666/titanic")  
session = Session(engine)


def get_all_crew_members() -> List[CrewMember]: 
    # member = CrewMember
    # statement = select(
    #     member.passenger_name,
    #     member.passenger_class,
    #     member.age,
    #     member.embarked
    #     )
    # return session.scalars(statement).all()
    return session.query(CrewMember).all()



