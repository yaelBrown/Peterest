import axios from 'axios'
import API_URL from '../Api/api.js'
import jwt_decode from "jwt-decode";

// Login method
// Check if user is logged in

class LoginService {
  // constructor(props) {}

  isLoggedIn = () => {
    let token = localStorage.getItem("token")
    if (token) {
      if (jwt_decode(token).exp < Date.now() / 1000) {
        localStorage.clear()
        return false
      }
      return true
    } else {
      return false
    }
  }

  login = (user, pass, remember) => {
    axios.post(API_URL, {
      username: user,
      password: pass,
      rememberMe: remember
    }).then((res) => {
      if (res) {
        // Use reducer to add res.data to redux
        console.log(res)
        return localStorage.setItem("token", res.token)
      } else {
        console.error("unable to login")
        return false
      }
    }).catch((err) => {
      console.error(err)
      return false
    })
  }

  logout = () => {
    return true
  }
}

export default new LoginService();