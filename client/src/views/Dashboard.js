import React, { Component } from 'react'

import '../assets/css/Dashboard.css';

import Sidebar from '../components/Dashboard/Sidebar.js';
import Feed from '../components/Dashboard/Feed.js';
import RightSide from '../components/Dashboard/RightSide.js';

export default class Dashboard extends Component {
  render() {
    return (
      <div id="dashboardContainer">
        <Sidebar/>    
        <Feed/>
        <RightSide/>
      </div>
    )
  }
}
