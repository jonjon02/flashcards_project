from fastapi import FastAPI
from pydantic import BaseModel
from database import *

app = FastAPI()

@app.get("/decks/{user_id}")
def get_decks(user_id: int):
    with Session(engine) as session:
        result = select(Deck).where(user_id==user_id)
        decks = session.scalars(result).all()
        return decks
    
        