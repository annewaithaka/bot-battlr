import React from 'react'; // Import React for creating components
import './SortBar.css'; // Import CSS file for styling the SortBar component

const SortBar = ({ onSort }) => {
  // Handler function for when the sorting selection changes
  const handleSortChange = (event) => {
    onSort(event.target.value); // Call the onSort function with the selected value
  };

  return (
    <div className="sort-bar"> {/* Container for the sorting controls */}
      <label htmlFor="sort">Sort by:</label> {/* Label for the select element */}
      
      {/* Dropdown menu for selecting the sort criterion */}
      <select id="sort" onChange={handleSortChange}>
        <option value="health">Health</option> {/* Option to sort by health */}
        <option value="damage">Damage</option> {/* Option to sort by damage */}
        <option value="armor">Armor</option> {/* Option to sort by armor */}
      </select>
    </div>
  );
};

export default SortBar; // Export the SortBar component as the default export
