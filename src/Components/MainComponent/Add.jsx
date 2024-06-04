import React from "react";
import '../../Style/Pages/Add.css'
import  {Button}  from "@mui/material";
import { styled } from '@mui/material/styles';


function Add() {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
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
    >
      <p className="inp-text">+</p>
      <VisuallyHiddenInput type="file" className="inp-add" />
    </Button>
          </div>
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
      <VisuallyHiddenInput type="file" className="inp-add" />
    </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
