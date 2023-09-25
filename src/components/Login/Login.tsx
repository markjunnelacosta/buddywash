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

export const Login = () => {
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
        <Grid
          id="signin"
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent:"center",
            }}
          >
             <img className="logo" src={require("./logo.png")} />
            
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
              className="input-field"
                margin="normal"
                required
                fullWidth
                id="email"
                label="UserID"
                name="userID"
                autoComplete="email"
                autoFocus
              />
              <TextField
                className="input-field"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                id="login-button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </div>
    </div>
  );
};
