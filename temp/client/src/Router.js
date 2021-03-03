import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Test from "./Views/Test.js";
import Home from "./Views/Home.js";
import Index2 from "./Views/Index2.js";
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
        <Route path="/test" exact component={Test}/>
        <Route path="/index2" exact component={Index2}/>
        {/* <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/friends" exact component={Friends}/>
        <Route path="/settings" exact component={Settings}/>
        <Route path="/profile" exact component={Profile}/>
        <Route path="/albums" exact component={Albums}/> */}
      </Switch>
    )
  }
}
