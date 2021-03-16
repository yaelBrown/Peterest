from config.config_mongo import db
from bson import ObjectId

class OptionService: 
  NEW_OPTIONS = {}
  options = db.options

  def createOptions(self):
    temp = NEW_OPTIONS

    try: 
      newOptions = options.insert_one(temp)
      return newOptions.inserted_id
    except Exception as e: 
      print(e)
      return False

  def getOptions(self, userId):
    try:
      return resultOptions = options.find_one({"_id": ObjectId(userId)})
    except Exception as e: 
      print(e)
      return False