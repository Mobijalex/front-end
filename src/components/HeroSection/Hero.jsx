import React from "react";
import "./hero.css";
import SearchBar from "../SearchBar/SearchBar";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth flexCenter hero-container">
        {/* // _____________________left sided______________________________________ */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br /> Your Dream <br /> Home
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a veriety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residance for you{" "}
            </span>
          </div>

          <SearchBar />
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
        <div className="flexCenter h-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="hero" />
          </motion.div>
        </div>
        {/* ________________________________________________________________ */}
      </div>
    </section>
  );
};

export default Hero;
