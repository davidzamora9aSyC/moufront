import React from 'react';

const Dropdown = ({ options, onSelect }) => {
  return (
    <select
      className="border-b border-gray-300 focus:outline-none focus:border-gray-500 px-2 py-2 w-full"
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
