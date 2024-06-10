import React, { useState, useEffect, useRef } from "react";
import videoSource from "./assets/video/Stunning Sunset Seen From The Sea.mp4"

import "./Style/Components/HelpModal.css"
import { Box, LinearProgress } from "@mui/material";


const Demo = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  return (
    <div className="video-container">
      <video controls ref={videoRef} src={videoSource}></video>

      <Box sx={{ width: '100%', marginTop: '10px' }}>
        <LinearProgress variant="determinate" value={(currentTime / duration) * 100} />
      </Box>

      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="time-display">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>



    </div>
  )
}

export default Demo