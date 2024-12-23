import React, { useState } from 'react';
import DashboardCifrasValorCuenta from './DashboardCifrasValorCuenta';
import DashboardDistribucion from './DashboardDistribucion';
import Selector from './Selector';
import Dropdown from '../Dropdown';
import DashboardMovimientos from './DashboardMovimientos';
import DashboardCifrasRendimientos from './DashboardCifrasRendimientos';

const IntegratedDashboard = ({ inside, acquired, type }) => {
  const [selectedOption, setSelectedOption] = useState('Distribucion');
  const allOptions = ['Distribucion', 'Rendimientos', 'Movimientos', 'Valor Cuenta'];
  const options = acquired ? allOptions : allOptions.filter(option => option !== 'Movimientos');
  let titulo;

  if (type === 'CDT') {
    titulo = "Nombre del CDT";
  } else if (type === 'Inversion') {
    titulo = "Nombre de la cuenta de inversión";
  } else if (type === 'Pension') {
    titulo = "Nombre de la cuenta de pensión";
  }

  return (
    <div className={`px-20 ${inside ? '' : 'mt-8'}`}>
      <div className="flex mb-8">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold">{titulo}</h1>
        </div>

        <div className="w-1/2 flex justify-end hidden lg:block">

          <Selector
            options={options}
            onSelect={(option) => setSelectedOption(option)}
          />


        </div>
        <div className="w-1/2 flex justify-end block lg:hidden">


          <Dropdown
            options={options}
            onSelect={(option) => setSelectedOption(option)}
          />

        </div>



      </div>

      {selectedOption === 'Distribucion' && <DashboardDistribucion />}
      {selectedOption === 'Rendimientos' && <DashboardCifrasRendimientos inside={inside} />}
      {selectedOption === 'Valor Cuenta' && <DashboardCifrasValorCuenta inside={inside} />}
      {selectedOption === 'Movimientos' && <DashboardMovimientos />}
    </div>
  );
};

export default IntegratedDashboard;
