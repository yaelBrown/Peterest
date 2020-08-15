import React from 'react';

import '../assets/css/Login.css';
import PeterestLogo from '../components/PeterestLogo';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    alert("Alert button was pressed");
    window.location.href = "/dashboard";
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <div id="loginContainer">
          <div id="loginLeft">
            <img id="leftBgImage" src={require('../assets/img/lilgriffybob.jpg')} alt=""/>
          </div>
          <div id="loginRight">
            <div id="loginForm">
              <PeterestLogo/>
              <h3>A place for pets</h3>
                <form>
                  <p>Login :)</p>
                  <div className="loginFormRows">
                    <h3>Username</h3>
                    <input id="username" type="text"></input>
                  </div>
                  <div className="loginFormRows">
                    <h3>Password</h3>
                    <input id="password" type="password"></input>  
                  </div>
                  <div className="loginFormRows">
                    <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
                    <button type="">Register</button>
                  </div>
                  <div className="loginFormRows">
                    <a href="/forgot">Forgot your account?</a>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;