from flask import Flask, request, Blueprint, jsonify

import json
import sys

feedController = Blueprint('feedController', __name__)

masterFeed = []

def prefetchMasterFeed():
  pass

@feedController.route('/', methods=['GET'])
def getFeed():
  pass
