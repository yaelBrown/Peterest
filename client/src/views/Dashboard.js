import React, { Component } from 'react'

import '../assets/css/Dashboard.css';

import Sidebar from '../components/Dashboard/Sidebar.js';
import Feed from '../components/Feed/Feed.js';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false, 
      usr_name: "Cookie Monster",
      usr_profilePic: "https://cdn11.bigcommerce.com/s-4jzdky/images/stencil/1000x1000/products/363/2118/Artzee-Designs-Sesame-Street-Collection-Canvas-Art-Cookie-Monster-Thumb__67510.1513866956.png?c=2",
      usr_city: "San Antonio",
      usr_state: "Texas"
    }
  }

  render() {
    return (
      <div id="dashboardContainer">
        <Sidebar 
          name={this.state.usr_name}
          profilePic={this.state.usr_profilePic}
          city={this.state.usr_city}
          state={this.state.usr_state}
        />    
        <Feed/>
      </div>
    )
  }
}
