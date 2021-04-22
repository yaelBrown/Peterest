import React from 'react'

import indexVideo from '../../Assets/video/indexBgVideo.mp4'

export default function BackgroundVideo() {
    return (
        <div>
            <div className="elementor-background-video-container elementor-hidden-phone">
                <video className="elementor-background-video-hosted elementor-html5-video" 
                    autoPlay={true} 
                    muted 
                    playsInline 
                    loop 
                    style={{width: '2524.44px', height: 1420}}>
                    <source src={indexVideo} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}
