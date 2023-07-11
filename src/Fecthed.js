import { useState, useEffect } from "react";

function Source() {
  const [selectedItem, setSelectedItem] = useState("Filter by Region");
  const [country, setCountry] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const fetchData = async () => {
    try {
      let url = "https://restcountries.com/v3.1/all";
      if (input !== "") {
        url = `https://restcountries.com/v3.1/name/${input}`;
      } else if (selectedItem !== "Filter by Region") {
        url = `https://restcountries.com/v3.1/region/${selectedItem}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setCountry(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedItem, input]);

  return (
    <>
      <div className="searchNfilter">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for a country....."
            onChange={handleInputChange}
          />
          <i className="fa-light fa-magnifying-glass"></i>
        </form>
        <select
          name="item-selected"
          value={selectedItem}
          onChange={handleChange}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      {country.map((element) => (
        <div className="source" key={element.name.common}>
          <img className="img" src={element.flags.png} alt="flag" />
          <h2>{element.name.common}</h2>
          <p>Population: {element.population}</p>
          <p>Region: {element.region}</p>
          <p>Capital: {element.capital}</p>
        </div>
      ))}
    </>
  );
}

export default Source;