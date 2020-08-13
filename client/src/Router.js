import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Login from "./views/Login.js";
import Register from "./views/Register.js";
import Forgot from "./views/Forgot.js";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" exact component={Login}/>
        <Route exact strict path="/login" exact component={Login}/>
        <Route exact strict path="/register" exact component={Register}/>
        <Route exact strict path="/forgot" exact component={Forgot}/>
      </Switch>
    )
  }
}
