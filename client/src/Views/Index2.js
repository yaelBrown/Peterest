import React, { Component } from 'react'

import BackgroundVideo from '../Components/Home/BackgroundVideo.js'
import LoginWindow from '../Components/Home/LoginWindow'
import LinksFooter from '../Components/Home/LinkFooter'

export default class Index2 extends Component {
  render() {
    return (
      <div>
        <div className="beehive-preloader" style={{display: 'none'}}>
          <span />
        </div>
        <div id="beehive-page" className="site">
          <div id="content" className="site-content">
            <div id="primary" className="content-area">
              <div className="layout full">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-main">
                      <main id="main" className="main-content">
                        <article id="post-95" className="post-95 page type-page status-publish hentry beehive-post">
                          <div className="entry-content clearfix">
                            <div data-elementor-type="wp-page" data-elementor-id={95} className="elementor elementor-95" data-elementor-settings="[]">
                              <div className="elementor-inner">
                                <div className="elementor-section-wrap">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-0405d30 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="0405d30" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;https:\/\/mythemestore.com\/friend-finder\/videos\/8.mp4&quot;}">
                                    <BackgroundVideo/>
                                    <div className="elementor-background-overlay" />
                                    <div className="elementor-container elementor-column-gap-default">
                                      <div className="elementor-row">
                                        <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-e541bc9" data-id="e541bc9" data-element_type="column">
                                          <div className="elementor-column-wrap">
                                            <div className="elementor-widget-wrap" />
                                          </div>
                                        </div>
                                        <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-296c3b9" data-id="296c3b9" data-element_type="column">
                                          <div className="elementor-column-wrap elementor-element-populated">
                                            <div className="elementor-widget-wrap">
                                              <LoginWindow/>
                                              <LinksFooter/>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-33e6f1f" data-id="33e6f1f" data-element_type="column">
                                          <div className="elementor-column-wrap">
                                            <div className="elementor-widget-wrap">
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* .entry-contents */}
                        </article>
                        {/* #post-95 */}
                      </main>
                      {/* #main */}
                    </div>
                    {/* .col-main */}
                  </div>
                  {/* .row */}
                </div>
                {/* .container */}
              </div>
              {/* .layout */}
            </div>
            {/* #primary */}
          </div>
          {/* #content */}
        </div>
        {/* #beehive-page */}
        <div className="modal fade login-modal" id="login-modal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="inner">
                  <img src="./index_files/avatar.png" alt="Guest" className="avatar guest-avatar" />
                </div>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Log into your account</h4>
                <form action="https://mythemestore.com/beehive-preview/wp-login.php" method="post" id="modal-login-form" className="beehive-login-form modal-login-form" name="modal-login-form">
                  <div className="form-group">
                    <div className="user-name">
                      <label className="screen-reader-text">Email/username</label>
                      <span className="icon"><i className="uil-user" /></span>
                      <input type="text" id="modal-username" className="username-control" required name="log" defaultValue placeholder="Email or username" value=""/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="pass">
                      <label className="screen-reader-text">Password</label>
                      <span className="icon"><i className="uil-key-skeleton-alt" /></span>
                      <input type="password" id="modal-password" className="password-control" required name="pwd" defaultValue placeholder="Password" />
                    </div>
                  </div>
                  <div className="modal-options">
                    <div className="row">
                      <div className="col-6">
                        <div className="forgetmenot">
                          <label htmlFor="modal-rememberme">
                            <input id="modal-rememberme" name="rememberme" type="checkbox" defaultValue="forever" /> Remember Me									</label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="forgot-password">
                          <a href="https://mythemestore.com/beehive-preview/my-account/lost-password/">
                            Lost Password?									</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="beehive-login-result" />
                  <div className="submit">
                    <button type="submit" id="modal_login_submit" className="submit-login" name="wp-submit">Log Into Your Account</button>
                  </div>
                  <input type="hidden" id="modal-login-security" name="modal-login-security" defaultValue="b0550bc3db" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/" />											
                  <div className="register-link">
                    <p className="color-primary">Signup is disabled</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <i className="icon ion-close-round" />
          </button>
        </div>
      </div>
    )
  }
}
