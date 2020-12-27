//import classes from "*.module.css";
import React from "react";
import classes from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={classes.aboutUs}>
      <div className={classes.aboutContent}>
        <h1>About Us </h1>
        <p>
          Perennial craving for original and native is paramount.You do, I do.
          So this initiative is to serve your original taste and nostalgia. Even
          a small drop from hinterland keeps you connected, motivated and fresh.
          So, therefore, serving your fundamental taste buds is our single point
          mission.
          <br />
          <br />
          Coffee Break seeks to establish the forgotten, market the unmarketed,
          connect the unconnected and kindle the dormant. Our promise is to
          provide you with your vintage choice 24*7 through various cuisines of
          asking.
        </p>
      </div>
    </div>
  );
}
