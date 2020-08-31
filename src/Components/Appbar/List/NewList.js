import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PagesIcon from "@material-ui/icons/Pages";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MessageIcon from "@material-ui/icons/Message";
import { Link, withRouter } from "react-router-dom";
import { useStyles } from "./css";

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {
      width: "100%",
      color: "#00BBDC",
      backgroundColor: "#D9F9FF"
    };
  else
    return {
      width: "100%",
      color: "black",
      backgroundColor: "#fff"
    };
};

const NestedList = ({ history }) => {
  console.log(history);
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
      className={classes.root}
    >
      {/*List start */}
      <Link
        style={{ textDecoration: "none" }}
        to="/otopark/superadmin/dashboard"
      >
        <ListItem
          button
          style={isActive(history, "/otopark/superadmin/dashboard")}
        >
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/homeIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/otopark/superadmin/users">
        <ListItem button style={isActive(history, "/otopark/superadmin/users")}>
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/userIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/otopark/superadmin/parking">
        <ListItem
          button
          style={isActive(history, "/otopark/superadmin/parking")}
        >
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/parkingIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Parking" />
        </ListItem>
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/otopark/superadmin/montlypass"
      >
        <ListItem
          button
          style={isActive(history, "/otopark/superadmin/montlypass")}
        >
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/monthlyPassIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Monthly Pass" />
        </ListItem>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/otopark/superadmin/booking">
        <ListItem
          button
          style={isActive(history, "/otopark/superadmin/booking")}
        >
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/bookingIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Booking" />
        </ListItem>
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/otopark/superadmin/hardware"
      >
        <ListItem
          button
          style={isActive(history, "/otopark/superadmin/hardware")}
        >
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/hardwareIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Hardware" />
        </ListItem>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/otopark/superadmin/support">
        <ListItem
          button
          style={isActive(history, "/otopark/superadmin/support")}
        >
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/supportIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </Link>

      <Link style={{ textDecoration: "none" }} to="/otopark/superadmin/payment">
        <ListItem
          button
          style={isActive(history, "/otopark/superadmin/payment")}
        >
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/paymentIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
      </Link>

      <Link style={{ textDecoration: "none" }} to="#">
        <ListItem button style={isActive(history, "#")}>
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/locationIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Location" />
        </ListItem>
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/otopark/superadmin/notification"
      >
        <ListItem
          button
          style={isActive(history, "/otopark/superadmin/notification")}
        >
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/notificationIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Notification" />
        </ListItem>
      </Link>

      <Link style={{ textDecoration: "none" }} to="#">
        <ListItem button style={isActive(history, "#")}>
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/couponIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Coupons" />
        </ListItem>
      </Link>

      <Link style={{ textDecoration: "none" }} to="#">
        <ListItem button style={isActive(history, "#")}>
          <ListItemIcon>
            <img
              src={require("../../../assets/icons/settingsIcon.svg")}
              width="25px"
              height="25px"
            />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </Link>
    </List>
  );
};

export default withRouter(NestedList);
