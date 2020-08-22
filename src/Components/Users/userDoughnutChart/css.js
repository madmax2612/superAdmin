import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  chartText: {
    position: "absolute",
    top: "38%",
    left: "28%",
    zIndex: 1
  },
  innerDiv: {
    marginTop: "-220px",
    marginLeft: "118px",
    marginBottom: "100px",
    // [theme.breakpoints.down("md")]: {
    //   marginTop: "-200px",
    //   marginLeft: "0px",
    //   marginBottom: "100px"
    // },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-190px",
      marginLeft: "100px",
      marginBottom: "100px"
    }
  },
  dis1: {
    color: "#606060",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px"
    }
  },
  head: {
    color: "#00BBDC",
    fontSize: "70px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px"
    }
  },
  dis2: {
    color: "#2D2D2D",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px"
    }
  },
  chart: {
    marginLeft: "0px",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "50px"
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "120px"
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "220px"
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "10px"
    }
  }
}));
