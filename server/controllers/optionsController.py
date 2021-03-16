"""
Used to modify user options
"""
from flask import Flask, request, Blueprint, jsonify

# from .config.config_mongo import db

import services.optionsService as optionService
o = optionService.optionService()

optionController = Blueprint('optionController', __name__)

@optionController.route('/options', methods=['GET'])
def getOptions(): 
  pass

@optionController.route('/options', methods=['PUT'])
def editOptions():
  pass

@optionController.route('/options', methods=['POST'])
def createOptions():
  pass

@optionsController.route('/options', methods=['DELETE'])
def deleteOptions():
  pass