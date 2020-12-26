import React, { Fragment } from "react";
import classes from "./Writeus.module.css";
import coffeebeans from "../../../assets/icons/coffeeBeans.svg";
export default function WriteUs() {
  return (
    <Fragment>
      <div className={classes["writeus"]}>
        <div className={classes["wu-heading"]}>
          <h1 className={classes["wu-h-text"]}>Write Us</h1>
        </div>
        <div className={classes["wu-form"]}>
          <input
            className={classes["wu-input"]}
            placeholder="Your name"
          ></input>
          <input
            className={classes["wu-input"]}
            placeholder="Your email"
          ></input>
          <input
            className={classes["wu-messege"]}
            placeholder="Your message"
          ></input>
          <button className={classes["wu-submit"]}>Send</button>
        </div>
        <div
          className={classes["wu-bean"]}
          style={{ backgroundImage: `url(${coffeebeans})` }}
        ></div>
      </div>
    </Fragment>
  );
}
