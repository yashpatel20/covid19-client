import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import TimeSeriesChart from "../Components/Charts/TimeSeriesChart";

//mui
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

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
});

const Home = () => {
  const classes = styles();
  const [stateData, setStateData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [India, setIndia] = useState({});
  const [World, setWorld] = useState({});
  const [timeSeriesAxis, setTimeSeriesAxis] = useState("linear");

  useEffect(() => {
    getStateData();
    getCountryData();
  }, []);

  const getStateData = async () => {
    const response = await axios.get("/api/covid19/India");
    const india = response.data[0];
    setIndia(india);
    const data = response.data.slice(1);
    setStateData(data);
  };

  const getCountryData = async () => {
    const response = await axios.get("/api/covid19/World");
    const world = response.data[0];
    setWorld(world);
    const data = response.data.slice(1);
    setCountryData(data);
  };

  const rowsState = stateData.map((state) => (
    <TableRow key={state.State}>
      <TableCell component="th" scope="row">
        {state.State}
      </TableCell>
      <TableCell align="right">
        <Typography variant="body2">{state.Cases}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="body2" color="secondary">
          {state.Deaths}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="body2" color="primary">
          {state.Recovered}
        </Typography>
      </TableCell>
    </TableRow>
  ));
  const rowsCountry = countryData.map((country) => (
    <TableRow key={country.Country}>
      <TableCell component="th" scope="row">
        {country.Country}
      </TableCell>
      <TableCell align="right">
        <Typography variant="body2">{country.Cases}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="body2" color="secondary">
          {country.Deaths}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="body2" color="primary">
          {country.Recovered}
        </Typography>
      </TableCell>
    </TableRow>
  ));

  return (
    <Fragment>
      <Typography className={classes.heading} variant="h3" gutterBottom>
        Covid-19 India Tracker
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.subHeading} variant="h5" gutterBottom>
            Covid-19 Cases Overview in India
          </Typography>
          <Grid className={classes.blockGrid} container spacing={1}>
            <Grid item xs>
              <Paper className={classes.block}>
                <Typography className={classes.blockText} variant="body1">
                  Total Cases
                </Typography>
                <Typography className={classes.dataText} variant="h5">
                  {India.Cases}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.block}>
                <Typography className={classes.blockText} variant="body1">
                  Deaths
                </Typography>
                <Typography
                  className={classes.dataText}
                  color="secondary"
                  variant="h5"
                >
                  {India.Deaths}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.block}>
                <Typography className={classes.blockText} variant="body1">
                  Recovered
                </Typography>
                <Typography
                  className={classes.dataText}
                  color="primary"
                  variant="h5"
                >
                  {India.Recovered}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>State</TableCell>
                  <TableCell align="right">Cases</TableCell>
                  <TableCell align="right">Deaths</TableCell>
                  <TableCell align="right">Recovered</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rowsState}</TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography
                className={classes.subHeading}
                variant="h5"
                gutterBottom
              >
                Most Affected Countries by Covid-19
              </Typography>

              <Grid className={classes.blockGrid} container spacing={1}>
                <Grid item xs>
                  <Paper className={classes.block}>
                    <Typography className={classes.blockText} variant="body1">
                      Total Cases
                    </Typography>
                    <Typography className={classes.dataText} variant="h5">
                      {World.Cases}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.block}>
                    <Typography className={classes.blockText} variant="body1">
                      Deaths
                    </Typography>
                    <Typography
                      className={classes.dataText}
                      color="secondary"
                      variant="h5"
                    >
                      {World.Deaths}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs>
                  <Paper className={classes.block}>
                    <Typography className={classes.blockText} variant="body1">
                      Recovered
                    </Typography>
                    <Typography
                      className={classes.dataText}
                      color="primary"
                      variant="h5"
                    >
                      {World.Recovered}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Country</TableCell>
                      <TableCell align="right">Cases</TableCell>
                      <TableCell align="right">Deaths</TableCell>
                      <TableCell align="right">Recovered</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{rowsCountry}</TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <TimeSeriesChart type={timeSeriesAxis} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  style={{ marginTop: 15, marginRight: 5 }}
                  variant="outlined"
                  size="small"
                  onClick={() => setTimeSeriesAxis("linear")}
                >
                  Linear
                </Button>
                <Button
                  style={{ marginTop: 15, marginLeft: 5 }}
                  variant="outlined"
                  size="small"
                  onClick={() => setTimeSeriesAxis("logarithmic")}
                >
                  Logarithmic
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Home;
