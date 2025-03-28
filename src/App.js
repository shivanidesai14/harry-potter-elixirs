import React, { useState, useEffect } from "react";
import { fetchElixirs } from "./services/elixirService";
import FilterPanel from "./components/FilterPanel";
import ElixirList from "./components/ElixirList";
import "./styles.css";

const App = () => {
  const [elixirs, setElixirs] = useState([]);
  const [allDifficulties, setAllDifficulties] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    difficulty: "",
    ingredient: "",
    inventorFullName: "",
    manufacturer: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDifficulties = async () => {
      try {
        const data = await fetchElixirs({});
        const uniqueDifficulties = [...new Set(data.map(elixir => elixir.difficulty).filter(Boolean))];
        setAllDifficulties(uniqueDifficulties);
      } catch (err) {
        console.error("Failed to fetch difficulties", err);
      }
    };
    fetchDifficulties();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchElixirs(filters);
        setElixirs(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchData, 300);
    return () => clearTimeout(timeoutId);
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setFilters({
      name: "",
      difficulty: "",
      ingredient: "",
      inventorFullName: "",
      manufacturer: "",
    });
  };

  return (
    <div className="container">
      <h1>Harry Potter Wizard - Elixirs</h1>
      <FilterPanel
        filters={filters}
        handleFilterChange={handleFilterChange}
        handleReset={handleReset}
        allDifficulties={allDifficulties}
      />
      <ElixirList elixirs={elixirs} loading={loading} error={error} />
    </div>
  );
};

export default App;
