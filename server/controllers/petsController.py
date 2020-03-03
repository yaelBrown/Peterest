from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL

from config.dbController import con

import json

petsController = Blueprint('petsController', __name__)

_nothing = None

@petsController.route('/test', methods=['GET'])
def test():
  return "PetsContoller works"


# Create CRUD functionality for pets controller and tests