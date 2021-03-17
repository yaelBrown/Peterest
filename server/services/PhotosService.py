from config.config_mongo import db
from bson import ObjectId

class PhotoService: 

  def createPhotos(self):
    try:
      newPhotos = db.photos.insert_one({"data": []})
      return str(newPhotos.inserted_id)
    except Exception as e:
      print(e)
      return False

  def createPhoto(self): 
    pass

  def getPhoto(self): 
    pass

  def getPhotos(self): 
    try:
      resultPhotos = photos.find_one({"_id": ObjectId(userId)})
      return resultPhotos
    except Exception as e:
      print(e)
      return False

  def editPhoto(self): 
    pass

  def deletePhoto(self):
    pass