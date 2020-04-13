"""
  comments
    id
    conversationId
    author
    datetime
    msg
    likes
"""

"""
Hold off on this, not sure if this controller is necessary
"""

from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL
from datetime import datetime

from config.dbController import con

commentsController = Blueprint('commentsController', __name__)

_nothing = None

# Get individual comments (all)
@commentsController.route("/getComments", methods=["GET"])
def getComments():
#   try:
#     data = request.get_json()
#     conversionId = data["conversationId"]
  pass



# Add a comment method


@commentsController.route("/test", methods=['GET'])
def testComments():
  return "Comments controller works", 200

# Test get comments functionality