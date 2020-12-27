import React, { Fragment } from "react";
import classes from "./ContactUs.module.css";

//Child Components
import Location from "./Locations/Location";
import WriteUs from "./WriteUs/WriteUs";

export default function Contactus() {
  return (
    <Fragment>
      <div className={classes["contactus"]}>
        <WriteUs />
        <Location />
      </div>
    </Fragment>
  );
}
