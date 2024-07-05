import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideocamIcon from "@mui/icons-material/Videocam";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import "../Style/TopBarr.css";
function Topbar() {
  return (
    <div className="topbar">
      <div className="top-left">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/023/986/704/small/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
          className="logo"
        />
        <span className="logo-text">Youtube</span>
      </div>
      <div className="top-center">
        <div className="top-search">
          <input type="text" placeholder="search" />{" "}
          <div className="top-search-icon-container">
            <SearchIcon className="top-search-icon" />
          </div>
          <KeyboardVoiceIcon />
        </div>
      </div>
      <div className="top-right">
        <VideocamIcon className="top-icon" />
        <AppsIcon className="top-icon" />
        <NotificationsIcon className="top-icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://www.haberler.com/i/80/cristiano-ronaldo_8897_b.jpg"
          className="top-img"
        />
      </div>
    </div>
  );
}

export default Topbar;
