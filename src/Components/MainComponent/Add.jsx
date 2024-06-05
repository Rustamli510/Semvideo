import React, { useState } from "react";
import '../../Style/Pages/Add.css'
import  {Button}  from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import Starts from "../Modals/Starts";


function Add() {
  const [state, setState] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
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
      onClick={toggleDrawer("right",true)}
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
    >
  <p className="inp-text">+</p>
    </Button>
          </div>
        </div>
      </div>
      <Starts state={state} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default Add;
