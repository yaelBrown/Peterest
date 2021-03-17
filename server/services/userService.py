import json

from config.config_mongo import db
class UserService: 
  # userDb = db.users

  def loginUser(self):
    pass

  def registerUser(self, newUser): 
    try:
      uid = db.users.insert_one(newUser)

      if uid is None: 
        raise Exception("Unable to create user")
      else: 
        return uid.inserted_id
    except Exception as e: 
      print(e)
      return False

  def editUser(self, u):
    pass

  def deleteUser(self, u):
    pass