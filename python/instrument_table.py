import psycopg2
from config import host, user, password, db_name

try:
    connection = psycopg2.connect(
        host=host,
        user=user,
        password=password,
        database=db_name
    )
    connection.autocommit = True

    with connection.cursor() as cursor:
        cursor.execute(
            """CREATE TABLE IF NOT EXISTS Instrument(
                id serial PRIMARY KEY,
                instrument varchar(50) NOT NULL,
                sell numeric NOT NULL,
                buy numeric NOT NULL);"""
        )

        print("Table created successfully")

    data = [
        ('CNH/RUB', 8.570, 8.559),
        ('EUR/RUB', 79.9, 80.7),
        ('EUR/USD', 0.94, 1.06),
        ('USD/RUB', 73.59, 74.89),
        ('TRY/RUB', 2.92, 3.97)
    ]

    with connection.cursor() as cursor:
        for row in data:
            cursor.execute("INSERT INTO Instrument (instrument, sell, buy) VALUES (%s, %s, %s);", row)

except Exception as _ex:
    print("Error while working with PostgreSQL")
finally:
    if connection:
        connection.close()
        print("PostgreSQL connection closed")