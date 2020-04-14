import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const styles = makeStyles({
  text: {
    paddingLeft: 4,
  },
  card: {
    position: "relative",
    display: "flex",
  },
  divider: {
    marginBottom: 20,
  },
  image: {
    minWidth: 80,
    minHeight: 80,
    borderRadius: "50%",
  },
  content: {
    paddingLeft: 20,
    objectFit: "cover",
  },
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
  maingrid: {
    paddingRight: 25,
    paddingLeft: 25,
  },
});

const SafetyPrecautions = () => {
  const classes = styles();
  return (
    <Fragment>
      <Typography
        style={{ marginBottom: 10 }}
        variant="h4"
        className={classes.heading}
      >
        FIVE STEPS TO PREVENT COVID-19
      </Typography>
      <Divider className={classes.divider} />
      <Grid className={classes.maingrid} container spacing={3}>
        <Grid item xm={12} sm={4}></Grid>
        <Grid container spacing={3} xm={12} sm={4}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <Typography color="primary" variant="h6">
                  1. HANDS
                </Typography>
                <Typography className={classes.text} varaint="body1">
                  It starts with your hands. Please wash your hands frequently
                  with soap and water or an alcohol-based solution
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <Typography color="primary" variant="h6">
                  2. ELBOW
                </Typography>
                <Typography className={classes.text} varaint="body1">
                  Cover your nose and mouth with a bent elbow or tissue when you
                  sneeze or cough. Dispose of tissue immdiately and wash hands.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <Typography color="primary" variant="h6">
                  3. FACE
                </Typography>
                <Typography className={classes.text} varaint="body1">
                  Avoid touching your face, particularly your eyes, nose or
                  mouth to prevent virus from entering your body.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <Typography color="primary" variant="h6">
                  4. DISTANCE
                </Typography>
                <Typography className={classes.text} varaint="body1">
                  In terms of social interactions, take a step back. Stay
                  atleast one meter distance from others.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <Typography color="primary" variant="h6">
                  5. FEEL
                </Typography>
                <Typography className={classes.text} varaint="body1">
                  If you feel unwell, stay home. Please follow all instructions
                  provided by your local health authorities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xm={12} sm={4}></Grid>
      </Grid>
    </Fragment>
  );
};

export default SafetyPrecautions;
