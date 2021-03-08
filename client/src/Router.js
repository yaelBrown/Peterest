import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./Views/Home.js";
import Dashboard from  "./Views/Dashboard.js";
// Following components are used for development
import Test from "./Views/Test.js";
import Index2 from "./Views/Index2.js";
import Loading from "./ReusableComponents/Loading"
// Normal components
import About from "./Views/About.js";
import Blog from "./Views/Blog.js";
import Contact from "./Views/Contact.js";
import Business from "./Views/Business.js";
import Market from "./Views/Market.js";
import Jobs from "./Views/Jobs.js";

import Error from "./Views/Error.js";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/dashboard" exact component={Dashboard}/>

        <Route path="/test" exact component={Test}/>
        <Route path="/index2" exact component={Index2}/>
        <Route path="/loading" exact component={Loading}/>

        <Route path="/about" exact component={About}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/business" exact component={Business}/>
        <Route path="/market" exact component={Market}/>
        <Route path="/jobs" exact component={Jobs}/>

        <Route component={Error}/>
      </Switch>
    )
  }
}
