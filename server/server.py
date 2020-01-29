from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS

app = Flask(__name__)

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'codeup'
app.config['MYSQL_HOST'] = 'localhost:3306'
app.config['MYSQL_DB'] = 'Peterest'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

CORS(app)

@app.route("/")
def home():
  return "<h1>Hello from Flask!</h1>"

if __name__ == "__main__":
  app.run(debug=True)