import { makeStyles, fade } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  dropdown: {
    textTransform: "none",
    backgroundColor: "white",
    color: "#00BBDC",
    width: "150px",
    height: "40px",
    borderColor: "#00BBDC",
    border: "1px solid #00BBDC",
    borderRadius: "50px",
    outline: "0px",
    padding: "10px",
    "&:hover": {
      background: "#00BBDC",
      color: "#fff",
      border: "1px solid #00BBDC"
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "35px"
    }
  },
  button: {
    padding: "10px",
    marginLeft: "5px"
  }
}));
