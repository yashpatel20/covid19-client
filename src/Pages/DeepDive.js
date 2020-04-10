import React from "react";
import StateChart from "../Components/Charts/StateChart";

//MUI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import CountryChart from "../Components/Charts/CountryChart";

const DeepDive = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper>
          <div style={{ padding: 20 }}>
            <StateChart />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper>
          <div style={{ padding: 20 }}>
            <CountryChart />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        Chart 3
      </Grid>
      <Grid item xs={12} sm={6}>
        Chart 4
      </Grid>
    </Grid>
  );
};

export default DeepDive;
