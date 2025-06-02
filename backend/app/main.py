from fastapi import FastAPI
from pydantic import BaseModel
<<<<<<< HEAD
from database import *

app = FastAPI()

@app.get("/decks/{user_id}")
def get_decks(user_id: int):
    with Session(engine) as session:
        result = select(Deck).where(user_id==user_id)
        decks = session.scalars(result).all()
        return decks
    
        
=======
from database import DbWrapper


# user = "jbruch"
# pwd = "WMrtrm#RZ7G"
# host = "localhost:5431"

db = DbWrapper('jbruch', 'WMrtrm#RZ7G', 'localhost:5431')

app = FastAPI()

@app.get("/decks/{deck_id}")
def get_deck(deck_id):
    deck = db.get_deck(deck_id)
        

# @app.post("/library/")
# def create_deck(deck: deckCreate):
#     if m
#     deck_database.append(deck(deck_id=deck.deck_id, deck_name=deck.deck_name, deck_description=deck.deck_description, deck_owner=deck.deck_owner))
#     return {"deck_id = ", deck.deck_id}

# @app.get("/library/")
# def get_decks():
#     return deck_database
>>>>>>> 33e0c3498f5e8fb07bcf162c55ea04c4b4225d82
