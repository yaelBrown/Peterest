from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL

from config.dbController import con

import json

userController = Blueprint('userController', __name__)

_rounds = 12
_nothing = None

@userController.route('/login', methods=['POST'])
def login():
  data = request.get_json()

  username = data["username"]
  password = data["password"]

  try:
    with con.cursor() as cur:
      sql = "SELECT * FROM users where username = %s"
      cur.execute(sql, username) # get the user info from database
      dbUser = cur.fetchone()
  finally:
      print("\n")

  isLoggedIn = Bcrypt.check_password_hash(_nothing, dbUser["pw"], password)

  if isLoggedIn:
    out = {}
    out["id"] = dbUser["id"]
    out["username"] = dbUser["username"]
    out["isAdmin"] = dbUser["isAdmin"]
    out["name"] = dbUser["name"]
    return out
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

@userController.route('/edit', methods=["PUT"])
def edit():
  data = request.get_json()

  try:
    with con.cursor() as cur:
      sql = "SELECT * FROM users WHERE id = %s"
      cur.execute(sql, data["id"])
      dbUser = cur.fetchone()

      if dbUser == None:
        return "User ID not found"

      sql = "UPDATE users SET isAdmin=%s, name=%s, pw=%s, username=%s where id=%s"
      cur.execute(sql, (data["isAdmin"], data["name"], data["pw"], data["username"], data["id"]))
      con.commit()

      out = {}
      out["id"] = data["id"]
      out["username"] = data["username"]
      out["isAdmin"] = data["isAdmin"]
      out["name"] = data["name"]
      return out
  finally:
    print("\n")

  return dbUser

@userController.route('/delete', methods=["POST"])
def delete():
  data = request.get_json()

  try:
    with con.cursor() as cur:
      sql = "SELECT * FROM users WHERE id = %s"
      cur.execute(sql, data["id"])
      dbUser = cur.fetchone()

      if dbUser == None:
        return "User ID not found"

      sql = "DELETE FROM users WHERE id=%s"
      cur.execute(sql, data["id"])
      con.commit()
      return "User was deleted"
  finally:
    print("\n")

@userController.route('/test')
def test():
  return "UserController works"