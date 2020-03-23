from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS

from controllers.userController import userController
from controllers.petsController import petsController
from controllers.dashboardController import dashboardController
from controllers.guestController import guestController
from controllers.pictureController import pictureController

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'codeup'
app.config['MYSQL_HOST'] = 'localhost:3306'
app.config['MYSQL_DB'] = 'Peterest'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

CORS(app)

app.register_blueprint(userController, url_prefix='/api/users/')
app.register_blueprint(petsController, url_prefix='/api/pets/')
app.register_blueprint(dashboardController, url_prefix='/api/dashboard/')
app.register_blueprint(guestController, url_prefix='/api/guest/')
app.register_blueprint(pictureController, url_prefix='/api/pictures/')

@app.route("/")
def index():
  return "Hello from server"

if __name__ == "__main__":
  app.run(port=5000, debug=True)