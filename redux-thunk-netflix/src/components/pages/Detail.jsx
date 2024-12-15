import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api/api";
import { BsBookmarksFill } from "react-icons/bs";
import { toggleList } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
const Detail = () => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
      language: "tr",
    };
    api
      .get(`/movie/${id.id}`, { params })
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { list } = useSelector((store) => store.listReducer);
  const dispatch = useDispatch();
  const id = useParams();

  console.log(detail);
  const isAdded = detail && list.find((item) => item.id === detail.id);

  const toggle = () => {
    console.log(" detail id ", detail.id);
    console.log(" isAdded value detail ", isAdded);

    dispatch(toggleList(detail, !isAdded));
  };

  return (
    <section className="detail">
      <div className="container">
        <div className="detail-controller">
          <Link to="/">Geri</Link>
          <button onClick={toggle}>
            <BsBookmarksFill /> Listeye Ekkle
          </button>
        </div>

        <div className="detail-movie">
          <div className="detail-img">
            <h3 className="detail-name">{detail.original_title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
              alt=""
            />
          </div>

          <div className="detail-info">
            <div className="other-info">
              <h2>Kategoriler</h2>
              <div className="btn-container">
                {detail.genres?.map((btn) => (
                  <button key={btn.id}>{btn.name}</button>
                ))}
              </div>
            </div>
            <div className="other-info">
              <h2>Konuşulan Diller</h2>
              <div className="btn-container">
                {detail.spoken_languages?.map((btn, index) => (
                  <button key={index}>{btn.name}</button>
                ))}
              </div>
            </div>
            <div className="other-info">
              <h2>Yapımcı Şirketler</h2>
              <div className="btn-container">
                {detail.production_companies?.map((btn) => (
                  <button key={btn.id}>{btn.name}</button>
                ))}
              </div>
            </div>

            <div className="other-info">
              <h2>Yapımcı Ülkeler</h2>
              <div className="btn-container">
                {detail.production_countries?.map((btn, index) => (
                  <button key={index}>{btn.name}</button>
                ))}
              </div>
            </div>

            <p className="detail-desc">{detail.overview}</p>

            {detail.budget === 0 ? (
              ""
            ) : (
              <p className="detail-budget">Bütçe : ${detail.budget}</p>
            )}

            {detail.revenue === 0 ? (
              ""
            ) : (
              <p className="detail-revenue">Hasılat : ${detail.revenue}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
