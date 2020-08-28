import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "5px"
    }
  },
  containerAdjust: {
    marginLeft: "0px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "12px"
    }
  },
  heading: {
    // fontFamily: "lato",
    flex: 1,
    color: "white",
    marginLeft: "-40px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-20px"
    }
  },
  paper: {
    borderRadius: "10px",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  image: {
    backgroundColor: "#00BBDC",
    backgroundImage: require("../../../assets/images/mumbai.png")
    // opacity: "0.8",
    // backgroundColor: "#00BBDC"

    // background: `#00BBDC ${require("../../../assets/images/mumbai.png")} no-repeat right top`
  },
  dropdown: {
    backgroundColor: "white",
    color: "#00BBDC",
    // marginRight: "-40px",
    width: "130px",
    height: "40px",
    borderColor: "#00BBDC",
    boder: "1px solid #00BBDC",
    borderRadius: "50px",
    // border: "0px",
    outline: "0px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      // width: "40",
      height: "35px"
    }
  }
  // cardScroll: {
  //   backgroundColor: "#00BBDC",
  //   padding: "20px",
  //   overflowX: "auto",
  //   whiteSpace: "nowrap"
  // },

  // cardScroll: {
  //   overflowX: "auto",
  //   padding: "20px",
  //   backgroundColor: "#00BBDC",
  //   // listStyle: "none",
  //   height: "100%",
  //   "&::-webkit-scrollbar": {
  //     backgroundColor: "white",
  //     borderRadius: "20px",
  //     width: "0.4em"
  //   },
  //   "&::-webkit-scrollbar-track": {
  //     boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  //     webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
  //   },
  //   "&::-webkit-scrollbar-thumb": {
  //     backgroundColor: "#1D1D1D",
  //     outline: "1px solid black",
  //     borderRadius: "20px"
  //   }
  // }
}));
