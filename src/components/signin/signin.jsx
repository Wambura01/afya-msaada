import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import particlesConfig from "../../assets/particlesConfig.json";

import "./signin.scss";

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin-page">
      {/* <Particles params={particlesConfig} className="particles" /> */}
      <div className="form-container">
        <h2 className="form-title">Signin</h2>
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
          <div className="forgot-passoword">
            <p>Forgot Password?</p>
          </div>
          <Link to="/landing">
            <button className="form-button">Signin</button>
          </Link>
        </form>
        <div className="signin-options">
          <p className="option-text">Or Sign Up using</p>
          <div className="options-container">
            <GoogleIcon className="option google" />
            <FacebookIcon className="option facebook" />
            <LinkedInIcon className="option linkedin" />
          </div>
        </div>
        <div className="signup-option">
          <p className="text">Or Sign Up using</p>
          <Link to="/signup" className="link">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
