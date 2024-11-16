import React, { useState } from 'react';
import DashboardCifras from './DashboardCifras';
import DashboardDistribucion from './DashboardDistribucion';
import Selector from './Selector';
import DashboardMovimientos from './DashboardMovimientos';

const IntegratedDashboard = ({ inside }) => {
  const [selectedOption, setSelectedOption] = useState('Distribucion');

  const options = ['Distribucion', 'Rendimientos', 'Movimientos', 'Valor Cuenta'];

  return (
    <div className={`px-20 ${inside ? '' : 'mt-8'}`}>
      {/* Encabezado con Nombre de Cuenta y Selector */}
      <div className="flex mb-8">
        {/* Columna izquierda: Título */}
        <div className="w-1/2">
          <h1 className="text-2xl font-bold">Nombre de la cuenta de inversión</h1>
        </div>
        {/* Columna derecha: Selector */}
        <div className="w-1/2 flex justify-end">
          <Selector
            options={options}
            onSelect={(option) => setSelectedOption(option)}
          />
        </div>
      </div>

      {/* Conditionally render dashboards based on the selected option */}
      {selectedOption === 'Distribucion' && <DashboardDistribucion />}
      {(selectedOption === 'Rendimientos' || selectedOption === 'Valor Cuenta') && <DashboardCifras inside={inside} />}
        {selectedOption === 'Movimientos' && <DashboardMovimientos />}
    </div>
  );
};

export default IntegratedDashboard;
