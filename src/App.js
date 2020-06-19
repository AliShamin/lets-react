import React from "react";
import Header from "./components/Header";
import TopFilters from "./components/TopFilters";
import FilteredWeatherCards from "./components/FilteredWeatherCards";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Header />
      <TopFilters />
      <FilteredWeatherCards selectedCities={["Mumbai", "Delhi"]} />
    </div>
  );
}

export default App;
