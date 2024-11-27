import React, { useState } from 'react';
import ChartComponent from './ChartComponent'; // Nuestro componente de gráfico abstracto

const DashboardCifras = ({ inside, titles}) => {
  const [activeOption, setActiveOption] = useState(0); // Usaremos índices para el selector
  const [timeFrame, setTimeFrame] = useState('Meses'); // Para el selector de tiempo
  const [titulos, setTitulos] =  useState(titles? titles: ["Rendimientos de portafolio en el tiempo","Rendimientos por tipo de activo"] );
  const timeFrameOptions = ['Años', 'Meses', 'Semanas'];
  
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

  return (
    <div
      className={`flex divide-x divide-black divide-dotted my-12 ${inside ? '' : 'mb-20'
        }`}
    >
      {/* Columna Izquierda */}
      <div className="w-1/2 py-5 flex flex-col space-y-6 pr-20">
        <h2 className="text-center text-lg font-bold mb-8">
          {titulos[0]}
        </h2>
        {/* Selector de Tiempo alineado a la derecha */}
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
        {/* Gráfico */}
        <div className="w-full h-64">
          <ChartComponent timeFrame={timeFrame} />
        </div>
      </div>
      {/* Columna Derecha */}
      <div className="w-1/2 py-5 flex flex-col space-y-6 pl-20">
        {/* Título y Selector de Tipo de Activo */}
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
        {/* Selector de Tiempo alineado a la derecha */}
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
        {/* Gráfico */}
        <div className="w-full h-64">
          <ChartComponent timeFrame={timeFrame} activeOption={data[activeOption].label} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCifras;
