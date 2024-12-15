import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>İŞ TAKİP</h1>
        <nav>
          <NavLink to="/">İş Listesi</NavLink>
          <NavLink to="addjob">İş Ekle</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
