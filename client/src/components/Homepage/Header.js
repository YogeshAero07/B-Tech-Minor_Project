import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Images/MainLogo.png";
import MobileMenu from "./MobileMenu";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

// Icons
import HomeIcon from "../../Images/HomeIcon.svg";
import JobsIcon from "../../Images/JobsIcon.svg";
import Notification from "../../Images/Notification.svg";
import InternIcon from "../../Images/InternIcon.svg";
import Hackthons from "../../Images/Hackthons.svg";
import Bookmark from "../../Images/Bookmark.svg";
import Search from "../../Images/SearchIcon.svg";
import User from "../../Images/User.svg";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  let history = useHistory();

  const handleMenuLogout = () => {
    setAnchorEl(null);

    localStorage.removeItem("authToken");
    history.push("/login");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const myId = localStorage.getItem("authId");

  return (
    <div className="header">
      {/*  Navbar Logo */}

      <div className="header__left">
        {/* <MenuIcon /> */}

        <Link to="/">
          <img src={Logo} alt="InternMela" />
        </Link>
      </div>

      {/* Navbar List */}

      <div className="header__center">
        <a href="/">
          <img src={HomeIcon} alt="" />
          <p>Home</p>
        </a>
        <a href="/internship">
          <img src={InternIcon} alt="" />
          <p>Internship</p>
        </a>
        <a href="/job">
          <img src={JobsIcon} alt="" />
          <p>Job</p>
        </a>
        <a href="hackthon">
          <img src={Hackthons} alt="" />
          <p>Hackthon</p>
        </a>
        <a href="/notification">
          <img src={Notification} alt="" />
          <p>Notification</p>
        </a>
        <a href="/bookmark">
          <img src={Bookmark} alt="" />
          <p>Bookmark</p>
        </a>
      </div>

      {/* Navbar Search */}

      <div className="header__search">
        <input type="search" placeholder="Search..." />
        <img src={Search} alt="" />
      </div>
      <div className="mobile__search">
        <img src={Search} alt="" />
      </div>

      {/* Navbar Profile Icon */}

      <div className="header__icons">
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to={`/profile/${myId}`} variant="body2">
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuLogout}>Sign Out</MenuItem>
        </Menu>
      </div>

      {/* Mobile Hamberger Menu */}

      <div className="mobile__menu">{MobileMenu}</div>
    </div>
  );
};

export default Header;
