from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt
from flask_mysqldb import MySQL

from config.dbController import con

import json
import sys

petsController = Blueprint('petsController', __name__)

_nothing = None

@petsController.route('/create', methods=['POST'])
def createPet():
  try:
    data = request.get_json()

    newPet = {}
    newPet["owner_id"] = data['owner_id']
    newPet["catOrDog"] = data['catOrDog']
    newPet["name"] = data['name']
    newPet["birthday"] = data['birthday']
    newPet["gender"] = data['gender']
    newPet["pictureUrl"] = data['pictureUrl']

    with con.cursor() as cur:
      sql = "INSERT INTO pets (owner_id, catOrDog, name, birthday, gender, pictureUrl) values (%s, %s, %s, %s, %s, %s)"
      cur.execute(sql, (newPet["owner_id"], newPet["catOrDog"], newPet["name"], newPet["birthday"], newPet["gender"], newPet["pictureUrl"]))
      con.commit()
  except Exception as e:
    return {"msg": "Unable to add {}: {}".format(newPet["name"], e)}, 400
  finally:
    print("\n")

  return {"msg": "New pet {} added".format(newPet["name"])}, 200

@petsController.route('/getPet', methods=['GET'])
def getPet():
  try:
    data = request.get_json()

    with con.cursor() as cur:
      sql = "SELECT * FROM pets where id = %s"
      cur.execute(sql, data["id"])
      dbPet = cur.fetchone()

      out = {}
      out["msg"] = "{} found".format(dbPet["name"])
      out["pet"] = dbPet
      return out, 200
  except Exception as e:
    return {"msg": "{} was not found: {}".format(data["id"], e)}
  finally:
    print("\n")

""" Find all pets by user """
@petsController.route('/getPets', methods=['GET'])
def getPets():
  try:
    data = request.get_json()

    pets = data["ids"]
    if len(pets) <= 1:
      return {"msg": "You need to use /getPet for this request"}, 400

    sql = "SELECT * FROM pets WHERE id IN ("
    for pid in pets:
        sql += "{}, ".format(pid)
    sql = sql[0:-2] + ")"

    with con.cursor() as cur:
      cur.execute(sql)
      rows = cur.fetchmany(size=len(pets))
  except:
    return {"msg": "{} was not found: {}".format(pet, sys.exec_info()[0])}
  finally:
    print("\n")

  dbPets = []
  for row in rows:
    dbPets.append(row)

  out = {}
  out["msg"] = "pets found"
  out["pets"] = dbPets
  print(str(out))
  return out, 200

@petsController.route('/edit', methods=["PUT"])
def editPet():
  try:
    data = request.get_json()

    newPetData = {}
    newPetData["owner_id"] = data['owner_id']
    newPetData["catOrDog"] = data['catOrDog']
    newPetData["name"] = data['name']
    newPetData["birthday"] = data['birthday']
    newPetData["gender"] = data['gender']
    newPetData["pictureUrl"] = data['pictureUrl']

    with con.cursor() as cur:
      sql = "SELECT * FROM pets Where id = %s"
      cur.execute(sql, data["id"])
      dbPet = cur.fetchone()

      if dbPet == None:
        return {"msg": "{} was not found :(".format(newPetData["name"])}

      sql = "UPDATE pets SET owner_id=%s, catOrDog=%s, name=%s, birthday=%s, gender=%s, pictureUrl=%s where id=%s"
      cur.execute(sql, (newPetData["owner_id"], newPetData["catOrDog"], newPetData["name"], newPetData["birthday"], newPetData["gender"], newPetData["pictureUrl"], data["id"]))

      con.commit()
      return {"msg": "Updated {}".format(newPetData["name"]), "newPetData": newPetData}, 200
  except:
    print(sys.exc_info()[0])
    return {"msg": "unable to update {}".format(newPetData["name"])}
  finally:
    print("\n")

@petsController.route('/delete', methods=["DELETE"])
def deletePet():
  try:
    data = request.get_json()

    with con.cursor() as cur:
      sql = "SELECT * FROM pets Where id = %s"
      cur.execute(sql, data["id"])
      dbPet = cur.fetchone()

      if dbPet == None:
        return {"msg": "{} was not found :(".format(data["name"])}

      sql = "DELETE FROM pets WHERE id=%s"
      cur.execute(sql, data["id"])
      con.commit()
      return {"msg": "{} was deleted :(".format(dbPet["name"])}
  except:
    return {"msg": "unable to delete pet: {}".format(sys.exec_info()[0])}
  finally:
    print("\n")

@petsController.route('/test', methods=['GET'])
def test():
  return "PetsContoller works"