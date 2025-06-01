from sqlalchemy import create_engine
from sqlalchemy import text
from sqlalchemy.orm import Session
from sqlalchemy import select
from models import *
from datetime import datetime

# user = "jbruch"
# pwd = "WMrtrm#RZ7G"
# host = "localhost:5431"
class DbWrapper:
    __init__(self, dbuser: str, pwd: str, host: str):
        dbuser = self.dbuser
        pwd = self.pwd
        host = self.host

    engine = create_engine(f'postgresql+psycopg2://{dbuser}:{pwd}@{host}/flashcards', echo=False)

    def get_user(id: int):
        with engine.connect() as conn:
            result = conn.execute(select(User).where(User.user_id == id).limit(1))
            return result.fetchall()
        
    def get_deck(id: int):
        with Session(engine) as session:
            deck = session.get(Deck, id)
            return deck
        
    def get_single_card(id: int):
        with Session(engine) as session:
            card = session.get(Card, id)
            return card

    def get_cards(deck_id: int):
        with Session(engine) as session:
            result = select(Card).where(Card.deck_id_fk==deck_id)
            cards = session.scalars(result).all()
            return cards
        
    def insert_card(deck_id: int, question: str, answer: str):
        with Session(engine) as session:
            session.add(Card(deck_id_fk=deck_id, question=question, answer=answer, date_created=datetime.now()))
            session.commit()
            return Card.card_id
        
    def insert_deck(user_id: int, deck_name: str, deck_descr: str):
        with Session(engine) as session:
            session.add(Deck(user_id_fk=user_id, deck_name=deck_name, deck_description=deck_descr, date_created=datetime.now()))
            session.commit()
            return Deck.deck_id