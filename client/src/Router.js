import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home.js";
// import Dashboard from "./views/Dashboard.js";
// import Friends from "./views/Friends.js";
// import Settings from "./views/Settings.js";
// import Profile from "./views/Profile.js";
// import Albums from "./views/Albums.js";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/friends" exact component={Friends}/>
        <Route path="/settings" exact component={Settings}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/albums" exact component={Albums}/> */}
      </Switch>
    )
  }
}
