import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const ChartComponent = ({ timeFrame, chartData, activeOption }) => {
  const defaultData = [
    { time: 'Ene', value: 1000 },
    { time: 'Feb', value: 1200 },
    { time: 'Mar', value: 800 },
  ];

  const dataToShow = chartData && chartData.length ? chartData : defaultData;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={dataToShow}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#007bff" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
