from flask import Flask
from flask_restful import Resource, Api
from flask_mysqldb import MySQL
from flask_cors import CORS

# from "./controllers/userController.py" import *

app = Flask(__name__)
api = Api(app)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'codeup'
app.config['MYSQL_HOST'] = 'localhost:3306'
app.config['MYSQL_DB'] = 'Peterest'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

CORS(app)

# app.register_blueprint(userController)

@app.route("/")
def index():
  return "Hello from server"

if __name__ == "__main__":
  app.run(port=5000, debug=True)