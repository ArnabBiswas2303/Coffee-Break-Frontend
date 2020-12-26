//import classes from "*.module.css";
import React from "react";
import classes from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={classes.aboutUs}>
      <div className={classes.aboutContent}>first</div>
      <div className={classes.aboutImg}>second</div>
    </div>
  );
}
