import React, { useRef } from 'react'

function VideoPlayer() {
    const videoRef = useRef(null);
    const inputRef = useRef(null);

    const playVideo = () => {
        console.log(videoRef)
        videoRef.current.play();
    }
     const pauseVideo = () => {
        videoRef.current.pause();
    }
    const focusInput = () => {
        inputRef.current.focus();
    }
  return (
    <>
        <video ref={videoRef} src="https://videos.pexels.com/video-files/2583492/2583492-hd_1920_1080_24fps.mp4" style={{width: 300, height: 300}}></video>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>

        <br />
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus</button>
    </>
  )
}

export default VideoPlayer