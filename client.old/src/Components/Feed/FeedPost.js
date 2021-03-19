import React, { Component } from 'react'

import Comments from './FeedComments.js'
import StatsBar from './FeedStatsBar.js'

export default class FeedPost extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       type: "text"
    }
  }
  
  
  render() {
    return (
      <div>
        <h1>Post</h1>
        <StatsBar/>
        <Comments/>
      </div>
    )
  }
}
