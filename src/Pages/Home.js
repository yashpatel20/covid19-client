import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

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
    justifyContent: "center",
    alignItems: "center",
    minHeight: 70,
  },
  blockText: {
    textAlign: "center",
    marginBottom: 5,
  },
  dataText: {
    padding: 5,
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
      <TableCell align="right">{state.Cases}</TableCell>
      <TableCell align="right">{state.Deaths}</TableCell>
      <TableCell align="right">{state.Recovered}</TableCell>
    </TableRow>
  ));
  const rowsCountry = countryData.map((country) => (
    <TableRow key={country.Country}>
      <TableCell component="th" scope="row">
        {country.Country}
      </TableCell>
      <TableCell align="right">{country.Cases}</TableCell>
      <TableCell align="right">{country.Deaths}</TableCell>
      <TableCell align="right">{country.Recovered}</TableCell>
    </TableRow>
  ));

  return (
    <Fragment>
      <Typography className={classes.heading} variant="h2" gutterBottom>
        Covid-19 India Tracker
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography className={classes.subHeading} variant="h4" gutterBottom>
            Covid-19 Cases Overview in India
          </Typography>
          <Grid className={classes.blockGrid} container spacing={1}>
            <Grid item xs>
              <Typography className={classes.blockText} variant="h6">
                Total Cases
              </Typography>
              <Paper className={classes.block}>
                <Typography className={classes.dataText} variant="h3">
                  {India.Cases}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Typography className={classes.blockText} variant="h6">
                Deaths
              </Typography>
              <Paper className={classes.block}>
                <Typography
                  className={classes.dataText}
                  color="secondary"
                  variant="h3"
                >
                  {India.Deaths}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Typography className={classes.blockText} variant="h6">
                Recovered
              </Typography>
              <Paper className={classes.block}>
                <Typography
                  className={classes.dataText}
                  color="primary"
                  variant="h3"
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
        <Grid item xs={6}>
          <Typography className={classes.subHeading} variant="h4" gutterBottom>
            Most Affected Countries by Covid-19
          </Typography>
          <Grid className={classes.blockGrid} container spacing={1}>
            <Grid item xs>
              <Typography className={classes.blockText} variant="h6">
                Total Cases
              </Typography>
              <Paper className={classes.block}>
                <Typography className={classes.dataText} variant="h3">
                  {World.Cases}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Typography className={classes.blockText} variant="h6">
                Deaths
              </Typography>
              <Paper className={classes.block}>
                <Typography
                  className={classes.dataText}
                  color="secondary"
                  variant="h3"
                >
                  {World.Deaths}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Typography className={classes.blockText} variant="h6">
                Recovered
              </Typography>
              <Paper className={classes.block}>
                <Typography
                  className={classes.dataText}
                  color="primary"
                  variant="h3"
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
      </Grid>
    </Fragment>
  );
};

export default Home;
