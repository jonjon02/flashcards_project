SELECT * FROM users

COMMIT

INSERT INTO decks (user_id_fk, deck_name, deck_description, date_created)
VALUES (
    5,
    'Business Statistics',
    'Formulas, key-conepts and notes from the lecture regarding the upcoming stats exam',
    now()
)