import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { useSearchParams } from "react-router-dom";
function Products() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "a-z" ? "asc" : "desc",
    };

    axios.get("http://localhost:3000/books", { params }).then((res) => {
      console.log(res);
      if (res.statusText) {
        setBooks(res.data);
        setLoading(true);
      }
    });
  }, [searchParams]);

  return (
    <>
      {loading ? (
        <div className="products">
          <h1>{books.length} ürün bulundu</h1>
          <Filter />
          <div className="products-list">
            {books.map((book) => (
              <ProductCard item={book} key={book.id} />
            ))}
          </div>
        </div>
      ) : (
        <h1>"BEKLENİYOR..."</h1>
      )}
    </>
  );
}

export default Products;
