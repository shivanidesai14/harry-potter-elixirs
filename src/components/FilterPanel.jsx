import React from "react";

const FilterPanel = ({ filters, handleFilterChange, handleReset, allDifficulties }) => {
  return (
    <div className="filter-panel">
      <input type="text" name="name" value={filters.name} placeholder="Name" onChange={handleFilterChange} />
      <select name="difficulty" value={filters.difficulty} onChange={handleFilterChange}>
        <option value="">Select Difficulty</option>
        {allDifficulties.map((difficulty) => (
          <option key={difficulty} value={difficulty}>{difficulty}</option>
        ))}
      </select>
      <input type="text" name="ingredient" value={filters.ingredient} placeholder="Ingredient" onChange={handleFilterChange} />
      <input type="text" name="inventorFullName" value={filters.inventorFullName} placeholder="Inventor" onChange={handleFilterChange} />
      <input type="text" name="manufacturer" value={filters.manufacturer} placeholder="Manufacturer" onChange={handleFilterChange} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FilterPanel;
