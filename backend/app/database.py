from sqlalchemy import create_engine
from sqlalchemy import text
from sqlalchemy.orm import Session
from sqlalchemy import select
from models import *
from datetime import datetime
user = "jbruch"
pwd = "WMrtrm#RZ7G"
host = "localhost:5431"

engine = create_engine(f'postgresql+psycopg2://{user}:{pwd}@{host}/flashcards', echo=False)

def get_user(id: int):
    with engine.connect() as conn:
        result = conn.execute(select(User).where(User.user_id == id).limit(1))
        return result.fetchall()
    
def get_deck(id: int):
    with Session(engine) as session:
        deck = session.get(Deck, id)
        return deck
    
def insert_deck(user_id: int, deck_name: str, deck_descr: str):
    with Session(engine) as session:
        session.add(Deck(user_id_fk=user_id, deck_name=deck_name, deck_description=deck_descr, date_created=datetime.now()))
        session.commit()
        return Deck.deck_id
