import React from 'react';
import Button from './Button';
import noCDTs from '../assets/images/noCDTs.jpg';
import inversionhome from '../assets/images/inversionhome.jpg';
import pensionesHome from '../assets/images/pensionesHome.jpg';
import { useNavigate } from 'react-router-dom';

const TabContent = ({ activeTab }) => {
  const containerStyles = "rounded-3xl border border-black pt-6 mb-4 min-h-[60vh]";
  const contentLeftColumn = "text-center md:text-left md:w-1/2 space-y-6 my-auto mr-5";
  const imageColumnBase = "w-full object-contain mx-auto";
  const imageRightColumn = "hidden md:flex md:w-1/2 justify-end items-center mr-6";
  const imageLeftColumn = "flex justify-center items-center w-full mb-4 md:w-1/2 md:mb-0";

  const navigate = useNavigate();

  const goToInvestmentDescription = () => navigate('/create-fondo-inversion');
  const goToRetirementDescription = () => navigate('/create-retirement-funds');
  const goToCDsDescription = () => navigate('/create-CDs');

  if (activeTab === 'CDTs') {
    return (
      <div className={`${containerStyles} flex flex-col md:flex-row bg-[#E2E3DE]`}>
        <div className={contentLeftColumn}>
          <h2 className="text-2xl md:text-4xl font-extrabold mt-10 md:mt-40 mb-10 md:mb-20 ml-4 md:ml-20 mr-4 md:mr-10">
            AÚN NO HAS ADQUIRIDO NINGÚN CDT
          </h2>
          <div className="ml-4 md:ml-20 pb-10">
            <Button
              text="VER FONDOS DE INVERSIÓN"
              color="bg-[#002bc8]"
              paddingX="px-10 md:px-20"
              paddingY="py-2"
              textSize="text-lg md:text-2xl"
              onClick={goToCDsDescription}
            />
          </div>
        </div>
        <div className={imageRightColumn}>
          <img
            src={noCDTs}
            alt="Sin CDTs"
            className={`${imageColumnBase} max-h-60 md:max-h-96 rounded-xl rounded-xl`}
          />
        </div>
      </div>
    );
  }

  if (activeTab === 'Inversion') {
    return (


      <div className={`${containerStyles} flex flex-col bg-[#E2E3DE] items-center text-center md:text-left`}>
        <div className={imageLeftColumn}>
          <img
            src={inversionhome}
            alt="Inversiones"
            className={`${imageColumnBase} max-h-60 md:max-h-96 rounded-xl md:rounded-3xl`}
          />
        </div>
        <div className="w-full flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 ml-0 md:ml-20">
            ABRE TU CUENTA DE INVERSIÓN HOY
          </h2>
          <p className="mb-6 ml-0 md:ml-20">
            Accede a fondos de inversión nacionales e internacionales
          </p>
          <div className="flex justify-center md:justify-start mb-5 sm:mb-0 ml-0 md:ml-20 mr-4 md:mr-10">
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
        <div className={contentLeftColumn}>
          <h2 className="text-2xl md:text-4xl font-extrabold mt-10 md:mt-40 mb-10 md:mb-20 ml-4 md:ml-20">
            CREA UN FUTURO CON NOSOTROS
          </h2>
          <p className="ml-4 md:ml-20 mb-6">
            Abre una cuenta de pensión hoy y ahorra para la vejez
          </p>
          <div className="ml-4 md:ml-20">
            <Button
              text="VER FONDOS DE INVERSIÓN"
              color="bg-[#002bc8]"
              paddingX="px-10 md:px-20"
              paddingY="py-2"
              textSize="text-lg md:text-2xl"
              onClick={goToRetirementDescription}
            />
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center pb-10">
          <img
            src={pensionesHome}
            alt="Pensiones"
            className={`${imageColumnBase} max-h-60 md:max-h-96 rounded-7xl `}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default TabContent;
