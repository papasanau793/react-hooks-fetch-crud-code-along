import React from "react";

function Filter({ onCategoryChange }) {
  function handleChange(e) {
    onCategoryChange(e.target.value);
  }

  return (
    <div className="Filter">
      <select name="filter" onChange={handleChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
