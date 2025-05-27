from sqlalchemy import ForeignKey
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from datetime import datetime
import enum
from sqlalchemy import Enum

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = 'users'

    user_id: Mapped[int] = mapped_column(primary_key=True, nullable=False, autoincrement=True)
    user_name: Mapped[str] = mapped_column(nullable=False)
    first_name: Mapped[str] 
    last_name: Mapped[str] 
    date_created: Mapped[datetime]

    decks: Mapped[list["Deck"]] = relationship(back_populates="user", cascade="all, delete") 

    def __repr__(self):
        return f"""
                UserID={self.user_id}, 
                Username {self.user_name}, 
                Firstname={self.first_name},
                Lastname={self.last_name},
                DateCreated={self.date_created}"""
    
class Deck(Base):
    __tablename__ = 'decks'

    deck_id: Mapped[int] = mapped_column(primary_key=True, nullable=False, autoincrement=True)
    user_id_fk: Mapped[int] = mapped_column(ForeignKey("users.user_id"), nullable=False)
    deck_name: Mapped[str] = mapped_column(nullable=False)
    deck_description: Mapped[str] = mapped_column()
    date_created: Mapped[datetime] = mapped_column(default=datetime)

    user: Mapped["User"] = relationship(back_populates="decks")
    cards: Mapped[list["Card"]] = relationship(back_populates="deck")

class Difficulty(enum.Enum):
    easy = 'easy'
    medium = 'medium'
    difficult = 'difficult'
    hard = 'hard'

class Card(Base):
    __tablename__ = 'cards'

    card_id:  Mapped[int] = mapped_column(primary_key=True, nullable=False, autoincrement=True)
    deck_id_fk: Mapped[int] = mapped_column(ForeignKey("decks.deck_id"), nullable=False)
    date_created: Mapped[datetime] = mapped_column(default=datetime)
    difficulty: Mapped[Difficulty] = mapped_column(Enum(Difficulty, name='difficulty', create_type=False), nullable=False, default='hard')
    question:  Mapped[str] = mapped_column(nullable=False)
    answer:  Mapped[str] = mapped_column(nullable=False)
    
    deck: Mapped["Deck"] = relationship(back_populates="cards") 

    def __repr__(self):
        return f"""
        card_id={self.card_id},
        question={self.question},
        answer={self.answer},
        difficulty={self.difficulty}
        """