import React from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { AirbnbIcon } from "../Icons";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* <img src="" alt="logo" className="logo" /> */}
        <div className="logo">
          <AirbnbIcon />
        </div>

        <div className="search_box">
          <div className="search_box_text">Any Where</div>
          <div className="search_box_text">Any Week</div>
          <div className="search_box_text3">Add Guests</div>
          <div className="search_icon_div">
            <SearchRoundedIcon className="search_icon" />
          </div>
          {/* <input type="text" name="" id="" /> */}
          {/* <SearchIcon /> */}
        </div>

        <div className="header_right">
          <div className="airbnb_your_home">Airbnb your home</div>
          <div className="airbnb_your_home">
            <LanguageIcon />
          </div>
          <MenuIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
