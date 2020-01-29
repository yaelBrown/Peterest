'''
This file is  used to generate user information from multiple api's to populate database
'''
import requests
import json

# Creates a list of dogs pictures
def dogs(n):
  response = requests.get(f"https://dog.ceo/api/breeds/image/random/{n}")
  out = response.json()["message"]
  return out

# print(dogs(10))

# Creates a list of cats pictures
def cats(n):
  response = requests.get(f"https://api.thecatapi.com/v1/images/search?limit={n}")
  data = response.json()
  out = []
  for d in data:
    # print(d['url'])
    out.append(d['url'])
  return out

# print(cats(10))

# Creates a random user
def user():
  response = requests.get("https://randomuser.me/api/")

