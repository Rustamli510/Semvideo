import React, { useRef } from 'react'

function Added({savedVideos}) {
    const videoRef = useRef(null);
  return (
    <>
      <div className="add-video">
        <video controls={false}  ref={videoRef} autoPlay>
            <source src={savedVideos} type="video/mp4" />
        </video>
        <div className="custom-controls">
            <input type="range" min="0" max="100"   />
        </div>
      </div>
    </>
  )
}

export default Added
