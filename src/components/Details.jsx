import React from 'react';

const DetailsBox = ({ data }) => (
    <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <ul>
            {data.map((item, index) => (
                <li key={index} style={{ listStyle: 'none' }}>
                    {item.label}: {item.value}%
                </li>
            ))}
        </ul>
    </div>
);

export default DetailsBox;
