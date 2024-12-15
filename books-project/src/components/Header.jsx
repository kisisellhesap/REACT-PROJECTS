import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/"> KİTAP KURDU</Link>
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="category">Category</NavLink>
      </nav>
    </header>
  );
}

export default Header;
