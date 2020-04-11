import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { sizing } from "@material-ui/system";
import PublicIcon from "@material-ui/icons/Public";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const styles = makeStyles({
  button: {
    marginLeft: 15,
    marginRight: 15,
  },
});

const Navbar = () => {
  const classes = styles();
  return (
    <AppBar className="nav">
      <Toolbar className="nav-container">
        <Button
          size="small"
          className={classes.button}
          color="inherit"
          component={Link}
          to="/"
        >
          <Tooltip title="Home" placement="top">
            <IconButton color="inherit">
              <PublicIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Button>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          size="small"
          className={classes.button}
          color="inherit"
          component={Link}
          to="/DeepDive"
        >
          Deep Dive
        </Button>
        <Button
          size="small"
          className={classes.button}
          color="inherit"
          component={Link}
          to="/SafetyPrecautions"
        >
          Safety Precautions
        </Button>
        <Button
          size="small"
          className={classes.button}
          color="inherit"
          component={Link}
          to="/Helpline"
        >
          Helpline
        </Button>
        <Button
          size="small"
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
