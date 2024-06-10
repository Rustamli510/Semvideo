import React from "react";
import "../Style/Pages/InnerDashboard.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import TextField from "@mui/material/TextField";
import { Box, LinearProgress } from "@mui/material";

function InnerDashboad({ savedVideos,handleDeleteVideo }) {
  console.log(savedVideos);
  return (
    <>
      {savedVideos.map((videoSrc, index) => {
        return (
          <div className="inner-boxs" key={index}>
            <div className="inner-box">
              <div className="inner-box-header">
                <div className="inner-box-header-top">
                  <h4>Video {index + 1}</h4>
                  <IconButton aria-label="delete" onClick={handleDeleteVideo}>
                    <DeleteIcon />
                  </IconButton>
                </div>
                <p className="top-text">Last 30 days’ result</p>
                <div className="inner-video">
                  <Box sx={{ width: "100%", marginTop: "10px" }}>
                    <LinearProgress variant="determinate" />
                  </Box>
                  <video autoPlay loop >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  <div className="video-right">
                    <div className="video-top-form">
                      <h5>Great results come with small steps</h5>
                    </div>

                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "18ch" },
                      }}
                      noValidate
                      autoComplete="off"
                      className="video-bottom-form"
                    >
                      <TextField
                        id="standard-basic"
                        label="your email"
                        variant="standard"
                      />
                      <TextField
                        id="standard-basic"
                        label="phone"
                        variant="standard"
                      />
                      <textarea
                        name=""
                        id=""
                        placeholder="your message ..."
                      ></textarea>
                    </Box>
                  </div>
                </div>
                <div className="generate">
                  <p className="bottom-text">Lead generated: 1</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default InnerDashboad;
