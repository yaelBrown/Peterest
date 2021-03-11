import React, { Component } from 'react'

// import Loading from '../ReusableComponents/Loading'
import BackgroundVideo from '../Components/Home/BackgroundVideo.js'
import LoginWindow from '../Components/Home/LoginWindow'
import LinksFooter from '../Components/Home/LinkFooter'
export default class Index2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       view: "login"
    }
  }
  
  // Create a way for child component to pass info to this component

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
      </div>
    )
  }
}