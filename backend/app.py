from flask import Flask 
from database.db import get_database
from database.customers import add_one, get_all

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello API!'


@app.route('/add')
def add():
    add_one()
    return 'Add one John'

@app.route('/show')
def show():
    all_customers = get_all()
    return str(all_customers)

if __name__ == '__main__':
    app.run(debug = True, host = '0.0.0.0')