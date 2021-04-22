import axios from 'axios'
import API_URL from '../Api/api'
export default class RegisterService {
  constructor() { }
  
  registerAccount = (n, p, e, l) => { 
    axios.post(API_URL, {
      name: n,
      password: p,
      email: e,
      location: l
    }).then((res) => {
      console.log(res)
      return true
    }).catch((err) => {
      console.error(err)
      return false
    })
  }
}