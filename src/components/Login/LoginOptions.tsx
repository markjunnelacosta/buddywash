import * as React from "react";
import "./Login.css";
import { Copyright } from "@mui/icons-material";

import {
  Grid,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button, 
  Link,
  CssBaseline,
} from "@mui/material";

export const LoginOptions = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div id="main-container">
      <div id="left">
        <img className="machines" src={require("./machines.png")} />
      </div>
      <div id="right">
            <img className="logo" src={require("./logo.png")} />
            <div className ="greetings">
                <h2>Hello there!</h2>
                <h4>Please choose your role.</h4>
            </div>
            <div className="userOptions">
                <button id="staff" type="button" >Laundry Staff</button>
                <button id="owner" type="button" >Owner</button>
                <button id="admin" type="button" >Admin</button>
            </div>
            <p id="textBelow">By using this service, you understood and agree to the BuddyWash Terms of Use and Privacy Statement.</p>
        </div>
                
      </div>
  );
};
