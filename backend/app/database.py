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

# print("test")

# try:
#     conn = psycopg2.connect(
#         dbname="flashcards_pg",
#         user="jbruch",
#         password="WMrtrm#RZ7G",
#         host="127.0.0.1",
#         port="5432"
#     )
#     print("Connection to PostgreSQL succeeded!")
#     conn.close()
    
# except Exception as e:
#     print("Connection failed:", e)
# print("test")
# conn = psycopg2.connect(database="flashcards", user="jbruch", password="WMrtrm#RZ7G", host="localhost")
# conn.close()
# print("test")


# Connect to your postgres DB
conn = psycopg2.connect("dbname=flashcards user=jbruch host=localhost port=5431 password=WMrtrm#RZ7G")

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a query
cur.execute("SELECT * FROM users")

# Retrieve query results
records = cur.fetchall()