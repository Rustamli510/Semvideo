import { Box, Button, Divider, Drawer, List } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import "../../Style/Pages/ModalStyle/Starts.css";
import { TbReplace } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
// import '../../Style/Pages/ModalStyle/Video.css'

function Video({ toggleDrawer, state }) {
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
        <h1>Video</h1>
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
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
        </div>
        <div className="drawer-create">
          <button className="dw-btn" >Add semvideo</button>
        </div>
      </div>
    </Box>
  );

  return (
    <>
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
