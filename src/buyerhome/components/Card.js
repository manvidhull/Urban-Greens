import React from 'react';
import { BsFillBagFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

// Card component displays property details and interaction options
const Card = ({ locality, category, area, img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="card-container">
      <section className="card" style={{ width: '350px' }}>
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-reviews">{Array(5).fill(star)}</div>
          <p className="locality"><CiLocationOn /> {locality}</p>
          <p className="type">{category}</p>
          <p className="area">{area} sqft.</p>
          <div className="price-section">
            <span className="old-price">{prevPrice}</span>
            <span className="new-price">{newPrice}</span>
            <button className="buy-btn">Buy</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
