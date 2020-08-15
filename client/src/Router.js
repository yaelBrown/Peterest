import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Login from "./views/Login.js";
import Register from "./views/Register.js";
import Forgot from "./views/Forgot.js";
import Dashboard from "./views/Dashboard.js";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/forgot" exact component={Forgot}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </Switch>
    )
  }
}
