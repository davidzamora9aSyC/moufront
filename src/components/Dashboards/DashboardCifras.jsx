import React, { useState, useEffect } from 'react';
import ChartComponent from './ChartComponent';
import { useParams } from 'react-router-dom';

const DashboardCifras = ({ inside, titles }) => {
  const [activeOption, setActiveOption] = useState(0);
  const [timeFrame, setTimeFrame] = useState('mes');
  const [titulos, setTitulos] = useState(titles ? titles : ["Rendimientos de portafolio en el tiempo", "Rendimientos por tipo de activo"]);
  const timeFrameOptions = ['mes', 'año', 'todo'];
  const { fondoName } = useParams();
  const [chartData, setChartData] = useState([]);
  const [distributionData, setDistributionData] = useState([]);

  const handleActiveOptionChange = (e) => {
    setActiveOption(e.target.selectedIndex);
  };

  const handleTimeFrameChange = (e) => {
    setTimeFrame(e.target.value);
  };

  const data = [
    { label: 'Acciones' },
    { label: 'Bonos' },
    { label: 'Commodities' },
  ];
  useEffect(() => {
    if (fondoName && timeFrame) {
      fetch(
        `https://mouback.endomedicos.com/fondos-skandia/rendimientos?nombre=${encodeURIComponent(
          fondoName
        )}&rango=${encodeURIComponent(timeFrame)}`
      )
        .then((response) => response.json())
        .then((data) => {
          const formattedData = data.map((item) => ({
            time: item.fecha,
            value: item[`valor_acumulado_${timeFrame}`],  
          }));
          setChartData(formattedData);
  
          const distribution = [
            { label: 'Acciones', value: Math.random() * 100 },
            { label: 'Bonos', value: Math.random() * 100 },
            { label: 'Commodities', value: Math.random() * 100 },
          ];
          setDistributionData(distribution);
        })
        .catch((error) => console.error('Error al cargar los datos del gráfico:', error));
    }
  }, [fondoName, timeFrame]);
  
  


  return (
    <div className={`flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 divide-black divide-dotted my-12 ${inside ? '' : 'mb-20'}`}>
      <div className="w-full lg:w-1/2 py-5 flex flex-col space-y-6 px-6 lg:pr-20">
        <h2 className="text-center text-lg font-bold mb-8">{titulos[0]}</h2>
        <div className="mb-4 flex justify-end">
          <select
            className="bg-gray-200 rounded-2xl px-4 py-2"
            value={timeFrame}
            onChange={handleTimeFrameChange}
          >
            {timeFrameOptions.map((option) => (
              <option key={option} value={option}>
                {option === 'mes'
                  ? 'Último mes'
                  : option === 'año'
                    ? 'Último año'
                    : 'Todo'}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full h-64">
          <ChartComponent timeFrame={timeFrame} chartData={chartData} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 py-5 flex flex-col space-y-6 px-6 lg:pl-20">
        <div className="flex justify-between items-center w-full mb-8">
          <h2 className="text-lg font-bold">{titulos[1]}</h2>
          <div className="relative">
            <select
              className="appearance-none bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-500 text-sm pl-4 pr-8 pb-1"
              onChange={handleActiveOptionChange}
            >
              {data.map((item, index) => (
                <option key={index}>{item.label}</option>
              ))}
            </select>
            <svg
              className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="mb-4 flex justify-end">
          <select
            className="bg-gray-200 rounded-2xl px-4 py-2"
            value={timeFrame}
            onChange={handleTimeFrameChange}
          >
            {timeFrameOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full h-64">
          <ChartComponent timeFrame={timeFrame} activeOption={data[activeOption].label} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCifras;
