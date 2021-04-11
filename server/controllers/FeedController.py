from flask import Flask, request, Blueprint, jsonify

import json
import sys

import services.PostsService as postsService

feedController = Blueprint('feedController', __name__)

@feedController.route('/', methods=['GET'])
def getFeed():
  post = postsService.PostsService()
  res = [p for p in post.getPosts()]
  for post in res:
    post["_id"] = str(post["_id"])
  return {"data": res}