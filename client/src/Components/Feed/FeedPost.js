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
    const displayContent = () => {
      switch(this.props.data.postType) {
        case "text":
          return <span className="feedPostContentText">{this.props.data.caption}</span>
        case "photo":
          return (
            <span className="feedPostContentPhoto">
              <img src={this.props.data.contentSrc} className="feedPostContentPictureElement" alt="feed picture"/>
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
          {(this.props.data.profilePic === undefined) ? <FeedProfilePicturePlaceholder/> : <img src={this.props.data.profilePic} className="feedPostProfilePic" alt="Picture picture"/>}
          <br/>
          <p>{this.props.data.name}</p>
          <p>{this.props.data.location}</p>
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
