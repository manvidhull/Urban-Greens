import React from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="nav-container">
      <input
        className="search-input"
        type="text"
        onChange={handleInputChange}
        value={query}
        placeholder="Search lands..."
        style={{ marginBottom: '20px' }} 
      />
      
      <div className="nav-icons">
        <FiHeart />
        <AiOutlineShoppingCart />
        <AiOutlineUserAdd />
      </div>
    </nav>
  );
};

export default Nav;

