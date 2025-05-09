import React from "react";
import useFetch from "./custom-hook/useFetch";

const Home = () => {
  let { products } = useFetch("http://localhost:5000/products");

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Total Count of Products = {products.length}</h2>
    </div>
  );
};

export default Home;
