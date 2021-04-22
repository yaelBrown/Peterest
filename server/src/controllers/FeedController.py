from flask import Flask, request, Blueprint, jsonify

import json
import sys

import services.PostsService as postsService
import services.UserService as userService

feedController = Blueprint('feedController', __name__)

@feedController.route('/', methods=['GET'])
def getFeed():
  """
  Gets all entries in the feed
  q = 0 - All of posts in db
  """
  post = postsService.PostsService()
  u = userService.UserService()

  res = [p for p in post.getPosts()]
  usersFromFeed = set()
  
  for p in res: 
    usersFromFeed.add(p["authorId"])
  
  users = u.getUsers(usersFromFeed)
  for u in users: 
    u["_id"] = str(u["_id"])
  
  for post in res:
    post["_id"] = str(post["_id"])
  
  return {"data": res, "users": users}