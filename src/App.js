import React from 'react';
import Header from './components/Header';
import TopFilters from './components/TopFilters';
import FilteredWeatherCards from './components/FilteredWeatherCards';
import 'antd/dist/antd.css';

function App() {
  const [selectedCities, setSelectedCities] = React.useState(["Mumbai", "Delhi"])
  const [conditionalFilter, setConditionalFilter] = React.useState()
  let handleCityChange = (updatedSelectedCitiesArr) => {
    console.log("City Changed App", updatedSelectedCitiesArr);
    setSelectedCities(updatedSelectedCitiesArr)
  }

  let handleConditionalFilterChange = (filter) => {
    console.log("Conditional Filter changed App:", filter);
    setConditionalFilter(filter);
  }
  let handleClearFilters = () => {
    setConditionalFilter(null);
  }
  return (
    <div>
      <Header />
      <TopFilters
        onCityChange={handleCityChange}
        onFilterChange={handleConditionalFilterChange}
        onFilterClear={handleClearFilters}
      />
      <FilteredWeatherCards conditionalFilter={conditionalFilter} selectedCities={selectedCities} />
    </div>
  );
}

export default App;
