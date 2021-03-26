import React, { Component } from 'react'

import SidebarLeftLogin from './SidebarLeftLogin.js'
import SidebarLeftProfilePicture from './SidebarLeftProfilePicture.js'

import '../../Assets/css/dashboardSidebarLeft.css'

export default class SidebarLeft extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       sidebarItems: [
        { name: "Feed", icon: "gg-feed"},
        { name: "Messenger", icon: "ant-design:message-outlined"},
        { name: "Friends", icon: "whh-friends"},
        { name: "Albums", icon: "wpf-stack-of-photos"},
        { name: "Adopt", icon: "cil-animal"},
        { name: "Blog", icon: "dashicons-welcome-write-blog"},
        { name: "Market", icon: "map-grocery-or-supermarket"},
        { name: "Jobs", icon: "bytesize-work"},
        { name: "Settings", icon: "clarity:settings-line" },
      ]
    }
  }
  
  render() {
    const renderSidebarLeftTop = () => {
      if (this.props.userLoggedIn) {
        return <div onClick={() => this.props.data.changeDisplay("profile")} id="sidebarLeftProfilePictureIcon"><SidebarLeftProfilePicture/></div>
      } else {
        return <SidebarLeftLogin/>
      }
    }

    const renderMenuItems = () => {
      let out = []
      this.state.sidebarItems.map((e) => {
        return out.push(
          <tr key={e.name}>
            <td>
              <span className="sidebarItemIcon">i</span> 
            </td>
            <td>
              <span 
                className="sidebarItemName"
                onClick={() => this.props.data.changeDisplay(e.name.charAt(0).toLowerCase() + e.name.substring(1))}>{e.name}</span>
            </td>
          </tr>
        )
      })
      return out
    }

    return (
      <div id="sidebarLeft">
        <div id="sidebarLeftTop">
          { renderSidebarLeftTop() }
        </div>
        <div id="sidebarLeftBottom">
          <table id="sidebarLeftBottomTable">
            <tbody>
              { renderMenuItems() }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}