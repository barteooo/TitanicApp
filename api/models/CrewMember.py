from sqlalchemy.orm import DeclarativeBase , Mapped, mapped_column
from typing import Optional
class Base(DeclarativeBase): 
    pass

class CrewMember(Base): 
    __tablename__ = "crew"
    passenger_id: Mapped[int] = mapped_column(primary_key=True)
    survived: Mapped[bool] 
    passenger_class: Mapped[int]
    passenger_name: Mapped[str]
    sex: Mapped[str]
    age: Mapped[Optional[float]]
    no_sibling_spouses: Mapped[int]
    no_parents_children: Mapped[int]
    ticekt: Mapped[str]
    fare: Mapped[float]
    cabin: Mapped[Optional[str]]
    embarked: Mapped[Optional[str]] 

    def __repr__(self) -> str:
        return f"{self.passenger_id} {self.passenger_name}"