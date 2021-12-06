import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

import particlesConfig from "../../assets/particlesConfig.json";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

import "./signup.scss";

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-page">
      {/* <Particles params={particlesConfig} className="particles" /> */}
      <div className="form-container">
        <h2 className="form-title">Signup</h2>
        <form onSubmit={handleSubmit} className="form">
          <TextField
            className="input"
            id="input-with-icon-textfield"
            placeholder="Enter a username"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon className="icon" />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className="input"
            id="input-with-icon-textfield"
            placeholder="Enter a username"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon className="icon" />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className="input"
            id="input-with-icon-textfield"
            placeholder="Enter a password"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon className="icon" />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            className="input"
            id="input-with-icon-textfield"
            placeholder="Enter a password"
            label="Confirm Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon className="icon" />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Link to="/landing">
            <button className="form-button">Signup</button>
          </Link>
        </form>
        <div className="signin-option">
          <p className="text">Already have an account?</p>
          <Link to="/" className="link">
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
