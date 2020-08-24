import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PagesIcon from "@material-ui/icons/Pages";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import VideocamIcon from "@material-ui/icons/Videocam";
import PersonIcon from "@material-ui/icons/Person";
import PaymentIcon from "@material-ui/icons/Payment";

import MessageIcon from "@material-ui/icons/Message";
import { Link } from "react-router-dom";
import { useStyles } from "./css";

export const list = [
  {
    icon: (
      <img
        src={require("../../../assets/icons/homeIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Dashboard",
    to: "/otopark/superadmin/dashboard"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/userIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Users",
    to: "/otopark/superadmin/users"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/parkingIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Parking",
    to: "/otopark/superadmin/parking"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/monthlyPassIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Monthly Pass",
    to: "/otopark/superadmin/montlypass"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/bookingIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Booking",
    to: "/otopark/superadmin/booking"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/hardwareIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Hardware",
    to: "/otopark/superadmin/hardware"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/supportIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Support",
    to: "/otopark/superadmin/support"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/paymentIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Payments",
    to: "/otopark/superadmin/payment"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/locationIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Location",
    to: "#"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/notificationIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Notification",
    to: "/otopark/superadmin/notification"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/couponIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Coupons",
    to: "#"
  },
  {
    icon: (
      <img
        src={require("../../../assets/icons/settingsIcon.svg")}
        width="25px"
        height="25px"
      />
    ),
    primary: "Settings",
    to: "#"
  }
];

export default function NestedList() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [value, setValue] = useState({});

  const dashboardClick = () => {
    setOpen1(!open1);
  };

  const pagesClick = () => {
    setOpen2(!open2);
  };

  const userClick = () => {
    setOpen3(!open3);
  };

  const applicationClick = () => {
    setOpen4(!open4);
  };

  const onclickfunction = e => {
    console.log(e);
    setValue(e);
  };
  return (
    // <AppBar
    //   position="static"
    //   style={{ display: "flex", backgroundColor: "white" }}
    // >
    //   <Toolbar className={classes.scrollBar}>
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
      {/* <br />
      <br /> */}
      {list &&
        list.map((item, id) => {
          return (
            <>
              {value && value === item.primary ? (
                <Link to={item.to} className={classes.linkstyleprimary}>
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.primary}
                      onClick={() => onclickfunction(item.primary)}
                      style={{ color: "black" }}
                    />
                  </ListItem>
                </Link>
              ) : (
                <Link
                  to={item.to}
                  style={{ backgroundColor: "blue" }}
                  className={classes.linkstylesecondary}
                >
                  <ListItem button>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.primary}
                      onClick={() => onclickfunction(item.primary)}
                      style={{ color: "black" }}
                    />
                  </ListItem>
                </Link>
              )}
            </>
          );
        })}
    </List>
    //   </Toolbar>
    // </AppBar>
  );
}
