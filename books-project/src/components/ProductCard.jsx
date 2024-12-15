import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.author}</p>
      <Link to={`/detail/${item.id}`}>Show Details</Link>
    </div>
  );
}

export default ProductCard;
