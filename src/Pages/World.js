import React, { useState, useEffect } from "react";
import Country from "../Components/Country";
import axios from "axios";

//MUI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = makeStyles({
  heading: {
    textAlign: "center",
  },
  table: {
    minWidth: 300,
  },
  subHeading: {
    marginBottom: 15,
  },
  blockGrid: {
    marginBottom: 10,
  },
  block: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 70,
  },
  blockText: {
    textAlign: "center",
  },
  dataText: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  divider: {
    marginBottom: 20,
  },
  maingrid: {
    paddingLeft: 25,
    paddingRight: 25,
  },
});
const World = () => {
  const classes = styles();

  const [lastUpdate, setLastUpdate] = useState("");

  useEffect(() => {
    getLastUpdate();
  }, []);

  const getLastUpdate = async () => {
    const response = await axios.get("/api/covid19/India");
    const lastUpdate = response.data[response.data.length - 1].State;
    setLastUpdate(lastUpdate);
  };

  return (
    <div className={classes.maingrid}>
      <Typography className={classes.heading} variant="h4" gutterBottom>
        COVID-19 TRACKER
        <Typography variant="body2">({lastUpdate})</Typography>
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Country />
      </Grid>
    </div>
  );
};
export default World;
