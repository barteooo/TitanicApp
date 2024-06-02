CREATE TABLE crew ( 
    passenger_id INT PRIMARY KEY, 
    survived BOOLEAN, 
    passenger_class INT, 
    passenger_name VARCHAR, 
    sex VARCHAR,  
    age REAL,
    no_sibling_spouses INT, 
    no_parents_children INT,
    ticekt VARCHAR, 
    fare REAL, 
    cabin VARCHAR,  
    embarked VARCHAR
);