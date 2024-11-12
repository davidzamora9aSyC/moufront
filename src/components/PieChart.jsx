import React from 'react';
import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart';

const PieChart = ({ data, onSelect }) => (
    <MinimalPieChart
        data={data.map((entry) => ({ ...entry, color: entry.color }))}
        animate
        lineWidth={100}  
        onClick={(_, index) => onSelect(index)}
        label={({ dataEntry }) => `${dataEntry.value}%`}
        labelStyle={{
            fontSize: '5px',
            fontFamily: 'sans-serif',
            fill: '#fff',
        }}
    />
);

export default PieChart;
