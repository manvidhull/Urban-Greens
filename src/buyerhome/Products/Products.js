import React from 'react';
import "./Product.css";

const Products = ({ result }) => {
  return (
    <div className="products-container">
      <section className="card-container">
        {result}
      </section>
    </div>
  );
};

export default Products;

