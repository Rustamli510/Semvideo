import React, { useEffect, useRef, useState } from "react";
import "../../Style/Pages/ModalStyle/Added.css";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "@mui/material/Button";
import repeat from "../../assets/İmages/pajamas_repeat.png"
import { VscCalendar } from "react-icons/vsc";

function Added({ savedVideos }) {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
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
    <>
      <div className="added-video">
        <video controls={false} ref={videoRef} autoPlay>
          <source src={savedVideos} type="video/mp4" />
        </video>
        <div className="custom-controls">
          <input
            className="current-inp"
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            readOnly
          />
          <div className="controls-top">
            <FaArrowLeft className="added-arrow" />
            <div className="controls-right">
                    <div className="added-time">
              <span className="time">
                {formatTime(currentTime)}/{formatTime(duration)}
              </span>
            </div>
            <p className="x2">2X</p>
            <img src={repeat} alt="" className="repeat-icon"/>
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
