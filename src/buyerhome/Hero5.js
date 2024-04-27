import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar5 from './Navbar/NavBar5';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";

const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredData = () => {
        const filteredByQuery = products.filter(product => 
            product.title.toLowerCase().includes(query.toLowerCase())
        );

        return filteredByQuery.filter(product =>
            !selectedCategory || 
            [product.category, product.locality, product.area.toString(), product.newPrice.toString(), product.title].includes(selectedCategory)
        ).map(props => <Card key={props.title} {...props} />);
    };

    return (
        <div className="container" style={{ display: 'flex', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
            <div className="hero" id="hero3" style={{ gridColumn: '1 / 2' }}>
                <NavBar5 />
                <Sidebar handleChange={handleChange} />
                <Recommended handleClick={handleChange} />
                <Products result={filteredData()} />
            </div>
        </div>
    );
}

export default Hero;
