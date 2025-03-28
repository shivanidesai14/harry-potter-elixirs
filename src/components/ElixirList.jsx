import React from "react";

const ElixirList = ({ elixirs, loading, error }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Difficulty</th>
            <th>Ingredients</th>
            <th>Inventor</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5">
                <div className="table-loader">
                  <div className="loader"></div>
                </div>
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="5" className="error">{error}</td>
            </tr>
          ) : elixirs.length > 0 ? (
            elixirs.map((elixir) => (
              <tr key={elixir.id}>
                <td>{elixir.name}</td>
                <td>{elixir.difficulty || "N/A"}</td>
                <td>{elixir.ingredients?.map((ing) => ing.name).join(", ") || "N/A"}</td>
                <td>{elixir.inventors?.map((inv) => `${inv.firstName} ${inv.lastName}`).join(", ") || "N/A"}</td>
                <td>{elixir.manufacturer || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No elixirs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ElixirList;
