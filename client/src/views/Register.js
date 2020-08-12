import React from 'react';
import '../assets/css/Register.css';

export default function Register() {
  return (
    <div>
      <div id="registerContainer">
        <div id="registerForm">
          <form>
            <h3>Register</h3>
            <p>Join our community of <del>pug</del> pet lovers! =)</p>
            <div className="registerFormRows">
              <h3>Name</h3>
              <input id="name" type="text"></input>
            </div>
            <div className="registerFormRows">
              <h3>Username</h3>
              <input id="username" type="text"></input>
            </div>
            <div className="registerFormRows">
              <h3>Password</h3>
              <input id="password" type="password"></input>
            </div>
            <div className="registerFormRows">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}