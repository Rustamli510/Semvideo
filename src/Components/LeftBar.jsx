import logo from "../assets/Logo/Untitled_design__6_-removebg-preview 1.svg";
import frame from "../assets/İmages/Frame 3.png";
import "../Style/Pages/LeftBar.css";
import { IoHelpCircleOutline } from "react-icons/io5";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
function LeftBar() {
  const {handleClick}=useContext(AppContext)
  return (
    <>
      <div className="left-bar">
        <div className="nav-top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="add-video">
            <div className="left-text">
              <img src={frame} alt="" />
            </div>
            <button className="add-btn" onClick={handleClick}>
              Add semvideo
            </button>
          </div>
        </div>
        <div className="nav-bottom">
          <Link className="nav-bottom-text">
            <IoHelpCircleOutline className="icon" /> Let us help
          </Link>
          <Link className="nav-bottom-text">
            <HiOutlineEmojiSad className="icon" /> Log out
          </Link>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
