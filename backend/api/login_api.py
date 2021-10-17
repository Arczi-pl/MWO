import logging
from flask import Flask, Response, request
from flask_login import login_required, UserMixin, current_user
from database.customers import add_user, check_user
from app import app, login_manager
import jwt
import datetime

LOGGER = logging.getLogger(__name__)


class User(UserMixin):
    def __init__(self, user_id):
        self.user_id = user_id


@login_manager.request_loader
def load_user_from_request(request):
    # next, try to login using Basic Auth
    api_key = request.headers.get('Authorization')
    if api_key:
        api_key = api_key.replace('Bearer ', '', 1)
        user = decode_auth_token(api_key)
        if type(user) == dict:
            return User(user['user_id'])


@app.route('/register', methods=['PUT'])
def register():
    data = request.json
    if 'mail' in data and 'password' in data:
        if add_user(data['mail'], data['password']):
            return Response("User created", status=201)
        else:
            return Response('User exists', status=400)
    return Response('Bad request', status=400)


@app.route('/login', methods=['POST'])
def login():
    data = request.json

    if 'mail' in data and 'password' in data:
        if check_user(data['mail'], data['password']):
            response = Response('Logged in as ' + data['mail'])
            response.headers['Authorization'] = encode_auth_token(data['mail'])
            return response
        else:
            return Response('Invalid data', status=400)
    return Response('Bad request', status=400)


@app.route('/secure_hello', methods=['GET'])
@login_required
def secure_hello():
    return 'Hello ' + current_user.user_id + "!"


def encode_auth_token(user_id):
    payload = {
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1, seconds=0),
            'iat': datetime.datetime.utcnow(),
            'sub': user_id
        }
    return jwt.encode(
        payload,
        "app.config.get('SECRET_KEY')",
        algorithm='HS256'
    )


def decode_auth_token(auth_token):
    try:
        payload = jwt.decode(auth_token, "app.config.get('SECRET_KEY')", algorithms=["HS256"])
        return {'user_id': payload['sub']}
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'

