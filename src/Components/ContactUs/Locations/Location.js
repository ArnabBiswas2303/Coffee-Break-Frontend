import React, { Fragment, useState, useEffect } from "react";
import classes from "./Location.module.css";
import MapboxGLMap from "../Map/Map"; //Import the map component
//Import the icons
import Address from "../../../assets/icons/mapMarker.svg";
import Mail from "../../../assets/icons/mail.svg";
import Phone from "../../../assets/icons/phone.svg";

export default function Location() {
  return (
    <Fragment>
      <div className={classes["location"]}>
        <div className={classes["l-heading"]}>
          <h1 className={classes["l-h-text"]}>Location</h1>
        </div>
        <div className={classes["l-div"]}>
          <div className={classes["l-info"]}>
            <img className={classes["l-icon"]} alt="Address" src={Address} />
            <h2 className={classes["l-h"]}>Address</h2>
            <div className={classes["l-para"]}>
              Coffee Break | Majhitar, Rangpo 737132, India
            </div>
            <img className={classes["l-icon"]} alt="Phone" src={Phone} />

            <h2 className={classes["l-h"]}>Phone</h2>
            <div className={classes["l-para"]}>
              Tel: +91 123456789 Fax: +91 123123123
            </div>
            <img className={classes["l-icon"]} alt="Mail" src={Mail} />

            <h2 className={classes["l-h"]}>Email</h2>
            <div className={classes["l-para"]}>coffeebreak@gmail.com</div>
          </div>

          <MapboxGLMap className={classes["l-map"]} />
        </div>
      </div>
    </Fragment>
  );
}
