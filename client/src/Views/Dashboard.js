import React, { Component } from 'react'

import Loading from '../ReusableComponents/Loading.js'
import SidebarLeft from '../Components/Dashboard/SidebarLeft.js'
import SidebarRight from '../Components/Dashboard/SidebarRight.js'
import SearchBar from '../Components/Search/Searchbar.js'
import Feed from '../Components/Feed/Feed.js'
import Profile from '../Components/Profile/Profile.js'
import ProfileEdit from '../Components/Profile/ProfileEdit.js'
import ProfileSettings from '../Components/Profile/ProfileSettings.js'
import Adopt from '../Components/Adopt/Adopt.js'
import Albums from '../Components/Albums/Albums.js'
import Business from '../Components/Business/Business.js'
import Friends from '../Components/Friends/Friends.js'
import Jobs from '../Components/Jobs/Jobs.js'
import Market from '../Components/Market/Market.js'
export default class Dashboard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: true,
      display: "feed"
    }
  }
  
  changeDisplay(v) {
    this.setState({display: v})
  }

  displayContent() {
    switch (this.state.display) {
      case "feed":
        return <Feed data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "profile":
        return <Profile data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "profileEdit":
        return <ProfileEdit data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "profileSettings":
        return <ProfileSettings data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "adopt":
        return <Adopt data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "albums":
        return <Albums data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "business":
        return <Business data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "Friends":
        return <Friends data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "Jobs":
        return <Jobs data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      case "Market":
        return <Market data={{changeDisplay: this.changeDisplay.bind(this)}}/>
      default: 
        return <Feed data={{changeDisplay: this.changeDisplay.bind(this)}}/>
    }
  }

  componentDidMount() {
    // Pull logged in user information from redux and start passing it to components
    this.setState({loading: false})
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Loading/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Dashboard</h1>
          {/* <SearchBar data={{changeDisplay: this.changeDisplay.bind(this)}}/> */}
          <SidebarLeft data={{changeDisplay: this.changeDisplay.bind(this)}}/>
          {/* <SidebarRight data={{changeDisplay: this.changeDisplay.bind(this)}}/> */}
          {this.displayContent()}
        </div>
      )
    }
  }
}
