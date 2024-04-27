
import React from 'react';
import "./Area.css"; 

const Area = ({ handleChange }) => {
  return (
    <div className="area-container">
      <h2 className="area-title">Area</h2>
      <input
        type="range"
        min="0"
        max="20000"
        step="100"
        onChange={handleChange}
        className="area-slider"
        name="areaRange"
        list="area-tickmarks"
      />
      <datalist id="area-tickmarks">
        <option value="0" label="0 sqft" />
        <option value="5000" label="5,000 sqft" />
        <option value="10000" label="10,000 sqft" />
        <option value="15000" label="15,000 sqft" />
        <option value="20000" label="20,000 sqft" />
      </datalist>
    </div>
  );
};

export default Area;
