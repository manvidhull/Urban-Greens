import React from 'react';
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="price-container">
      <h2 className="price-title">Price</h2>
      <input
        type="range"
        min="0"
        max="20000"
        step="100"
        onChange={handleChange}
        className="price-slider"
        name="priceRange"
        list="price-tickmarks"
      />
      <datalist id="price-tickmarks">
        <option value="0" label="₹0" />
        <option value="5000" label="₹5,000" />
        <option value="10000" label="₹10,000" />
        <option value="15000" label="₹15,000" />
        <option value="20000" label="₹20,000" />
      </datalist>
    </div>
  );
};

export default Price;


