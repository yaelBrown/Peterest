import { url } from '../Api/api'
import axios from 'axios'

export function testApi() {
  return axios.get(url)
}

export function testDB() {
  return axios.get(url + "/test")
}