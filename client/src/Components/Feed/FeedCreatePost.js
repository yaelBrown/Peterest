import React, { Component } from 'react'
import Icon from "@iconify/react"
import photoIcon from '@iconify-icons/bytesize/photo'
import videoIcon from '@iconify-icons/bytesize/video'
import sendIcon from '@iconify-icons/grommet-icons/send'

import FeedProfilePicturePlaceholder from './FeedProfilePicturePlaceholder.js'

import '../../Assets/css/feedCreatePost.css'

export default class FeedCreatePost extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      type: "text",
      author: "",
      dateTime: Date.now()
    }
  }
  
  render() {
    const fcpIconSizes = "1.5rem"
    return (
      <div id="fcPost">
        <div className="feedDivLeft feedDivs">
          <FeedProfilePicturePlaceholder/>
        </div>
        <div className="feedDivRight feedDivs">
          <textarea placeholder="What do you want to share?" className="fcPostInput"/>
          <Icon icon={photoIcon} width={fcpIconSizes} height={fcpIconSizes} className="fcpIcons"/>
          <Icon icon={videoIcon} width={fcpIconSizes} height={fcpIconSizes} className="fcpIcons"/>
          <Icon icon={sendIcon} width={fcpIconSizes} height={fcpIconSizes} className="fcpIcons"/>
        </div>
      </div>
    )
  }
}
