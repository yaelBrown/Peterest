import React, { Component } from 'react'

import LoginService from '../../Services/LoginService.js'

import '../../Assets/css/loginRegisterForgetForms.css'


export default class LoginWindow extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: "",
       password: "",
       rememberMe: false,
    }
  }
  
  clearPasswordWithinForm = () => {
    this.state({password: ""})
  }

  handleChange = (property, val) => {
    val = val.trim()
    this.state({[property]: val})
  }

  handleLogin = () => {
    if (!this.state.username || !this.state.password) return
    
    this.setState({loading: true})
    let jwtToken = false
    
    jwtToken = LoginService.login(this.state.username, this.state.password, this.state.rememberMe)
    
    if (jwtToken) {
      localStorage.setItem("token", jwtToken)
      this.props.history.push("/dashboard")
    } else { 
      this.clearPasswordWithinForm()
      console.error("Invalid Login")
    }
  }

  render() {
    return (
      <div className="loginForm">
        <h2>Login</h2>
        <table>
          <tr>
            <td><h3>Email</h3></td>
            <td><input type="text" placeholder="email@address.com"></input></td>
          </tr>
          <tr>
            <td><h3>Password</h3></td>
            <td><input type="password" placeholder="password"></input></td>
          </tr>
          <tr>
            <td><input type="checkbox"></input> <small>Remember me?</small></td>
            <td><a onClick={() => alert("forgot link was clicked")} style={{cursor: "pointer"}}><small>Forgot Password</small></a></td>
          </tr>
        </table>
        <div className="loginButtonRow">
          <button onClick={() => alert("login was clicked")}>Login</button><br/>
          <button onClick={() => alert("register was clicked")}>Register</button>
        </div>
      </div>
    )
  }
}
