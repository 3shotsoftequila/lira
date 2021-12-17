import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
//import DashboardIcon from "../assets/DashboardIcon.svg"

//import DashboardIcon from '@mui/icons-material/Dashboard';

//import DashboardIconActive from "../assets/DashboardIcon.svg"
import routes from '../routes'

import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";


import MenuItem from "./MenuItem";

//import Logo from "../logo.svg";
import { useStyles } from "../styles";


//import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, } from "@material-ui/core";

import { useMediaQuery, useTheme, } from "@material-ui/core";



import clsx from "clsx";


const Navigation = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  //const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const toggleNavigation = () => {
    setOpen(!open);
  };

  const closeNavigation = () => {
    if (matches) {
      setOpen(false);
    }
  };



  return (
    <div>

    
      <Drawer
        classes={{ paper: clsx(classes.navigationDrawer, !open && classes.navigationDrawerCollapse), }}
        variant="permanent"
        open={open}
      >
        <div
          className={clsx(
            classes.navigationToolbar,
            !open && classes.navigationToolbarCollapse
          )}
        >
            <IconButton onClick={toggleNavigation}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>

        <List className={classes.navigationList}>
          {routes.map((route, index) => {
            return (
              <React.Fragment key={index}>
                {route.path === "/sign-out" && (
                  <div className={classes.navigationSpacer}></div>
                )}
                <MenuItem
                  label={route.label}
                  icon={route.icon}
                  activeIcon={route.activeIcon}
                  path={route.path}
                  onClick={closeNavigation}
                />
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
