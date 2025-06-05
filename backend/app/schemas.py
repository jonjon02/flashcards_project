from pydantic import BaseModel
from datetime import datetime
from models import Difficulty

class DeckBase(BaseModel):
    deck_name: str
    deck_description: str

class DeckCreate(DeckBase):
    pass

class CardBase(BaseModel):
    deck_id: int
    card_question: str
    card_answer: str
    card_difficulty: Difficulty
    
class CardCreate(CardBase):
    pass

