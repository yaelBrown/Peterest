import json
import bcrypt
import jwt
import datetime
import calendar
import time

from config.config_mongo import db

class UserService: 

  def loginUser(self, email, password, remember):
    try:
      requestedUser = db.users.find_one({"email": email})
      if requestedUser is None:
        return False
      if bcrypt.checkpw(bytes(password, "utf-8"), requestedUser["password"]):
        if remember: 
          tokenData = {
            "email": email, 
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=365)
          }
        else:   
          tokenData = {
            "email": email, 
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
          }
        secret = "ilovepets"
        token = jwt.encode(tokenData, secret)
        del requestedUser["_id"]
        del requestedUser["password"]
        db.users.update_one({"email": email}, {"$set": {'dateLastLogin': calendar.timegm(time.gmtime())}})
        return {"token": token.decode("UTF-8"), "user": requestedUser}
      else: 
        return False
    except Exception as e: 
      print(e)
      return False


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


  