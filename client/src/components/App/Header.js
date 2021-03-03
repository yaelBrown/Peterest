import React, { Component } from 'react'

import whiteLogo from '../../Assets/img/white-logo.svg'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="masthead" class="site-header default-header overlay-header menu-color-white user-nav-active">
	      <nav class="navbar beehive-navbar default fixed-top">
		      <div class="container">
			      <a class="navbar-brand" href="/">
				      <img src={whiteLogo} alt="White Logo" className="default-logo"/>
			      </a>
            <button class="beehive-toggler navbar-icon js-hiraku-offcanvas-btn" type="button" data-toggle-offcanvas="#js-hiraku-offcanvas-0" aria-expanded="false" aria-label="Menu" aria-controls="js-hiraku-offcanvas-0" id="hiraku-offcanvas-btn-0">
              <span class="icon-bar bar1"></span>
              <span class="icon-bar bar2"></span>
              <span class="icon-bar bar3"></span>
            </button>
	      		<div class="js-hiraku-offcanvas js-hiraku-offcanvas-active" aria-hidden="true" aria-labelledby="hiraku-offcanvas-btn-0" id="js-hiraku-offcanvas-0" aria-label="close">
              <div class="navbar-main-container js-hiraku-offcanvas-sidebar js-hiraku-offcanvas-sidebar-right" role="navigation">
                <div class="menu-label">
                  <span class="h5">Main Menu</span>
                </div>
                <ul id="menu-header-menu" class="navbar-nav navbar-main"><li id="menu-item-110" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-95 current_page_item active menu-item-110 nav-item"><a title="Home" href="https://mythemestore.com/beehive-preview/" class="nav-link">Home</a></li>
                  <li id="menu-item-794" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-794 nav-item"><a title="Network" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-794">Network</a>
                    <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-794" role="menu">
                      <li id="menu-item-795" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-795 nav-item"><a title="Activity" href="https://mythemestore.com/beehive-preview/activity/" class="dropdown-item">Activity</a></li>
                      <li id="menu-item-796" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-796 nav-item"><a title="Photos" href="https://mythemestore.com/beehive-preview/photos/" class="dropdown-item">Photos</a></li>
                      <li id="menu-item-797" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-797 nav-item"><a title="Videos" href="https://mythemestore.com/beehive-preview/videos/" class="dropdown-item">Videos</a></li>
                      <li id="menu-item-798" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-798 nav-item"><a title="Members" href="https://mythemestore.com/beehive-preview/members/" class="dropdown-item">Members</a></li>
                      <li id="menu-item-799" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-799 nav-item"><a title="Groups" href="https://mythemestore.com/beehive-preview/groups/" class="dropdown-item">Groups</a></li>
                      <li id="menu-item-800" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-800 nav-item"><a title="Forums" href="https://mythemestore.com/beehive-preview/forums/" class="dropdown-item">Forums</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-803" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-803 nav-item"><a title="Products" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-803">Products</a>
                    <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-803" role="menu">
                      <li id="menu-item-804" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-804 nav-item"><a title="All Products" href="https://mythemestore.com/beehive-preview/shop/" class="dropdown-item">All Products</a></li>
                      <li id="menu-item-805" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-805 nav-item"><a title="Categories" href="https://mythemestore.com/beehive-preview/product-categories/" class="dropdown-item">Categories</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-806" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-806 nav-item"><a title="Jobs" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-806">Jobs</a>
                    <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-806" role="menu">
                      <li id="menu-item-809" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-809 nav-item"><a title="All Jobs" href="https://mythemestore.com/beehive-preview/jobs/" class="dropdown-item">All Jobs</a></li>
                      <li id="menu-item-808" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-808 nav-item"><a title="Job Categories" href="https://mythemestore.com/beehive-preview/job-categories/" class="dropdown-item">Job Categories</a></li>
                      <li id="menu-item-810" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-810 nav-item"><a title="Submit Job" href="https://mythemestore.com/beehive-preview/post-a-job/" class="dropdown-item">Submit Job</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-811" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-811 nav-item"><a title="Classifieds" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-811">Classifieds</a>
                    <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-811" role="menu">
                      <li id="menu-item-813" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-813 nav-item"><a title="All Adverts" href="https://mythemestore.com/beehive-preview/adverts/" class="dropdown-item">All Adverts</a></li>
                      <li id="menu-item-812" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-812 nav-item"><a title="Advert Categories" href="https://mythemestore.com/beehive-preview/advert-categories/" class="dropdown-item">Advert Categories</a></li>
                      <li id="menu-item-814" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-814 nav-item"><a title="Submit Advert" href="https://mythemestore.com/beehive-preview/adverts/add/" class="dropdown-item">Submit Advert</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-815" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown active menu-item-815 nav-item"><a title="Pages" href="https://mythemestore.com/beehive-preview/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle nav-link" id="menu-item-dropdown-815">Pages</a>
                    <ul class="dropdown-menu" aria-labelledby="menu-item-dropdown-815" role="menu">
                      <li id="menu-item-816" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-95 current_page_item active menu-item-816 nav-item"><a title="Home 1" href="https://mythemestore.com/beehive-preview/" class="dropdown-item">Home 1</a></li>
                      <li id="menu-item-818" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-818 nav-item"><a title="Home 2" href="https://mythemestore.com/beehive-preview/home-2/" class="dropdown-item">Home 2</a></li>
                      <li id="menu-item-817" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-817 nav-item"><a title="Home 3" href="https://mythemestore.com/beehive-preview/home-3/" class="dropdown-item">Home 3</a></li>
                      <li id="menu-item-109" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-109 nav-item"><a title="About Us" href="https://mythemestore.com/beehive-preview/about-us/" class="dropdown-item">About Us</a></li>
                      <li id="menu-item-108" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-108 nav-item"><a title="FAQs" href="https://mythemestore.com/beehive-preview/faqs/" class="dropdown-item">FAQs</a></li>
                      <li id="menu-item-107" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-107 nav-item"><a title="Contact" href="https://mythemestore.com/beehive-preview/contact/" class="dropdown-item">Contact</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-111" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-111 nav-item">
                    <a title="Blog" href="https://mythemestore.com/beehive-preview/blog/" class="nav-link">Blog</a>
                  </li>
                  <li id="menu-item-819" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-819 nav-item">
                    <a title="Contact" href="https://mythemestore.com/beehive-preview/contact/" class="nav-link">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <ul id="navbar-user" class="navbar-nav navbar-user">
              <li class="mini-cart nav-item">
                <a class="cart-contents nav-link" href="https://mythemestore.com/beehive-preview/cart/" title="View Cart">
                  <i class="uil-cart"></i>
                </a>
              </li>		
              
              <li class="nav-item">
                <a href="https://mythemestore.com/beehive-preview/#" class="nav-link login" data-toggle="modal" data-target="#login-modal">Login</a>
              </li>	
            </ul>
		      </div>
        </nav>
        </header>
      </div>
    )
  }
}