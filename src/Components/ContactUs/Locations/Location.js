import React, { Fragment } from "react";
import classes from "./Location.module.css";
import map from "../../../assets/images/coffeemap.png";

export default function Location() {
  return (
    <Fragment>
      <div className={classes["location"]}>
        <div className={classes["l-heading"]}>
          <h1 className={classes["l-h-text"]}>Location</h1>
        </div>
        <div className={classes["l-div"]}>
          <div className={classes["l-info"]}>
            <h2>Address</h2>
            <div className={classes["l-para"]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <h2>Phone</h2>
            <div className={classes["l-para"]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <h2>Email</h2>
            <div className={classes["l-para"]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
          <div className={classes["l-image"]}>
            {" "}
            <div
              className={classes["l-map"]}
              style={{ backgroundImage: `url(${map})` }}
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
