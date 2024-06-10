import logo from "../assets/Logo/Untitled_design__6_-removebg-preview 1.svg";
import frame from "../assets/İmages/Frame 3.png";
import "../Style/Pages/LeftBar.css";
import { IoHelpCircleOutline } from "react-icons/io5";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../Context/Context";
import TransitionsModal from "./HelpModal";
function LeftBar() {
  return (
    <>
      <div className="left-bar">
        <div className="nav-top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="add-video">
            <div className="left-text">
              <Link to="/dashboard/innerdashboard">
                <img src={frame} alt="" />{" "}
              </Link>
            </div>
            <Link to="/dashboard/add" className="add-btn">
              Add semvideo
            </Link>
          </div>
        </div>
        <div className="nav-bottom">
          <TransitionsModal className="nav-bottom-text" />
          <Link className="nav-bottom-text">
            <HiOutlineEmojiSad className="icon" /> Log out
          </Link>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
