import React from "react";
import Filter from "./Filter";
import Joblist from "./Joblist";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Filter />
        <Joblist />
      </div>
    </section>
  );
};

export default Home;
