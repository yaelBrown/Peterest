import React from 'react'

export default function LoginModal() {
  return (
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
  )
}
