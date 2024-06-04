import React from "react";
import boxfoto from "../../assets/İmages/arcticons_game-space.png";
import "../../Style/Pages/Box.css";

function Box() {
  return (
    <>
      <div className="box">
        <div className="box-top">
          <h3>
            You need to increase your conversion rate in your website. Guess
            what is missing
          </h3>
        </div>
        <div className="box-bottom">
          <p className="box-bottom-text">Create your first semvideo</p>
          <img src={boxfoto} alt="" />
        </div>
      </div>
    </>
  );
}

export default Box;
