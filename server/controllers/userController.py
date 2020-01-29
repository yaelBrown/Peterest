from flask import Flask
from flask_restful import Resource, Api
from flask_mysqldb import flask_mysqldb
from flask.ext.bcrypt import Bcrypt

class Item(Resource):
  def post():
