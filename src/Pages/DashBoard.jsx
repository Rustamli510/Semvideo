import React from "react";
import LeftBar from "../Components/LeftBar";
import Main from "../Components/Main";

function DashBoard() {
  return (
    <div className="dashboard" style={{ display: "flex" }}>
      <LeftBar />
      <Main />
    </div>
  );
}

export default DashBoard;
