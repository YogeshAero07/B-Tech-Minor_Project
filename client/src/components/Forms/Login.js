import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";

//Material Imports
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// Main Function

const Login = ({ history }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  //Generic Backend Code

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://gob-portal.herokuapp.com/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 6000);
    }
  };

  return (
    <div className="login-page">
      <div className="login-body">
        {/* Login Error */}

        <div className="login-error">{error && <span>{error}</span>}</div>

        {/* Login Title */}

        <div className="login-title">
          <label>
            <LockOutlinedIcon />
          </label>
          <h2>Sign in</h2>
        </div>

        {/* Login Inputs */}

        <div className="login-input">
          <form onSubmit={loginHandler} className="login-form" noValidate>
            {/* Login Email */}

            <div className="login-email">
              <p>Email</p>
              <input
                placeholder="Email"
                required
                autoFocus
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Login Password */}

            <div className="login-pass">
              <p>Password</p>
              <input
                placeholder="Password"
                required
                name="password"
                autoComplete="password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            {/* Login Button */}

            <div className="login-button">
              <Button variant="outlined" type="submit">
                Sign In
              </Button>
            </div>

            {/* Login Redirects */}

            <div className="redirect">
              <a href="/forgotpassword">Forget Password?</a>
              <p>
                Don't have an account? <a href="/register"> Sign Up </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
