import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

//Material UI Libraries
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Button from "@material-ui/core/Button";

const Register = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "https://gob-portal.herokuapp.com/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("authId", data.userId);
      console.log(data.token);
      console.log("this is id comming from backend" + data.userId);
      console.log(data);

      history.push("/checkout");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const myId = localStorage.getItem("authId");
  console.log(myId);

  return (
    <div className="register-page">
      <div className="register-body">
        {/* Register Error */}

        <div className="register-error">{error && <span>{error}</span>}</div>

        {/* Register Title */}

        <div className="register-title">
          <label>
            <LockOutlinedIcon />
          </label>
          <h2>Sign Up</h2>
        </div>

        {/* Register Inputs */}

        <div className="register-input">
          <form onSubmit={registerHandler} className="register-form" noValidate>
            {/* Register Username */}

            <div className="register-username">
              <p>Username</p>
              <input
                placeholder="Username"
                required
                autoFocus
                name="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Register Email */}

            <div className="register-email">
              <p>Email</p>
              <input
                placeholder="Email"
                required
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Register Password */}

            <div className="register-pass">
              <p>Password</p>
              <input
                placeholder="Password"
                required
                name="password"
                autoComplete="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Register Confirm Password */}

            <div className="register-pass">
              <p>Password</p>
              <input
                placeholder="Confirm Password"
                required
                name="cpassword"
                autoComplete="true"
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Register Button */}

            <div className="register-button">
              <Button type="submit" variant="outlined" color="primary">
                Sign Up
              </Button>
            </div>

            {/* Register Redirects */}

            <div className="login-redirect">
              <p>
                Already have an account? <a href="/login"> Sign In </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
