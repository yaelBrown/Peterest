import React, { Component } from 'react'

export default class MessengerSidebar extends Component {
  render() {
    return (
      <div>
        <div id="buddy-chat-app" className="dash">
          <div id="buddy-chat-buddies" className="collapsed">
            <div className="buddy-chat-buddies__container">
              <div className="header-container">
                <div className="header-title">
                  <span className="dashicons dashicons-format-chat" /> 
                  <div className="window-title">
                    <h5>Messenger</h5>
                  </div>
                </div>
                <div className="dropd-group dropd-dr">
                  <a className="dropd-control mute"><span className="dashicons dashicons-admin-generic" /></a> 
                  <div className="dropd-menu"><a className="dropd-item">Mute</a></div>
                </div>
              </div>
              <div className="vb vb-invisible" style={{position: 'relative', overflow: 'hidden'}}>
                <div className="buddy-chat-buddies__content vb-content" style={{display: 'block', overflow: 'hidden scroll', height: '100%', width: '100%', boxSizing: 'content-box', paddingRight: 20}}>
                  <ul className="buddy-chat-nav-tabs">
                    <li className="item"><a className="item-link active">Friends</a></li>
                    <li className="item"><a className="item-link">Groups</a></li>
                  </ul>
                  <div id="buddy-list" className="bpc-tab-content">
                    <div>
                      <div className="bpc-igroup">
                        <div className="bpc-igroup-prepend"><span className="bpc-igroup-text"><span className="dashicons dashicons-search" /></span></div>
                        <input type="text" aria-label="Find friends" placeholder="Find friends" className="bpc-form-control" />
                      </div>
                      <div className="vue-recycle-scroller bpc-buddy-list friends ready direction-vertical">
                        {/**/} 
                        <div className="vue-recycle-scroller__item-wrapper" style={{minHeight: 0}} />
                        {/**/} 
                        <div data-v-b329ee4c tabIndex={-1} className="resize-observer"><object aria-hidden="true" tabIndex={-1} type="text/html" data="about:blank" /></div>
                      </div>
                      <div className="bpc-item"><span className="bpc-notice">No friend found</span></div>
                      {/**/}
                    </div>
                    {/**/}
                  </div>
                </div>
                <div className="vb-dragger" style={{position: 'absolute', height: 0, top: 0}}>
                  <div className="vb-dragger-styler" />
                </div>
              </div>
              <div id="buddy-chat-buddies__collapser" className="buddy-chat-buddies__collapser">
                <div className="collapse-icon"><span className="dashicons dashicons-arrow-right-alt2" /></div>
                <div className="action-text">
                  <h5>Collapse</h5>
                </div>
              </div>
            </div>
          </div>
          <div id="buddy-chat-windows">
            <ul className="bpc-chat-windows-list">
              {/**/}  {/**/}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
