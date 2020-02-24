from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL

import json
import pymysql

userController = Blueprint('userController', __name__)

_rounds = 12
_nothing = None

# con = pymysql.Connect('::1', 'root', 'codeup', 'Peterest', 'utf8mb4', cursorclass=pymysql.cursors.DictCursor)

@userController.route('/login')
def login():
  return 'You are logged in'

@userController.route('/register', methods=['GET', 'POST'])
def register():
  if request.method == 'GET':
    return jsonify({"msg": "This must be a post!"}), 200
  if request.method == 'POST':
    con = pymysql.Connect(host='localhost', user='root', password='codeup', db='Peterest', charset='utf8', cursorclass=pymysql.cursors.DictCursor, port=3306)
    data = request.get_json()

    newUser = {}
    newUser["username"] = data["username"]
    newUser["pw"] = Bcrypt.generate_password_hash(_nothing, data["password"], _rounds)
    newUser["isAdmin"] = False
    newUser["name"] = data["name"]
    print(newUser)
    try:
      with con.cursor() as cur:
        sql = "INSERT INTO users (username, pw, isAdmin, name) values (%s, %s, %s, %s)"
        cur.execute(sql, (newUser["username"], newUser["pw"], int(newUser["isAdmin"]), newUser["name"]))
        con.commit()
    finally:
      con.close()

  return "??"

@userController.route('/test')
def test():
  password = 'hunter2'
  print("pw is {}".format(password))

  pw_hash = Bcrypt.generate_password_hash(_nothing, password, _rounds)

  return pw_hash




  # add sql alchemy to project.