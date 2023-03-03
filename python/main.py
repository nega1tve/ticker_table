import asyncio
import psycopg2
import websockets
from config import *


async def handler(websocket, path):
    async for message in websocket:
        response = await process_message(message)
        await websocket.send(response)

async def process_message(message):
    conn = psycopg2.connect(
        host=host,
        user=user,
        password=password,
        database=db_name
    )
    # async with conn.cursor() as cursor:
        # if message == 'EUR/RUB':
        #     cursor.execute("SELECT EUR/RUB FROM instrument")
        #     rows = cursor.fetchall()
        #     return str(rows)
    if message == 'EUR/RUB':
        return conn.execute('SELECT EUR/RUB FROM instrument')
    elif message == '':
        return 'TEST'
    else:
        return 'TESTTEST'

async def main():
    async with websockets.serve(handler, 'localhost', 8765):
        await asyncio.Future()

asyncio.run(main())

