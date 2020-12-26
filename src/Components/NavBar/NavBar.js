import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import ContactUs from "../ContactUs/ContactUs"; //Contact us Component

export default function NavBar() {
  return (
    <nav className="NavBar">
      <ul className="NavLinks">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/aboutus">
          <li>About Us</li>
        </Link>
        <Link to="/contactus" Component={ContactUs}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
