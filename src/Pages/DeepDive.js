import React, { useState } from "react";
import StateChart from "../Components/Charts/StateChart";
import CountryChart from "../Components/Charts/CountryChart";
import DeathRecoveredChart from "../Components/Charts/DeathRecovereChart";
import DailyCasesChart from "../Components/Charts/DailyCasesChart";

//MUI
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const DeepDive = () => {
  return (
    <Grid styles={{ paddingLeft: 25, paddingRight: 25 }} container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Fade in={window.location.pathname === "/DeepDive"} timeout={2000}>
          <div>
            <Paper>
              <div style={{ padding: 10 }}>
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
              <div style={{ padding: 10 }}>
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
              <div style={{ padding: 10 }}>
                <Typography
                  style={{ textAlign: "center", marginBottom: 5 }}
                  variant="body1"
                >
                  Deaths vs Recovered in India
                </Typography>
                <DeathRecoveredChart />
              </div>
            </Paper>
          </div>
        </Fade>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Fade in={window.location.pathname === "/DeepDive"} timeout={4500}>
          <div>
            <Paper>
              <div style={{ padding: 10 }}>
                <Typography
                  style={{ textAlign: "center", marginBottom: 5 }}
                  variant="body1"
                >
                  Daily Cases in India
                </Typography>
                <DailyCasesChart />
              </div>
            </Paper>
          </div>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default DeepDive;
