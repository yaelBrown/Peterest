"""
picture
  id
  conversationId
  authorId
  datetime
  caption
  imgUrl
  likes
  pet_id
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

# dynamically get one or many pictures of pets
@pictureController.route('/getPics')
def getPics():
  query = {}
  try:
    data = request.get_json()
    qStr = ""
    qVal = ""

    for k, v in data.items():
      if v != None:
        query[k] = v
        qStr = k
        qVal = v

    with con.cursor() as cur:
      sql = f"SELECT * FROM pictures WHERE {qStr} = {qVal}"
      cur.execute(sql)
      rows = cur.fetchall()

    out = []
    for row in rows:
      out.append(row)

    print(query)
    print(out)
    return {"data": out}, 200
  except Exception as e:
    return {"msg": "Unable to get picture(s): {}".format(e)}, 400
  finally:
    print("\n")

@pictureController.route('/addPic', methods=['POST'])
def addPictures():
  now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

  try:
    data = request.get_json()

    newPic = {}
    newPic["conversation_id"] = math.floor(random.random()*1000000)
    newPic["author_id"] = data["author_id"]
    newPic["caption"] = data["caption"]
    newPic["imgUrl"] = data["imgUrl"]
    newPic["pet_id"] = data["pet_id"]

    print(newPic)

    with con.cursor() as cur:
      sql = "INSERT INTO pictures (conversation_id, author_id, dt, caption, imgUrl, likes, pet_id) VALUES (%s, %s, %s, %s, %s, 0, %s)"
      cur.execute(sql, (newPic["conversation_id"], newPic["author_id"], now, newPic["caption"], newPic["imgUrl"], newPic["pet_id"]))
      con.commit()
  except Exception as e:
    return {"msg": "Unable to add picture: {}".format(e)}, 400
  finally:
    print("\n")

  return {"msg": "New picture added!"}, 200

@pictureController.route('/editPic', methods=['PUT'])
def editPictures():
  pass

@pictureController.route('/deletePic', methods=['DELETE'])
def deletePicture():
  pass

@pictureController.route('/test', methods=['GET'])
def testPictures():
  return "Picture controller works", 200

# Work on edit picture.
# Dynamic logic for getting pictures could be converted and used in petsController