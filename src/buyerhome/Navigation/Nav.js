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
        placeholder="Enter lands to search."
      />
      <div className="nav-icons">
        <AiOutlineUserAdd />
        <FiHeart />
        <AiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default Nav;

