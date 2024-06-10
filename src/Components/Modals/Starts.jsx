import { Box, Button, Divider, Drawer, List } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "../../Style/Pages/ModalStyle/Starts.css";
import { TbReplace } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Added from "./Added";

function Starts({ toggleDrawer, state, onAddVideo, savedVideos }) {
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
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleAddVideoClick = () => {
    if (selectedFile) {
      onAddVideo(selectedFile);
      toggleDrawer("right", false)({ type: "click" });
    }
  };
  const handleClose = () => {
    toggleDrawer("right", false)({ type: "click" });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="starts-modal"
    >
      <IoClose className="close-icon" />
      <div className="drawer-top">
        <h1 className="active">Video</h1>
      </div>

      <Divider />

      <div className="drawer-bottom">
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
              onClick={(event) => event.stopPropagation()}
            >
              replace
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
          </div>
        </div>
        <div className="drawer-create">
          <button className="dw-btn" onClick={handleAddVideoClick}>
            Add semvideo
          </button>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          {(state.showEnds || state.right) && (
            <Added onClose={handleClose} savedVideos={savedVideos} />
          )}
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

export default Starts;
