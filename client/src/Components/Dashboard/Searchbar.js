import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar beehive-navbar social fixed-top to-top">
          <div className="container">
            <button className="beehive-toggler account-toggler js-hiraku-offcanvas-btn" type="button" data-toggle-offcanvas="#js-hiraku-offcanvas-1" aria-expanded="false" aria-label="Menu" aria-controls="js-hiraku-offcanvas-1" id="hiraku-offcanvas-btn-1"><img alt src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" srcSet="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg 2x" className="avatar avatar-24 photo" height={24} width={24} /></button><button className="beehive-toggler panel-toggler js-hiraku-offcanvas-btn" type="button" data-toggle-offcanvas="#js-hiraku-offcanvas-0" aria-expanded="false" aria-label="Menu" aria-controls="js-hiraku-offcanvas-0" id="hiraku-offcanvas-btn-0"><span className="icon-bar bar1" /><span className="icon-bar bar2" /><span className="icon-bar bar3" /></button>
            <div id="beehive-ajax-search" className="beehive-ajax-search">
              <form role="search" method="get" id="ajax-search-form" className="ajax-search-form form-inline" action="https://mythemestore.com/beehive-preview/">
                <div className="search-field">
                  <i className="icon ion-android-search" />
                  <input id="ajax-search-textfield" type="text" name="s" placeholder="Search..." defaultValue autoComplete="off" required />
                  <span className="beehive-loading-ring" />
                </div>
                <div className="search-button">
                  <button type="submit" className="search-submit"><i className="icon ion-android-search" /></button>
                </div>
              </form>
              <div id="ajax-search-result" />
            </div>
            <ul id="navbar-user" className="navbar-nav navbar-user">
              <li id="friend-requests-list" className="nav-item dropdown friend-requests-list">
                <a className="nav-link dropdown-toggle" href="#" id="nav_friend_requests" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="uil-user-plus" />
                  <span className="nav-item-title">Friend Requests</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="nav_friend_requests">
                  <div className="dropdown-title">Friend requests</div>
                  <div className="alert-message">
                    <div className="alert alert-warning" role="alert">No friend request.</div>
                  </div>
                  <div className="dropdown-footer">
                    <a href="https://mythemestore.com/beehive-preview/members/user/friends/requests/" className="button">All Requests</a>
                  </div>
                </div>
              </li>
              <li id="notification-list" className="nav-item dropdown notification-list">
                <a className="nav-link dropdown-toggle" href="#" id="nav_notification" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="uil-bell" />
                  <span className="nav-item-title">Notifications</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="nav_notification">
                  <div className="dropdown-title">Notifications</div>
                  <div className="alert-message">
                    <div className="alert alert-warning" role="alert">No notifications found</div>
                  </div>
                  <div className="dropdown-footer">
                    <a href="https://mythemestore.com/beehive-preview/members/user/notifications/unread/" className="button">All Notifications</a>
                  </div>
                </div>
              </li>
              <li id="private-message-list" className="nav-item dropdown private-message-list">
                <a className="nav-link dropdown-toggle" href="#" id="nav_private_messages" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="uil-envelope-open" />
                  <span className="nav-item-title">Messages</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="nav_private_messages">
                  <div className="dropdown-title">Unread messages</div>
                  <div className="alert-message">
                    <div className="alert alert-warning" role="alert">No messages to read.</div>
                  </div>
                  <div className="dropdown-footer">
                    <a href="https://mythemestore.com/beehive-preview/members/user/messages/inbox/" className="button">All Messages</a>
                  </div>
                </div>
              </li>
              <li className="mini-cart nav-item"><a className="cart-contents nav-link" href="https://mythemestore.com/beehive-preview/cart/" title="View Cart"><i className="uil-cart" /><span className="count">6</span></a></li>
              <li id="myaccount-url-list" className="nav-item dropdown myaccount-url-list">
                <a className="nav-link dropdown-toggle" href="#" id="nav_my_account" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img alt src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" srcSet="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e626e9-bpfull.jpg 2x" className="avatar avatar-30 photo" height={30} width={30} />									<span className="account-name">@ user</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="nav_my_account">
                  <ul id="menu-account-menu" className="member-account-menu">
                    <li id="menu-item-84" className="bp-menu bp-activity-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-84"><a href="https://mythemestore.com/beehive-preview/members/user/activity/">Timeline</a></li>
                    <li id="menu-item-85" className="bp-menu bp-profile-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-85"><a href="https://mythemestore.com/beehive-preview/members/user/profile/">Profile</a></li>
                    <li id="menu-item-86" className="bp-menu bp-friends-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-86"><a href="https://mythemestore.com/beehive-preview/members/user/friends/">Friends</a></li>
                    <li id="menu-item-87" className="bp-menu bp-groups-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-87"><a href="https://mythemestore.com/beehive-preview/members/user/groups/">Groups</a></li>
                    <li id="menu-item-88" className="bp-menu bp-my-adverts-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-88"><a href="https://mythemestore.com/beehive-preview/members/user/my-adverts/">Adverts</a></li>
                    <li id="menu-item-89" className="bp-menu bp-forums-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-89"><a href="https://mythemestore.com/beehive-preview/members/user/forums/">Forums</a></li>
                    <li id="menu-item-90" className="bp-menu bp-shop-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-90"><a href="https://mythemestore.com/beehive-preview/members/user/shop/">Shop</a></li>
                    <li id="menu-item-91" className="bp-menu bp-notifications-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-91"><a href="https://mythemestore.com/beehive-preview/members/user/notifications/">Notifications</a></li>
                    <li id="menu-item-92" className="bp-menu bp-messages-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-92"><a href="https://mythemestore.com/beehive-preview/members/user/messages/">Messages</a></li>
                    <li id="menu-item-93" className="bp-menu bp-settings-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-93"><a href="https://mythemestore.com/beehive-preview/members/user/settings/">Settings</a></li>
                    <li id="menu-item-94" className="bp-menu bp-logout-nav menu-item menu-item-type-custom menu-item-object-custom menu-item-94"><a href="https://mythemestore.com/beehive-preview/wp-login.php?action=logout&redirect_to=https%3A%2F%2Fmythemestore.com%2Fbeehive-preview%2Factivity%2F&_wpnonce=5f9e27924d">Log Out</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
