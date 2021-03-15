import React, { Component } from 'react'

import DefaultUserIcon from '../../Assets/img/userPlaceholder.jpg'

export default class LeftSide extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sidebarLinks: {
        Feed: "gg-feed" ,
        Messenger: "ant-design:message-outlined",
        Friends: "whh-friends",
        Photos: "wpf-stack-of-photos",
        Adopt: "cil-animal",
        Blog: "dashicons-welcome-write-blog",
        Market: "map-grocery-or-supermarket",
        Jobs: "bytesize-work",
      },
      loggedInUser: null  // Check redux for current user or replace with null (suppose to be a object)
    }
  }

  render() {
    return (
      <div id="beehive-social-panel" className="beehive-social-panel js-hiraku-offcanvas-sidebar js-hiraku-offcanvas-sidebar-left" role="navigation">
        <div className="inner-panel ass-scrollbar mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" style={{position: 'relative', overflow: 'visible'}}>
          <div id="mCSB_1" className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" style={{maxHeight: 'none'}} tabIndex={0}>
            <div id="mCSB_1_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style={{position: 'relative', top: 0, left: 0}} dir="ltr">
              <div className="panel-block dark">
                <div className="my-card item">
                  <div className="info">
                    {/* Link to current user profile */}
                    <a href="/" className="profile-avatar">
                      <img src={DefaultUserIcon} alt="John Doe" className="avatar mCS_img_loaded" />
                    </a>
                    <div className="profile-name">
                      {/* Query username from store or use name "Pet Lover" */}
                      <a href="https://mythemestore.com/beehive-preview/members/user/" className="name ellipsis">Pet Lover</a>
                      {/* Query location */}
                      <small>City, State, Country</small>
                    </div>
                  </div>
                  <ul className="connections">
                    <li>
                      {/* Query Friend quantity from store and add conditional */}
                      <span className="count">0</span>
                      <p className="mute">Friends</p>
                    </li>
                    <li>
                      {/* Query pet quantity from store and add conditional */}
                      <span className="count">0</span>
                      <p className="mute">Pets</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-block light">
                <div className="panel-menu item">
                  <ul id="menu-dashboard-menu" className="navbar-panel">
                    {
                      Object.keys(this.state.sidebarLinks).map((e) => {
                        // Check redux for conditional if this is current page then add class "current_page_item"
                        return (<li className="menu-item menu-item-type-post_type menu-item-object-page"><a href="/"><span className="iconify" data-icon={this.state.sidebarLinks[e]} data-inline="false"></span><br/><span className="nav-link-text">{e}</span></a></li>)
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical" style={{display: 'none'}}>
            <div className="mCSB_draggerContainer">
              <div id="mCSB_1_dragger_vertical" className="mCSB_dragger" style={{position: 'absolute', minHeight: 50, height: 0, top: 0}}>
                <div className="mCSB_dragger_bar" style={{lineHeight: 50}} />
              </div>
              <div className="mCSB_draggerRail" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
