import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import LockIcon from "@material-ui/icons/Lock";
import { useForm, Controller } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStyles } from "./css";

export default function FullWidthGrid() {
  const [visible, setVisible] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();

  // const history = useHistory();
  const { handleSubmit, register } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  const openEditProfile = () => {
    setVisible(true);
  };

  const closeEditProfile = () => {
    setVisible(false);
  };

  const continueRedirect = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/otopark/superadmin/dashboard" />;
  }

  return (
    <div className={classes.mainRoot}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={12}>
          <br />
          <br />
          <Grid boxShadow={1} className={classes}>
            <div className={classes.root}>
              <Toolbar>
                <Typography
                  align="left"
                  variant="h4"
                  className={classes.heading}
                >
                  <Link to="/otopark/superadmin/dashboard">
                    {visible ? (
                      ""
                    ) : (
                      <ArrowBackIcon
                        align="left"
                        style={{ color: "#00BBDC" }}
                      />
                    )}
                  </Link>
                </Typography>
                <Typography variant="h6" className={classes.myProfileText}>
                  My Profile
                </Typography>
              </Toolbar>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          item
          xs={12}
          sm={12}
          md={8}
          lg={12}
        >
          <Grid lg={6} spacing={1}>
            {/* img part */}
            {visible ? (
              <>
                <Grid item xs={12}>
                  <Avatar
                    // style={{ marginTop: "80px" }}
                    alt="Remy Sharp"
                    src={require("../../../assets/images/profile.jpg")}
                    className={classes.profileImage}
                  />
                  <form
                    className={classes.form}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className={classes.root}>
                      <List
                        style={{ textAlign: "center" }}
                        component="nav"
                        aria-label="main mailbox folders"
                      >
                        <TextField
                          size="small"
                          name="userName"
                          id="userName"
                          type="text"
                          className="textbox"
                          variant="outlined"
                          margin="normal"
                          required
                          inputRef={register}
                          // defaultValue="otopark"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                        <br />
                        <TextField
                          style={{ backgroundColor: "#fff" }}
                          size="small"
                          name="email"
                          id="email"
                          type="email"
                          className="textbox"
                          variant="outlined"
                          margin="normal"
                          required
                          inputRef={register}
                          // defaultValue="info@otopark.in"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <MailOutlineIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                        <br />
                        <TextField
                          style={{ backgroundColor: "#fff" }}
                          size="small"
                          name="number"
                          id="number"
                          type="number"
                          className="textbox"
                          variant="outlined"
                          margin="normal"
                          required
                          inputRef={register}
                          // defaultValue="8237264658"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CallIcon />
                              </InputAdornment>
                            )
                          }}
                        />
                      </List>
                    </div>

                    <div align="center">
                      <Button
                        variant="outlined"
                        color="primary"
                        type="submit"
                        className={classes.cancelButton}
                        // onClick={closeEditProfile}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        className={classes.cancelButton}
                        onClick={closeEditProfile}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Avatar
                    alt="Remy Sharp"
                    src={require("../../../assets/images/profile.jpg")}
                    className={classes.profileImage}
                  />
                  <div className={classes.root}>
                    <List component="nav" aria-label="main mailbox folders">
                      <ListItem button>
                        <ListItemIcon>
                          <PermIdentityIcon style={{ color: "black" }} />
                        </ListItemIcon>
                        <ListItemText primary="otopark" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <MailOutlineIcon style={{ color: "black" }} />
                        </ListItemIcon>
                        <ListItemText primary="info@otopark.in" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <CallIcon style={{ color: "black" }} />
                        </ListItemIcon>
                        <ListItemText primary="8237264658" />
                      </ListItem>
                    </List>
                  </div>

                  <Box
                    align="left"
                    boxShadow={1}
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      backgroundColor: "#f2f2f2",
                      borderRadius: "10px"
                    }}
                  >
                    <p style={{ fontSize: "15px", padding: "10px" }}>
                      My Profile
                    </p>
                  </Box>
                  <div className={classes.root}>
                    <List component="nav" aria-label="main mailbox folders">
                      <Link
                        to="/otopark/superadmin/changepassword"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <ListItem button>
                          <ListItemIcon>
                            <LockIcon style={{ color: "black" }} />
                          </ListItemIcon>
                          <ListItemText primary="Change Password" />
                        </ListItem>
                      </Link>

                      <ListItem button onClick={openEditProfile}>
                        <ListItemIcon>
                          <EditIcon style={{ color: "black" }} />
                        </ListItemIcon>

                        <ListItemText primary="Edit Profile" />
                      </ListItem>
                    </List>
                  </div>

                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.saveButton}
                    onClick={() => continueRedirect()}
                  >
                    Save
                  </Button>
                  <br />
                  <br />
                  <br />
                  <br />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
