import React, { Component } from 'react'
import LoadingCat from '../../Assets/img/LoadingCat.gif'

import '../../Assets/css/feed.css'
export default class Feed extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: true,
      masterFeed: []
    }
  }
  
  render() {
    {
      if (this.state.loading) {
        return (
          <div id="feedLoader" className="dashboardContentPanels">
            <img src={LoadingCat} alt="loading cat" id="feedCat"/>
          </div>
        )
      } else {
        return (
          <div className="dashboardContentPanels">
            <h2>Feed</h2>
          </div>
        )
      }
    }
  }
}
