import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import PieChart from "../PieChart/PieChart";
import LineChart from "../LineChart/LineChart";
import BarChart from "../BarChart/BarChart";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import DashboardCard from "../DashboardCard/DashboardCard";

import bike from "../../../assets/icons/dashboardBikeIcon.svg";
import auto from "../../../assets/icons/dashboardAutoIcon.svg";
import car from "../../../assets/icons/dashboardCarIcon.svg";
import jeep from "../../../assets/icons/dashboardJeepIcon.svg";
import truck from "../../../assets/icons/dashboardTruckIcon.svg";
import ecar from "../../../assets/icons/dashboardE-carIcon.svg";

import { useStyles } from "./css";

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      <div className={classes.root}>
        <br />
        <div className={classes.root}>
          <Toolbar>
            <Typography align="left" variant="h4" className={classes.heading}>
              <b>Dashboard</b>
            </Typography>
            <div>
              <select className={classes.dropdown}>
                <option>Date</option>
                <option selected>Month</option>
                <option>Year</option>
                <option>Date Between</option>
              </select>
            </div>
          </Toolbar>
        </div>
        {/* appbar start */}
        {/* <div className={classes.grow}>
          <AppBar
            position="static"
            // style={{ display: "flex", backgroundColor: "white" }}
          >
            <Toolbar className={classes.cardScroll}>
              <DashboardCard
                iconImage={bike}
                iconNaming="2 Wheeler"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />

              <DashboardCard
                iconImage={auto}
                iconNaming="3 Wheeler"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />

              <DashboardCard
                iconImage={car}
                iconNaming="4 Wheeler"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />

              <DashboardCard
                iconImage={jeep}
                iconNaming="4 Wheeler Commercial"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />

              <DashboardCard
                iconImage={truck}
                iconNaming="Truck"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />

              <DashboardCard
                iconImage={ecar}
                iconNaming="E-Cars"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />
            </Toolbar>
          </AppBar>
        </div> */}
        {/* appbar end */}
        <div>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              className={classes.containerAdjust}
            >
              <DashboardCard
                iconImage={bike}
                iconNaming="2 Wheeler"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              className={classes.containerAdjust}
            >
              <DashboardCard
                iconImage={auto}
                iconNaming="3 Wheeler"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              className={classes.containerAdjust}
            >
              <DashboardCard
                iconImage={car}
                iconNaming="4 Wheeler"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              className={classes.containerAdjust}
            >
              <DashboardCard
                iconImage={jeep}
                iconNaming="4 Wheeler Commercial"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              className={classes.containerAdjust}
            >
              <DashboardCard
                iconImage={truck}
                iconNaming="Truck"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              className={classes.containerAdjust}
            >
              <DashboardCard
                iconImage={ecar}
                iconNaming="E-Cars"
                vehicleOut="Vehicle Out"
                vehicleOutNumber="460"
                vehicleIn="Vehicle In"
                vehicleInNumber="1000"
                slots="1200"
              />
            </Grid>
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <Grid container spacing={1}>
          <Grid item lg={12} className={classes.containerAdjust}>
            <Paper className={classes.paper}>
              <BarChart />
            </Paper>
            <br />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
