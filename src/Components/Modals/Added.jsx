import React, { useEffect, useRef, useState } from "react";
import "../../Style/Pages/ModalStyle/Added.css";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "@mui/material/Button";
import repeat from "../../assets/İmages/pajamas_repeat.png";
import { VscCalendar } from "react-icons/vsc";
import { Box, LinearProgress } from "@mui/material";

function Added({ savedVideos, onClose }) {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playSpeed, setPlaySpeed] = useState(1);
  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setRangeValue((video.currentTime / video.duration) * 100);
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

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleRepeat = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleSpeedToggle = () => {
    if (videoRef.current) {
      const newPlaySpeed = playSpeed === 1 ? 2 : 1;
      videoRef.current.playbackRate = newPlaySpeed;
      setPlaySpeed(newPlaySpeed);
    }
  };


  return (
    <>
      <div className="added-video">
        <video controls={false} ref={videoRef} autoPlay>
          <source src={savedVideos} type="video/mp4" />
        </video>
        <div className="custom-controls">
          <Box sx={{ width: '100%', marginTop: '10px' }}>
            <LinearProgress variant="determinate" value={(currentTime / duration) * 100} />
          </Box>
          <div className="controls-top">
            <FaArrowLeft className="added-arrow" onClick={handleClose} />
            <div className="controls-right">
              <div className="added-time">
                <span className="time">
                  {formatTime(currentTime)}/{formatTime(duration)}
                </span>
              </div>
              <p className="x2" onClick={handleSpeedToggle}>
                2X
              </p>
              <img
                src={repeat}
                alt=""
                className="repeat-icon"
                onClick={handleRepeat}
              />
            </div>
          </div>
          <div className="controls-bottom">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<VscCalendar className="calendar-icon" />}
              className="added-calendar"
            >
              Get a consultation!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Added;
