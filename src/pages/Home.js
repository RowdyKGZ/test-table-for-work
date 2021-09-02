import React from "react";
import Products from "../components/Products";
import Headers from "../components/Headers";

const Home = () => {
  return (
    <div>
      <Headers />
      <main>
        <div className="title">Дата</div>
        <div className="title">Название</div>
        <div className="title">Количество</div>
        <div className="title">Растояние</div>
      </main>
      <Products />
    </div>
  );
};

export default Home;
