import { Box, Button, Divider, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "../../Style/Pages/ModalStyle/Starts.css";
import { TbReplace } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Added from "./Added";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Video({ toggleDrawer, state, savedVideos, onAddVideo }) {
  const [active, setActive] = useState('content1');

  const handleNext = () => {
    setActive('content2');
  };

  const handlePrev = () => {
    setActive('content1');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onAddVideo(file);
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      className="starts-modal"
    >
      <IoClose className="close-icon" onClick={toggleDrawer(anchor, false)} />
      <div className="drawer-top">
        <h1 onClick={handlePrev} className={active === 'content1' ? 'active' : ''}>Video</h1>
        <h1 onClick={handleNext} className={active === 'content2' ? 'active' : ''}>Lead</h1>
      </div>

      <Divider />

      <div className="drawer-bottom">
        {active === 'content1' ? (
          <>
            <div className="drawer-file">
              <p className="drawer-text">
                How to record and prepare video before uploading. Learn from{" "}
                <Link>here</Link>
              </p>
              <div className="drawer-box">
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<TbReplace />}
                  className="replace-icon"
                >
                  replace
                  <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                </Button>
              </div>
            </div>
            <div className="drawer-create">
              <button className="dw-btn" onClick={handleNext}>Next</button>
            </div>
          </>
        ) : (
          <div className="lead">
            <div className="switchs">
              <div className="switch-section">
                <h6>Email</h6>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="switch-section">
                <h6>Phone</h6>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="switch-section">
                <h6>Text</h6>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="drawer-create">
              <button className="dw-btn">Finish</button>
            </div>
          </div>
        )}
      </div>
    </Box>
  );

  return (
    <>
      {state.showEnds && <Added savedVideos={savedVideos} />}
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default Video;
