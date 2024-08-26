import React from 'react'
import './VideoPlayer.css'
import Collage_bird from '../../assets/Collage-bird.mp4'

const VideoPlayer = ({playState,setPlayState}) => {
    return (
        <div
            className={`video-player ${playState?'':'hide'}`}>
            <video src={Collage_bird} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer