import React from "react";
import "../styles/nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="navdiv1">
          <img
            className="Logobar"
            src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/Logo_bar.png?raw=true"
            alt="Logo_bar"
          />
        </div>
        <div className="navdiv2">
          <a href="#home">
            <div className="navlinks"><b>Home</b></div>
          </a>
          <a href="#about">
            <div className="navlinks"><b>About</b></div>
          </a>
          <a href="https://docs.google.com/forms/d/1SF_C40shQ_PTPvsYqGiXJYwnlqs1juJm2Ili5v8eh6M/edit?ts=6677f5fb">
            <div className="navlinks"><b>Register</b></div>
          </a>
        </div>
        <div className="navdiv3">
          <img
            className="img1"
            src="https://github.com/PryogicHealing/Pryogic_Healing/blob/main/public/Image/logo.png?raw=true"
            alt="Logo"
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
