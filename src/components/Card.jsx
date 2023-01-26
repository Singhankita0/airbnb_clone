import React from "react";
import "./Card.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import img from "../images/card.jpg";

const Card = () => {
  return (
    <div className="card_container">
      <div className="card_img">
        <img src={img} alt="" />
      </div>
      <div className="card_info">
        <h3 className="card_title">Place</h3>
        <div className="card_rating">
          <StarRoundedIcon />
          <p>4.88</p>
        </div>
      </div>
      <p>Beach and Ocean Views</p>
      <p>1-6 February</p>
    </div>
  );
};

export default Card;
