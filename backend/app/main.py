from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


deck_database: list = []

@app.post("/library/")
def create_deck(deck: deckCreate):
    if m
    deck_database.append(deck(deck_id=deck.deck_id, deck_name=deck.deck_name, deck_description=deck.deck_description, deck_owner=deck.deck_owner))
    return {"deck_id = ", deck.deck_id}

@app.get("/library/")
def get_decks():
    return deck_database