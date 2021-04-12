import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingCat from '../../Assets/img/LoadingCat.gif'
import FeedCreatePost from '../Feed/FeedCreatePost.js'
import FeedPost from '../Feed/FeedPost.js'

import FeedService from '../../Services/FeedService.js'
import UserService from '../../Services/UserService.js'

import '../../Assets/css/feed.css'
import { addUsersToCache, addUserToCache, getUsersFromCache } from '../../Redux/Users/userActions'

class Feed extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      adFrequency: 8,
      masterFeed: [],
      userCache: {}
    }
  }
  
  async componentDidMount() {
    let res = await FeedService.getFeed()
      .then(data => {
        // console.log(data.data)
        // console.log(data.users)
        if (data.data) {
          let userObj = {}
          data.users.map((e) => {
            userObj[e._id] = e
          })
          let newState = {
            masterFeed: data.data,
            userCache: userObj
          }
          this.setState(newState)
        }
      })
  }

  async getUsersFromCacheHelper(users) {
    console.log(users)
    return await UserService.getUsers(users)
  }

  generateFeed() {
    if (this.state.masterFeed === undefined) {
      console.log("state is undefined")
      return
    }
    let visibleFeed = []
    if (this.state.masterFeed.length === 0 || this.state.masterFeed.length === undefined) {
      return visibleFeed;
    }
    this.state.masterFeed.map((e, i) => {
      if (i % this.state.adFrequency == 0) visibleFeed.push(<FeedPost type="ad" data={e} />)
      e.name = this.state.userCache[e.authorId].name
      e.location = this.state.userCache[e.authorId].location
      e.profilePic = this.state.userCache[e.authorId].profilePic
      switch (e.postType) {
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
            <hr/>
            { this.generateFeed() }
            {/* <FeedPost data={this.examplePostText()}/>
            <FeedPost data={this.examplePostPhoto()}/>
            <FeedPost data={this.examplePostPhoto()}/>
            <FeedPost data={this.examplePostVideo()}/> */}
          </div>
        )
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    userCache: state.userCache
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsersFromCache: () => dispatch(getUsersFromCache()),
    addUserToCache: (userData) => dispatch(addUserToCache()),
    addUsersToCache: (usersData) => dispatch(addUsersToCache())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)