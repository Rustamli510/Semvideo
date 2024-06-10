import React from "react";
import "../Style/Pages/InnerDashboard.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function InnerDashboad() {
  return (
    <>
      <div className="inner-boxs">
        <div className="inner-box">
          <div className="inner-box-header">
            <div className="inner-box-header-top">
              <h4>First video</h4>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
            <p>Last 30 days’ result</p>
            <div className="inner-video">
              <video>
                <source />
              </video>
              <div className="video-right">
                
              </div>
            </div>
            <div className="generate">
              <p>Lead generated: 1</p>
            </div>
          </div>
        </div>
        <div className="inner-box">
          <div className="left-inner">
            <div className="inner-text">
              <h4>First video</h4>
              <p>Last 30 days’ result</p>
            </div>
            <div className="inner-video">
              <video>
                <source />
              </video>
              <p>Lead generated:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnerDashboad;
