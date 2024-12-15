import { useEffect, useState } from "react";
import { BsBookmarkDashFill } from "react-icons/bs";
import api from "../api/api";
import { Link } from "react-router-dom";
const IntroMovies = () => {
  const [intro, setIntro] = useState({});

  useEffect(() => {
    console.log("intro api", intro);
  }, [intro]);
  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        const data = res.data.results;
        const index = Math.floor(Math.random() * data.length);
        setIntro(data[index]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="intro-movies">
      <div className="i-info">
        <h2 className="i-movie-name">{intro.original_title}</h2>
        <p className="i-movie-desc">{intro.overview}</p>
        <p className="i-movie-rating">
          IMDB <span>{intro.vote_average?.toFixed(2)}</span>
        </p>
        <div className="i-movie-controller">
          <Link to={`movie/${intro.id}`} className="w-movie">
            Filmi İzle
          </Link>
          <Link to={"/"} className="d-movie">
            <BsBookmarkDashFill />
            <span>İzleme Listesinden Çıkar</span>
          </Link>
        </div>
      </div>
      <Link to={`movie/${intro.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${intro.backdrop_path}`}
          alt=""
        />
      </Link>
    </div>
  );
};

export default IntroMovies;
