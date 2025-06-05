from fastapi import FastAPI, Request, HTTPException, middleware, Query
from starlette.middleware.base import BaseHTTPMiddleware
from pydantic import BaseModel
from database import DbWrapper
import psycopg2
from typing import Optional
from schemas import DeckCreate, CardCreate

allowed_ips: list = ['127.0.0.1']

class IPBlockerMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        client_ip = request.client.host
        if client_ip not in allowed_ips:
            raise HTTPException(status_code=403, detail="Forbidden")
        return await call_next(request)

db = DbWrapper('jbruch', 'WMrtrm#RZ7G', 'localhost:5431', 'flashcards')

app = FastAPI()

# GET Endpoints:

@app.get("/library/")
def get_library(deck_name: Optional[str] = Query(None)):
    "returns all decks of a user"
    if deck_name:
        result = db.get_decks_by_name(deck_name)
        return result
    else: 
        result = db.get_all_decks()
        return result

@app.get("/library/deck/{deck_id}")
def get_deck_cards(deck_id: int, question: Optional[str] = Query(None)):
    "returns all cards from a deck by id, additionally by question"
    if question:
        result = db.get_card_by_name(deck_id, question)
        return result
    else: 
        result = db.get_deck_by_id(deck_id)
        return result
    
@app.get("/library/deck/card/{card_id}")
def get_card_by_id(card_id: int):
    "returns a specific card by id"
    result = db.get_card_by_id(card_id)
    return result

# POST Endpoints

@app.post("/library/")
def create_deck(deck: DeckCreate):
    db.insert_deck(2, deck.deck_name, deck.deck_description)
    
@app.post("/library/deck")
def create_card(card: CardCreate):
    db.insert_card(card.deck_id, card.card_question, card.card_answer, card.card_difficulty)

    