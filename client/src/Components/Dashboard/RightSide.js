import React, { Component } from 'react'

export default class RightSide extends Component {
  render() {
    return (
      <div>
        <div className="col-lg-4 col-aside">
          <aside id="buddypress_sidebar" className="widget-area sidebar-widget-area sticky-sidebar">
            <div id="bp_core_members_widget-2" className="widget widget_bp_core_members_widget buddypress widget" style={{}}>
              <h5 className="widget-title">Members</h5>
              <div className="item-options" id="members-list-options">
                <a href="https://mythemestore.com/beehive-preview/members/" id="newest-members">Newest</a>
                <span className="bp-separator" role="separator">|</span>
                <a href="https://mythemestore.com/beehive-preview/members/" id="recently-active-members" className="selected">Active</a>
                <span className="bp-separator" role="separator">|</span>
                <a href="https://mythemestore.com/beehive-preview/members/" id="popular-members">Popular</a>
              </div>
              <ul id="members-list" className="item-list" aria-live="polite" aria-relevant="all" aria-atomic="true">
                <li className="vcard">
                  <div className="item-avatar">
                    <a href="https://mythemestore.com/beehive-preview/members/user/" className="bp-tooltip" data-bp-tooltip="John Doe"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></a>
                  </div>
                  <div className="item">
                    <div className="item-title fn"><a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a></div>
                    <div className="item-meta">
                      <span className="activity">23 minutes ago</span>
                    </div>
                  </div>
                </li>
                <li className="vcard">
                  <div className="item-avatar">
                    <a href="https://mythemestore.com/beehive-preview/members/razor/" className="bp-tooltip" data-bp-tooltip="Sephiroth"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/1/6005b5c352343-bpthumb.png" className="avatar user-1-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of Sephiroth" /></a>
                  </div>
                  <div className="item">
                    <div className="item-title fn"><a href="https://mythemestore.com/beehive-preview/members/razor/">Sephiroth</a></div>
                    <div className="item-meta">
                      <span className="activity">7 hours ago</span>
                    </div>
                  </div>
                </li>
                <li className="vcard">
                  <div className="item-avatar">
                    <a href="https://mythemestore.com/beehive-preview/members/jennie/" className="bp-tooltip" data-bp-tooltip="Jennie Ferguson"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/16/5e2d07dbca09a-bpthumb.jpg" className="avatar user-16-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of Jennie Ferguson" /></a>
                  </div>
                  <div className="item">
                    <div className="item-title fn"><a href="https://mythemestore.com/beehive-preview/members/jennie/">Jennie Ferguson</a></div>
                    <div className="item-meta">
                      <span className="activity">4 months ago</span>
                    </div>
                  </div>
                </li>
                <li className="vcard">
                  <div className="item-avatar">
                    <a href="https://mythemestore.com/beehive-preview/members/jonathon/" className="bp-tooltip" data-bp-tooltip="John Thompson"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291b6b9-bpthumb.jpg" className="avatar user-14-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Thompson" /></a>
                  </div>
                  <div className="item">
                    <div className="item-title fn"><a href="https://mythemestore.com/beehive-preview/members/jonathon/">John Thompson</a></div>
                    <div className="item-meta">
                      <span className="activity">4 months ago</span>
                    </div>
                  </div>
                </li>
                <li className="vcard">
                  <div className="item-avatar">
                    <a href="https://mythemestore.com/beehive-preview/members/sophia/" className="bp-tooltip" data-bp-tooltip="Sophia Lee"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg" className="avatar user-6-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of Sophia Lee" /></a>
                  </div>
                  <div className="item">
                    <div className="item-title fn"><a href="https://mythemestore.com/beehive-preview/members/sophia/">Sophia Lee</a></div>
                    <div className="item-meta">
                      <span className="activity">4 months ago</span>
                    </div>
                  </div>
                </li>
                <li className="vcard">
                  <div className="item-avatar">
                    <a href="https://mythemestore.com/beehive-preview/members/alexis/" className="bp-tooltip" data-bp-tooltip="Alexis Clark"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d1d7c0-bpthumb.jpg" className="avatar user-12-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of Alexis Clark" /></a>
                  </div>
                  <div className="item">
                    <div className="item-title fn"><a href="https://mythemestore.com/beehive-preview/members/alexis/">Alexis Clark</a></div>
                    <div className="item-meta">
                      <span className="activity">4 months ago</span>
                    </div>
                  </div>
                </li>
                <li className="vcard">
                  <div className="item-avatar">
                    <a href="https://mythemestore.com/beehive-preview/members/brian/" className="bp-tooltip" data-bp-tooltip="Brian Walton"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/9/5e2ce3f5bcd91-bpthumb.jpg" className="avatar user-9-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of Brian Walton" /></a>
                  </div>
                  <div className="item">
                    <div className="item-title fn"><a href="https://mythemestore.com/beehive-preview/members/brian/">Brian Walton</a></div>
                    <div className="item-meta">
                      <span className="activity">4 months ago</span>
                    </div>
                  </div>
                </li>
              </ul>
              <input type="hidden" id="_wpnonce-members" name="_wpnonce-members" defaultValue="74089e3671" />
              <input type="hidden" name="members_widget_max" id="members_widget_max" defaultValue={7} />
            </div>
            <nav className="sidebar-nav-menu" style={{}}>
              <ul id="menu-sidebar-menu" className="aside-navbar">
                <li id="menu-item-115" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-115"><a href="https://mythemestore.com/beehive-preview/">Home</a></li>
                <li id="menu-item-114" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"><a href="https://mythemestore.com/beehive-preview/about-us/">About Us</a></li>
                <li id="menu-item-113" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-113"><a href="https://mythemestore.com/beehive-preview/faqs/">FAQs</a></li>
                <li id="menu-item-116" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-116"><a href="https://mythemestore.com/beehive-preview/blog/">Blog</a></li>
                <li id="menu-item-112" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-112"><a href="https://mythemestore.com/beehive-preview/contact/">Contact</a></li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
