import React from 'react'

import '../assets/css/Forgot.css';
import PeterestLogo from '../PeterestLogo';

export default function Forgot() {
  return (
    <div>
      <div id="forgotContainer">
        <form id="forgotForm">
          <PeterestLogo/>
          <p>Oops! forgot your account?</p>
          <div id="forgetRow">
            <h3>Enter your email </h3>
            <input id="forgetEmail" type="email"></input>
            <button type="submit">Submit</button>
            <br></br>
            <a href="/login">I remember my password now!</a>
          </div>
        </form>
    </div>
  </div>  
  )
}
