import React, { Component } from 'react'

import { FacebookLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons"

import RegisterService from '../../Services/RegisterService.js'
export default class Register extends Component {
  
  // Finished creating mock form to register users and test login

  constructor(props) {
    super(props)
  
    this.state = {
      name: "",
      password: "",
      email: "",
      location: "",
    }
  }

  handleChange = (property, val) => {
    val = val.trim()
    this.state({[property]: val})
  }

  handleSubmit = () => {
    let n = this.state.name
    let p = this.state.password
    let e = this.state.email
    let l = this.state.location

    if (n === "" || 
      p === "" || 
      e === "" || 
      l === "") {
        return
      } else {
        let newAcct = RegisterService.registerAccount(n,p,e,l)
        if (newAcct) {
          // Push jwt to local storage
          window.location.href("/dashboard")
        } else {
          // Display error
          console.error("Error trying to register account")
          this.setState({
            name: "",
            password: "",
            email: "",
            location: "",
          })     
        }
      }
  }
  
  render() {
    return (
      <section className="elementor-section elementor-inner-section elementor-element elementor-element-bd800a4 elementor-section-content-middle elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bd800a4" data-element_type="section">
      <div className="elementor-container elementor-column-gap-default">
      <div className="elementor-row">
        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-12511e7" data-id="12511e7" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="elementor-column-wrap elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div className="elementor-element elementor-element-43e6333 elementor-widget elementor-widget-heading animated fadeIn" data-id="43e6333" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">Register</h4>
                </div>
              </div>
              <div className="elementor-element elementor-element-145cd8a elementor-align-center elementor-widget elementor-widget-beehive-login animated fadeIn" data-id="145cd8a" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="beehive-login.default">
                <div className="elementor-widget-container">
                  <div className="beehive-login-element beehive-element default">
                    <div className="login-form-wrapper">
                      
                      <form action="/" method="post" id="element-login-form" className="beehive-login-form element-login-form" name="element-login">
                        
                        <div className="form-group">
                          <div className="user-name">
                            <label className="screen-reader-text">Name</label>
                            <input 
                              type="text" 
                              className="username-control" 
                              required 
                              placeholder="Name" 
                              value={this.state.username}
                              onChange={(e) => this.handleChange("username", e.target.value)}  
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="user-name">
                            <label className="screen-reader-text">Email</label>
                            <input 
                              type="text" 
                              className="email-control" 
                              required 
                              placeholder="Email" 
                              value={this.state.email}
                              onChange={(e) => this.handleChange("email", e.target.value)}  
                            />
                          </div>
                        </div>
                        
                        <div className="form-group">
                          <div className="pass">
                            <label className="screen-reader-text">Password</label>
                            <input 
                              type="password" 
                              className="password-control" 
                              required  
                              placeholder="Password" 
                              value={this.state.password}
                              onChange={(e) => this.handleChange("password", e.target.value)} 
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="user-name">
                            <label className="screen-reader-text">Location</label>
                            <input 
                              type="text" 
                              className="username-control" 
                              required  
                              placeholder="Location" 
                              value={this.state.location}
                              onChange={(e) => this.handleChange("location", e.target.value)} 
                            />
                          </div>
                        </div>

                        <div className="beehive-login-result" />
                          <div className="submit">
                            <button type="submit" id="element_login_submit" className="wide submit-login ellipsis" name="wp-submit">Create A New Account</button>
                          </div>
                          <input type="hidden" id="element-login-security" name="element-login-security" defaultValue="84440c24f6" />
                          <input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/" />
                          <div className="register-link">
                            <a href="/index2">
                              <p className="color-primary">Return to Login</p>
                            </a>
                          </div>

                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-d940293 elementor-widget elementor-widget-heading animated fadeIn" data-id="d940293" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-element elementor-element-18a0f23 elementor-widget elementor-widget-image animated fadeIn" data-id="18a0f23" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="image.default">
                      <div className="elementor-widget-container">
                        <FacebookLoginButton/><br/>
                        <GoogleLoginButton/><br/>
                        <InstagramLoginButton/>
                      </div>
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
