import React from 'react';
import '../assets/css/Register.css';
import PeterestLogo from '../PeterestLogo';

export default function Register() {
  return (
    <div>
      <div id="registerContainer">
        <div id="registerForm">
          <form>
            <PeterestLogo id="registerPeterestLogo" />
            <h3>Register</h3>
            <p>Join our community of <del>pug</del> pet lovers! =)</p>
            <table id="registerTable">
              <tr>
                <td><h3>Name</h3></td>
                <td><input id="name" type="text" required></input></td>
              </tr>
              <tr>
                <td><h3>Email</h3></td>
                <td><input id="email" type="email" required></input></td>
              </tr>
              <tr>
                <td><h3>Username</h3></td>
                <td><input id="username" type="text" required></input></td>
              </tr>
              <tr>
                <td><h3>Password</h3></td>
                <td><input id="password" type="password" required></input></td>
              </tr>
            </table>
            <div className="registerFormRows">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}