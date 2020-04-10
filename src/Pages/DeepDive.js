import React, { useState } from "react";
import StateChart from "../Components/Charts/StateChart";
import CountryChart from "../Components/Charts/CountryChart";
import TimeSeriesChart from "../Components/Charts/TimeSeriesChart";

//MUI
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const DeepDive = () => {
  const [timeSeriesAxis, setTimeSeriesAxis] = useState("linear");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Fade in={window.location.pathname === "/DeepDive"} timeout={2000}>
          <div>
            <Paper>
              <div style={{ padding: 5 }}>
                <Typography
                  style={{ textAlign: "center", marginBottom: 5 }}
                  variant="body1"
                >
                  Cases in Indian States
                </Typography>
                <StateChart />
              </div>
            </Paper>
          </div>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade in={window.location.pathname === "/DeepDive"} timeout={3000}>
          <div>
            <Paper>
              <div style={{ padding: 5 }}>
                <Typography
                  style={{ textAlign: "center", marginBottom: 5 }}
                  variant="body1"
                >
                  Cases in Most Affected Countries
                </Typography>
                <CountryChart />
              </div>
            </Paper>
          </div>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade in={window.location.pathname === "/DeepDive"} timeout={4000}>
          <div>
            <Paper>
              <Typography
                style={{ textAlign: "center", marginBottom: 5 }}
                variant="body1"
              >
                Time Series of Indian Cases
              </Typography>
              <TimeSeriesChart type={timeSeriesAxis} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  style={{ marginTop: 10, marginRight: 5, marginBottom: 5 }}
                  variant="outlined"
                  size="small"
                  onClick={() => setTimeSeriesAxis("linear")}
                >
                  Linear
                </Button>
                <Button
                  style={{ marginTop: 10, marginLeft: 5, marginBottom: 5 }}
                  variant="outlined"
                  size="small"
                  onClick={() => setTimeSeriesAxis("logarithmic")}
                >
                  Logarithmic
                </Button>
              </div>
            </Paper>
          </div>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade in={window.location.pathname === "/DeepDive"} timeout={5000}>
          <div>Chart 4 here</div>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default DeepDive;
