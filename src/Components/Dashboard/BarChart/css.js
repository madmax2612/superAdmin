import { makeStyles } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    height: "40px"
  },
  // chartDiv: {
  //   [theme.breakpoints.down("xs")]: {
  //     display: "block",
  //     width: "300px"
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     display: "block",
  //     width: "340px"
  //   }
  // },
  paper: {
    marginRight: "180px",
    padding: "10px",
    borderRadius: "10px",
    // padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "2px 2px 2px 2px grey",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
      padding: "5px"
    }
  },
  totolCollection: {
    fontSize: "15px",
    color: "black",
    marginLeft: "-40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      marginLeft: "0px"
    }
  },
  rupeeIcon: {
    width: "23px",
    height: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "10px",
      height: "10px"
    }
  },
  amount: {
    fontSize: "30px",
    color: "black",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px"
    }
  },
  growIcon: {
    marginLeft: "20px",
    width: "23px",
    height: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2px",
      width: "10px",
      height: "10px"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  dropdown: {
    backgroundColor: "#00BBDC",
    color: "white",
    width: "150px",
    height: "40px",
    borderColor: "#00BBDC",
    boder: "1px solid #00BBDC",
    borderRadius: "50px",
    // border: "0px",
    outline: "0px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "50px",
      height: "35px"
    }
  }
}));
