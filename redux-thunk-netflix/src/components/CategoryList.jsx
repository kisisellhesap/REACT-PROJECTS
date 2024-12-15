import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const CategoryList = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  const params = {
    with_genres: genre.id,
  };

  // useEffect(() => {
  //   console.log("movies", movies);
  // }, [movies]);

  useEffect(() => {
    api
      .get("/discover/movie", { params })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="splide-container">
      <Splide
        aria-label="My Favorite Images"
        options={{
          autoWidth: true,
          gap: "1rem",
          pagination: false,
          type: "loop",
        }}
      >
        {movies.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CategoryList;
