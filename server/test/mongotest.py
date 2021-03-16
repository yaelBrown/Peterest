from pymongo import MongoClient 
from bson import ObjectId

client = MongoClient("mongodb+srv://pet_owner:pets@peterest-db.fkffd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.get_database('Peterest_db')

options = db.options

testOps = {
  "name": "Yael",
  "age": 43
}

#insert
# results = options.insert_one(testOps)
# print(results.inserted_id)

# Find
results = options.find_one({"_id": ObjectId("605033ae29ada2aeb8822a2d")})
print(results)
