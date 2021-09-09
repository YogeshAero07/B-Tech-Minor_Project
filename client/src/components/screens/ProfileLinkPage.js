import React from "react";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const ProfilePageLink = ({ history }) => {
  const myId = localStorage.getItem("authId");
  console.log(myId);

  return (
    <div>
      <Link to={`/checkout/${myId}`} variant="body2">
        Already have an account? Sign in
      </Link>
    </div>
  );
};

export default ProfilePageLink;
