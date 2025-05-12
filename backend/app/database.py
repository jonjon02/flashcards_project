# from sqlalchemy import create_engine
# from sqlalchemy.orm import Session
# from sqlalchemy import select
# from models import *

# user = "jbruch"
# pwd = "WMrtrm#RZ7G"
# host = "0.0.0.0:5432"

# # Set up the database engine
# engine = create_engine(f'postgresql+psycopg2://{user}:{pwd}@{host}/flashcards')

# session = Session(engine)

# stmt = select(User).where(User.user_name.in_(["jonjon27", "sandy"]))

# for user in session.scalars(stmt):
#     print(user)

import psycopg2

conn = psycopg2.connect("dbname=flashcards user=jbruch port=5431 host=127.0.0.1 password=WMrtrm#RZ7G")

cur = conn.cursor()

cur.execute("SELECT * FROM users")

print([i for i in cur.fetchall()])


