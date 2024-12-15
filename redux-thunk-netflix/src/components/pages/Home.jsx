import React, { useState } from "react";
import IntroMovies from "../IntroMovies";
import Categories from "../Categories";
import { useEffect } from "react";
import api from "../../api/api";
const Home = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    console.log("genres", genres);
  }, [genres]);

  useEffect(() => {
    api
      .get("/genre/movie/list?language=tr")
      .then((res) => {
        setGenres(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="home">
      <div className="container">
        <IntroMovies />
        <h2>Popular Movies</h2>
        <div className="category-list">
          {genres?.map((genre) => (
            <Categories key={genre.id} genre={genre} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
