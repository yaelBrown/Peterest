import { url } from '../Api/api'
import axios from 'axios'


export function testApi() {
    return axios.get(url)
  }
