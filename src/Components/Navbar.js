import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  button: {
    marginLeft: 10,
    marginRight: 10,
  },
});

const Navbar = () => {
  const classes = styles();
  return (
    <AppBar>
      <Toolbar className="nav-container">
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/DeepDive"
        >
          Deep Dive
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/SafetyPrecautions"
        >
          Safety Precautions
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/Helpline"
        >
          Helpline
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/LatestUpdates"
        >
          Latest Updates
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
