import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Index from "./views/index.js";
import Login from "./views/Login.js";
import Register from "./views/Register.js";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" exact component={Index}/>
        <Route exact strict path="/login" exact component={Login}/>
        <Route exact strict path="/register" exact component={Register}/>
      </Switch>
    )
  }
}
