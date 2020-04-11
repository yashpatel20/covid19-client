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
    minHeight: 50,
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

const State = () => {
  const classes = styles();

  const [stateData, setStateData] = useState([]);
  const [India, setIndia] = useState({});

  useEffect(() => {
    getStateData();
  }, []);

  const getStateData = async () => {
    const response = await axios.get("/api/covid19/India");
    const india = response.data[response.data.length - 3];
    const newCases = india.Cases.replace(/[*]/g, "");
    const newIndia = {
      ...india,
      Cases: newCases,
    };
    setIndia(newIndia);
    const data = response.data.slice(0, response.data.length - 3);
    data[0].State = "Andaman and Nicobar";
    setStateData(data);
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

  return (
    <Grid item xs={12} sm={6}>
      <Typography className={classes.subHeading} variant="h5" gutterBottom>
        India Overview
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
  );
};

export default State;
