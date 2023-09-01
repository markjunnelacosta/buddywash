import React from "react";
import "./Dashboard.css";
import {
  List,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  Paper,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Counter } from "./Counter";
import Chart from "./Chart";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="side-nav-bar-container">
        <List component="nav">
          <React.Fragment>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <span className="nav-section-text">Laundry Service</span>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Laundry Bin" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Customer" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Machine" />
            </ListItemButton>
            <span className="nav-section-text">Inventory Management</span>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Supply List" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Supply In/Out" />
            </ListItemButton>
          </React.Fragment>
        </List>
      </div>
      <div className="graphs-container">
        <div className="top-container">
          <div className="counters-container">
            <Counter title="Total Profit Today" value="0.00" />
            <Counter title="Total Profit Today" value="0.00" />
          </div>
          <div className="customers-container">
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
          </div>
        </div>
        <div className="bar-container"></div>
      </div>
    </div>
  );
};
