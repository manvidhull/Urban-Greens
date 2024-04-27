import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import './Recommended.css';

const Recommended = ({ handleClick }) => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex(prevIndex => prevIndex + 1);
    }, 200); // Animation interval for each button

    return () => clearInterval(interval);
  }, []);

  const categories = [
    { value: "", title: "All Products" },
    { value: "Terrace", title: "Terrace" },
    { value: "Open Land", title: "Open Land" },
    { value: "Balcony", title: "Balcony" },
    { value: "Veranda", title: "Veranda" },
    { value: "Apartment", title: "Apartment" },
  ];

  return (
    <div className="outer">
      <div className="recommended-container">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          {categories.map((button, index) => (
            <Button
              key={index}
              onClickHandler={handleClick}
              value={button.value}
              title={button.title}
              className={`button ${index <= visibleIndex ? 'visible' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;

