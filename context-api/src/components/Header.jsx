import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h2>
        <Link to="/">Context Api</Link>
      </h2>

      <nav>
        <Link to="home">Home</Link>
        <Link to="basket">Basket</Link>
      </nav>
    </div>
  );
}

export default Header;
