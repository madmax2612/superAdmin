import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./css";
import "./Dropdown.css";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import zIndex from "@material-ui/core/styles/zIndex";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [startDate, setStartDate] = useState(new Date());

  const [startDate1, setStartDate1] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/04/08"));

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ExampleCustomInput = ({ value, onClick }) => (
    <button
      className="example-custom-input btn-block"
      onClick={onClick}
      style={{
        width: "50%",
        marginRight: "5px",
        padding: " 6px 10px 5px",
        fontSize: "15px",
        zIndex: "9999",
        backgroundColor: "#f0f5f7",
        fontWeight: "bold",
        color: " #00bbdc",
        borderBottom: "2px solid #00bbdc",
        borderLeft: "2px solid #00bbdc",
        borderRight: "2px solid #00bbdc",
        borderTop: "2px solid #00bbdc"
      }}
    >
      <i
        style={{ padding: "5px" }}
        class="fa fa-calendar"
        aria-hidden="true"
      ></i>
      {value}
    </button>
  );

  return (
    <div>
      <Button
        className={classes.dropdown}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Choose Date
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* Date */}
        <div style={{ width: "250px", outline: "0px" }}>
          <h4 style={{ marginLeft: "10px" }}>Date</h4>
          <div
            className="customDatePickerWidth"
            align="right"
            style={{ marginTop: "-50px" }}
          >
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              closeOnScroll={true}
              customInput={<ExampleCustomInput />}
              withPortal
              popperModifiers={{
                preventOverflow: {
                  enabled: true
                }
              }}
            />
          </div>
        </div>
        <Divider
          style={{
            marginTop: "10px",
            borderBottom: "1px solid black"
          }}
        />
        {/* Month */}
        <div style={{ width: "250px" }}>
          <h4 style={{ marginLeft: "10px" }}>Month</h4>
          <div
            className="customDatePickerWidth"
            align="right"
            style={{ marginTop: "-50px" }}
          >
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="MM"
              showMonthYearPicker
              showFullMonthYearPicker
              showTwoColumnMonthYearPicker
              closeOnScroll={true}
              customInput={<ExampleCustomInput />}
              withPortal
              popperModifiers={{
                preventOverflow: {
                  enabled: true
                }
              }}
            />
          </div>
        </div>
        <Divider
          style={{
            marginTop: "10px",
            borderBottom: "1px solid black"
          }}
        />
        {/* Year */}
        <div style={{ width: "250px" }}>
          <h4 style={{ marginLeft: "10px" }}>Year</h4>
          <div
            className="customDatePickerWidth"
            align="right"
            style={{ marginTop: "-50px" }}
          >
            <DatePicker
              style={{ marginLeft: "20px" }}
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="yyyy"
              maxDate={new Date()}
              showYearPicker
              closeOnScroll={true}
              customInput={<ExampleCustomInput />}
              withPortal
              popperModifiers={{
                preventOverflow: {
                  enabled: true
                }
              }}
            />
          </div>
        </div>
        <Divider
          style={{
            marginTop: "10px",
            borderBottom: "1px solid black"
          }}
        />
        {/* Date Between */}
        <div style={{ width: "250px" }}>
          <h4 style={{ marginLeft: "10px" }}>Date Between</h4>
          <div
            className="customDatePickerWidth"
            align="right"
            style={{ marginTop: "-50px" }}
          >
            <DatePicker
              selected={startDate1}
              onChange={date => setStartDate1(date)}
              selectsStart
              startDate={startDate1}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              showMonthPicker
              closeOnScroll={true}
              customInput={<ExampleCustomInput />}
              withPortal
              popperModifiers={{
                preventOverflow: {
                  enabled: true
                }
              }}
            />

            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate1}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              showMonthPicker
              closeOnScroll={true}
              customInput={<ExampleCustomInput />}
              withPortal
              popperModifiers={{
                preventOverflow: {
                  enabled: true
                }
              }}
            />
          </div>
        </div>
      </StyledMenu>
    </div>
  );
}
