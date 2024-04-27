import React from 'react';

// Radio button input for user selections
const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="input-label">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;

