import React, { useState } from "react";
import '../../Style/Pages/Add.css'
import { Button } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import Starts from "../Modals/Starts";
import Ends from "../Modals/Ends";
import SpringModal from "../WidgetModal";

function Add() {
  const [state, setState] = useState({ right: false, showEnds: false });
  const [savedVideos, setSavedVideos] = useState([]);
  const toggleDrawer = (anchor, open, showEnds = false) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open, showEnds });
  };
  const handleAddVideo = (file) => {
    const url = URL.createObjectURL(file);
    setSavedVideos([...savedVideos, url]);
  };
 console.log(savedVideos);
  return (
    <>
      <div className="video-boxes">
        <div className="video-box">
          <div className="box-text">
            <h2>Magic starts</h2>
          </div>
          <div className="add-video">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              onClick={toggleDrawer("right", true, false)}
            >
              <p className="inp-text">+</p>
            </Button>
          </div>
        </div>
        <div className="arrow">
          <div className="rounded"></div>
          <div className="line"></div>
          <IoIosArrowForward id="arrow" />
        </div>
        <div className="video-box">
          <div className="box-text">
            <h2>Magic ends</h2>
          </div>
          <div className="add-video">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              onClick={toggleDrawer("right", true, true)}
            >
              <p className="inp-text">+</p>
            </Button>
          </div>
        </div>
      </div>
      <SpringModal />
      {state.showEnds ? <Ends state={state} toggleDrawer={toggleDrawer} /> : <Starts savedVideos={savedVideos} state={state} toggleDrawer={toggleDrawer} onAddVideo={handleAddVideo} />}
    </>
  );
}

export default Add;
