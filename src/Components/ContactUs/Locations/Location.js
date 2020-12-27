import React, { Fragment, useState, useEffect } from "react";
import classes from "./Location.module.css";
import MapboxGLMap from "../Map/Map"; //Import the map component
export default function Location() {
  return (
    <Fragment>
      <div className={classes["location"]}>
        <div className={classes["l-heading"]}>
          <h1 className={classes["l-h-text"]}>Location</h1>
        </div>
        <div className={classes["l-div"]}>
          <div className={classes["l-info"]}>
            <h2 className={classes["l-h"]}>Address</h2>
            <div className={classes["l-para"]}>
              Coffee Break | Majhitar, Rangpo 737132, India
            </div>
            <h2 className={classes["l-h"]}>Phone</h2>
            <div className={classes["l-para"]}>
              Tel: +91 123456789 Fax: +91 123123123
            </div>
            <h2 className={classes["l-h"]}>Email</h2>
            <div className={classes["l-para"]}>coffeebreak@gmail.com</div>
          </div>

          <MapboxGLMap className={classes["l-map"]} />
        </div>
      </div>
    </Fragment>
  );
}
