import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar3 from './Navbar/NavBar3';
import heroImg from '../images/right-img13.jpeg';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => setQuery(event.target.value);

  const filteredItems = products.filter(
    product => product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => setSelectedCategory(event.target.value);
  const handleClick = (event) => setSelectedCategory(event.target.value);

  const filteredData = (products, selected, query) => {
    return products.filter(product => 
      (!selected || product.category === selected) &&
      (!query || product.title.toLowerCase().includes(query.toLowerCase()))
    ).map(product => (
      <Card
        key={product.id} 
        {...product}
      />
    ));
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="container">
      <div className="hero" id="hero3">
        <NavBar3 />
        <Sidebar handleChange={handleChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>
    </div>
  );
}

export default Hero;
