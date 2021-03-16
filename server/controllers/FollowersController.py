"""
Used to modify followers
"""
from flask import Flask, request, Blueprint, jsonify

import services.FollowersService as FollowersService
f = FollowerService.followerService()

followerController = Blueprint('followerController', __name__)

@followerController.route('/followers', methods=['GET'])
def getFollowers():
  # this method should be able to return a number of followers or list of followers
  pass

@followerController.route('/followers', methods=['POST'])
def createFollowers():
  # used to create a default follower list
  pass

@followerController.route('/followers', methods=['PUT'])
def editFollowers():
  # used to modify the follower list
  pass

@followerController.route('/followers', methods=['DELETE'])
def deleteFollowers():
  pass