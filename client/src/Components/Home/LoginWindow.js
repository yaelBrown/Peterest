import React, { Component } from 'react'

import LoginService from '../../Services/LoginService'

import logoIcon from '../../Assets/img/logo-icon.svg'
import loadingIcon from '../../Assets/img/LoadingIcon.gif'

export default class LoginWindow extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username: "",
      password: "",
      loading: false,
      errorMsg: ""
    }
  }
  
  // Need to figure out how to pass token to front end. 

  handleChange = (property, val) => {
    val = val.trim()
    this.state({[property]: val})
  }

  handleSubmit = () => {
    if (!this.state.username || !this.state.password) return
    
    this.setState({loading: true})
    let jwtToken = false
    
    jwtToken = LoginService.login(this.state.username, this.state.password)
    
    if (jwtToken) {
      localStorage.setItem("token", jwtToken)
      this.props.history.push("/dashboard")
    } else { 
      this.clearPasswordWithinForm()
      console.error("Invalid Login")
    }
  }

  clearPasswordWithinForm = () => {
    this.state({password: ""})
  }

  render() {
    let loadingIconStyleVisibility = ""

    if (this.state.loading) {
      loadingIconStyleVisibility = "visible"
    } else {
      loadingIconStyleVisibility = "hidden"
    }

    const whiteOverride = { color: "white" }   
    const loadingIconStyle = {
      width: "20px",
      height: "20px",
      marginLeft: "120px",
      visibility: loadingIconStyleVisibility
    }

    return (
      <section className="elementor-section elementor-inner-section elementor-element elementor-element-bd800a4 elementor-section-content-middle elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bd800a4" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-row">
          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d6aa1ef background-primary-09" data-id="d6aa1ef" data-element_type="column">
            <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div className="elementor-element elementor-element-d940293 elementor-widget elementor-widget-heading animated fadeIn" data-id="d940293" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <div className="elementor-element elementor-element-18a0f23 elementor-widget elementor-widget-image animated fadeIn" data-id="18a0f23" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <img width={1} height={1} src={logoIcon} className="attachment-thumbnail size-thumbnail" alt="" />
                    </div>
                  </div>
                </div>
                <h3 className="elementor-heading-title elementor-size-default" style={{margin: "auto", width: "max-content"}}>Welcome to Peterest</h3>
              </div>
              </div>
              <div className="elementor-element elementor-element-9a6d6c8 elementor-widget elementor-widget-text-editor animated fadeIn" data-id="9a6d6c8" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="text-editor.default">
              <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                <p style={{ textAlign: "center"}}>Peterest is a place for pet lovers. </p>
                </div>
              </div>
              </div>
              <div className="elementor-element elementor-element-633213d elementor-mobile-align-center elementor-widget elementor-widget-beehive-iconbox animated fadeIn" data-id="633213d" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="beehive-iconbox.default">
              <div className="elementor-widget-container">
                <div className="beehive-iconbox-element beehive-element icon-view-framed icon-shape-rounded">
                <div className="icon-wrapper">
                  <span class="iconify" data-icon="fluent:people-audience-24-filled" data-inline="false" style={whiteOverride}/>
                </div>
                <div className="iconbox-info">
                  <h4 className="title">Community</h4>
                  <p className="description">Connect with pet owners.</p>
                </div>
                </div>
              </div>
              </div>
              <div className="elementor-element elementor-element-8d74799 elementor-mobile-align-center elementor-widget elementor-widget-beehive-iconbox animated fadeIn" data-id="8d74799" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="beehive-iconbox.default">
              <div className="elementor-widget-container">
                <div className="beehive-iconbox-element beehive-element icon-view-framed icon-shape-rounded">
                <div className="icon-wrapper">
                  <span class="iconify" data-icon="ant-design:shopping-cart-outlined" data-inline="false" style={whiteOverride}/>
                </div>
                <div className="iconbox-info">
                  <h4 className="title">Online shop</h4>
                  <p className="description">Shop the pet marketplace.</p>
                </div>
                </div>
              </div>
              </div>
              <div className="elementor-element elementor-element-4bc7a15 elementor-mobile-align-center elementor-widget elementor-widget-beehive-iconbox animated fadeInDown" data-id="4bc7a15" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInDown&quot;}" data-widget_type="beehive-iconbox.default">
              <div className="elementor-widget-container">
                <div className="beehive-iconbox-element beehive-element icon-view-framed icon-shape-rounded">
                <div className="icon-wrapper">
                  <span class="iconify" data-icon="akar-icons:search" data-inline="false" style={whiteOverride}/>
                </div>
                <div className="iconbox-info">
                  <h4 className="title">Job search</h4>
                  <p className="description">Work with pets.</p>
                </div>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-12511e7" data-id="12511e7" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div className="elementor-element elementor-element-43e6333 elementor-widget elementor-widget-heading animated fadeIn" data-id="43e6333" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">Login</h4>
                </div>
              </div>
              <div className="elementor-element elementor-element-02df375 elementor-widget elementor-widget-text-editor animated fadeIn" data-id="02df375" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <div className="elementor-text-editor elementor-clearfix">
                  <p>Join gazillions of pet lovers online</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-145cd8a elementor-align-center elementor-widget elementor-widget-beehive-login animated fadeIn" data-id="145cd8a" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="beehive-login.default">
                <div className="elementor-widget-container">
                  <div className="beehive-login-element beehive-element default">
                    <div className="login-form-wrapper">
                      <form action="/" method="post" id="element-login-form" className="beehive-login-form element-login-form" name="element-login">
                        <div className="form-group">
                          <div className="user-name">
                            <label className="screen-reader-text">Email/username</label>
                            <span className="icon">
                              <span className="iconify" data-icon="uil-user" data-inline="false"></span>
                            </span>
                            <input 
                              type="text" 
                              className="username-control" 
                              required 
                              placeholder="Email or username" 
                              value={this.state.username}
                              onChange={(e) => this.handleChange("username", e.target.value)}  
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="pass">
                            <label className="screen-reader-text">Password</label>
                            <span className="icon">
                              <span class="iconify" data-icon="uim:key-skeleton-alt" data-inline="false"></span>
                            </span>
                            <input 
                              type="password" 
                              className="password-control" 
                              required  
                              placeholder="Password" 
                              value={this.state.password}
                              onChnage={(e) => this.handleChange("password", e.target.value)} 
                            />
                          </div>
                        </div>
                        <div className="form-options">
                          <div className="row">
                            <div className="col-6">
                              <div className="forgetmenot">
                                <label htmlFor="element-rememberme">
                                  <input id="element-rememberme" name="rememberme" type="checkbox" defaultValue="forever" /> Remember										
                                </label>
                              </div>
                            </div>
                          <div className="col-6">
                            <div className="forgot-password">
                              <a href="/">Lost Password?</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    <div className="beehive-login-result" />
                  <div className="submit">
                    <button type="submit" id="element_login_submit" className="wide submit-login ellipsis" name="wp-submit">Log into your account</button>
                  </div>
                  <input type="hidden" id="element-login-security" name="element-login-security" defaultValue="84440c24f6" />
                  <input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/" />
                  <div className="register-link">
                    <a href="/">
                      <p className="color-primary">Create new Account</p>
                    </a>
                  </div>
                  </form>
                </div>
                <img src={loadingIcon} style={loadingIconStyle} alt=""/>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    )
  }
}