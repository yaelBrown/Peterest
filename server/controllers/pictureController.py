"""
picture
  id
  conversationId
  authorId
  datetime
  caption
  imgUrl
  likes
"""

from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL
from datetime import datetime

from config.dbController import con

import json
import sys
import random
import math

pictureController = Blueprint('pictureController', __name__)

_nothing = None

@pictureController.route('/getPics')
def getPics():
  pass

@pictureController.route('/addPic', methods=['POST'])
def addPictures():
  data = request.get_json()
  now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

  try:
    newPic = {}
    newPic["conversation_id"] = math.floor(random.random()*1000000)
    newPic["author_id"] = data["author_id"]
    newPic["caption"] = data["caption"]
    newPic["imgUrl"] = data["imgUrl"]

    with con.cursor() as cur:
      sql = "INSERT INTO pictures (conversation_id, author_id, dt, caption, imgUrl, likes) VALUES (%s, %s, %s, %s, %s, 0)"
      cur.execute(sql, (newPic["conversation_id"], newPic["author_id"], now, newPic["caption"], newPic["imgUrl"]))
      con.commit()
  except Exception as e:
    return {"msg": "Unable to add picture: {}".format(e)}, 400
  finally:
    print("\n")

  return {"msg": "New picture added!"}, 200

@pictureController.route('/editPic', methods=['PUT'])
def editPictures():
  pass

@pictureController.route('/deletePic', method=['DELETE'])
def deletePicture():
  pass

@pictureController.route('/test', methods=['GET'])
def testPictures():
  return "Picture controller works", 200

# change author_id to pet_id and connect to Pets table.