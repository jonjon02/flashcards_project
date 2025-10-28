from fastapi import FastAPI, Request, HTTPException, middleware, Query
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import DbWrapper
import psycopg2
from typing import Optional
from schemas import DeckCreate, CardCreate

db = DbWrapper('jbruch', 'WMrtrm#RZ7G', 'localhost:5431', 'flashcards')

app = FastAPI()

origins = [
    "http://localhost:5173", 
    "http://127.0.0.1:5173", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Wichtig für GET, POST, etc.
    allow_headers=["*"],
)

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
    db.insert_deck(deck.user_id, deck.deck_name, deck.deck_description)
    
@app.post("/library/deck")
def create_card(card: CardCreate):
    db.insert_card(card.deck_id, card.card_question, card.card_answer, card.card_difficulty)

    