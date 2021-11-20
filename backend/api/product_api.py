import logging
from flask import Flask, Response, request
from flask_login import login_required
from database.products import add_product, remove_product, get_all
from app import app, login_manager

LOGGER = logging.getLogger(__name__)

@app.route('/create_product', methods=['PUT'])
@login_required
def create_product():
    data = request.json
    LOGGER.info(data)
    # data = {
    #         "id": "123",
    #         "name": "New Product",
    #         "price": "323",
    #         "category": "Pet",
    #         "properties": {
    #             "length": "123mm",
    #             "height": "325m"
    #         }
    #     }
    try:
        product = {}
        product['id'] = data['id']
        product['name'] = data['name']
        product['category'] = data['category']
        product['price'] = data['price']
        product['properties'] = data['properties']
    except KeyError:
        return Response('Bad request', status=400)

    if add_product(product):
        return Response("Product created", status=201)
    else:
        return Response('Product with given id already exists', status=400)


@app.route('/delete_product', methods=['POST'])
@login_required
def delete_product():
    data = request.json
    try:
        product_id = data['id']
    except KeyError:
        return Response('Bad request', status=400)

    if remove_product(product_id):
        return Response("Product deleted", status=201)
    else:
        return Response('Product with give id does not exist', status=400)

@app.route('/get_products', methods=['GET'])
def get_products():
    return get_all()