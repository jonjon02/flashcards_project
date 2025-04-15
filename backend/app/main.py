from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Set(BaseModel):
    set_id: int
    set_name: str
    set_description: str
    set_owner: int

class SetCreate(Set):
    pass

set_database: list = []

@app.post("/library/")
def create_set(set: SetCreate):
    if ma
    set_database.append(Set(set_id=set.set_id, set_name=set.set_name, set_description=set.set_description, set_owner=set.set_owner))
    return {"set_id = ", set.set_id}

@app.get("/library/")
def get_sets():
    return set_database