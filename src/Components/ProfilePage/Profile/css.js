import { makeStyles, fade } from "@material-ui/core/styles";
export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  mainRoot: {
    flexGrow: 1,
    marginTop: "-60px",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      marginLeft: "-4px",
      marginRight: "-4px",
      marginTop: "-50px"
    }
  },
  root: {
    flexGrow: 1,
    zIndex:9999,
    
    "& label.Mui-focused": {
      color: "#00BBDC"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#00BBDC"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black"
      },
      "&:hover fieldset": {
        borderColor: "#00BBDC"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00BBDC"
      }
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  fixedAppbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: "1",
    width: "100%"
  },
  myProfileText: {
    color: "#00BBDC",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto"
  },
  profileImage: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100px",
    height: "100px"
  },
  saveButton: {
    textTransform: "none",
    padding: "5px",
    fontSize: "18px",
    width: "250px",
    borderRadius: "50px",
    color: "#00BBDC",
    backgroundColor: "#fff",
    border: "2px solid #00BBDC",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    "&:hover": {
      background: "#00BBDC",
      color: "#fff",
      border: "2px solid #00BBDC"
    }
  },
  cancelButton: {
    textTransform: "none",
    marginRight: "10px",
    padding: "5px",
    width: "100px",
    borderRadius: "10px",
    color: "#00BBDC",
    backgroundColor: "#fff",
    border: "2px solid #00BBDC",
    "&:hover": {
      background: "#00BBDC",
      color: "#fff",
      border: "2px solid #00BBDC"
    }
  }
}));
