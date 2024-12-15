import React from "react";
import { BsBookmarksFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>NETFLIX</h1>
        </Link>
        <Link to="favourites">
          <BsBookmarksFill />
          <span>İzleme Listesi</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
