import logging
from database.db import get_database

LOGGER = logging.getLogger(__name__)

database = get_database()
collection = database.products


def add_product(product):
    find_product = list(collection.find({"id": product["id"]}))
    if not find_product:
        collection.insert_one(product)
        return True
    return False

def remove_product(product_id):
    find_product = list(collection.find({"id": product_id}))
    if find_product:
        collection.delete_one({"id": product_id})
        return True
    return False

def get_all():
    all_products = list(collection.find({}))
    return all_products