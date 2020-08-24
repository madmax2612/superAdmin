import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStyles } from "./css";

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9"
    }
  }))(Tooltip);
  console.log(props);
  return (
    <Card
      className={classes.root}
      style={{ marginRight: "20px" }}
      onClick={props.handleOpenModal}
    >
      <CardContent>
        <Typography component="p">
          <img className={classes.iconImage} src={props.iconImage} />
          <p className={classes.iconNaming}>
            <b>{props.iconNaming}</b>
          </p>
        </Typography>
        <Grid container style={{ marginTop: "-15px" }}>
          <Grid item xs={6}>
            <p className={classes.vehicle}>
              <b>{props.vehicleOut}</b>
            </p>
            <p className={classes.vehicleNumber}>
              <b>{props.vehicleOutNumber}</b>
            </p>
            <div className={classes.verticalBar}></div>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.vehicle}>
              <b>{props.vehicleIn}</b>
            </p>
            <p className={classes.vehicleNumber}>
              <b style={{ color: "#00BBDC" }}>{props.vehicleInNumber}</b>
            </p>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.divbelowcard}>Capacity : {props.slots}</div>
          </Grid>
        </Grid>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
    </Card>
  );
}
