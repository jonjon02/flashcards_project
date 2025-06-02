from fastapi import FastAPI
from pydantic import BaseModel
from database import DbWrapper

db = DbWrapper('jbruch', 'WMrtrm#RZ7G', 'localhost:5431', 'flashcards')

app = FastAPI()

@app.get("/decks/")
def get_cards():
    decks = [i for i in db.get_cards(7)]
    return decks




        
