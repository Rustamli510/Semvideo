import React from "react";
import Video from "./Video";

function Ends({ savedVideos, state, toggleDrawer, onAddVideo }) {
  return (
    <div>
      <Video 
        savedVideos={savedVideos} 
        state={state} 
        toggleDrawer={toggleDrawer} 
        onAddVideo={onAddVideo} 
      />
    </div>
  );
}

export default Ends;
