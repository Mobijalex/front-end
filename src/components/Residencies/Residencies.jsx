import React from "react";
import "./residencies.css";
import { Swiper, SwiperSlide, SwiperSlider, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import PropertiCard from "../PropertiCard/PropertiCard";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="padding innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <PropertiCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
