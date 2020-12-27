import React, { Fragment, useState } from "react";
import classes from "./Writeus.module.css";
import coffeebeans from "../../../assets/icons/coffeeBeans.svg";

export default function WriteUs() {
  //Form details
  const [details, setdetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  //Error object
  const [errors, seterrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  //Input on change
  const onchange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
    seterrors({ ...errors, [e.target.name]: "" });
  };

  /*
    Get the details as
    name = details.name
    email = details.email
    message = details.message
  */
  const givedetails = (e) => {
    e.preventDefault();
    const err = {
      name: "",
      email: "",
      message: "",
    };
    //Validations
    if (details.name === "") {
      err.name = "*Please enter a valid name";
      seterrors(err);
    }
    //Email reg expressions
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!pattern.test(details.email)) {
      err.email = "*Please enter a valid email";
      seterrors(err);
    }
    if (details.message === "") {
      err.message = "*Please enter a valid message";
    }
  };
  return (
    <Fragment>
      <div className={classes["writeus"]}>
        <div className={classes["wu-heading"]}>
          <h1 className={classes["wu-h-text"]}>Write Us</h1>
        </div>

        <div className={classes["wu-form"]}>
          <div className={classes["wu-error"]}>
            <p>{errors.name}</p>
          </div>
          <input
            name="name"
            className={classes["wu-input-1"]}
            placeholder="Your name *"
            onChange={(e) => onchange(e)}
          ></input>
          <div className={classes["wu-error"]}>
            <p>{errors.email}</p>
          </div>
          <input
            name="email"
            className={classes["wu-input-2"]}
            placeholder="Your email *"
            onChange={(e) => onchange(e)}
          ></input>
          <div className={classes["wu-error"]}>
            <p>{errors.message}</p>
          </div>
          <textarea
            name="message"
            className={classes["wu-messege"]}
            placeholder="Your message *"
            onChange={(e) => onchange(e)}
          ></textarea>
          <button
            onClick={(e) => givedetails(e)}
            className={classes["wu-submit"]}
          >
            Send
          </button>
        </div>
        <div
          className={classes["wu-bean"]}
          style={{ backgroundImage: `url(${coffeebeans})` }}
        ></div>
      </div>
    </Fragment>
  );
}
