from pydantic import BaseModel
from datetime import datetime

class DeckBase(BaseModel):
    deck_name: str
    deck_description: str

class DeckCreate(DeckBase):
    pass

class DeckRead(DeckBase):
    deck_id: int
    date_created: datetime