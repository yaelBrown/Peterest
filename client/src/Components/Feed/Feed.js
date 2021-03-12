import React, { Component } from 'react'

export default class Feed extends Component {
  render() {
    return (
      <div>
        <div className="col-lg-8 col-main">
          <main id="main" className="main-content">
            <div className="beehive-title-bar social">
              <div className="title-bar-wrapper">
                <div className="title-wrapper screen-reader-text">
                  <h1 className="title h3">Activity</h1>
                </div>
              </div>
            </div>
            <article id="post-0" className="bp_activity type-bp_activity post-0 page type-page status-publish hentry beehive-post">
              <div className="entry-content clearfix">
                <div id="buddypress" className="buddypress-wrap beehive bp-dir-hori-nav alignwide">
                  <h2 className="bp-screen-reader-text">Post Update</h2>
                  <div id="bp-nouveau-activity-form" className="activity-update-form">
                    <form name="whats-new-form" method="post" id="whats-new-form" className="activity-form">
                      <div id="whats-new-avatar">
                        <a href="https://mythemestore.com/beehive-preview/members/user/">
                          <img src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile photo of John Doe" />
                        </a>
                      </div>
                      <div id="whats-new-content">
                        <div id="whats-new-textarea" style={{position: 'relative'}}>
                          <textarea name="whats-new" cols={50} rows={4} placeholder="What's new, John?" aria-label="Post what's new" id="whats-new" className="bp-suggestions" style={{resize: 'none', height: 40}} defaultValue={""} />
                          <div id="rtm-drop-files-title">Drop files here</div>
                        </div>
                      </div>
                      <div className="rtmedia-container rtmedia-uploader-div" style={{opacity: 1, display: 'none', visibility: 'visible'}}>
                        <div className="rtmedia-uploader no-js">
                          <div id="rtmedia-uploader-form">
                            <div className="rtm-tab-content-wrapper">
                              <div id="rtm-file_upload-ui" className="rtm-tab-content">
                                <div className="rtmedia-plupload-container rtmedia-container clearfix">
                                  <div id="rtmedia-action-update" className="clearfix">
                                    <div className="rtm-upload-button-wrapper">
                                      <div id="rtmedia-whts-new-upload-container" style={{position: 'relative'}}>
                                        <div id="html5_1f0idtsle1m893ns1n37s3p1m443_container" className="moxie-shim moxie-shim-html5" style={{position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden', zIndex: 0}}><input id="html5_1f0idtsle1m893ns1n37s3p1m443" type="file" style={{fontSize: 999, opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} multiple accept /></div>
                                      </div>
                                      <button type="button" className="rtmedia-add-media-button" id="rtmedia-add-media-button-post-update" title="Attach Media" style={{position: 'relative', zIndex: 1}}><span className="dashicons dashicons-admin-media" /><span className="button-text">Attach media</span></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="rtmedia-plupload-notice">
                                  <ul className="plupload_filelist_content ui-sortable rtm-plupload-list clearfix" id="rtmedia_uploader_filelist" />
                                </div>
                                <input type="hidden" name="mode" defaultValue="file_upload" />						
                              </div>
                            </div>
                            <input type="hidden" name="rtmedia_upload_nonce" defaultValue="50c7a7f5df" />
                            <input type="submit" id="rtMedia-start-upload" name="rtmedia-upload" defaultValue="Upload" style={{display: 'none'}} />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <input type="hidden" id="rt_upload_hf_activity" defaultValue={1} name="activity" />
                  <nav className="activity-type-navs main-navs bp-navs dir-navs " role="navigation" aria-label="Directory menu">
                    <ul className="component-navigation activity-nav">
                      <li id="activity-all" className="dynamic selected" data-bp-scope="all" data-bp-object="activity">
                        <a href="https://mythemestore.com/beehive-preview/activity/">
                          All Members
                          <span className="count" />
                        </a>
                      </li>
                      <li id="activity-groups" className="dynamic" data-bp-scope="groups" data-bp-object="activity">
                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/groups/">
                          My Groups
                          <span className="count" />
                        </a>
                      </li>
                      <li id="activity-favorites" className data-bp-scope="favorites" data-bp-object="activity">
                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/favorites/">
                          My Favorites
                        </a>
                      </li>
                      <li id="activity-mentions" className="dynamic" data-bp-scope="mentions" data-bp-object="activity">
                        <a href="https://mythemestore.com/beehive-preview/members/user/activity/mentions/">
                          Mentions
                          <span className="count" />
                        </a>
                      </li>
                    </ul>
                    {/* .component-navigation */}
                  </nav>
                  {/* .bp-navs */}
                  <div className="screen-content">
                    <div id="activity-stream" className="activity" data-bp-list="activity" style={{display: 'block'}}>
                      <ul className="activity-list item-list bp-list">
                        <li className="activity rtmedia_update activity-item has-comments date-recorded-1590398859 animate-item slideInUp text-rendered" id="activity-202" data-bp-activity-id={202} data-bp-timestamp={1590398859} style={{visibility: 'visible', animationName: 'slideInUp'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/natashya/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/4/5e2cc15a922f4-bpfull.jpg" className="avatar user-4-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Irina Petrova" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/natashya/">Irina Petrova</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                9 months, 2 weeks ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <div className="shortcontent">
                                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in cul<span className="ellip-dots">...</span></span>
                                  </div>
                                  <div className="allcontent" style={{display: 'none'}}>
                                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</span>
                                  </div>
                                  <span><a href="javascript://nop/" className="morelink">read more</a></span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-4 rtm-activity-photo-list">
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/natashya/media/95/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="maxresdefault" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/maxresdefault-4-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								maxresdefault</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/natashya/media/95/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/natashya/media/94/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="woman-wearing-white-knitted-dress-709790" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/woman-wearing-white-knitted-dress-709790-2-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								woman-wearing-white-knitted-dress-709790</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/natashya/media/94/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/natashya/media/93/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="shallow-focus-photo-of-woman-in-white-dress-shirt-1963481" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/shallow-focus-photo-of-woman-in-white-dress-shirt-1963481-2-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								shallow-focus-photo-of-woman-in-white-dress-shirt-1963481</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/natashya/media/93/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/natashya/media/92/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="back-view-of-woman-holding-her-denim-jacket-789812" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/4/2020/05/back-view-of-woman-holding-her-denim-jacket-789812-2-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								back-view-of-woman-holding-her-denim-jacket-789812</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/natashya/media/92/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-202" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=202/#ac-form-202" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">36</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/favorite/202/?_wpnonce=6fee9e1a1a" className="button fav bp-secondary-action bp-tooltip" data-bp-tooltip="Mark as Favorite" aria-pressed="false"><span className="bp-screen-reader-text">Mark as Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-202" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">3</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-202/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 36 comments</button></li>
                              <li id="acomment-1242" className="comment-item bp-hidden" data-bp-activity-comment-id={1242} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/razor/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/1/6005b5c352343-bpthumb.png" className="avatar user-1-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of Sephiroth" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/razor/">Sephiroth</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-1242" className="activity-time-since"><time className="time-since" dateTime="2020-09-18 13:34:29" data-bp-timestamp={1600436069}>5 months, 3 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span><a className="bp-suggestions-mention" href="https://mythemestore.com/beehive-preview/members/natashya/" rel="nofollow ugc">@natashya</a>, hey there.</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-1242" href="#acomment-1242">Reply</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3588" className="comment-item bp-hidden" data-bp-activity-comment-id={3588} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3588" className="activity-time-since"><time className="time-since" dateTime="2021-01-21 04:33:51" data-bp-timestamp={1611203631}>1 month, 2 weeks ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3588" href="#acomment-3588">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3588/?cid=3588&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-3589" className="comment-item bp-hidden" data-bp-activity-comment-id={3589} style={{display: 'none'}}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3589" className="activity-time-since"><time className="time-since" dateTime="2021-01-21 04:33:57" data-bp-timestamp={1611203637}>1 month, 2 weeks ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3589" href="#acomment-3589">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3589/?cid=3589&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3826" className="comment-item bp-hidden" data-bp-activity-comment-id={3826} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3826" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 15:17:29" data-bp-timestamp={1612019849}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Jddhj</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3826" href="#acomment-3826">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3826/?cid=3826&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3832" className="comment-item bp-hidden" data-bp-activity-comment-id={3832} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3832" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 18:49:16" data-bp-timestamp={1612032556}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Ben</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3832" href="#acomment-3832">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3832/?cid=3832&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3836" className="comment-item bp-hidden" data-bp-activity-comment-id={3836} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3836" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 18:57:48" data-bp-timestamp={1612033068}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Ooww</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3836" href="#acomment-3836">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3836/?cid=3836&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3922" className="comment-item bp-hidden" data-bp-activity-comment-id={3922} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3922" className="activity-time-since"><time className="time-since" dateTime="2021-02-01 15:16:52" data-bp-timestamp={1612192612}>1 month, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>sadfads</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3922" href="#acomment-3922">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3922/?cid=3922&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-3929" className="comment-item bp-hidden" data-bp-activity-comment-id={3929} style={{display: 'none'}}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3929" className="activity-time-since"><time className="time-since" dateTime="2021-02-01 18:29:42" data-bp-timestamp={1612204182}>1 month, 1 week ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>Hi</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3929" href="#acomment-3929">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3929/?cid=3929&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                        <ul>
                                          <li id="acomment-3930" className="comment-item bp-hidden" data-bp-activity-comment-id={3930} style={{display: 'none'}}>
                                            <div className="acomment-avatar item-avatar">
                                              <a href="https://mythemestore.com/beehive-preview/members/user/">
                                                <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                            </div>
                                            <div className="acomment-meta">
                                              <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3930" className="activity-time-since"><time className="time-since" dateTime="2021-02-01 18:29:53" data-bp-timestamp={1612204193}>1 month, 1 week ago</time></a>
                                            </div>
                                            <div className="acomment-content">
                                              <div className="rtmedia-activity-container">
                                                <div className="rtmedia-activity-text">
                                                  <span>Hi</span>
                                                </div>
                                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                              </div>
                                            </div>
                                            <div className=" activity-meta action">
                                              <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3930" href="#acomment-3930">Reply</a></div>
                                              <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3930/?cid=3930&_wpnonce=3ba22d802b">Delete</a></div>
                                            </div>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3904" className="comment-item bp-hidden" data-bp-activity-comment-id={3904} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3904" className="activity-time-since"><time className="time-since" dateTime="2021-01-31 20:27:51" data-bp-timestamp={1612124871}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Guud</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3904" href="#acomment-3904">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3904/?cid=3904&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3957" className="comment-item bp-hidden" data-bp-activity-comment-id={3957} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3957" className="activity-time-since"><time className="time-since" dateTime="2021-02-02 20:53:16" data-bp-timestamp={1612299196}>1 month, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>Hi</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3957" href="#acomment-3957">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3957/?cid=3957&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                  <li id="acomment-3962" className="comment-item bp-hidden" data-bp-activity-comment-id={3962} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3962" className="activity-time-since"><time className="time-since" dateTime="2021-02-02 23:19:57" data-bp-timestamp={1612307997}>1 month, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>Guuuuuudig</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3962" href="#acomment-3962">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3962/?cid=3962&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3938" className="comment-item bp-hidden" data-bp-activity-comment-id={3938} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3938" className="activity-time-since"><time className="time-since" dateTime="2021-02-01 23:38:56" data-bp-timestamp={1612222736}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Beautiful</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3938" href="#acomment-3938">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3938/?cid=3938&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3998" className="comment-item bp-hidden" data-bp-activity-comment-id={3998} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-3998" className="activity-time-since"><time className="time-since" dateTime="2021-02-05 00:47:48" data-bp-timestamp={1612486068}>1 month ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>dah</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-3998" href="#acomment-3998">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3998/?cid=3998&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-4017" className="comment-item bp-hidden" data-bp-activity-comment-id={4017} style={{display: 'none'}}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4017" className="activity-time-since"><time className="time-since" dateTime="2021-02-05 12:25:27" data-bp-timestamp={1612527927}>1 month ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>Hshhahhhahhahahahhshehshhshshhshshhshshshhshshshshhshshshshhshshshshhshshshshhshshshshhshshshhshshshshshhshshshshhshshshshshshhshshshsh</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4017" href="#acomment-4017">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4017/?cid=4017&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4028" className="comment-item bp-hidden" data-bp-activity-comment-id={4028} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4028" className="activity-time-since"><time className="time-since" dateTime="2021-02-05 23:41:28" data-bp-timestamp={1612568488}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>teste teste</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4028" href="#acomment-4028">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4028/?cid=4028&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4049" className="comment-item bp-hidden" data-bp-activity-comment-id={4049} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4049" className="activity-time-since"><time className="time-since" dateTime="2021-02-06 18:28:20" data-bp-timestamp={1612636100}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Nice</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4049" href="#acomment-4049">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4049/?cid=4049&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4056" className="comment-item bp-hidden" data-bp-activity-comment-id={4056} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4056" className="activity-time-since"><time className="time-since" dateTime="2021-02-06 21:06:58" data-bp-timestamp={1612645618}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>nice</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4056" href="#acomment-4056">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4056/?cid=4056&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4077" className="comment-item bp-hidden" data-bp-activity-comment-id={4077} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4077" className="activity-time-since"><time className="time-since" dateTime="2021-02-08 01:54:55" data-bp-timestamp={1612749295}>1 month ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>This is a long reply message</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4077" href="#acomment-4077">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4077/?cid=4077&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4091" className="comment-item bp-hidden" data-bp-activity-comment-id={4091} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4091" className="activity-time-since"><time className="time-since" dateTime="2021-02-08 17:17:53" data-bp-timestamp={1612804673}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>hey</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4091" href="#acomment-4091">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4091/?cid=4091&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4092" className="comment-item bp-hidden" data-bp-activity-comment-id={4092} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4092" className="activity-time-since"><time className="time-since" dateTime="2021-02-08 17:18:06" data-bp-timestamp={1612804686}>1 month ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>okey</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4092" href="#acomment-4092">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4092/?cid=4092&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-4808" className="comment-item bp-hidden" data-bp-activity-comment-id={4808} style={{display: 'none'}}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4808" className="activity-time-since"><time className="time-since" dateTime="2021-03-11 13:12:39" data-bp-timestamp={1615468359}>16 hours, 5 minutes ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>1</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4808" href="#acomment-4808">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4808/?cid=4808&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4097" className="comment-item bp-hidden" data-bp-activity-comment-id={4097} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4097" className="activity-time-since"><time className="time-since" dateTime="2021-02-08 23:29:09" data-bp-timestamp={1612826949}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Good</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4097" href="#acomment-4097">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4097/?cid=4097&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4193" className="comment-item bp-hidden" data-bp-activity-comment-id={4193} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4193" className="activity-time-since"><time className="time-since" dateTime="2021-02-12 12:36:36" data-bp-timestamp={1613133396}>3 weeks, 6 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>ff</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4193" href="#acomment-4193">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4193/?cid=4193&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4480" className="comment-item bp-hidden" data-bp-activity-comment-id={4480} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4480" className="activity-time-since"><time className="time-since" dateTime="2021-02-24 21:23:07" data-bp-timestamp={1614201787}>2 weeks, 1 day ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>fshss</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4480" href="#acomment-4480">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4480/?cid=4480&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-4527" className="comment-item bp-hidden" data-bp-activity-comment-id={4527} style={{display: 'none'}}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4527" className="activity-time-since"><time className="time-since" dateTime="2021-02-26 02:36:43" data-bp-timestamp={1614307003}>2 weeks ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>adada</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4527" href="#acomment-4527">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4527/?cid=4527&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4530" className="comment-item bp-hidden" data-bp-activity-comment-id={4530} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4530" className="activity-time-since"><time className="time-since" dateTime="2021-02-26 06:15:55" data-bp-timestamp={1614320155}>1 week, 6 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>hello</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4530" href="#acomment-4530">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4530/?cid=4530&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4531" className="comment-item bp-hidden" data-bp-activity-comment-id={4531} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4531" className="activity-time-since"><time className="time-since" dateTime="2021-02-26 06:15:59" data-bp-timestamp={1614320159}>1 week, 6 days ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>kfjd</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4531" href="#acomment-4531">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4531/?cid=4531&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4601" className="comment-item bp-hidden" data-bp-activity-comment-id={4601} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4601" className="activity-time-since"><time className="time-since" dateTime="2021-03-01 13:13:46" data-bp-timestamp={1614604426}>1 week, 3 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span><a className="bp-suggestions-mention" href="https://mythemestore.com/beehive-preview/members/robert/" rel="nofollow ugc">@robert</a></span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4601" href="#acomment-4601">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4601/?cid=4601&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4646" className="comment-item bp-hidden" data-bp-activity-comment-id={4646} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4646" className="activity-time-since"><time className="time-since" dateTime="2021-03-03 14:54:47" data-bp-timestamp={1614783287}>1 week, 1 day ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Hsskfoovlwkaps😍🤓😇😙🤓😅😉🤗☺🤔🤥😘🤗</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4646" href="#acomment-4646">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4646/?cid=4646&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4659" className="comment-item bp-hidden" data-bp-activity-comment-id={4659} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4659" className="activity-time-since"><time className="time-since" dateTime="2021-03-04 09:04:09" data-bp-timestamp={1614848649}>1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>beautifull</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4659" href="#acomment-4659">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4659/?cid=4659&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4770" className="comment-item" data-bp-activity-comment-id={4770}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4770" className="activity-time-since"><time className="time-since" dateTime="2021-03-08 22:04:41" data-bp-timestamp={1615241081}>3 days, 7 hours ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Privet</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4770" href="#acomment-4770">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4770/?cid=4770&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4773" className="comment-item" data-bp-activity-comment-id={4773}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4773" className="activity-time-since"><time className="time-since" dateTime="2021-03-09 05:53:48" data-bp-timestamp={1615269228}>2 days, 23 hours ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>#trending</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4773" href="#acomment-4773">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4773/?cid=4773&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4804" className="comment-item" data-bp-activity-comment-id={4804}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4804" className="activity-time-since"><time className="time-since" dateTime="2021-03-11 02:17:16" data-bp-timestamp={1615429036}>1 day, 3 hours ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Abcd</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4804" href="#acomment-4804">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4804/?cid=4804&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4807" className="comment-item" data-bp-activity-comment-id={4807}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4807" className="activity-time-since"><time className="time-since" dateTime="2021-03-11 12:50:26" data-bp-timestamp={1615467026}>16 hours, 27 minutes ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>fsadf</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4807" href="#acomment-4807">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4807/?cid=4807&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-4809" className="comment-item" data-bp-activity-comment-id={4809}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/202/#acomment-4809" className="activity-time-since"><time className="time-since" dateTime="2021-03-11 13:43:12" data-bp-timestamp={1615470192}>15 hours, 35 minutes ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>1</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-202-from-4809" href="#acomment-4809">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4809/?cid=4809&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-202" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-202" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-202" className="ac-input bp-suggestions" name="ac_input_202" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={202} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_202" name="_wpnonce_new_activity_comment_202" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="activity rtmedia_update activity-item has-comments date-recorded-1580062755 animate-item slideInUp text-rendered" id="activity-175" data-bp-activity-id={175} data-bp-timestamp={1580062755} style={{visibility: 'visible', animationName: 'slideInUp'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/robert/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/5/5e2cc51a2a79d-bpfull.jpg" className="avatar user-5-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Robert Cook" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/robert/">Robert Cook</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-1 rtm-activity-video-list rtm-activity-list-rendered">
                                  <li className="rtmedia-list-item media-type-video">
                                    <div className="rtmedia-item-thumbnail">
                                      <video poster="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/5/2020/01/1580062754-pexels-videos-2108274_1.jpg" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/5/2020/01/Pexels-Videos-2108274.mp4" width={320} height={240} className="wp-video-shortcode" id="rt_media_video_57" controls="controls" preload="true" />
                                    </div>
                                    <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                      <p>							<a href="https://mythemestore.com/beehive-preview/members/robert/media/57/" rel="nofollow ugc"><br />
                                          Pexels Videos 2108274<br />
                                        </a>
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-175" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=175/#ac-form-175" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">23</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/175/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action like" id="like-activity-175"><i className="uil-thumbs-up" /><span className="like-text">Like</span> <span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-175/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 23 comments</button></li>
                              <li id="acomment-179" className="comment-item bp-hidden" data-bp-activity-comment-id={179} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/emma/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/10/5e2cf8748915d-bpthumb.jpg" className="avatar user-10-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of Emma Johnson" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/emma/">Emma Johnson</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-179" className="activity-time-since"><time className="time-since" dateTime="2020-01-26 18:30:06" data-bp-timestamp={1580063406}>1 year, 1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Just, wow. Great video to watch.</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-179" href="#acomment-179">Reply</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3678" className="comment-item bp-hidden" data-bp-activity-comment-id={3678} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3678" className="activity-time-since"><time className="time-since" dateTime="2021-01-23 16:17:37" data-bp-timestamp={1611418657}>1 month, 2 weeks ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>nice<br />
                                          </span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3678" href="#acomment-3678">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3678/?cid=3678&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-181" className="comment-item bp-hidden" data-bp-activity-comment-id={181} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/sophia/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55f95b-bpthumb.jpg" className="avatar user-6-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of Sophia Lee" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/sophia/">Sophia Lee</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-181" className="activity-time-since"><time className="time-since" dateTime="2020-01-26 18:33:07" data-bp-timestamp={1580063587}>1 year, 1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>What is this place.</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-181" href="#acomment-181">Reply</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3785" className="comment-item bp-hidden" data-bp-activity-comment-id={3785} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3785" className="activity-time-since"><time className="time-since" dateTime="2021-01-28 07:55:13" data-bp-timestamp={1611820513}>1 month, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span><a className="bp-suggestions-mention" href="https://mythemestore.com/beehive-preview/members/sophia/" rel="nofollow ugc">@sophia</a> what you don’t know is that test test test<br />
                                          </span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3785" href="#acomment-3785">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3785/?cid=3785&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                  <li id="acomment-3827" className="comment-item bp-hidden" data-bp-activity-comment-id={3827} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3827" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 18:43:52" data-bp-timestamp={1612032232}>1 month, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>Jgshdjjdjdj</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3827" href="#acomment-3827">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3827/?cid=3827&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                  <li id="acomment-3828" className="comment-item bp-hidden" data-bp-activity-comment-id={3828} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3828" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 18:44:13" data-bp-timestamp={1612032253}>1 month, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>Jdjdjjd</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3828" href="#acomment-3828">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3828/?cid=3828&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-3829" className="comment-item bp-hidden" data-bp-activity-comment-id={3829} style={{display: 'none'}}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3829" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 18:44:26" data-bp-timestamp={1612032266}>1 month, 1 week ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>Jdjdkkdkd</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3829" href="#acomment-3829">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3829/?cid=3829&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                        <ul>
                                          <li id="acomment-3830" className="comment-item bp-hidden" data-bp-activity-comment-id={3830} style={{display: 'none'}}>
                                            <div className="acomment-avatar item-avatar">
                                              <a href="https://mythemestore.com/beehive-preview/members/user/">
                                                <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                            </div>
                                            <div className="acomment-meta">
                                              <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3830" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 18:44:33" data-bp-timestamp={1612032273}>1 month, 1 week ago</time></a>
                                            </div>
                                            <div className="acomment-content">
                                              <div className="rtmedia-activity-container">
                                                <div className="rtmedia-activity-text">
                                                  <span>Kfkdkkddk</span>
                                                </div>
                                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                              </div>
                                            </div>
                                            <div className=" activity-meta action">
                                              <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3830" href="#acomment-3830">Reply</a></div>
                                              <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3830/?cid=3830&_wpnonce=3ba22d802b">Delete</a></div>
                                            </div>
                                            <ul>
                                              <li id="acomment-3831" className="comment-item bp-hidden" data-bp-activity-comment-id={3831} style={{display: 'none'}}>
                                                <div className="acomment-avatar item-avatar">
                                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                                </div>
                                                <div className="acomment-meta">
                                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3831" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 18:44:46" data-bp-timestamp={1612032286}>1 month, 1 week ago</time></a>
                                                </div>
                                                <div className="acomment-content">
                                                  <div className="rtmedia-activity-container">
                                                    <div className="rtmedia-activity-text">
                                                      <span>Kdkdjjdj</span>
                                                    </div>
                                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                                  </div>
                                                </div>
                                                <div className=" activity-meta action">
                                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3831/?cid=3831&_wpnonce=3ba22d802b">Delete</a></div>
                                                </div>
                                              </li>
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3812" className="comment-item bp-hidden" data-bp-activity-comment-id={3812} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3812" className="activity-time-since"><time className="time-since" dateTime="2021-01-29 12:35:24" data-bp-timestamp={1611923724}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>guzel</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3812" href="#acomment-3812">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3812/?cid=3812&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3825" className="comment-item bp-hidden" data-bp-activity-comment-id={3825} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3825" className="activity-time-since"><time className="time-since" dateTime="2021-01-30 13:02:35" data-bp-timestamp={1612011755}>1 month, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>bl</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3825" href="#acomment-3825">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3825/?cid=3825&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3901" className="comment-item bp-hidden" data-bp-activity-comment-id={3901} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3901" className="activity-time-since"><time className="time-since" dateTime="2021-01-31 18:21:18" data-bp-timestamp={1612117278}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>h</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3901" href="#acomment-3901">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3901/?cid=3901&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3902" className="comment-item bp-hidden" data-bp-activity-comment-id={3902} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3902" className="activity-time-since"><time className="time-since" dateTime="2021-01-31 19:23:13" data-bp-timestamp={1612120993}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Hvf</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3902" href="#acomment-3902">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3902/?cid=3902&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3903" className="comment-item bp-hidden" data-bp-activity-comment-id={3903} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3903" className="activity-time-since"><time className="time-since" dateTime="2021-01-31 19:23:41" data-bp-timestamp={1612121021}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Hgfdd</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3903" href="#acomment-3903">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3903/?cid=3903&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3905" className="comment-item bp-hidden" data-bp-activity-comment-id={3905} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3905" className="activity-time-since"><time className="time-since" dateTime="2021-01-31 20:28:17" data-bp-timestamp={1612124897}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Bakalım </span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3905" href="#acomment-3905">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3905/?cid=3905&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3967" className="comment-item bp-hidden" data-bp-activity-comment-id={3967} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3967" className="activity-time-since"><time className="time-since" dateTime="2021-02-03 06:33:42" data-bp-timestamp={1612334022}>1 month ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>nigh</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3967" href="#acomment-3967">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3967/?cid=3967&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3975" className="comment-item bp-hidden" data-bp-activity-comment-id={3975} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3975" className="activity-time-since"><time className="time-since" dateTime="2021-02-03 12:48:52" data-bp-timestamp={1612356532}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>1</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3975" href="#acomment-3975">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3975/?cid=3975&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4291" className="comment-item bp-hidden" data-bp-activity-comment-id={4291} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-4291" className="activity-time-since"><time className="time-since" dateTime="2021-02-17 21:55:28" data-bp-timestamp={1613598928}>3 weeks, 1 day ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>
                                            hgfhgfhgfh
                                            <p />
                                            <p>fhgfhgfhgf<br />
                                            </p>
                                          </span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-4291" href="#acomment-4291">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4291/?cid=4291&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3987" className="comment-item" data-bp-activity-comment-id={3987}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-3987" className="activity-time-since"><time className="time-since" dateTime="2021-02-04 10:00:57" data-bp-timestamp={1612432857}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>ghjgfxhgfh</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-3987" href="#acomment-3987">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3987/?cid=3987&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4781" className="comment-item" data-bp-activity-comment-id={4781}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-4781" className="activity-time-since"><time className="time-since" dateTime="2021-03-09 19:21:01" data-bp-timestamp={1615317661}>2 days, 9 hours ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>bug<br />
                                          </span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-4781" href="#acomment-4781">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4781/?cid=4781&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4062" className="comment-item" data-bp-activity-comment-id={4062}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-4062" className="activity-time-since"><time className="time-since" dateTime="2021-02-07 04:33:44" data-bp-timestamp={1612672424}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>wow</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-4062" href="#acomment-4062">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4062/?cid=4062&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4098" className="comment-item" data-bp-activity-comment-id={4098}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-4098" className="activity-time-since"><time className="time-since" dateTime="2021-02-08 23:30:30" data-bp-timestamp={1612827030}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span><a href="https://youtu.be/bx-0YlFprqc" rel="nofollow ugc">https://youtu.be/bx-0YlFprqc</a></span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-4098" href="#acomment-4098">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4098/?cid=4098&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4334" className="comment-item" data-bp-activity-comment-id={4334}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/175/#acomment-4334" className="activity-time-since"><time className="time-since" dateTime="2021-02-19 20:47:01" data-bp-timestamp={1613767621}>2 weeks, 6 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>me gusta</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-175-from-4334" href="#acomment-4334">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4334/?cid=4334&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-175" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-175" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-175" className="ac-input bp-suggestions" name="ac_input_175" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={175} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_175" name="_wpnonce_new_activity_comment_175" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="activity rtmedia_update activity-item has-comments date-recorded-1580062602 animate-item slideInUp text-rendered" id="activity-174" data-bp-activity-id={174} data-bp-timestamp={1580062602} style={{visibility: 'visible', animationName: 'slideInUp'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/sophia/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/6/5e2cccd55d57d-bpfull.jpg" className="avatar user-6-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Sophia Lee" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/sophia/">Sophia Lee</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <div className="shortcontent">
                                    <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to u<span className="ellip-dots">...</span></span>
                                  </div>
                                  <div className="allcontent" style={{display: 'none'}}>
                                    <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span>
                                  </div>
                                  <span><a href="javascript://nop/" className="morelink">read more</a></span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-1 rtm-activity-photo-list">
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/sophia/media/56/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="woman-wearing-red-long-sleeved-dress-holding-pink-petaled-807842" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/6/2020/01/woman-wearing-red-long-sleeved-dress-holding-pink-petaled-807842-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								woman-wearing-red-long-sleeved-dress-holding-pink-petaled-807842</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/sophia/media/56/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-174" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=174/#ac-form-174" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">8</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/174/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-174" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">2</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-174/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 8 comments</button></li>
                              <li id="acomment-3650" className="comment-item bp-hidden" data-bp-activity-comment-id={3650} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/174/#acomment-3650" className="activity-time-since"><time className="time-since" dateTime="2021-01-23 02:31:21" data-bp-timestamp={1611369081}>1 month, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Looks great.</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-174-from-3650" href="#acomment-3650">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3650/?cid=3650&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-3996" className="comment-item bp-hidden" data-bp-activity-comment-id={3996} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/174/#acomment-3996" className="activity-time-since"><time className="time-since" dateTime="2021-02-04 23:28:40" data-bp-timestamp={1612481320}>1 month ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>I disagree sir.  Wait, thats me.</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-174-from-3996" href="#acomment-3996">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3996/?cid=3996&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3762" className="comment-item bp-hidden" data-bp-activity-comment-id={3762} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/174/#acomment-3762" className="activity-time-since"><time className="time-since" dateTime="2021-01-27 18:01:38" data-bp-timestamp={1611770498}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>👏 wow </span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-174-from-3762" href="#acomment-3762">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3762/?cid=3762&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4005" className="comment-item" data-bp-activity-comment-id={4005}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/174/#acomment-4005" className="activity-time-since"><time className="time-since" dateTime="2021-02-05 07:56:57" data-bp-timestamp={1612511817}>1 month ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Nyc<br />
                                      </span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-174-from-4005" href="#acomment-4005">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4005/?cid=4005&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4212" className="comment-item" data-bp-activity-comment-id={4212}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/174/#acomment-4212" className="activity-time-since"><time className="time-since" dateTime="2021-02-13 19:36:58" data-bp-timestamp={1613245018}>3 weeks, 5 days ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>test</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-174-from-4212" href="#acomment-4212">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4212/?cid=4212&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-4698" className="comment-item" data-bp-activity-comment-id={4698}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/174/#acomment-4698" className="activity-time-since"><time className="time-since" dateTime="2021-03-05 07:50:44" data-bp-timestamp={1614930644}>6 days, 21 hours ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>good</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-174-from-4698" href="#acomment-4698">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4698/?cid=4698&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4755" className="comment-item" data-bp-activity-comment-id={4755}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/174/#acomment-4755" className="activity-time-since"><time className="time-since" dateTime="2021-03-07 21:03:31" data-bp-timestamp={1615151011}>4 days, 8 hours ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Wow 🥰</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-174-from-4755" href="#acomment-4755">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4755/?cid=4755&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4810" className="comment-item" data-bp-activity-comment-id={4810}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/174/#acomment-4810" className="activity-time-since"><time className="time-since" dateTime="2021-03-11 19:04:44" data-bp-timestamp={1615489484}>10 hours, 13 minutes ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Teste</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-174-from-4810" href="#acomment-4810">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4810/?cid=4810&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-174" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-174" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-174" className="ac-input bp-suggestions" name="ac_input_174" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={174} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_174" name="_wpnonce_new_activity_comment_174" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="groups joined_group activity-item mini date-recorded-1580062249 animate-item slideInUp" id="activity-173" data-bp-activity-id={173} data-bp-timestamp={1580062249} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/julia/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/13/5e2cfee616ad3-bpfull.jpg" className="avatar user-13-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Julia Cox" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/julia/">Julia Cox</a> joined the group <a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/4/5e2cc339c9d04-bpthumb.jpg" className="avatar group-4-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Backpakers Club" />Backpakers Club</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="beehive-mini-activity group">
                                <div className="mini-activity-inner">
                                  <div className="mini-cover" style={{backgroundImage: 'url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/groups/4/cover-image/5e2cc36891950-bp-cover-image.jpg)'}} />
                                  <div className="mini-content">
                                    <div className="mini-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/4/5e2cc339c7b56-bpfull.jpg" className="avatar group-4-avatar avatar-200 photo" width={200} height={200} alt="Profile Photo" />				</a>
                                    </div>
                                    <div className="mini-info">
                                      <h5 className="mini-title"><a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/" className="ellipsis">Backpakers Club</a></h5>
                                      <div className="mini-meta">
                                        <span className="ellipsis"><i className="uil-globe" />public</span>
                                      </div>
                                    </div>
                                    <div className="mini-actions">
                                      <div className="group-button public generic-button" id="groupbutton-4"><a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/join/?_wpnonce=5afe2997cc" className="group-button join-group" data-bp-btn-action="join_group">Join Group</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/173/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-173" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                        </li>
                        <li className="activity activity_update activity-item has-comments date-recorded-1580062207 animate-item slideInUp text-rendered" id="activity-172" data-bp-activity-id={172} data-bp-timestamp={1580062207} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/julia/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/13/5e2cfee616ad3-bpfull.jpg" className="avatar user-13-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Julia Cox" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/julia/">Julia Cox</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="activity-inner-text">
                                <div className="shortcontent">
                                  <p style={{marginBottom: 0}}>Here is a cool song:<br />
                                    <iframe loading="lazy" title="2-Hours Epic Music Mix | The Best Of Epic Music - Best Of Collection" width={1140} height={641} src="https://www.youtube.com/embed/1fRjwBtVNEs?feature=oembed" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><br />
                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee <span className="ellip-dots">...</span>
                                  </p>
                                </div>
                                <div className="allcontent" style={{display: 'none'}}>
                                  <p>Here is a cool song:<br />
                                    <iframe loading="lazy" title="2-Hours Epic Music Mix | The Best Of Epic Music - Best Of Collection" width={1140} height={641} src="https://www.youtube.com/embed/1fRjwBtVNEs?feature=oembed" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><br />
                                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                  </p>
                                </div>
                                <span><a href="javascript://nop/" className="morelink">read more</a></span>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-172" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=172/#ac-form-172" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">10</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/favorite/172/?_wpnonce=6fee9e1a1a" className="button fav bp-secondary-action bp-tooltip" data-bp-tooltip="Mark as Favorite" aria-pressed="false"><span className="bp-screen-reader-text">Mark as Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-172" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">2</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-172/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 10 comments</button></li>
                              <li id="acomment-359" className="comment-item bp-hidden" data-bp-activity-comment-id={359} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-359" className="activity-time-since"><time className="time-since" dateTime="2020-07-23 12:34:54" data-bp-timestamp={1595507694}>7 months, 3 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Hey </span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-359" href="#acomment-359">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/359/?cid=359&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-536" className="comment-item bp-hidden" data-bp-activity-comment-id={536} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-536" className="activity-time-since"><time className="time-since" dateTime="2020-08-03 07:32:50" data-bp-timestamp={1596439970}>7 months, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Great</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-536" href="#acomment-536">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/536/?cid=536&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-1001" className="comment-item bp-hidden" data-bp-activity-comment-id={1001} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-1001" className="activity-time-since"><time className="time-since" dateTime="2020-08-31 10:12:27" data-bp-timestamp={1598868747}>6 months, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>Dddd</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-1001" href="#acomment-1001">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1001/?cid=1001&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-1507" className="comment-item bp-hidden" data-bp-activity-comment-id={1507} style={{display: 'none'}}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-1507" className="activity-time-since"><time className="time-since" dateTime="2020-10-07 02:33:11" data-bp-timestamp={1602037991}>5 months ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>eeee</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-1507" href="#acomment-1507">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1507/?cid=1507&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                  <li id="acomment-1200" className="comment-item bp-hidden" data-bp-activity-comment-id={1200} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-1200" className="activity-time-since"><time className="time-since" dateTime="2020-09-15 16:29:07" data-bp-timestamp={1600187347}>5 months, 3 weeks ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>iuy</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-1200" href="#acomment-1200">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1200/?cid=1200&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-2477" className="comment-item" data-bp-activity-comment-id={2477}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-2477" className="activity-time-since"><time className="time-since" dateTime="2020-11-28 21:52:59" data-bp-timestamp={1606600379}>3 months, 1 week ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>Jupp</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-2477" href="#acomment-2477">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2477/?cid=2477&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-2555" className="comment-item" data-bp-activity-comment-id={2555}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-2555" className="activity-time-since"><time className="time-since" dateTime="2020-12-01 20:48:59" data-bp-timestamp={1606855739}>3 months, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Cool</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-2555" href="#acomment-2555">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2555/?cid=2555&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-2848" className="comment-item" data-bp-activity-comment-id={2848}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-2848" className="activity-time-since"><time className="time-since" dateTime="2020-12-15 17:36:38" data-bp-timestamp={1608053798}>2 months, 3 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>heellloajsdljkasld<br />
                                      </span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-2848" href="#acomment-2848">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2848/?cid=2848&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3578" className="comment-item" data-bp-activity-comment-id={3578}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-3578" className="activity-time-since"><time className="time-since" dateTime="2021-01-20 21:03:41" data-bp-timestamp={1611176621}>1 month, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Great!</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-3578" href="#acomment-3578">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3578/?cid=3578&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4759" className="comment-item" data-bp-activity-comment-id={4759}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/172/#acomment-4759" className="activity-time-since"><time className="time-since" dateTime="2021-03-08 12:32:31" data-bp-timestamp={1615206751}>3 days, 16 hours ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Great!</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-172-from-4759" href="#acomment-4759">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4759/?cid=4759&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-172" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-172" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-172" className="ac-input bp-suggestions" name="ac_input_172" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={172} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_172" name="_wpnonce_new_activity_comment_172" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="activity activity_update activity-item has-comments date-recorded-1580054427 animate-item slideInUp text-rendered" id="activity-171" data-bp-activity-id={171} data-bp-timestamp={1580054427} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/jennie/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/16/5e2d07dbc43f2-bpfull.jpg" className="avatar user-16-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Jennie Ferguson" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/jennie/">Jennie Ferguson</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="activity-inner-text">
                                <div className="shortcontent">
                                  <p style={{marginBottom: 0}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp<span className="ellip-dots">...</span></p>
                                </div>
                                <div className="allcontent" style={{display: 'none'}}>
                                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </div>
                                <span><a href="javascript://nop/" className="morelink">read more</a></span>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-171" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=171/#ac-form-171" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">1</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/favorite/171/?_wpnonce=6fee9e1a1a" className="button fav bp-secondary-action bp-tooltip" data-bp-tooltip="Mark as Favorite" aria-pressed="false"><span className="bp-screen-reader-text">Mark as Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-171" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li id="acomment-4437" className="comment-item" data-bp-activity-comment-id={4437}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/171/#acomment-4437" className="activity-time-since"><time className="time-since" dateTime="2021-02-23 17:50:15" data-bp-timestamp={1614102615}>2 weeks, 2 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Hello</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-171-from-4437" href="#acomment-4437">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4437/?cid=4437&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-171" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-171" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-171" className="ac-input bp-suggestions" name="ac_input_171" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={171} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_171" name="_wpnonce_new_activity_comment_171" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="groups joined_group activity-item mini date-recorded-1580053902 animate-item slideInUp" id="activity-167" data-bp-activity-id={167} data-bp-timestamp={1580053902} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/jonathon/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291542c-bpfull.jpg" className="avatar user-14-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of John Thompson" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/jonathon/">John Thompson</a> joined the group <a href="https://mythemestore.com/beehive-preview/groups/travelers/"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/2/5e2cba9056148-bpthumb.jpg" className="avatar group-2-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Travelers" />Travelers</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="beehive-mini-activity group">
                                <div className="mini-activity-inner">
                                  <div className="mini-cover" style={{backgroundImage: 'url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/groups/2/cover-image/5e2cbac728acb-bp-cover-image.jpg)'}} />
                                  <div className="mini-content">
                                    <div className="mini-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/groups/travelers/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/2/5e2cba9053d1a-bpfull.jpg" className="avatar group-2-avatar avatar-200 photo" width={200} height={200} alt="Profile Photo" />				</a>
                                    </div>
                                    <div className="mini-info">
                                      <h5 className="mini-title"><a href="https://mythemestore.com/beehive-preview/groups/travelers/" className="ellipsis">Travelers</a></h5>
                                      <div className="mini-meta">
                                        <span className="ellipsis"><i className="uil-globe" />public</span>
                                      </div>
                                    </div>
                                    <div className="mini-actions">
                                      <div className="group-button public generic-button" id="groupbutton-2"><a href="https://mythemestore.com/beehive-preview/groups/travelers/join/?_wpnonce=5afe2997cc" className="group-button join-group" data-bp-btn-action="join_group">Join Group</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/favorite/167/?_wpnonce=6fee9e1a1a" className="button fav bp-secondary-action bp-tooltip" data-bp-tooltip="Mark as Favorite" aria-pressed="false"><span className="bp-screen-reader-text">Mark as Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action like" id="like-activity-167"><i className="uil-thumbs-up" /><span className="like-text">Like</span> <span className="count">1</span></a></div>
                            </div>
                          </div>
                        </li>
                        <li className="groups bbp_topic_create activity-item date-recorded-1580053868 animate-item slideInUp" id="activity-166" data-bp-activity-id={166} data-bp-timestamp={1580053868} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/jonathon/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291542c-bpfull.jpg" className="avatar user-14-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of John Thompson" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/jonathon/">Jonathon Thompson</a> started the topic <a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/forum/topic/dear-backpackers-share-your-positive-experiences/"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/4/5e2cc339c9d04-bpthumb.jpg" className="avatar group-4-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Backpakers Club" />Dear backpackers, share your positive experiences</a> in the forum <a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/forum/">Backpakers Club</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web…<span className="activity-read-more" id="activity-read-more-166"><a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/forum/topic/dear-backpackers-share-your-positive-experiences/" rel="nofollow ugc">Read more</a></span></p>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/166/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action like" id="like-activity-166"><i className="uil-thumbs-up" /><span className="like-text">Like</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li id="acomment-4648" className="comment-item" data-bp-activity-comment-id={4648}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/166/#acomment-4648" className="activity-time-since"><time className="time-since" dateTime="2021-03-03 17:57:27" data-bp-timestamp={1614794247}>1 week, 1 day ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>fhgfhg</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4648/?cid=4648&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4733" className="comment-item" data-bp-activity-comment-id={4733}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/166/#acomment-4733" className="activity-time-since"><time className="time-since" dateTime="2021-03-07 02:57:56" data-bp-timestamp={1615085876}>5 days, 2 hours ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>hippity hoppity get off my property<br />
                                          </span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4733/?cid=4733&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4771" className="comment-item" data-bp-activity-comment-id={4771}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/166/#acomment-4771" className="activity-time-since"><time className="time-since" dateTime="2021-03-08 23:01:16" data-bp-timestamp={1615244476}>3 days, 6 hours ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Lol</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4771/?cid=4771&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="activity rtmedia_update activity-item has-comments date-recorded-1580009935 animate-item slideInUp text-rendered" id="activity-161" data-bp-activity-id={161} data-bp-timestamp={1580009935} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/jennie/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/16/5e2d07dbc43f2-bpfull.jpg" className="avatar user-16-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Jennie Ferguson" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/jennie/">Jennie Ferguson</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-1 rtm-activity-photo-list">
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/jennie/media/52/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="red-cardinal-bird-on-tree-branch-905248 (1)" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/16/2020/01/red-cardinal-bird-on-tree-branch-905248-1-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								red-cardinal-bird-on-tree-branch-905248 (1)</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/jennie/media/52/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-161" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=161/#ac-form-161" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">8</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/161/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-161" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">2</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-161/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 8 comments</button></li>
                              <li id="acomment-276" className="comment-item bp-hidden" data-bp-activity-comment-id={276} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/161/#acomment-276" className="activity-time-since"><time className="time-since" dateTime="2020-07-18 15:34:04" data-bp-timestamp={1595086444}>7 months, 3 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Nice<br />
                                      </span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-161-from-276" href="#acomment-276">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/276/?cid=276&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-605" className="comment-item bp-hidden" data-bp-activity-comment-id={605} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/161/#acomment-605" className="activity-time-since"><time className="time-since" dateTime="2020-08-06 12:48:11" data-bp-timestamp={1596718091}>7 months, 1 week ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>Very… Nice</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-161-from-605" href="#acomment-605">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/605/?cid=605&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-884" className="comment-item bp-hidden" data-bp-activity-comment-id={884} style={{display: 'none'}}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/161/#acomment-884" className="activity-time-since"><time className="time-since" dateTime="2020-08-22 06:55:51" data-bp-timestamp={1598079351}>6 months, 3 weeks ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>Nice</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-161-from-884" href="#acomment-884">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/884/?cid=884&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-1588" className="comment-item" data-bp-activity-comment-id={1588}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/161/#acomment-1588" className="activity-time-since"><time className="time-since" dateTime="2020-10-13 20:09:04" data-bp-timestamp={1602619744}>4 months, 4 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Hey</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-161-from-1588" href="#acomment-1588">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1588/?cid=1588&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-1978" className="comment-item" data-bp-activity-comment-id={1978}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/161/#acomment-1978" className="activity-time-since"><time className="time-since" dateTime="2020-11-06 17:03:47" data-bp-timestamp={1604682227}>4 months ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>czxvzxsdf</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-161-from-1978" href="#acomment-1978">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1978/?cid=1978&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-2355" className="comment-item" data-bp-activity-comment-id={2355}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/161/#acomment-2355" className="activity-time-since"><time className="time-since" dateTime="2020-11-24 09:00:26" data-bp-timestamp={1606208426}>3 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Nice</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-161-from-2355" href="#acomment-2355">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2355/?cid=2355&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3605" className="comment-item" data-bp-activity-comment-id={3605}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/161/#acomment-3605" className="activity-time-since"><time className="time-since" dateTime="2021-01-21 21:29:30" data-bp-timestamp={1611264570}>1 month, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>🔥🔥🔥</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-161-from-3605" href="#acomment-3605">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3605/?cid=3605&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4388" className="comment-item" data-bp-activity-comment-id={4388}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/161/#acomment-4388" className="activity-time-since"><time className="time-since" dateTime="2021-02-22 06:19:56" data-bp-timestamp={1613974796}>2 weeks, 3 days ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>❤❤❤❤</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-161-from-4388" href="#acomment-4388">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4388/?cid=4388&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-161" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-161" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-161" className="ac-input bp-suggestions" name="ac_input_161" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={161} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_161" name="_wpnonce_new_activity_comment_161" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="groups joined_group activity-item mini has-comments date-recorded-1580009705 animate-item slideInUp" id="activity-159" data-bp-activity-id={159} data-bp-timestamp={1580009705} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/jennie/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/16/5e2d07dbc43f2-bpfull.jpg" className="avatar user-16-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Jennie Ferguson" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/jennie/">Jennie Ferguson</a> joined the group <a href="https://mythemestore.com/beehive-preview/groups/music-lovers/"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/3/6021cb895d1a1-bpthumb.jpg" className="avatar group-3-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Müzik Severler" />Müzik Severler</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="beehive-mini-activity group">
                                <div className="mini-activity-inner">
                                  <div className="mini-cover" style={{backgroundImage: 'url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/groups/3/cover-image/6047eed36cf7b-bp-cover-image.jpg)'}} />
                                  <div className="mini-content">
                                    <div className="mini-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/groups/music-lovers/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/3/6021cb894ec60-bpfull.jpg" className="avatar group-3-avatar avatar-200 photo" width={200} height={200} alt="Profile Photo" />				</a>
                                    </div>
                                    <div className="mini-info">
                                      <h5 className="mini-title"><a href="https://mythemestore.com/beehive-preview/groups/music-lovers/" className="ellipsis">Müzik Severler</a></h5>
                                      <div className="mini-meta">
                                        <span className="ellipsis"><i className="uil-globe" />private</span>
                                      </div>
                                    </div>
                                    <div className="mini-actions">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-159" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=159/#ac-form-159" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">7</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/favorite/159/?_wpnonce=6fee9e1a1a" className="button fav bp-secondary-action bp-tooltip" data-bp-tooltip="Mark as Favorite" aria-pressed="false"><span className="bp-screen-reader-text">Mark as Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-159" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-159/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 7 comments</button></li>
                              <li id="acomment-740" className="comment-item bp-hidden" data-bp-activity-comment-id={740} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/159/#acomment-740" className="activity-time-since"><time className="time-since" dateTime="2020-08-15 22:16:53" data-bp-timestamp={1597529813}>6 months, 4 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>O</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-159-from-740" href="#acomment-740">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/740/?cid=740&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-1406" className="comment-item bp-hidden" data-bp-activity-comment-id={1406} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/159/#acomment-1406" className="activity-time-since"><time className="time-since" dateTime="2020-10-01 09:34:20" data-bp-timestamp={1601544860}>5 months, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Hello</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-159-from-1406" href="#acomment-1406">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1406/?cid=1406&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3698" className="comment-item" data-bp-activity-comment-id={3698}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/159/#acomment-3698" className="activity-time-since"><time className="time-since" dateTime="2021-01-24 15:11:28" data-bp-timestamp={1611501088}>1 month, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>lo</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-159-from-3698" href="#acomment-3698">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3698/?cid=3698&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4194" className="comment-item" data-bp-activity-comment-id={4194}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/159/#acomment-4194" className="activity-time-since"><time className="time-since" dateTime="2021-02-13 02:26:58" data-bp-timestamp={1613183218}>3 weeks, 6 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>❤😍😘😭😭</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-159-from-4194" href="#acomment-4194">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4194/?cid=4194&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4224" className="comment-item" data-bp-activity-comment-id={4224}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/159/#acomment-4224" className="activity-time-since"><time className="time-since" dateTime="2021-02-14 11:59:58" data-bp-timestamp={1613303998}>3 weeks, 4 days ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>hello</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-159-from-4224" href="#acomment-4224">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4224/?cid=4224&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                    <ul>
                                      <li id="acomment-4390" className="comment-item" data-bp-activity-comment-id={4390}>
                                        <div className="acomment-avatar item-avatar">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">
                                            <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                        </div>
                                        <div className="acomment-meta">
                                          <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/159/#acomment-4390" className="activity-time-since"><time className="time-since" dateTime="2021-02-22 08:42:17" data-bp-timestamp={1613983337}>2 weeks, 3 days ago</time></a>
                                        </div>
                                        <div className="acomment-content">
                                          <div className="rtmedia-activity-container">
                                            <div className="rtmedia-activity-text">
                                              <span>❤😍😘😭😭</span>
                                            </div>
                                            <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                          </div>
                                        </div>
                                        <div className=" activity-meta action">
                                          <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-159-from-4390" href="#acomment-4390">Reply</a></div>
                                          <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4390/?cid=4390&_wpnonce=3ba22d802b">Delete</a></div>
                                        </div>
                                        <ul>
                                          <li id="acomment-4730" className="comment-item" data-bp-activity-comment-id={4730}>
                                            <div className="acomment-avatar item-avatar">
                                              <a href="https://mythemestore.com/beehive-preview/members/user/">
                                                <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                            </div>
                                            <div className="acomment-meta">
                                              <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/159/#acomment-4730" className="activity-time-since"><time className="time-since" dateTime="2021-03-07 00:46:49" data-bp-timestamp={1615078009}>5 days, 4 hours ago</time></a>
                                            </div>
                                            <div className="acomment-content">
                                              <div className="rtmedia-activity-container">
                                                <div className="rtmedia-activity-text">
                                                  <span>still looking for the icons</span>
                                                </div>
                                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                              </div>
                                            </div>
                                            <div className=" activity-meta action">
                                              <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-159-from-4730" href="#acomment-4730">Reply</a></div>
                                              <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4730/?cid=4730&_wpnonce=3ba22d802b">Delete</a></div>
                                            </div>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-159" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-159" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-159" className="ac-input bp-suggestions" name="ac_input_159" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={159} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_159" name="_wpnonce_new_activity_comment_159" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="activity rtmedia_update activity-item has-comments date-recorded-1580008904 animate-item slideInUp text-rendered" id="activity-149" data-bp-activity-id={149} data-bp-timestamp={1580008904} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/richard/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/15/5e2d0381c5f1e-bpfull.jpg" className="avatar user-15-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Richard Bell" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/richard/">Richard Bell</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-3 rtm-activity-photo-list">
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/richard/media/51/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="gray-high-rise-buildings-936722" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/15/2020/01/gray-high-rise-buildings-936722-1-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								gray-high-rise-buildings-936722</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/richard/media/51/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/richard/media/50/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="photo-of-boat-going-through-river-in-between-highrise-1209982" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/15/2020/01/photo-of-boat-going-through-river-in-between-highrise-1209982-1-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								photo-of-boat-going-through-river-in-between-highrise-1209982</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/richard/media/50/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/richard/media/49/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="white-and-red-car-on-black-concrete-narrow-road-in-between-129830" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/15/2020/01/white-and-red-car-on-black-concrete-narrow-road-in-between-129830-1-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								white-and-red-car-on-black-concrete-narrow-road-in-between-129830</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/richard/media/49/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-149" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=149/#ac-form-149" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">11</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/149/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-149" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">2</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-149/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 11 comments</button></li>
                              <li id="acomment-1681" className="comment-item bp-hidden" data-bp-activity-comment-id={1681} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-1681" className="activity-time-since"><time className="time-since" dateTime="2020-10-19 13:56:48" data-bp-timestamp={1603115808}>4 months, 3 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Nsnsn</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-1681" href="#acomment-1681">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1681/?cid=1681&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-1815" className="comment-item bp-hidden" data-bp-activity-comment-id={1815} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-1815" className="activity-time-since"><time className="time-since" dateTime="2020-10-28 17:59:01" data-bp-timestamp={1603907941}>4 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Hi</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-1815" href="#acomment-1815">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1815/?cid=1815&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-2329" className="comment-item bp-hidden" data-bp-activity-comment-id={2329} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-2329" className="activity-time-since"><time className="time-since" dateTime="2020-11-22 15:48:52" data-bp-timestamp={1606060132}>3 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Nice</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-2329" href="#acomment-2329">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2329/?cid=2329&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-2509" className="comment-item bp-hidden" data-bp-activity-comment-id={2509} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-2509" className="activity-time-since"><time className="time-since" dateTime="2020-11-29 22:07:54" data-bp-timestamp={1606687674}>3 months, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>hello</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-2509" href="#acomment-2509">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2509/?cid=2509&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-2853" className="comment-item bp-hidden" data-bp-activity-comment-id={2853} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-2853" className="activity-time-since"><time className="time-since" dateTime="2020-12-16 02:50:56" data-bp-timestamp={1608087056}>2 months, 3 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>wow</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-2853" href="#acomment-2853">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2853/?cid=2853&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-2934" className="comment-item bp-hidden" data-bp-activity-comment-id={2934} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-2934" className="activity-time-since"><time className="time-since" dateTime="2020-12-22 11:56:59" data-bp-timestamp={1608638219}>2 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>sdssds</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-2934" href="#acomment-2934">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2934/?cid=2934&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3614" className="comment-item" data-bp-activity-comment-id={3614}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-3614" className="activity-time-since"><time className="time-since" dateTime="2021-01-22 04:43:21" data-bp-timestamp={1611290601}>1 month, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Good to see it </span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-3614" href="#acomment-3614">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3614/?cid=3614&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4391" className="comment-item" data-bp-activity-comment-id={4391}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-4391" className="activity-time-since"><time className="time-since" dateTime="2021-02-22 08:42:28" data-bp-timestamp={1613983348}>2 weeks, 3 days ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>❤😍😘😭😭</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-4391" href="#acomment-4391">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4391/?cid=4391&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-4423" className="comment-item" data-bp-activity-comment-id={4423}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-4423" className="activity-time-since"><time className="time-since" dateTime="2021-02-23 11:11:44" data-bp-timestamp={1614078704}>2 weeks, 2 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>💙💚💛💜💛💛💛💛💙💗💚💚</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-4423" href="#acomment-4423">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4423/?cid=4423&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4424" className="comment-item" data-bp-activity-comment-id={4424}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-4424" className="activity-time-since"><time className="time-since" dateTime="2021-02-23 11:11:57" data-bp-timestamp={1614078717}>2 weeks, 2 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>🙏🙏🙏👯💃🏾🗣🗣🤰🏽</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-4424" href="#acomment-4424">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4424/?cid=4424&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4425" className="comment-item" data-bp-activity-comment-id={4425}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/149/#acomment-4425" className="activity-time-since"><time className="time-since" dateTime="2021-02-23 11:12:05" data-bp-timestamp={1614078725}>2 weeks, 2 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>😍😊😊😂😃🤣😎😋😄🤗😉🤗</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-149-from-4425" href="#acomment-4425">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4425/?cid=4425&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-149" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-149" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-149" className="ac-input bp-suggestions" name="ac_input_149" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={149} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_149" name="_wpnonce_new_activity_comment_149" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="activity rtmedia_update activity-item has-comments date-recorded-1580008609 animate-item slideInUp text-rendered" id="activity-147" data-bp-activity-id={147} data-bp-timestamp={1580008609} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/richard/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/15/5e2d0381c5f1e-bpfull.jpg" className="avatar user-15-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Richard Bell" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/richard/">Richard Bell</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <div className="shortcontent">
                                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in cul<span className="ellip-dots">...</span></span>
                                  </div>
                                  <div className="allcontent" style={{display: 'none'}}>
                                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</span>
                                  </div>
                                  <span><a href="javascript://nop/" className="morelink">read more</a></span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-1 rtm-activity-video-list rtm-activity-list-rendered">
                                  <li className="rtmedia-list-item media-type-video">
                                    <div className="rtmedia-item-thumbnail">
                                      <video poster="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/15/2020/01/1580008609-8_1.jpg" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/15/2020/01/8.mp4" width={320} height={240} className="wp-video-shortcode" id="rt_media_video_45" controls="controls" preload="true" />
                                    </div>
                                    <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                      <p>							<a href="https://mythemestore.com/beehive-preview/members/richard/media/45/" rel="nofollow ugc"><br />
                                          8<br />
                                        </a>
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-147" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=147/#ac-form-147" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">10</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/147/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-147" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-147/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 10 comments</button></li>
                              <li id="acomment-393" className="comment-item bp-hidden" data-bp-activity-comment-id={393} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-393" className="activity-time-since"><time className="time-since" dateTime="2020-07-24 23:16:58" data-bp-timestamp={1595632618}>7 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Wow</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-393" href="#acomment-393">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/393/?cid=393&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-551" className="comment-item bp-hidden" data-bp-activity-comment-id={551} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-551" className="activity-time-since"><time className="time-since" dateTime="2020-08-03 21:16:18" data-bp-timestamp={1596489378}>7 months, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>cfgdgd</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-551" href="#acomment-551">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/551/?cid=551&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-690" className="comment-item bp-hidden" data-bp-activity-comment-id={690} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-690" className="activity-time-since"><time className="time-since" dateTime="2020-08-11 15:56:00" data-bp-timestamp={1597161360}>7 months ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>coucou</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-690" href="#acomment-690">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/690/?cid=690&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-838" className="comment-item bp-hidden" data-bp-activity-comment-id={838} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-838" className="activity-time-since"><time className="time-since" dateTime="2020-08-20 04:16:04" data-bp-timestamp={1597896964}>6 months, 3 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>beautifgu;</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-838" href="#acomment-838">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/838/?cid=838&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-1161" className="comment-item bp-hidden" data-bp-activity-comment-id={1161} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-1161" className="activity-time-since"><time className="time-since" dateTime="2020-09-11 22:19:39" data-bp-timestamp={1599862779}>6 months ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>yooo</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-1161" href="#acomment-1161">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1161/?cid=1161&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-2445" className="comment-item" data-bp-activity-comment-id={2445}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-2445" className="activity-time-since"><time className="time-since" dateTime="2020-11-26 19:00:47" data-bp-timestamp={1606417247}>3 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>cool</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-2445" href="#acomment-2445">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2445/?cid=2445&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3953" className="comment-item" data-bp-activity-comment-id={3953}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-3953" className="activity-time-since"><time className="time-since" dateTime="2021-02-02 17:26:23" data-bp-timestamp={1612286783}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>hh</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-3953" href="#acomment-3953">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3953/?cid=3953&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4248" className="comment-item" data-bp-activity-comment-id={4248}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-4248" className="activity-time-since"><time className="time-since" dateTime="2021-02-15 11:06:05" data-bp-timestamp={1613387165}>3 weeks, 3 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Nice</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-4248" href="#acomment-4248">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4248/?cid=4248&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4455" className="comment-item" data-bp-activity-comment-id={4455}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-4455" className="activity-time-since"><time className="time-since" dateTime="2021-02-24 08:14:19" data-bp-timestamp={1614154459}>2 weeks, 1 day ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>iyimis lan</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-4455" href="#acomment-4455">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4455/?cid=4455&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4689" className="comment-item" data-bp-activity-comment-id={4689}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/147/#acomment-4689" className="activity-time-since"><time className="time-since" dateTime="2021-03-05 02:21:51" data-bp-timestamp={1614910911}>1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>user</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-147-from-4689" href="#acomment-4689">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4689/?cid=4689&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-147" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-147" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-147" className="ac-input bp-suggestions" name="ac_input_147" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={147} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_147" name="_wpnonce_new_activity_comment_147" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="groups joined_group activity-item mini date-recorded-1580008529 animate-item slideInUp" id="activity-146" data-bp-activity-id={146} data-bp-timestamp={1580008529} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/richard/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/15/5e2d0381c5f1e-bpfull.jpg" className="avatar user-15-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Richard Bell" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/richard/">Richard Bell</a> joined the group <a href="https://mythemestore.com/beehive-preview/groups/travelers/"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/2/5e2cba9056148-bpthumb.jpg" className="avatar group-2-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Travelers" />Travelers</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="beehive-mini-activity group">
                                <div className="mini-activity-inner">
                                  <div className="mini-cover" style={{backgroundImage: 'url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/groups/2/cover-image/5e2cbac728acb-bp-cover-image.jpg)'}} />
                                  <div className="mini-content">
                                    <div className="mini-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/groups/travelers/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/2/5e2cba9053d1a-bpfull.jpg" className="avatar group-2-avatar avatar-200 photo" width={200} height={200} alt="Profile Photo" />				</a>
                                    </div>
                                    <div className="mini-info">
                                      <h5 className="mini-title"><a href="https://mythemestore.com/beehive-preview/groups/travelers/" className="ellipsis">Travelers</a></h5>
                                      <div className="mini-meta">
                                        <span className="ellipsis"><i className="uil-globe" />public</span>
                                      </div>
                                    </div>
                                    <div className="mini-actions">
                                      <div className="group-button public generic-button" id="groupbutton-2"><a href="https://mythemestore.com/beehive-preview/groups/travelers/join/?_wpnonce=5afe2997cc" className="group-button join-group" data-bp-btn-action="join_group">Join Group</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/146/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-146" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li id="acomment-1771" className="comment-item" data-bp-activity-comment-id={1771}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/146/#acomment-1771" className="activity-time-since"><time className="time-since" dateTime="2020-10-26 08:35:06" data-bp-timestamp={1603701306}>4 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>cc</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1771/?cid=1771&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4239" className="comment-item" data-bp-activity-comment-id={4239}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/146/#acomment-4239" className="activity-time-since"><time className="time-since" dateTime="2021-02-14 19:45:26" data-bp-timestamp={1613331926}>3 weeks, 4 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>hhhxx</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4239/?cid=4239&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4240" className="comment-item" data-bp-activity-comment-id={4240}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/146/#acomment-4240" className="activity-time-since"><time className="time-since" dateTime="2021-02-14 19:45:34" data-bp-timestamp={1613331934}>3 weeks, 4 days ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>jjhgg</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4240/?cid=4240&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="groups joined_group activity-item mini date-recorded-1580008525 animate-item slideInUp" id="activity-145" data-bp-activity-id={145} data-bp-timestamp={1580008525} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/richard/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/15/5e2d0381c5f1e-bpfull.jpg" className="avatar user-15-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Richard Bell" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/richard/">Richard Bell</a> joined the group <a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/4/5e2cc339c9d04-bpthumb.jpg" className="avatar group-4-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Backpakers Club" />Backpakers Club</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="beehive-mini-activity group">
                                <div className="mini-activity-inner">
                                  <div className="mini-cover" style={{backgroundImage: 'url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/groups/4/cover-image/5e2cc36891950-bp-cover-image.jpg)'}} />
                                  <div className="mini-content">
                                    <div className="mini-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/4/5e2cc339c7b56-bpfull.jpg" className="avatar group-4-avatar avatar-200 photo" width={200} height={200} alt="Profile Photo" />				</a>
                                    </div>
                                    <div className="mini-info">
                                      <h5 className="mini-title"><a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/" className="ellipsis">Backpakers Club</a></h5>
                                      <div className="mini-meta">
                                        <span className="ellipsis"><i className="uil-globe" />public</span>
                                      </div>
                                    </div>
                                    <div className="mini-actions">
                                      <div className="group-button public generic-button" id="groupbutton-4"><a href="https://mythemestore.com/beehive-preview/groups/backpakers-club/join/?_wpnonce=5afe2997cc" className="group-button join-group" data-bp-btn-action="join_group">Join Group</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/145/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-145" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                        </li>
                        <li className="activity rtmedia_update activity-item has-comments date-recorded-1580008011 animate-item slideInUp text-rendered" id="activity-141" data-bp-activity-id={141} data-bp-timestamp={1580008011} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/jonathon/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/14/5e2d01291542c-bpfull.jpg" className="avatar user-14-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of John Thompson" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/jonathon/">John Thompson</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-4 rtm-activity-photo-list">
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/jonathon/media/44/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="woman-holding-black-dslr-camera-167832" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/14/2020/01/woman-holding-black-dslr-camera-167832-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								woman-holding-black-dslr-camera-167832</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/jonathon/media/44/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/jonathon/media/43/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="person-holding-camera-2025819" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/14/2020/01/person-holding-camera-2025819-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								person-holding-camera-2025819</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/jonathon/media/43/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/jonathon/media/42/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="boy-using-camera-near-green-leaf-plants-1374510" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/14/2020/01/boy-using-camera-near-green-leaf-plants-1374510-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								boy-using-camera-near-green-leaf-plants-1374510</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/jonathon/media/42/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/jonathon/media/41/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="close-up-photo-of-canon-dslr-camera-1561081" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/14/2020/01/close-up-photo-of-canon-dslr-camera-1561081-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								close-up-photo-of-canon-dslr-camera-1561081</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/jonathon/media/41/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-141" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=141/#ac-form-141" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">10</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/141/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-141" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-141/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 10 comments</button></li>
                              <li id="acomment-707" className="comment-item bp-hidden" data-bp-activity-comment-id={707} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-707" className="activity-time-since"><time className="time-since" dateTime="2020-08-13 09:53:44" data-bp-timestamp={1597312424}>7 months ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>test</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-707" href="#acomment-707">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/707/?cid=707&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-1089" className="comment-item bp-hidden" data-bp-activity-comment-id={1089} style={{display: 'none'}}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-1089" className="activity-time-since"><time className="time-since" dateTime="2020-09-07 22:56:42" data-bp-timestamp={1599519402}>6 months ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>jjjjj</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-1089" href="#acomment-1089">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1089/?cid=1089&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-994" className="comment-item bp-hidden" data-bp-activity-comment-id={994} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-994" className="activity-time-since"><time className="time-since" dateTime="2020-08-31 04:37:50" data-bp-timestamp={1598848670}>6 months, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Weegf</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-994" href="#acomment-994">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/994/?cid=994&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-1106" className="comment-item bp-hidden" data-bp-activity-comment-id={1106} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-1106" className="activity-time-since"><time className="time-since" dateTime="2020-09-09 07:01:01" data-bp-timestamp={1599634861}>6 months ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>hello</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-1106" href="#acomment-1106">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1106/?cid=1106&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-1404" className="comment-item bp-hidden" data-bp-activity-comment-id={1404} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-1404" className="activity-time-since"><time className="time-since" dateTime="2020-10-01 07:29:36" data-bp-timestamp={1601537376}>5 months, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>amazing shot</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-1404" href="#acomment-1404">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1404/?cid=1404&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-2444" className="comment-item" data-bp-activity-comment-id={2444}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-2444" className="activity-time-since"><time className="time-since" dateTime="2020-11-26 16:56:39" data-bp-timestamp={1606409799}>3 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>mmm</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-2444" href="#acomment-2444">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2444/?cid=2444&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4521" className="comment-item" data-bp-activity-comment-id={4521}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-4521" className="activity-time-since"><time className="time-since" dateTime="2021-02-25 11:16:02" data-bp-timestamp={1614251762}>2 weeks ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>ok</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-4521" href="#acomment-4521">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4521/?cid=4521&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-2789" className="comment-item" data-bp-activity-comment-id={2789}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-2789" className="activity-time-since"><time className="time-since" dateTime="2020-12-12 16:12:09" data-bp-timestamp={1607789529}>2 months, 4 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Like</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-2789" href="#acomment-2789">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2789/?cid=2789&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3691" className="comment-item" data-bp-activity-comment-id={3691}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-3691" className="activity-time-since"><time className="time-since" dateTime="2021-01-24 10:38:03" data-bp-timestamp={1611484683}>1 month, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>test</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-3691" href="#acomment-3691">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3691/?cid=3691&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4441" className="comment-item" data-bp-activity-comment-id={4441}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/141/#acomment-4441" className="activity-time-since"><time className="time-since" dateTime="2021-02-23 18:11:05" data-bp-timestamp={1614103865}>2 weeks, 2 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>great</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-141-from-4441" href="#acomment-4441">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4441/?cid=4441&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-141" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-141" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-141" className="ac-input bp-suggestions" name="ac_input_141" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={141} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_141" name="_wpnonce_new_activity_comment_141" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="groups rtmedia_update activity-item date-recorded-1580007490 animate-item slideInUp text-rendered" id="activity-134" data-bp-activity-id={134} data-bp-timestamp={1580007490} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/julia/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/13/5e2cfee616ad3-bpfull.jpg" className="avatar user-13-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Julia Cox" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/julia/">Julia Cox</a> posted an update in the group <a href="https://mythemestore.com/beehive-preview/groups/photography/" className><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/6/5e2cce5312454-bpthumb.jpg" className="avatar group-6-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Photography" /></a><a href="https://mythemestore.com/beehive-preview/groups/photography/">Photography</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <div className="shortcontent">
                                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in cul<span className="ellip-dots">...</span></span>
                                  </div>
                                  <div className="allcontent" style={{display: 'none'}}>
                                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</span>
                                  </div>
                                  <span><a href="javascript://nop/" className="morelink">read more</a></span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-2 rtm-activity-photo-list">
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/groups/photography/media/40/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="selevtice-photography-of-black-canon-dslr-camera-above-human-986733 (1)" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/groups/6/2020/01/selevtice-photography-of-black-canon-dslr-camera-above-human-986733-1-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								selevtice-photography-of-black-canon-dslr-camera-above-human-986733 (1)</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/groups/photography/media/40/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/groups/photography/media/39/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="adult-blur-camera-casual-598917" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/groups/6/2020/01/adult-blur-camera-casual-598917-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								adult-blur-camera-casual-598917</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/groups/photography/media/39/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/134/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-134" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">2</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-134/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all   comments</button></li>
                              <li id="acomment-840" className="comment-item bp-hidden" data-bp-activity-comment-id={840} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/134/#acomment-840" className="activity-time-since"><time className="time-since" dateTime="2020-08-20 07:13:49" data-bp-timestamp={1597907629}>6 months, 3 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>good</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/840/?cid=840&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-1494" className="comment-item" data-bp-activity-comment-id={1494}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/134/#acomment-1494" className="activity-time-since"><time className="time-since" dateTime="2020-10-06 00:14:14" data-bp-timestamp={1601943254}>5 months, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Wow</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1494/?cid=1494&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3802" className="comment-item" data-bp-activity-comment-id={3802}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/134/#acomment-3802" className="activity-time-since"><time className="time-since" dateTime="2021-01-28 23:14:36" data-bp-timestamp={1611875676}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>teste</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3802/?cid=3802&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-3809" className="comment-item" data-bp-activity-comment-id={3809}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/134/#acomment-3809" className="activity-time-since"><time className="time-since" dateTime="2021-01-29 10:05:47" data-bp-timestamp={1611914747}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>abcd<br />
                                      </span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3809/?cid=3809&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4664" className="comment-item" data-bp-activity-comment-id={4664}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/134/#acomment-4664" className="activity-time-since"><time className="time-since" dateTime="2021-03-04 11:04:33" data-bp-timestamp={1614855873}>1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <p>Evet</p>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4664/?cid=4664&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4806" className="comment-item" data-bp-activity-comment-id={4806}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/134/#acomment-4806" className="activity-time-since"><time className="time-since" dateTime="2021-03-11 12:30:17" data-bp-timestamp={1615465817}>16 hours, 47 minutes ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>youu</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4806/?cid=4806&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="members new_member activity-item mini date-recorded-1580007057 animate-item slideInUp" id="activity-128" data-bp-activity-id={128} data-bp-timestamp={1580007057} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/julia/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/13/5e2cfee616ad3-bpfull.jpg" className="avatar user-13-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Julia Cox" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/julia/">Julia Cox</a> became a registered member</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="beehive-mini-activity member">
                                <div className="mini-activity-inner">
                                  <div className="mini-cover" style={{backgroundImage: 'url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/members/13/cover-image/5e2cff2ecc33d-bp-cover-image.jpg)'}} />
                                  <div className="mini-content">
                                    <div className="mini-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/julia/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/13/5e2cfee616ad3-bpfull.jpg" className="avatar user-13-avatar avatar-200 photo" width={200} height={200} alt="Profile Photo" />				</a>
                                    </div>
                                    <div className="mini-info">
                                      <h5 className="mini-title"><a href="https://mythemestore.com/beehive-preview/members/julia/" className="ellipsis">Julia Cox</a></h5>
                                      <div className="mini-meta">
                                        <span className="ellipsis"><i className="uil-at" />julia</span>
                                      </div>
                                    </div>
                                    <div className="mini-actions">
                                      <div className="friendship-button not_friends generic-button" id="friendship-button-13"><a href="https://mythemestore.com/beehive-preview/members/user/friends/add-friend/13/?_wpnonce=d65ab0c47b" className="friendship-button not_friends add" id="friend-13" rel="add" data-bp-btn-action="not_friends">Add Friend</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-128" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=128/#ac-form-128" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">0</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/favorite/128/?_wpnonce=6fee9e1a1a" className="button fav bp-secondary-action bp-tooltip" data-bp-tooltip="Mark as Favorite" aria-pressed="false"><span className="bp-screen-reader-text">Mark as Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-128" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-128" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-128" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-128" className="ac-input bp-suggestions" name="ac_input_128" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={128} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_128" name="_wpnonce_new_activity_comment_128" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="activity rtmedia_update activity-item date-recorded-1580006938 animate-item slideInUp text-rendered" id="activity-127" data-bp-activity-id={127} data-bp-timestamp={1580006938} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/alexis/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d18ea0-bpfull.jpg" className="avatar user-12-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Alexis Clark" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/alexis/">Alexis Clark</a> posted an update</p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="rtmedia-activity-container">
                                <div className="rtmedia-activity-text activity-inner-text">
                                  <div className="shortcontent">
                                    <span>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that <span className="ellip-dots">...</span></span>
                                  </div>
                                  <div className="allcontent" style={{display: 'none'}}>
                                    <span>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</span>
                                  </div>
                                  <span><a href="javascript://nop/" className="morelink">read more</a></span>
                                </div>
                                <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-1 rtm-activity-photo-list">
                                  <li className="rtmedia-list-item media-type-photo">
                                    <a href="https://mythemestore.com/beehive-preview/members/alexis/media/38/" rel="nofollow ugc">
                                      <div className="rtmedia-item-thumbnail">
                                        <img loading="lazy" alt="man-wearing-eyeglasses-839586" src="https://mythemestore.com/beehive-preview/wp-content/uploads/rtMedia/users/12/2020/01/man-wearing-eyeglasses-839586-450x320.jpg" />
                                      </div>
                                      <div className="rtmedia-item-title" style={{maxWidth: 320}}>
                                        <p>								man-wearing-eyeglasses-839586</p>
                                      </div>
                                    </a>
                                    <p><a href="https://mythemestore.com/beehive-preview/members/alexis/media/38/" rel="nofollow ugc" className="no-popup">					</a></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-127" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=127/#ac-form-127" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">0</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/127/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action like" id="like-activity-127"><i className="uil-thumbs-up" /><span className="like-text">Like</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-127" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-127" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-127" className="ac-input bp-suggestions" name="ac_input_127" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={127} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_127" name="_wpnonce_new_activity_comment_127" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="groups joined_group activity-item mini has-comments date-recorded-1580006835 animate-item slideInUp" id="activity-126" data-bp-activity-id={126} data-bp-timestamp={1580006835} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/alexis/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d18ea0-bpfull.jpg" className="avatar user-12-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Alexis Clark" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/alexis/">Alexis Clark</a> joined the group <a href="https://mythemestore.com/beehive-preview/groups/music-lovers/"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/3/6021cb895d1a1-bpthumb.jpg" className="avatar group-3-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Müzik Severler" />Müzik Severler</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="beehive-mini-activity group">
                                <div className="mini-activity-inner">
                                  <div className="mini-cover" style={{backgroundImage: 'url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/groups/3/cover-image/6047eed36cf7b-bp-cover-image.jpg)'}} />
                                  <div className="mini-content">
                                    <div className="mini-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/groups/music-lovers/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/3/6021cb894ec60-bpfull.jpg" className="avatar group-3-avatar avatar-200 photo" width={200} height={200} alt="Profile Photo" />				</a>
                                    </div>
                                    <div className="mini-info">
                                      <h5 className="mini-title"><a href="https://mythemestore.com/beehive-preview/groups/music-lovers/" className="ellipsis">Müzik Severler</a></h5>
                                      <div className="mini-meta">
                                        <span className="ellipsis"><i className="uil-globe" />private</span>
                                      </div>
                                    </div>
                                    <div className="mini-actions">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a id="acomment-comment-126" className="button acomment-reply bp-primary-action bp-tooltip" data-bp-tooltip="Comment" aria-expanded="false" href="?ac=126/#ac-form-126" role="button"><span className="bp-screen-reader-text">Comment</span> <span className="comment-count">6</span></a></div>
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/favorite/126/?_wpnonce=6fee9e1a1a" className="button fav bp-secondary-action bp-tooltip" data-bp-tooltip="Mark as Favorite" aria-pressed="false"><span className="bp-screen-reader-text">Mark as Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-126" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li className="show-all"><button className="text-button" type="button" data-bp-show-comments-id="#activity-126/show-all/"><span className="icon dashicons dashicons-visibility" aria-hidden="true" /> Show all 6 comments</button></li>
                              <li id="acomment-741" className="comment-item bp-hidden" data-bp-activity-comment-id={741} style={{display: 'none'}}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/126/#acomment-741" className="activity-time-since"><time className="time-since" dateTime="2020-08-15 22:17:08" data-bp-timestamp={1597529828}>6 months, 4 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>We ere</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-126-from-741" href="#acomment-741">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/741/?cid=741&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-943" className="comment-item" data-bp-activity-comment-id={943}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/126/#acomment-943" className="activity-time-since"><time className="time-since" dateTime="2020-08-26 23:56:53" data-bp-timestamp={1598486213}>6 months, 2 weeks ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>Super nice group</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-126-from-943" href="#acomment-943">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/943/?cid=943&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-2966" className="comment-item" data-bp-activity-comment-id={2966}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/126/#acomment-2966" className="activity-time-since"><time className="time-since" dateTime="2020-12-24 10:58:28" data-bp-timestamp={1608807508}>2 months, 2 weeks ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>ddd<br />
                                          </span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-126-from-2966" href="#acomment-2966">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/2966/?cid=2966&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3906" className="comment-item" data-bp-activity-comment-id={3906}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/126/#acomment-3906" className="activity-time-since"><time className="time-since" dateTime="2021-01-31 21:23:16" data-bp-timestamp={1612128196}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>fgdfgdfg</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-126-from-3906" href="#acomment-3906">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3906/?cid=3906&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4324" className="comment-item" data-bp-activity-comment-id={4324}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/126/#acomment-4324" className="activity-time-since"><time className="time-since" dateTime="2021-02-19 12:30:05" data-bp-timestamp={1613737805}>2 weeks, 6 days ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>:smile</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-126-from-4324" href="#acomment-4324">Reply</a></div>
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4324/?cid=4324&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-4325" className="comment-item" data-bp-activity-comment-id={4325}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/126/#acomment-4325" className="activity-time-since"><time className="time-since" dateTime="2021-02-19 12:30:14" data-bp-timestamp={1613737814}>2 weeks, 6 days ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>:+1</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="acomment-reply bp-primary-action" id="acomment-reply-126-from-4325" href="#acomment-4325">Reply</a></div>
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4325/?cid=4325&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <form action="https://mythemestore.com/beehive-preview/activity/reply/" method="post" id="ac-form-126" className="ac-form">
                              <div className="ac-reply-avatar"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" /></div>
                              <div className="ac-reply-content">
                                <div className="ac-textarea">
                                  <label htmlFor="ac-input-126" className="bp-screen-reader-text">
                                    Comment			</label>
                                  <textarea id="ac-input-126" className="ac-input bp-suggestions" name="ac_input_126" defaultValue={""} />
                                </div>
                                <input type="hidden" name="comment_form_id" defaultValue={126} />
                                <input type="submit" name="ac_form_submit" defaultValue="Post" /><input type="hidden" id="_wpnonce_new_activity_comment_126" name="_wpnonce_new_activity_comment_126" defaultValue="f390e63b20" /><input type="hidden" name="_wp_http_referer" defaultValue="/beehive-preview/wp-admin/admin-ajax.php" />&nbsp; <button type="button" className="ac-reply-cancel">Cancel</button>	
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="groups joined_group activity-item mini date-recorded-1580006830 animate-item slideInUp" id="activity-125" data-bp-activity-id={125} data-bp-timestamp={1580006830} style={{visibility: 'hidden', animationName: 'none'}}>
                          <div className="activity-avatar item-avatar">
                            <a href="https://mythemestore.com/beehive-preview/members/alexis/">
                              <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/12/5e2cfd5d18ea0-bpfull.jpg" className="avatar user-12-avatar avatar-200 photo" width={200} height={200} alt="Profile picture of Alexis Clark" />
                            </a>
                          </div>
                          <div className="activity-content">
                            <div className="activity-header">
                              <div className="posted-meta">
                                <p><a href="https://mythemestore.com/beehive-preview/members/alexis/">Alexis Clark</a> joined the group <a href="https://mythemestore.com/beehive-preview/groups/travelers/"><img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/2/5e2cba9056148-bpthumb.jpg" className="avatar group-2-avatar avatar-20 photo" width={20} height={20} alt="Group logo of Travelers" />Travelers</a></p>
                              </div>
                              <div className="date mute">
                                1 year, 1 month ago			
                              </div>
                            </div>
                            <div className="activity-inner">
                              <div className="beehive-mini-activity group">
                                <div className="mini-activity-inner">
                                  <div className="mini-cover" style={{backgroundImage: 'url(https://mythemestore.com/beehive-preview/wp-content/uploads/buddypress/groups/2/cover-image/5e2cbac728acb-bp-cover-image.jpg)'}} />
                                  <div className="mini-content">
                                    <div className="mini-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/groups/travelers/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/group-avatars/2/5e2cba9053d1a-bpfull.jpg" className="avatar group-2-avatar avatar-200 photo" width={200} height={200} alt="Profile Photo" />				</a>
                                    </div>
                                    <div className="mini-info">
                                      <h5 className="mini-title"><a href="https://mythemestore.com/beehive-preview/groups/travelers/" className="ellipsis">Travelers</a></h5>
                                      <div className="mini-meta">
                                        <span className="ellipsis"><i className="uil-globe" />public</span>
                                      </div>
                                    </div>
                                    <div className="mini-actions">
                                      <div className="group-button public generic-button" id="groupbutton-2"><a href="https://mythemestore.com/beehive-preview/groups/travelers/join/?_wpnonce=5afe2997cc" className="group-button join-group" data-bp-btn-action="join_group">Join Group</a></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className=" activity-meta action">
                              <div className="generic-button"><a href="https://mythemestore.com/beehive-preview/activity/unfavorite/125/?_wpnonce=5513e8032e" className="button unfav bp-secondary-action bp-tooltip" data-bp-tooltip="Remove Favorite" aria-pressed="true"><span className="bp-screen-reader-text">Remove Favorite</span></a></div>
                              <div className="generic-button beehive-like"><a href="#" className="button bp-primary-action unlike" id="unlike-activity-125" title="Unlike this"><i className="uil-thumbs-up" /><span className="like-text">Liked</span><span className="count">1</span></a></div>
                            </div>
                          </div>
                          <div className="activity-comments">
                            <ul>
                              <li id="acomment-1087" className="comment-item" data-bp-activity-comment-id={1087}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/125/#acomment-1087" className="activity-time-since"><time className="time-since" dateTime="2020-09-07 19:36:07" data-bp-timestamp={1599507367}>6 months ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>ahre</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1087/?cid=1087&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                                <ul>
                                  <li id="acomment-1952" className="comment-item" data-bp-activity-comment-id={1952}>
                                    <div className="acomment-avatar item-avatar">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">
                                        <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                    </div>
                                    <div className="acomment-meta">
                                      <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/125/#acomment-1952" className="activity-time-since"><time className="time-since" dateTime="2020-11-05 17:36:22" data-bp-timestamp={1604597782}>4 months ago</time></a>
                                    </div>
                                    <div className="acomment-content">
                                      <div className="rtmedia-activity-container">
                                        <div className="rtmedia-activity-text">
                                          <span>cyxcyxc</span>
                                        </div>
                                        <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                      </div>
                                    </div>
                                    <div className=" activity-meta action">
                                      <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/1952/?cid=1952&_wpnonce=3ba22d802b">Delete</a></div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li id="acomment-3907" className="comment-item" data-bp-activity-comment-id={3907}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/125/#acomment-3907" className="activity-time-since"><time className="time-since" dateTime="2021-01-31 21:23:27" data-bp-timestamp={1612128207}>1 month, 1 week ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>ooooo</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/3907/?cid=3907&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                              <li id="acomment-4290" className="comment-item" data-bp-activity-comment-id={4290}>
                                <div className="acomment-avatar item-avatar">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">
                                    <img loading="lazy" src="https://mythemestore.com/beehive-preview/wp-content/uploads/avatars/3/6043508e71579-bpthumb.jpg" className="avatar user-3-avatar avatar-50 photo" width={50} height={50} alt="Profile picture of John Doe" />		</a>
                                </div>
                                <div className="acomment-meta">
                                  <a href="https://mythemestore.com/beehive-preview/members/user/">John Doe</a> replied <a href="https://mythemestore.com/beehive-preview/activity/p/125/#acomment-4290" className="activity-time-since"><time className="time-since" dateTime="2021-02-17 20:38:17" data-bp-timestamp={1613594297}>3 weeks, 1 day ago</time></a>
                                </div>
                                <div className="acomment-content">
                                  <div className="rtmedia-activity-container">
                                    <div className="rtmedia-activity-text">
                                      <span>A</span>
                                    </div>
                                    <ul className="rtmedia-list rtm-activity-media-list rtmedia-activity-media-length-0 rtm-activity-mixed-list rtm-activity-list-rendered" />
                                  </div>
                                </div>
                                <div className=" activity-meta action">
                                  <div className="generic-button"><a className="delete acomment-delete confirm bp-secondary-action" rel="nofollow" href="https://mythemestore.com/beehive-preview/activity/delete/4290/?cid=4290&_wpnonce=3ba22d802b">Delete</a></div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="load-more">
                          <a href="https://mythemestore.com/beehive-preview/wp-admin/admin-ajax.php?acpage=2">Load More</a>
                        </li>
                      </ul>
                    </div>
                    {/* .activity */}
                  </div>
                  {/* // .screen-content */}
                </div>
                {/* #buddypress */}
              </div>
              {/* .entry-contents */}
            </article>
            {/* #post-0 */}
          </main>
          {/* #main */}
        </div>

      </div>
    )
  }
}
