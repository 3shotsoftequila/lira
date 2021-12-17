import React, { useEffect, useState }  from "react";

import { Link, useLocation } from "react-router-dom";

//import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import clsx from 'clsx'
import { useStyles } from "../styles";
import { Icon } from "@material-ui/core";


const MenuItem = ({label, icon, activeIcon, path, onClick} : {label:any, icon:any, activeIcon:any, path:any, onClick:any}) => {
  const classes = useStyles();
  const [active, setActive] = useState(false); //look at this agn
  const location = useLocation();


  useEffect(() => {
    if (path === "/sign-out") {
      setActive(true);
      return;
    }
    setActive(location.pathname === path);
  }, [location, path]);

  return (
    <ListItem       
      button
      component={Link}
      to={path}
      className={clsx(classes.menuItem, active && classes.menuItemActive)}
      onClick={onClick}
    >
      <ListItemIcon>
        <Icon>
          <img 
          className={classes.menuItemIcon} 
          src={active ? activeIcon : icon} 
          alt={label} />
        </Icon>
      </ListItemIcon>
      <ListItemText
        primary={label}  
        primaryTypographyProps={{ variant: "body2" }}
        />
      </ListItem>
    );
    
                                                 
};

export default MenuItem;
