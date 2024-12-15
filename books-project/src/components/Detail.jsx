import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const [detailbook, setDetailBook] = useState();
  const params = useParams();

  console.log(params.id);

  useEffect(() => {
    axios.get(`http://localhost:3000/books/${params.id}`).then((res) => {
      if (res.statusText) {
        // console.log(res.data);
        setDetailBook(res.data);
      }
    });
  }, []);
  return (
    <div className="details">
      <Link to="/products"> Back </Link>

      {detailbook ? (
        <div className="detail">
          <img src={detailbook.image}></img>
          <h3>{detailbook.title}</h3>
          <div className="other">
            <span>Yazar</span> <p>{detailbook.author}</p>
          </div>
          <div className="other">
            <span>Year</span> <p>{detailbook.year}</p>
          </div>
          <div className="other">
            <span>Page</span> <p>{detailbook.page}</p>
          </div>
          <div className="other">
            <span>Price</span> <p>{detailbook.price}</p>
          </div>
          <div className="other">
            <span>Description</span> <p>{detailbook.description}</p>
          </div>
        </div>
      ) : (
        <h1>ARADIĞINIZ KİTAP BULUNAMADI ...</h1>
      )}
    </div>
  );
}

export default Detail;
