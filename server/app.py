from flask import Flask, send_from_directory
from flask_cors import CORS

from controllers.UserController import userController

app = Flask(
  __name__, 
  static_url_path='')
  # static_folder='/static',
  # template_folder='/template')

CORS(app)

app.register_blueprint(userController, url_prefix='/api/users/')

@app.route("/")
def testApi():
  return app.send_static_file('index.html')

@app.route("/test")
def testdb():
  return "0.o"

if __name__ == "__main__":
  app.run(port=5000, debug=True)