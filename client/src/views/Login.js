import React from 'react';
import '../assets/css/Login.css';
import PeterestLogo from '../components/PeterestLogo';

export default function Login() {
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
                  <button type="submit">Submit</button>
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
