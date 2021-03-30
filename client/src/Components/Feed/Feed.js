import React, { Component } from 'react'
import LoadingCat from '../../Assets/img/LoadingCat.gif'
import FeedCreatePost from '../Feed/FeedCreatePost.js'
import FeedPost from '../Feed/FeedPost.js'

import '../../Assets/css/feed.css'

export default class Feed extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      adFrequency: 8,
      masterFeed: []
    }
  }
  
  generateFeed() {
    let visibleFeed = []
    this.state.masterFeed.map((e, i) => {
      if (i % this.state.adFrequency == 0) visibleFeed.push(<FeedPost type="ad" data={e} />)
      switch (e.type) {
        case "text":
          visibleFeed.push(<FeedPost type="text" data={e} />)
          break;
        case "photo":
          visibleFeed.push(<FeedPost type="photo" data={e} />)
          break;
        case "video":
          visibleFeed.push(<FeedPost type="video" data={e} />)
          break;
        default:
          break;
      }
    })
    return visibleFeed;
  }

  examplePostText() {
    return {
      postId: 123456789,
      type: "text",
      mediaSrc: "",
      author: "Yael Money",
      date: 1616991380210,
      petsMentioned: [],
      comment: "First post on the site"
    }
  }

  examplePostPhoto() {
    return {
      postId: 123456789,
      type: "photo",
      mediaSrc: "",
      author: "Yael Money",
      date: 1616991380210,
      petsMentioned: [],
      comment: "Really cute photo"
    }
  }

  examplePostVideo() {
    return {
      postId: 123456789,
      type: "video",
      mediaSrc: "",
      author: "Yael Money",
      date: 1616991380210,
      petsMentioned: [],
      comment: "A cute video"
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
            <FeedCreatePost/>
            { this.generateFeed() }
            <hr/>
            <FeedPost data={this.examplePostText()}/>
            <FeedPost data={this.examplePostPhoto()}/>
            <FeedPost data={this.examplePostPhoto()}/>
            <FeedPost data={this.examplePostVideo()}/>
          </div>
        )
      }
    }
  }
}