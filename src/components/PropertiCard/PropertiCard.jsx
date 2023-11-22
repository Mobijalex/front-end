import React from "react";
import "./propertiCard.css";
import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";

const PropertiCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div className="flexColStart r-card" onClick={() => navigate(`${card.id}`)}>
      <AiFillHeart size={24} color="white" />
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <br />
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">
        {truncate(card.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertiCard;
