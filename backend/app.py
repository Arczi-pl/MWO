from flask import Flask 
from flask_login import LoginManager
from database.db import get_database
from database.customers import add_one, get_all
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
login_manager = LoginManager()
login_manager.init_app(app)

from api.login_api import secure_hello, register, login, load_user_from_request
from api.product_api import create_product, remove_product, get_products

@app.route('/')
def hello_world():
    return 'Hello API!'

if __name__ == '__main__':
    app.run(debug = True, host = '0.0.0.0')