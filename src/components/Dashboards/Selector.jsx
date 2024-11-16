import React, { useState } from 'react';

const Selector = ({ options, onSelect }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 left-0 w-full h-px bg-black" />

      <div
        className="absolute bottom-0 bg-blue-500 transition-all duration-300"
        style={{
          height: '3px', 
          width: `${100 / options.length}%`,
          left: `${options.indexOf(selected) * (100 / options.length)}%`,
        }}
      />
      <div className="flex">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className="flex-1 text-center py-2 bg-transparent"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Selector;
