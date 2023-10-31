import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container">
        {/* // _____________________left sided______________________________________ */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Your Dream <br /> Home
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a veriety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residance for you{" "}
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>{" "}
              <br />
              <span className="secondaryText ">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1590} end={2000} duration={4} />
                <span>+</span>
              </span>{" "}
              <br />
              <span className="secondaryText ">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>{" "}
              <br />
              <span className="secondaryText ">Award Winnings</span>
            </div>
          </div>
        </div>
        {/* _____________________________________________________________________ */}

        {/* ___________________right side_______________________________ */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="hero-image" />
          </div>
        </div>
        {/* ________________________________________________________________ */}
      </div>
    </section>
  );
};

export default Hero;
