import React, { Component } from 'react'

// import whiteLogo from '../../public/Assets/img/white-logo.svg'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="masthead" className="site-header default-header overlay-header menu-color-white user-nav-active">
          <nav className="navbar beehive-navbar default fixed-top">
            <div className="container">
              <a className="navbar-brand" href="/">
                {/* <img src={whiteLogo} alt="White Logo" className="default-logo" /> */}
              </a>
              <button className="beehive-toggler navbar-icon js-hiraku-offcanvas-btn" type="button" data-toggle-offcanvas="#js-hiraku-offcanvas-0" aria-expanded="false" aria-label="Menu" aria-controls="js-hiraku-offcanvas-0" id="hiraku-offcanvas-btn-0">
                <span className="icon-bar bar1" />
                <span className="icon-bar bar2" />
                <span className="icon-bar bar3" />
              </button>
              <div className="js-hiraku-offcanvas js-hiraku-offcanvas-active" aria-hidden="true" aria-labelledby="hiraku-offcanvas-btn-0" id="js-hiraku-offcanvas-0" aria-label="close">
                <div className="navbar-main-container js-hiraku-offcanvas-sidebar js-hiraku-offcanvas-sidebar-right" role="navigation">
                  <div className="menu-label">
                    <span className="h5">Main Menu</span>
                  </div>
                  <ul id="menu-header-menu" className="navbar-nav navbar-main">
                    <li id="menu-item-110" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-95 current_page_item active menu-item-110 nav-item"><a title="Home" href="https://mythemestore.com/beehive-preview/" className="nav-link">Home</a></li>
                    <li id="menu-item-794" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-794 nav-item">
                      <a title="Network" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="menu-item-dropdown-794">Network</a>
                      <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-794" role="menu">
                        <li id="menu-item-795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-795 nav-item"><a title="Activity" href="https://mythemestore.com/beehive-preview/activity/" className="dropdown-item">Activity</a></li>
                        <li id="menu-item-796" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-796 nav-item"><a title="Photos" href="https://mythemestore.com/beehive-preview/photos/" className="dropdown-item">Photos</a></li>
                        <li id="menu-item-797" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-797 nav-item"><a title="Videos" href="https://mythemestore.com/beehive-preview/videos/" className="dropdown-item">Videos</a></li>
                        <li id="menu-item-798" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-798 nav-item"><a title="Members" href="https://mythemestore.com/beehive-preview/members/" className="dropdown-item">Members</a></li>
                        <li id="menu-item-799" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-799 nav-item"><a title="Groups" href="https://mythemestore.com/beehive-preview/groups/" className="dropdown-item">Groups</a></li>
                        <li id="menu-item-800" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-800 nav-item"><a title="Forums" href="https://mythemestore.com/beehive-preview/forums/" className="dropdown-item">Forums</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-803" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-803 nav-item">
                      <a title="Products" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="menu-item-dropdown-803">Products</a>
                      <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-803" role="menu">
                        <li id="menu-item-804" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-804 nav-item"><a title="All Products" href="https://mythemestore.com/beehive-preview/shop/" className="dropdown-item">All Products</a></li>
                        <li id="menu-item-805" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-805 nav-item"><a title="Categories" href="https://mythemestore.com/beehive-preview/product-categories/" className="dropdown-item">Categories</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-806" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-806 nav-item">
                      <a title="Jobs" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="menu-item-dropdown-806">Jobs</a>
                      <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-806" role="menu">
                        <li id="menu-item-809" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-809 nav-item"><a title="All Jobs" href="https://mythemestore.com/beehive-preview/jobs/" className="dropdown-item">All Jobs</a></li>
                        <li id="menu-item-808" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-808 nav-item"><a title="Job Categories" href="https://mythemestore.com/beehive-preview/job-categories/" className="dropdown-item">Job Categories</a></li>
                        <li id="menu-item-810" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-810 nav-item"><a title="Submit Job" href="https://mythemestore.com/beehive-preview/post-a-job/" className="dropdown-item">Submit Job</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-811" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-811 nav-item">
                      <a title="Classifieds" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="menu-item-dropdown-811">Classifieds</a>
                      <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-811" role="menu">
                        <li id="menu-item-813" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-813 nav-item"><a title="All Adverts" href="https://mythemestore.com/beehive-preview/adverts/" className="dropdown-item">All Adverts</a></li>
                        <li id="menu-item-812" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-812 nav-item"><a title="Advert Categories" href="https://mythemestore.com/beehive-preview/advert-categories/" className="dropdown-item">Advert Categories</a></li>
                        <li id="menu-item-814" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-814 nav-item"><a title="Submit Advert" href="https://mythemestore.com/beehive-preview/adverts/add/" className="dropdown-item">Submit Advert</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-815" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown active menu-item-815 nav-item">
                      <a title="Pages" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle nav-link" id="menu-item-dropdown-815">Pages</a>
                      <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-815" role="menu">
                        <li id="menu-item-816" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-95 current_page_item active menu-item-816 nav-item"><a title="Home 1" href="https://mythemestore.com/beehive-preview/" className="dropdown-item">Home 1</a></li>
                        <li id="menu-item-818" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-818 nav-item"><a title="Home 2" href="https://mythemestore.com/beehive-preview/home-2/" className="dropdown-item">Home 2</a></li>
                        <li id="menu-item-817" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-817 nav-item"><a title="Home 3" href="https://mythemestore.com/beehive-preview/home-3/" className="dropdown-item">Home 3</a></li>
                        <li id="menu-item-109" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-109 nav-item"><a title="About Us" href="https://mythemestore.com/beehive-preview/about-us/" className="dropdown-item">About Us</a></li>
                        <li id="menu-item-108" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-108 nav-item"><a title="FAQs" href="https://mythemestore.com/beehive-preview/faqs/" className="dropdown-item">FAQs</a></li>
                        <li id="menu-item-107" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-107 nav-item"><a title="Contact" href="https://mythemestore.com/beehive-preview/contact/" className="dropdown-item">Contact</a></li>
                      </ul>
                    </li>
                    <li id="menu-item-111" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-111 nav-item">
                      <a title="Blog" href="https://mythemestore.com/beehive-preview/blog/" className="nav-link">Blog</a>
                    </li>
                    <li id="menu-item-819" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-819 nav-item">
                      <a title="Contact" href="https://mythemestore.com/beehive-preview/contact/" className="nav-link">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul id="navbar-user" className="navbar-nav navbar-user">
                <li className="mini-cart nav-item">
                  <a className="cart-contents nav-link" href="https://mythemestore.com/beehive-preview/cart/" title="View Cart">
                    <i className="uil-cart" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://mythemestore.com/beehive-preview/#" className="nav-link login" data-toggle="modal" data-target="#login-modal">Login</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}