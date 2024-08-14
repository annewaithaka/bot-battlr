import React from 'react';
import './SortBar.css';


const SortBar = ({ onSort }) => {
  const handleSortChange = (event) => {
    onSort(event.target.value);
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default SortBar;
