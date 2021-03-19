from flask import Flask, request, Blueprint, jsonify
from flask_bcrypt import Bcrypt

import json
import jwt
import calendar
import time

import services.UserService as userService
import services.OptionService as optionSerice
import services.PetsService as petsService
import services.PostsService as postsService
import services.PhotosService as photoService
import services.FollowersService as followerService
import services.NotificationService as notificationService

u = userService.UserService()
o = optionSerice.OptionService()
pet = petsService.PetsService()
post = postsService.PostsService()
photo = photoService.PhotoService()
f = followerService.FollowerService()
n = notificationService.NotificationService()

userController = Blueprint('userController', __name__)

_rounds = 12
cache = {}

@userController.route('/login', methods=['POST'])
def login():
  data = request.get_json()
  email = data["email"]
  password = data["password"]
  rememberMe = data["rememberMe"]

  out = u.loginUser(email, password, rememberMe)

  if out is False: 
    return {"msg": "user not found"}, 200
  else: 
    return out, 200


@userController.route('/register', methods=['POST'])
def registerUser():
  data = request.get_json()
  
  if data == None: 
    return {"msg": "Empty Request"}, 422

  if "isAdmin" not in data.keys():
    data["isAdmin"] = False

  newUser = {}
  newUser["password"] = Bcrypt.generate_password_hash(None, data["password"], _rounds)
  newUser["email"] = data["email"]
  newUser["name"] = data["name"]
  newUser["location"] = data["location"]
  newUser["dateCreated"] = calendar.timegm(time.gmtime())
  newUser["dateLastLogin"] = int()
  newUser["optionsId"] = o.createOptions()
  newUser["pets"] = pet.createPets()
  newUser["notifications"] = n.createNotifications()
  newUser["photos"] = photo.createPhotos()
  newUser["followers"] = f.createFollowers()
  newUser["posts"] = post.createPosts()

  nU = u.registerUser(newUser)

  if nU == False:
    return {"msg": "Unable to create new user"}, 422
  else: 
    cache[nU] = newUser
    del newUser["password"]
    newUser["_id"] = str(newUser["_id"])
    return {"msg": "successfully registered user", "data": newUser}, 200 

@userController.route('/edit', methods=["PUT"])
def edit():
  data = request.get_json()
  print(data)
  if data == None:
    return {"msg": "Invalid User Request"}, 422

  eU = u.edit(data)

  return {"msg": f"edited {data['username']}", "data": eU}, 200

@userController.route('/delete', methods=["DELETE"])
def delete():
  data = request.get_json()

  dU = u.delete(data)

  if dU == False: 
    return {"msg": f"Unable to delete {data['id']}"}, 422 
  else:
    return {"msg": f"deleted user: {data['id']}"}, 200