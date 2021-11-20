import logging
from database.db import get_database
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError

LOGGER = logging.getLogger(__name__)

database = get_database()
collection = database.customers


def add_user(mail, password):
    find_user = list(collection.find({"mail": mail}))
    if not find_user:
        collection.insert_one({"mail": mail, "password": hash_password(password)})
        return True
    return False


def check_user(mail, password):
    find_user = list(collection.find({"mail": mail}))
    if len(find_user) == 1:
        return bool(
            find_user[0]["mail"] == mail and
            check_password(password, find_user[0]["password"]))
    return False


def hash_password(password):
    return PasswordHasher().hash(password)


def check_password(password, hashed_password):
    try:
        x = PasswordHasher().verify(hashed_password, password)
    except VerifyMismatchError:
        x = False
    return x


def add_one():
    mydict = { "name": "John", "address": "Highway 37" }
    x = collection.insert_one(mydict)


def get_all():
    all_customers = list(collection.find({}))
    LOGGER.info("ALL")
    LOGGER.info(all_customers)
    return all_customers