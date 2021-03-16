import API_URL from '../Api/api.js'
import axios from 'axios'

export function testApi() {
  return axios.get(API_URL)
}

export function testDB() {
  return axios.get(API_URL + "/test")
}