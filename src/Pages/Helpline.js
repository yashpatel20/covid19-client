import React, { Fragment } from "react";
import helplineData from "../utils/helplineData";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

const styles = makeStyles({
  divider: {
    marginBottom: 20,
  },
  heading: {
    textAlign: "center",
  },
  maingrid: {
    paddingRight: 25,
    paddingLeft: 25,
  },
});

const Helpline = () => {
  const classes = styles();
  const rows = helplineData.map((data) => (
    <TableRow key={data.State}>
      <TableCell component="th" scope="row">
        {data.State}
      </TableCell>
      <TableCell align="right">
        <Typography variant="body2">{data.Helpline}</Typography>
      </TableCell>
    </TableRow>
  ));
  return (
    <Fragment>
      <Typography
        style={{ marginBottom: 10 }}
        variant="h4"
        className={classes.heading}
        gutterBottom
      >
        HELPLINES FOR EVERY STATE
      </Typography>
      <Typography
        color="primary"
        className={classes.heading}
        style={{ marginBottom: 10 }}
        variant="h5"
      >
        Central Helpline : +91-11-23978046
      </Typography>
      <Divider className={classes.divider} />
      <Grid className={classes.maingrid} container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>State</TableCell>
                  <TableCell align="right">Helpline</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{rows}</TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper>
                <div style={{ padding: 10 }}>
                  <Typography variant="body1">
                    Ministry of Health and Family Welfare, Gov. of India
                  </Typography>
                  <Link href="HTTPS://WWW.MOHFW.GOV.IN/">
                    <Typography variant="body1">
                      HTTPS://WWW.MOHFW.GOV.IN/
                    </Typography>
                  </Link>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <div style={{ padding: 10 }}>
                  <Typography variant="body1">
                    WHO : COVID-19 Home Page
                  </Typography>
                  <Link href="HTTPS://WWW.WHO.INT/EMERGENCIES/DISEASES/NOVEL-CORONAVIRUS-2019">
                    <Typography variant="body1">
                      HTTPS://WWW.WHO.INT/EMERGENCIES/DISEASES/NOVEL-CORONAVIRUS-2019
                    </Typography>
                  </Link>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <div style={{ padding: 10 }}>
                  <Typography variant="body1">CDC</Typography>
                  <Link href="HTTPS://WWW.CDC.GOV/CORONAVIRUS/2019-NCOV/FAQ.HTML">
                    <Typography variant="body1">
                      HTTPS://WWW.CDC.GOV/CORONAVIRUS/2019-NCOV/FAQ.HTML
                    </Typography>
                  </Link>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <div style={{ padding: 10 }}>
                  <Typography variant="body1">
                    Crowdsourced list of Resources & Essentials from across
                    India
                  </Typography>
                  <Link href="HTTPS://BIT.LY/COVID19RESOURCELIST">
                    <Typography variant="body1">
                      HTTPS://BIT.LY/COVID19RESOURCELIST
                    </Typography>
                  </Link>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <div style={{ padding: 10 }}>
                  <Typography variant="body1">
                    COVID-19 Global Tracker
                  </Typography>
                  <Link href="https://coronavirus.jhu.edu/map.html">
                    <Typography variant="body1">
                      HTTPS://CORONAVIRUS.JHU.EDU/MAP.HTML
                    </Typography>
                  </Link>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Helpline;
