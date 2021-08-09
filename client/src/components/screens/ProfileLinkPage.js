import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

//Material UI Libraries
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const ProfilePageLink = ({ history }) => {


  const myId  = localStorage.getItem('authId')
  console.log(myId)

  return (
   <div>
       
       <Link  to={`/checkout/${myId}`} variant="body2">
                Already have an account? Sign in
            </Link>
   </div>
  );
}

export default ProfilePageLink;