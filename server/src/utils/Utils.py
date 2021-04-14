from bson import ObjectId

class Utils: 
  def objectIdToDict(self, oid):
    out = dict()
    for key in oid:
      if instance(oid[key], ObjectId):
        out[key] = oid[key]
    return out