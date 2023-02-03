import React, {useState} from "react";
import Header from "./components/Header";
// import Filter from "./components/Filter";
// import Card from "./components/Card";
import "./App.css"
// import Car from "./components/car";
import Listings from "./components/Listings"

const App = () => {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div>
      <Header setSearchResults={setSearchResults} />
      {/* <Filter /> */}
      {/* <Car /> */}
      <Listings searchResults={searchResults} />
    </div>
  );
};

export default App;
