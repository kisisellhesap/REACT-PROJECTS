import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Category() {
  return (
    <div className="category">
      <aside>
        <h3>CATEGORY</h3>
        <NavLink to={"tarih"}>Tarih</NavLink>
        <NavLink to={"bilim"}>Bilim</NavLink>
        <NavLink to={"roman"}>Roman</NavLink>
      </aside>

      <Outlet />
      {/* <div className="products">
        <h1>{books.length} ürün bulundu</h1>
        <Filter />
        <div className="products-list">
          {books.map((book) => (
            <ProductCard item={book} key={book.id} />
          ))}
        </div>

      </div> */}
    </div>
  );
}

export default Category;
