import React from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Card from "./components/Card";
// import Car from "./components/car";
const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      {/* <Car /> */}
      <Card />
      <Card />
    </div>
  );
};

export default App;
