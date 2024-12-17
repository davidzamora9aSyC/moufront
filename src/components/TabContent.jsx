import React from 'react';
import Button from './Button';
import noCDTs from '../assets/images/noCDTs.jpg';
import inversionhome from '../assets/images/inversionhome.jpg';
import pensionesHome from '../assets/images/pensionesHome.jpg';
import { useNavigate } from 'react-router-dom';

const TabContent = ({ activeTab }) => {
  const containerStyles = "rounded-3xl border border-black pt-6 mb-4 min-h-[60vh]";
  const contentLeftColumn = "text-center md:text-left md:w-1/2 space-y-6 my-auto  md:mr-10 ";
  const imageColumnBase = "w-full object-contain mx-auto";
  const imageColumn = "flex justify-center items-center w-full mb-4 md:w-1/2 md:mb-0";


  const navigate = useNavigate();

  const goToInvestmentDescription = () => navigate('/create-fondo-inversion');
  const goToRetirementDescription = () => navigate('/create-retirement-funds');
  const goToCDsDescription = () => navigate('/create-CDs');

  if (activeTab === 'CDTs') {
    return (
      <div className={`${containerStyles} flex flex-col md:flex-row bg-[#E2E3DE]`}>
        <div className={`${imageColumn} ${activeTab === 'CDTs' ? 'order-1 md:order-2' : ''}`}>
          <img
            src={noCDTs}
            alt="Sin CDTs"
            className={`${imageColumnBase} max-h-60 md:max-h-96 rounded-xl`}
          />
        </div>

        <div className={`${contentLeftColumn} ${activeTab === 'CDTs' ? 'order-2 md:order-1' : ''}`}>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 md:mb-10 ml-4 md:ml-10 lg:ml-20 mr-4 md:mr-10">
            AÚN NO HAS ADQUIRIDO NINGÚN CDT
          </h2>
          <p className="mb-6 md:ml-10 lg:ml-20">
            Compara los CDTs ofrecidos por diferentes entidades financieras y elige el que mejor se ajuste a tus necesidades.
          </p>
          <div className=" md:ml-10 lg:ml-20 pb-10 mb-6 md:mb-0">
            <Button
              text="VER LISTADO DE CDTs"
              color="bg-[#002bc8]"
              paddingX="px-10 md:px-20"
              paddingY="py-2"
              textSize="text-lg lg:text-xl"
              onClick={goToCDsDescription}
            />
          </div>
        </div>
      </div>

    );
  }

  if (activeTab === 'Inversion') {
    return (


      <div className={`${containerStyles} flex flex-col md:flex-row bg-[#E2E3DE]`}>
        <div className={imageColumn}>
          <img
            src={inversionhome}
            alt="Inversiones"
            className={`${imageColumnBase} max-h-60 md:max-h-96 rounded-xl md:rounded-3xl`}
          />
        </div>
        <div className={contentLeftColumn}>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 md:mb-10 ml-0 md:ml-20">
            ABRE TU CUENTA DE INVERSIÓN HOY
          </h2>
          <p className="mb-6 ml-0 md:ml-20">
            Accede a fondos de inversión nacionales e internacionales
          </p>
          <div className="flex justify-center md:justify-start  ml-0 md:ml-20  ">
            <Button
              text="VER FONDOS DE INVERSIÓN"
              color="bg-[#002bc8]"
              paddingX="px-10 md:px-20"
              paddingY="py-2"
              textSize="text-lg lg:text-xl"
              onClick={goToInvestmentDescription}
            />
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'Pension') {
    return (
      <div className={`${containerStyles} flex flex-col md:flex-row bg-[#EAE8D7]`}>

        <div className={`flex md:w-1/2 justify-center pb-10 ${activeTab === 'Retirement' ? 'order-1 md:order-2' : ''}`}>
          <img
            src={pensionesHome}
            alt="Pensiones"
            className={`${imageColumnBase} max-h-60 md:max-h-96 rounded-7xl`}
          />
        </div>

        <div className={`${contentLeftColumn} ${activeTab === 'Retirement' ? 'order-2 md:order-1' : ''}`}>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 md:mb-10 md:ml-20">
            CREA UN FUTURO CON NOSOTROS
          </h2>
          <p className="md:ml-20 mb-6">
            Abre una cuenta de pensión hoy y ahorra para la vejez
          </p>
          <div className=" md:ml-20">
            <Button
              text="VER FONDOS DE PENSIÓN"
              color="bg-[#002bc8]"
              paddingX="px-10 md:px-20"
              paddingY="py-2"
              textSize="text-lg lg:text-xl"
              onClick={goToRetirementDescription}
            />
          </div>
        </div>
      </div>

    );
  }

  return null;
};

export default TabContent;
