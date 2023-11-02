import React from "react";
import { MdCall } from "react-icons/md";
import "./contact.css";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* =======================left side============================================== */}
        <div className="flexColStart  c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            WE always ready to help by providing the the best servecies for you
            .We belive a good balance to live can make your life better
          </span>
          <div className="flexColStart contactModes">
            {/* =====================row1================================== */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 567 567 14</span>
                  </div>
                </div>
                <div className="flexCenter button"> Call Now </div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 567 567 14</span>
                  </div>
                </div>
                <div className="flexCenter button"> Chat Now </div>
              </div>
            </div>
            {/* ========================row2======================================= */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Vedio Call</span>
                    <span className="secondaryText">021 567 567 14</span>
                  </div>
                </div>
                <div className="flexCenter button"> Vedio Call Now </div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 567 567 14</span>
                  </div>
                </div>
                <div className="flexCenter button"> Vedio Call Now </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================right side=========================================================== */}

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
