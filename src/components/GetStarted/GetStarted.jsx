import React from "react";
import "./getstarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price qoutes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:mobijalex6@gmail.com">Mail us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
