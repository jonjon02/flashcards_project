from sqlalchemy import create_engine
from sqlalchemy import text
from sqlalchemy.orm import Session
from sqlalchemy import select
from models import User, Deck, Card, Difficulty
from datetime import datetime


class DbWrapper:
    def __init__(self, dbuser: str, pwd: str, host: str, database: str):
        self.engine = create_engine(
            f'postgresql+psycopg2://{dbuser}:{pwd}@{host}/{database}',
            echo=False
        )
    
    def get_user(self, id: int):
        with self.engine.connect() as conn:
            result = conn.execute(select(User).where(User.user_id == id).limit(1))
            return result.fetchall()
        
    def get_all_decks(self):
        with Session(self.engine) as session:
            result = select(Deck)
            decks = session.scalars(result).all()
            return decks
        
    def get_decks_by_name(self, deck_name):
        with Session(self.engine) as session:
            result = select(Deck).where(Deck.deck_name.like(f"%{deck_name}%"))
            decks = session.scalars(result).all()
            return decks
        
    def get_deck_by_id(self, deck_id: int):
        with Session(self.engine) as session:
            cards = select(Card).where(Card.deck_id_fk==deck_id)
            result = session.scalars(cards).all()
            return result   
        
    def get_card_by_name(self, deck_id, question):
        with Session(self.engine) as session:
            cards = select(Card).where(Card.deck_id_fk==deck_id).where((Card.question.like(f"%{question}%")))
            result = session.scalars(cards).all()
            return result
        
    def get_card_by_id(self, id: int):
        with Session(self.engine) as session:
            result = session.get(Card, id)
            return result
        
    def insert_card(self, deck_id: int, question: str, answer: str, difficulty: Difficulty):
        with Session(self.engine) as session:
            session.add(Card(deck_id_fk=deck_id, question=question, answer=answer, date_created=datetime.now(), difficulty=difficulty))
            session.commit()
        
    def insert_deck(self, user_id: int, deck_name: str, deck_descr: str):
        with Session(self.engine) as session:
            session.add(Deck(user_id_fk=user_id, deck_name=deck_name, deck_description=deck_descr, date_created=datetime.now()))
            session.commit()
