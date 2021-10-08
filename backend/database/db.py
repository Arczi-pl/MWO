from pymongo import MongoClient

def get_database():
    client = MongoClient('mongodb://root:password@mongo:27017/')
    db = client.shop
    return db
