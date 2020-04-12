import React, { useState, useEffect } from "react";
import axios from "axios";
import TimeSeriesChart from "../Components/Charts/TimeSeriesChart";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = makeStyles({
  subHeading: {
    marginBottom: 10,
  },
  chart: {
    padding: 10,
  },
});

const TimeSeries = () => {
  const classes = styles();
  const [timeSeriesAxis, setTimeSeriesAxis] = useState("linear");
  const [checked, setChecked] = useState(false);
  const [dataCases, setDataCases] = useState([]);
  const [dataDeaths, setDataDeaths] = useState([]);
  const [dataRecovered, setDataRecoverd] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("/api/covid19/IndiaTS");
    const dataCases = response.data.map((item) => {
      const container = {};
      container.Date = item.Date.slice(5);
      container.Cases = item.Cases;
      return container;
    });
    const dataDeaths = response.data.map((item) => {
      const container = {};
      container.Date = item.Date.slice(5);
      container.Cases = item.Deaths;
      return container;
    });
    const dataRecovered = response.data.map((item) => {
      const container = {};
      container.Date = item.Date.slice(5);
      container.Cases = item.Recovered;
      return container;
    });
    setDataCases(dataCases);
    setDataDeaths(dataDeaths);
    setDataRecoverd(dataRecovered);
  };

  const handleChange = (event) => {
    if (timeSeriesAxis === "logarithmic") {
      setTimeSeriesAxis("linear");
    } else {
      setTimeSeriesAxis("logarithmic");
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <Typography className={classes.subHeading} variant="h5" gutterBottom>
        SPREAD TRENDS
      </Typography>
      <FormControlLabel
        style={{ marginBottom: 10 }}
        control={<Switch color="primary" onChange={handleChange} />}
        label="Logarithmic"
      />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <div className={classes.chart}>
              <Typography
                style={{ textAlign: "center", marginBottom: 5 }}
                variant="body1"
              >
                Cases
              </Typography>
              <TimeSeriesChart
                type={timeSeriesAxis}
                timeSeries={dataCases}
                color="#000"
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className={classes.chart}>
              <Typography
                style={{ textAlign: "center", marginBottom: 5 }}
                variant="body1"
              >
                Deaths
              </Typography>
              <TimeSeriesChart
                type={timeSeriesAxis}
                timeSeries={dataDeaths}
                color="#f50057"
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <div className={classes.chart}>
              <Typography
                style={{ textAlign: "center", marginBottom: 5 }}
                variant="body1"
              >
                Recovered
              </Typography>
              <TimeSeriesChart
                type={timeSeriesAxis}
                timeSeries={dataRecovered}
                color="#3f51b5"
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TimeSeries;
