from config.config_mongo import db
from bson import ObjectId

class OptionService: 

  def createOptions(self):
    try: 
      newOptions = db.options.insert_one({})
      return str(newOptions.inserted_id)
    except Exception as e: 
      print(e)
      return False

  def getOptions(self, userId):
    try:
      resultOptions = db.options.find_one({"_id": ObjectId(userId)})
      return resultOptions
    except Exception as e: 
      print(e)
      return False