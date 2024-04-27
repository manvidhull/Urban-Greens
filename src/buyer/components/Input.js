import React from 'react';
import './Input.css';

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        value={value}
        name={name}
        onChange={handleChange}
        className="radio-input"
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;

