from fastapi import FastAPI
import pickle
import pandas as pd
from pydantic import BaseModel
import numpy as np

app = FastAPI()

with open("./Ai-model/model.pkl", "rb") as file:
    model = pickle.load(file)
with open("./Ai-model/scaler.pkl", "rb") as file:
    scaler = pickle.load(file)

class Passenger(BaseModel):
    age: float
    no_sibling_spouses: float
    no_parents_children: float
    fare: float
    sex_male: int
    passenger_class_2: int
    passenger_class_3: int
    embarked_Q: int
    embarked_S: int

@app.post("/predict/")
def predict_survival(passenger: Passenger):
    passenger_data = passenger.dict()
    
    column_order = ['age', 'no_sibling_spouses', 'no_parents_children', 'fare', 
                    'sex_male', 'passenger_class_2', 'passenger_class_3', 'embarked_Q', 'embarked_S']
    input_data = pd.DataFrame([passenger_data])[column_order]  

    numerical_columns = ['age', 'no_sibling_spouses', 'no_parents_children', 'fare']
    input_data[numerical_columns] = scaler.transform(input_data[numerical_columns])
    
    sample_data_reshaped = input_data.values.reshape(1, -1)
    prediction = model.predict(sample_data_reshaped)
    survival = bool(prediction[0])
    
    return {"survived": survival}