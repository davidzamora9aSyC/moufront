import { useEffect } from 'react';
import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart';

const defaultColors = ['#8a2be2', '#daa520', '#dc143c', '#008b8b'];

const PieChart = ({ data, onSelect, onColorsSet, second }) => {
    const computedColors = data.map((entry, index) => defaultColors[index % defaultColors.length]);

    useEffect(() => {
        onColorsSet(computedColors); 
    }, [computedColors, onColorsSet]);
    
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
