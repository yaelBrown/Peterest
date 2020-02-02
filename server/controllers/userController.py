from flask import Flask
from flask_restful import Resource, Api
from flask_mysqldb import flask_mysqldb
from flask.ext.bcrypt import Bcrypt

class UserController(Resource):
  def get(self):
    return "Hello from UserController!"

  def post():
    pass