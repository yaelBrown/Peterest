import React, { Component } from 'react'
import FeedProfilePicturePlaceholder from './FeedProfilePicturePlaceholder.js'
import ExamplePhoto1 from '../../Assets/img/examplePhoto1.png'

import '../../Assets/css/feedPost.css'

export default class FeedPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  

  render() {
    console.log(this.props)
    
    const displayContent = () => {
      switch(this.props.data.type) {
        case "text":
          return <span className="feedPostContentText">{this.props.data.comment}</span>
        case "photo":
          return (
            <span className="feedPostContentPhoto">
              <img src={ExamplePhoto1} className="feedPostContentPictureElement" alt="feed picture"/>
            </span>)
        case "video":
          return <span className="feedPostContentText">Videos coming soon</span>
        default: 
          return <span className="feedPostContentText">Error loading content</span>
      }
    }

    return (
      <div className="fpost">
        
        
        <div className="feedDivs feedDivLeft">
          <FeedProfilePicturePlaceholder/>
        </div>
        <div className="feedDivs feedDivRight">
          <div className="feedPostContent">
            {displayContent()}
          </div>
        </div>
      </div>
    )
  }
}
