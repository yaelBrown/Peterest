from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL

import json
import pymysql

userController = Blueprint('userController', __name__)

_rounds = 12
_nothing = None

con = pymysql.Connect(host='localhost', user='root', password='codeup', db='Peterest', charset='utf8', cursorclass=pymysql.cursors.DictCursor, port=3306)

@userController.route('/login', methods=['POST'])
def login():
  data = request.get_data()

  username = data["username"]
  password = data["password"]

  try:
    with con.cursor() as cur:
      sql = "SELECT * FROM users where username = %s"
      cur.execute(sql, username) # get the user info from database
      dbUser = cur.fetchone()
  finally:
      print("\n")

  isLoggedIn = Bcrypt.check_password_hash(dbUser["password"], password)

  if isLoggedIn:
    return dbUser
  else:
    return "Invalid login"

@userController.route('/register', methods=['POST'])
def register():
  data = request.get_json()

  newUser = {}
  newUser["username"] = data["username"]
  newUser["pw"] = Bcrypt.generate_password_hash(_nothing, data["password"], _rounds)
  newUser["isAdmin"] = data["isAdmin"]
  newUser["name"] = data["name"]

  print(newUser)
  try:
    with con.cursor() as cur:
      sql = "INSERT INTO users (username, pw, isAdmin, name) values (%s, %s, %s, %s)"
      cur.execute(sql, (newUser["username"], newUser["pw"], int(newUser["isAdmin"]), newUser["name"]))
      con.commit()
  finally:
    print("\n")

  return {"msg": "New user {} added".format(newUser["username"])}

@userController.route('/test')
def test():
  password = 'hunter2'
  print("pw is {}".format(password))

  pw_hash = Bcrypt.generate_password_hash(_nothing, password, _rounds)

  return pw_hash



# test login route