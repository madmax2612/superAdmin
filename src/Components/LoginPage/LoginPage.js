import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./css";
import { useForm, Controller } from "react-hook-form";
import LoginModal from "../../util/LoginModal/LoginModal";
import { UserLogin } from "../../util/Services/Services";
import { Link, HashRouter, Redirect } from "react-router-dom";

export const baseUrl = "/otopark/superadmin";

export default function SignIn(props) {
  const history = useHistory();
  const classes = useStyles();
  const { handleSubmit, reset, watch, control, register, errors } = useForm();
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("payload")) {
      setRedirect(true);
      setError(false);
    }
  }, []);

  console.log(error);

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);

    //    setStoreRanger(data.RangerID)
    // console.log(data);
    if (data) {
      let formData = new FormData();
      formData.append("mobile", data.mobile);
      formData.append("password", data.password);
      setError(false);

      UserLogin(formData)
        .then(res => {
          console.log(res);
          if (res.data.message == "Success") {
            console.log("inside success");
            setError(false);
            sessionStorage.setItem("payload", JSON.stringify(res.data));
            setRedirect(true);
          } else {
            setRedirect(false);
            setError(true);
            setErrorMessage(res.data.message);
          }
        })
        .catch(err => {
          console.log(err.message);
          setError(true);
        });
    }
  };

  const handleOpenModal = () => {
    setError(true);
  };

  const handleCloseModal = () => {
    setError(false);
  };

  if (redirect) {
    return <Redirect to="/otopark/superadmin/dashboard" />;
  }

  return (
    <div>
      {error && (
        <LoginModal
          isOpen={error}
          openModal={handleOpenModal}
          closeModal={handleCloseModal}
          message={errorMessage}
        />
      )}
      <div
        style={{
          height: "100vh",
          backgroundColor: "#00BBDC",
          backgroundImage: require("../../assets/images/LoginPageImg.svg")
        }}
      >
        <Container component="main" maxWidth="xs" className={classes.container}>
          <Card className={classes.root}>
            <CardContent>
              <CssBaseline />
              <img
                className={classes.loginImage}
                src={require("../../assets/images/LoginPageImg.png")}
              />

              <div className={classes.paper} style={{ marginTop: "20px" }}>
                <Typography component="h5" variant="h5">
                  <b>Otopark Admin</b>
                </Typography>
                <Typography component="h9" variant="h9">
                  Welcome back! Please login to continue
                </Typography>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <TextField
                    size="small"
                    style={{
                      backgroundColor: "#fff",
                      color: "1px solid #1717172E"
                    }}
                    inputRef={register({ required: true, maxLength: 30 })}
                    className="mobile"
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    id="mobile"
                    // label="Username or email"
                    name="mobile"
                    placeholder="Mobile Number"
                    autoFocus
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneAndroidIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  {errors.mobile && errors.mobile.type === "required" && (
                    <div
                      className="container"
                      style={{ margin: "10px", color: "red" }}
                    >
                      <div className="row">
                        <i
                          class="fa fa-exclamation-triangle"
                          aria-hidden="true"
                          style={{ margin: "5px" }}
                        ></i>
                        <span>Mobile No can not be Empty</span>
                      </div>
                    </div>
                  )}
                  <TextField
                    style={{ backgroundColor: "#fff" }}
                    size="small"
                    inputRef={register({ required: true, maxLength: 30 })}
                    className="password"
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    name="password"
                    // label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <div
                      className="container"
                      style={{ margin: "10px", color: "red" }}
                    >
                      <div className="row">
                        <i
                          class="fa fa-exclamation-triangle"
                          aria-hidden="true"
                          style={{ margin: "5px" }}
                        ></i>
                        <span>Password cannot be Empty</span>
                      </div>
                    </div>
                  )}
                  {/* new */}
                  <div className={classes.forgotcheck}>
                    <div>
                      <FormControlLabel
                        control={
                          <Checkbox
                            inputRef={register}
                            value="remember"
                            name="checkbox"
                            color="grey"
                            // style={{ fontSize: "1px" }}
                          />
                        }
                        label="Remember me"
                      />
                    </div>
                    <div align="right">
                      <Link
                        to="/otopark/superadmin/changepassword"
                        variant="body2"
                        style={{ color: "#172B4D" }}
                      >
                        <p>Forgot password?</p>
                      </Link>
                    </div>
                  </div>
                  {/* new */}

                  <Grid container>
                    <Grid item xs>
                      <Button
                        align="center"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign In
                      </Button>
                      <br />
                      <div align="center">
                        Now to Product?
                        <Link
                          href="#"
                          variant="body2"
                          style={{ color: "#00BBDC" }}
                        >
                          {"Sign Up"}
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </CardContent>
          </Card>
        </Container>
        <footer
          style={{
            height: "300px",
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "#00BBDC"
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src={require("../../assets/images/mumbai.png")}
          />
        </footer>
      </div>
    </div>
  );
}
