from fastapi import FastAPI, Request, Query
from fastapi import middleware
from fastapi import HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from pydantic import BaseModel
from database import DbWrapper
import psycopg2
from typing import Optional

# allowed_ips: list = ['127.0.0.1']

# class IPBlockerMiddleware(BaseHTTPMiddleware):
#     async def dispatch(self, request: Request, call_next):
#         client_ip = request.client.host
#         if client_ip not in allowed_ips:
#             raise HTTPException(status_code=403, detail="Forbidden")
#         return await call_next(request)

#database access class init 
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
        result = db.get_card_by_name(question, deck_id)
        return result
    else: 
        result = db.get_deck_by_id
        return {"message": "test"}
    
@app.get("library/deck/card/{card_id}")
def get_card_by_id(card_id: int):
    "returns a specific card by id"
    result = db.get_card_by_id(card_id)
    return result


