import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  const { restaurants, isLoading, error } = useSelector(
    (store) => store.restaurantReducer
  );

  useEffect(() => {
    console.log(restaurants);
  }, [restaurants]);
  return (
    <section className="home wrapper">
      <div className="home-container container">
        <h2>Yakınınızdaki Restoranlar</h2>
        <div className="restaurant-list">
          {isLoading
            ? "loading"
            : error
            ? "error"
            : restaurants.map((restaurant) => {
                return (
                  <Link to={restaurant.id} key={restaurant.id}>
                    <RestaurantCard item={restaurant} />
                  </Link>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Home;
