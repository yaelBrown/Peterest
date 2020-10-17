import React from 'react';

import '../assets/css/Login.css';
import PeterestLogo from '../components/PeterestLogo';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForget = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    alert("Login button was pressed");
    window.location.href = "/dashboard";
    event.preventDefault();
  }

  handleRegister = event => {
    alert("Register button was pressed");
    window.location.href = "/register";
    event.preventDefault();
  }

  handleForget = event => {
    alert("Forget was pressed");
    window.location.href = "/forget";
    event.preventDefault();
  }
  
  render() {
    return (
      <div id="loginContainer">
        <div id="loginRight">
          <div id="loginForm">
            <PeterestLogo/>
            <h3>A place for pets</h3>
            <p>Login :)</p>
              <form>
                <table id="loginTable">
                  <tr>
                    <td><h3>Username</h3></td>
                    <td><input id="username" type="text" class="loginTableInputField"></input></td>
                  </tr>
                  <tr>
                    <td><h3>Password</h3></td>  
                    <td><input id="password" type="password" class="loginTableInputField"></input></td>
                  </tr>
                </table>
                <div className="loginFormRows">
                  <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
                  <button onClick={this.handleRegister}>Register</button>
                </div>
                <div className="loginFormRows">
                  <a href="/forget">Forgot your account?</a>
                </div>
              </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;