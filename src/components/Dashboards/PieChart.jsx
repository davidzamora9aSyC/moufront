import { useMemo, useEffect } from 'react';
import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart';



const PieChart = ({ data, onSelect, computedColors, second }) => {
    
    
    return (
        <MinimalPieChart
            data={data.map((entry, index) => ({
                ...entry,
                color: computedColors[index]
            }))}
            animate={true}
            lineWidth={100}
            onClick={!second ? (_, index) => onSelect(index) : null}
            label={({ dataEntry }) => `${dataEntry.value}%`}
            labelStyle={{
                fontSize: '5px',
                fontFamily: 'sans-serif',
                fill: '#fff',
            }}
            radius={42}
            labelPosition={70}
        />
    );
};

export default PieChart;
