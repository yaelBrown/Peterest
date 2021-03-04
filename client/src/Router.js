import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Test from "./Views/Test.js";
import Home from "./Views/Home.js";
import Index2 from "./Views/Index2.js";
export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/test" exact component={Test}/>
        <Route path="/index2" exact component={Index2}/>
      </Switch>
    )
  }
}
