from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt

userController = Blueprint('userController', __name__)

_rounds = 12
_nothing = None

@userController.route('/login')
def login():
  return 'You are logged in'

@userController.route('/register', methods=['GET', 'POST'])
def register():
  if request.method == 'GET':
    return jsonify({"msg": "This must be a post!"}), 200
  if request.method == 'POST':
    return "good this is a post"

@userController.route('/test')
def test():
  password = 'hunter2'
  print("pw is {}".format(password))

  pw_hash = Bcrypt.generate_password_hash(_nothing, password, _rounds)

  return pw_hash