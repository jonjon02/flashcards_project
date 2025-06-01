from fastapi import FastAPI
from pydantic import BaseModel
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