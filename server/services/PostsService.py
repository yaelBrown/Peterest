import json

from config.config_mongo import db

class PostsService: 
  def createPosts(self):
    try: 
      newPosts = db.posts.insert_one({"data": []})
      return str(newPosts.inserted_id)
    except Exception as e:
      print(e)
      return False

  def getPosts(self, postsId):
    try:
      resultPosts = db.posts.find_one({"_id": ObjectId(postsId)})
      return resultPosts
    except Exception as e:
      print(e)
      return False