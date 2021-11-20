from pymongo import MongoClient

client = MongoClient('mongodb://root:password@mongo:27017/')
db = client.shop

def get_database():
    return db
