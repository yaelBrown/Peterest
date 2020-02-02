from flask import Flask
from flask import Blueprint
from flask_restful import Resource, Api
# from flask_mysqldb import flask_mysqldb
# from flask.ext.bcrypt import Bcrypt

userController = Blueprint('userController', __name__)

@userController.route('/login')
def login():
  return 'You are logged in'