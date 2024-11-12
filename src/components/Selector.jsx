import React, { useState } from 'react';

const Selector = ({ options, onSelect }) => {
    const [selected, setSelected] = useState(options[0]); 

    const handleSelect = (option) => {
        setSelected(option);
        onSelect(option); 
    };

    return (
        <div style={{ width: '100%', backgroundColor: '#000', color: '#fff', position: 'relative' }}>
            <div style={{ position: 'absolute', height: '4px', width: `${100 / options.length}%`, backgroundColor: '#0000ff', bottom: 0, transition: 'all 0.3s ease', left: `${options.indexOf(selected) * (100 / options.length)}%` }} />
            {options.map(option => (
                <button key={option} onClick={() => handleSelect(option)} style={{
                    flex: 1,
                    padding: '10px 15px',
                    border: 'none',
                    background: 'none',
                    color: 'white',
                    borderBottom: '2px solid white',
                    fontWeight: selected === option ? 'bold' : 'normal'
                }}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Selector;
