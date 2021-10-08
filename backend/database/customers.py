import logging
from database.db import get_database

LOGGER = logging.getLogger(__name__)

database = get_database()
collection = database.customers


def add_one():
    mydict = { "name": "John", "address": "Highway 37" }
    x = collection.insert_one(mydict)


def get_all():
    all_customers = list(collection.find({}))
    LOGGER.info("ALL")
    LOGGER.info(all_customers)
    return all_customers