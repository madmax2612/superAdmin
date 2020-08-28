import React from "react";
import Content from "./DashboardContent/DashboardContent";
import Appbar from "../Appbar/Appbar/Appbar";
import whiteEmail from "../../assets/icons/emailIcon.svg";
import whiteBell from "../../assets/icons/whiteBellIcon.svg";
import whiteMenu from "../../assets/icons/whiteMenu-barCloseIcon.svg";

export default function Dashboard(props) {
  return (
    <div>
      <Appbar
        bgcolor="#00BBDC"
        shadow="5px 0px #00BBDC"
        emailIcon={whiteEmail}
        bellIcon={whiteBell}
        menuIcon={whiteMenu}
        profileTextColor="white"
        style={{ boxShadow: "none", borderRadius: "none" }}
        style1={{
          backgroundColor: "#00BBDC",
          border: "none",
          color: "white",
          borderRadius: "none",
          padding: "10px"
        }}
        page={<Content />}
      />
    </div>
  );
}
