import React from 'react';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Area from "./Area/Area";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <div className="sidebar-wrapper">
      <section className="sidebar">
        <div className="logo-container">
          {/* Potential logo or title */}
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Area handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;

