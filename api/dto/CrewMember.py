from pydantic import BaseModel

class CrewMember(BaseModel):
    passenger_id: int
    survived: bool
    passenger_class: int
    passenger_name: str
    sex: str
    age: float
    no_sibling_spouses: int
    no_parents_children: int
    ticket: str
    fare: float
    cabin: str
    embarked: str