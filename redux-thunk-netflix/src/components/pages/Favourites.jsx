import React from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin3Fill } from "react-icons/ri";

const Favourites = () => {
  const { loading, error, list } = useSelector((store) => store.listReducer);

  return (
    <section className="favourites">
      <div className="container">
        <h2>İzleme Listesi</h2>

        <div className="favourites-list">
          {list?.map((item, index) => {
            console.log(item);
            return (
              <div key={index} className="favourite-item">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                  alt=""
                />
                <h3>{item?.title}</h3>
                <button className="delete-btn">
                  <RiDeleteBin3Fill />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favourites;
