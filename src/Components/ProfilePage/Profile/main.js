import React from "react";
import Appbar from "../../Appbar/Appbar/Appbar";
import blueEmail from "../../../assets/icons/blue-emailIcon.svg";
import blueBell from "../../../assets/icons/blueBellIcon.svg";
import blueMenu from "../../../assets/icons/menu-barCloseIcon.svg";
import FullWidthGrid from "./Profile";


export default function ProfilePage() {
  return (
    <div>
        <FullWidthGrid/>
      {/* <Appbar
        bgcolor="white"
        color="black"
        shadow="5px 0px white"
        emailIcon={blueEmail}
        bellIcon={blueBell}
        menuIcon={blueMenu}
        style={{ boxShadow: "none", borderRadius: "none" }}
        style1={{
          backgroundColor: "white",
          border: "none",
          color: "#00BBDC",
          borderRadius: "none",
          padding: "10px"
        }}
        page={<FullWidthGrid/>}
      /> */}
    </div>
  );
}
