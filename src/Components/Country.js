import React, { useState, useEffect } from "react";
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

const styles = makeStyles({
  heading: {
    textAlign: "center",
  },
  table: {
    minWidth: 300,
  },
  subHeading: {
    marginBottom: 10,
  },
  blockGrid: {
    marginBottom: 15,
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
    marginBottom: 10,
  },
});

const Country = () => {
  const classes = styles();

  const [countryData, setCountryData] = useState([]);
  const [World, setWorld] = useState({});

  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = async () => {
    const response = await axios.get("/api/covid19/World");
    const world = response.data[0];
    setWorld(world);
    const data = response.data.slice(1);
    setCountryData(data);
  };

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
    <Grid item xs={12}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography className={classes.subHeading} variant="h5" gutterBottom>
            WORLD OVERVIEW
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
      </Grid>
    </Grid>
  );
};

export default Country;
