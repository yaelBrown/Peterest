import axios from 'axios'
import API_URL from '../Api/api.js'
import jwt_decode from "jwt-decode";

// Check if user is logged in

const prefix = "users/"
class LoginService {
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
  
  login = async (email, password, rememberMe) => {
    let config = {
      method: 'post',
      url: API_URL + prefix + "login",
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      data: JSON.stringify({
        email,
        password,
        rememberMe
      })
    };
    await axios(config)
    .then((response) => {
      if (response) {
        // Use reducer to add res.data to redux
        localStorage.setItem("token", response.data.token)
        console.log(response)
        return response
      } else {
        console.error("unable to login")
        return false
      }
    })
    .catch(function (error) {
      console.error(error)
      return false
    });
  }

  logout = () => {
    return true
  }
}

export default new LoginService();