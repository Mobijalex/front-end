import React from "react";
import "./propertiCard.css";
import { AiFillHeart } from "react-icons/ai";

const PropertiCard = ({ card }) => {
  return (
    <div className="flexColStart r-card">
      <AiFillHeart size={24} color="white" />
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <br />
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{card.name}</span>
      <span className="secondaryText">{card.detail}</span>
    </div>
  );
};

export default PropertiCard;
