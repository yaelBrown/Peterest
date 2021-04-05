import sys
import requests
import datetime
import time
import json
from pymongo import MongoClient

# 1. vars 
MONGO_URI = "mongodb://mongoadmin:secret@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false"
API_URI = "http://localhost:5000/api"
DOG_API = "https://api.thedogapi.com/v1"
CAT_API = "https://api.thecatapi.com/v1"
USER_API = "https://randomuser.me/api"
TASKS = []
NUM_USERS = 0
NUM_PETS = 0

# 2. caches
userCache = []

# 3. api methods
def getOneHuman():
  return requests.get(USER_API).json()['results'][0]

def getOneDog(): 
  return requests.get(DOG_API + '/images/search').json()[0]

def getOneCat():
  return requests.get(CAT_API + '/images/search').json()[0]

def getCaption():
  return requests.get("https://baconipsum.com/api/?type=all-meat&sentences=1").json()[0]

def addRequestedHumans(numU):
  msg = "Creating " + numU + " users"
  l(msg)
  
  n = int(numU)
  cnt = 1
  while n != 0:
    l("generating user: " + str(cnt))
    
    temp = getOneHuman()

    u = {
      "email": temp['email'],
      "name": temp['name']['first'] + " " + temp['name']['last'],
      "location": temp['location']['city'] + ", " + temp['location']['country'],
      "password": temp['login']['password'],
      "profilePic": temp['picture']['medium'],
      "isAdmin": False
    }

    if temp['gender'] == "male":
      u['gender'] = True
    else: 
      u['gender'] = False

    l(str(u))
    res = requests.post(API_URI + "/users/register", json=u)
    if res.status_code == 200:
      msg = "Successfully Created user: " + str(cnt)  
      l(msg)
      userToCache(u)
    else: 
      l(str(res.status_code))
      msg = "Error Creating user: " + str(cnt)
      l(msg)
      # l(json.dumps(json.loads(res.text), sort_keys=True, indent=2, separators=(",", ": ")))
    
    cnt = cnt + 1
    n = n - 1

  l("Finished creating users", True)

def addRequestedPets(numP):
  l("Adding " + numP + " pets!")


# 4. cache methods
def userToCache(user):
  return userCache.append(user)


# 5. db methods 
def saveUser(): 
  pass

def savePet():
  pass

def getUsers():
  pass

def getPets():
  pass

def checkForUsers():
  pass


# 6. simulation methods
def l(s,p=False):
  ts = datetime.datetime.now().strftime("[ %H:%M:%S %m.%d.%y ]")
  if p == False:
    print(ts + " : " + s)
  else: 
    print(ts + " : ")
    print(ts + " : " + s)
    print(ts + " : ")

def sim():
  l("Running activity simulator", True)
  
  cnt = 1
  while True: 
    l("Post by user # " + str(cnt))
    cnt += 1
    time.sleep(3)


# 7. arg parser
def argParser():
  args = sys.argv  
  del args[0]

  if len(args) == 0:
    l("No arguments detected... Running sim")
    sim()

  else: 
    for t in args:
      temp = t.split("=")
      TASKS.append(temp)

      if temp[0] == "--users":
        l("Add Users: " + temp[1])
        addRequestedHumans(temp[1])

      if temp[0] == "--pets":
        l("Add Pets: " + temp[1])
        addRequestedPets(temp[1])

      if temp[0] == "--sim":
        l("Running Sim")
        sim()


# 8. main
def main():
  l("Peterest Data Generator", True)
  l("Determining arguments")
  argParser()


if "__main__" == __name__: 
  main()

