from sqlalchemy import ForeignKey
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from datetime import datetime

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
    deck_name: Mapped[str] 
    deck_description: Mapped[str]
    date_created: Mapped[datetime]

    user: Mapped["User"] = relationship(back_populates="decks")
