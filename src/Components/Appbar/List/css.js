import { makeStyles, fade } from "@material-ui/core/styles";
import { height } from "@material-ui/system";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  // scrollBar: {
  //   // overscrollBehavior: "contain",
  //   // marginTop: "20px"
  //   overflow: "auto",
  //   marginLeft: "-25px",
  //   height: "555px",
  //   [theme.breakpoints.down("sm")]: {
  //     marginTop: "-40px",
  //     // marginBottom: "-40px",
  //     height: "100vh"
  //   }
  // },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  linkstyleprimary: {
    textDecoration: "none",
    backgroundColor: "#00BBDC",
    color: "white",
    "&:focus": {
      backgroundColor: "#00BBDC"
    }
  },
  linkstylesecondary: {
    backgroundColor: "#00BBDC",
    color: "white"
  }
}));
