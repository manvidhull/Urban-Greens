import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import './Card.css'; 

const Card = ({ locality, category, area, img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="card-container">
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <div className="title-and-reviews">
            <h4 className="card-title">{title}</h4>
            <div className="card-reviews">{Array(5).fill(star)}</div>
          </div>
          <div className="locality-and-type">
            <div className="locality">
              <CiLocationOn className="location-icon" />
              {locality}
            </div>
            <div className="type">{category}</div>
          </div>
          <div className="area-and-price">
            <div className="area">{area} sqft.</div>
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
