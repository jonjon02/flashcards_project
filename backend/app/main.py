from fastapi import FastAPI
from pydantic import BaseModel
from database import DbWrapper

db = DbWrapper('jbruch', 'WMrtrm#RZ7G', 'localhost:5431', 'flashcards')

app = FastAPI()

@app.get("/decks/{deck_id}")
def get_deck(deck_id):
    deck = db.get_deck(deck_id)
        
