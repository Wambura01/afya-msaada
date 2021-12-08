import React from "react";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SickIcon from "@mui/icons-material/Sick";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../../assets/logo.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SS1 from "../../assets/Screenshot1.png";
import SS2 from "../../assets/Screenshot2.png";
import SS3 from "../../assets/Screenshot3.png";

import "./landing.scss";

function Landing() {
  return (
    <div className="landing-container">
      <div className="sidebar-container">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="sidebar-options">
          <div className="option">
            <DashboardIcon className="option-icon" />
            <p className="option-label">Dashboard</p>
          </div>
          <div className="option">
            <SickIcon className="option-icon" />
            <p className="option-label">Patients</p>
          </div>
          <div className="option">
            <ForumIcon className="option-icon" />
            <p className="option-label">Messages</p>
          </div>
          <div className="option">
            <SettingsIcon className="option-icon" />
            <p className="option-label">Settings</p>
          </div>
          <div className="option">
            <LogoutIcon className="option-icon" />
            <Link to="/" className="option-label link">
              Log Out
            </Link>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="header">
          <TextField
            className="input"
            id="input-with-icon-textfield"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="icon" />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <div className="header-right">
            <NotificationsIcon className="notification-icon" />
            <div className="header-button">
              <button className="appointment">Make Appointment</button>
            </div>
          </div>
        </div>
        <div className="content">
          <img src={SS1} alt="Screenshot" />
          <img src={SS2} alt="Screenshot" />
          <img src={SS3} alt="Screenshot" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
