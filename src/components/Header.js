// libraries
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";

// styles
import "./Header.css";

// assets
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="header_logo" alt="" />
      </Link>

      <Link to="/login">
        <IconButton>
          <AccountCircleIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
