import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import BarChart from "../BarChart/BarChart";
import DashboardCard from "../DashboardCard/DashboardCard";
import Modal from "../../../util/Modal/Modal";
import Table from "../../../util/Table/Table";
import TableHeader from "../../../util/TableHeader/TableHeader";
import Dropdown from "../../../util/Dropdown/Dropdown";

import bike from "../../../assets/icons/dashboardBikeIcon.svg";
import auto from "../../../assets/icons/dashboardAutoIcon.svg";
import car from "../../../assets/icons/dashboardCarIcon.svg";
import jeep from "../../../assets/icons/dashboardJeepIcon.svg";
import truck from "../../../assets/icons/dashboardTruckIcon.svg";
import ecar from "../../../assets/icons/dashboardE-carIcon.svg";

import { useStyles } from "./css";

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);
  const [vehicles, setVehicles] = React.useState();

  const handleOpenModal = value => {
    console.log(value);
    setOpenModal(true);
    setVehicles(value);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={classes.image}>
      <div className={classes.root}>
        <br />
        <div className={classes.root}>
          <Toolbar>
            <Typography align="left" variant="h4" className={classes.heading}>
              <b>Dashboard</b>
            </Typography>
            {/* <div>
              <select className={classes.dropdown}>
                <option>Date</option>
                <option selected>Month</option>
                <option>Year</option>
                <option>Date Between</option>
              </select>
            </div> */}
            <Dropdown />
          </Toolbar>
        </div>

        {openModal && (
          <Modal
            isOpen={openModal}
            openModal={handleOpenModal}
            closeModal={handleCloseModal}
            vehicles={vehicles}
            table={<Table />}
            header={<TableHeader />}
          />
        )}
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
                handleOpenModal={() => {
                  handleOpenModal("2 Wheeler Table");
                }}
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
                handleOpenModal={() => {
                  handleOpenModal("3 Wheeler Table");
                }}
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
                handleOpenModal={() => {
                  handleOpenModal("4 Wheeler Table");
                }}
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
                handleOpenModal={() => {
                  handleOpenModal("4 Wheeler Commercial Table");
                }}
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
                handleOpenModal={() => {
                  handleOpenModal("Truck Table");
                }}
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
                handleOpenModal={() => {
                  handleOpenModal("E-Cars Table");
                }}
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
