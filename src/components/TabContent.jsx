import React from 'react';
import Button from './Button';
import noCDTs from '../assets/images/noCDTs.jpg';
import inversionhome from '../assets/images/inversionhome.jpg';
import pensionesHome from '../assets/images/pensionesHome.jpg';
import { useNavigate } from 'react-router-dom';

const TabContent = ({ activeTab }) => {
  const containerStyles = "rounded-3xl border border-black pt-6 mb-4 min-h-[60vh]";
  const contentLeftColumn = "text-center md:text-left md:w-1/2 space-y-6";
  const imageLeftColumn = "hidden md:flex md:w-1/2 justify-start ml-28";
  const imageRightColumn = "hidden md:flex md:w-1/2 justify-end mr-32";
  const image2RightColumn = "hidden md:flex md:w-1/2 justify-end mr-0 rounded-xl";
  const navigate = useNavigate();

  const goToInvestmentDescription = () => {
    navigate('/create-fondo-inversion');
  };
  if (activeTab === 'CDTs') {
    return (
      <div className={`${containerStyles} flex flex-col md:flex-row bg-[#E2E3DE]`}>
        <div className={contentLeftColumn}>
          <h2 className="text-4xl font-extrabold mt-40 mb-20 ml-20 mr-10">AÚN NO HAS ADQUIRIDO NINGÚN CDT</h2>
          <div className='ml-20'>
            <Button text="VER PORTAFOLIO DE CDTs" color="bg-[#c954a5]" paddingX="px-20" paddingY="py-2" textSize="text-2xl" />
          </div>
        </div>
        <div className={imageRightColumn}>
          <img src={noCDTs} alt="Sin CDTs" className="w-full max-w-sm w-auto h-auto" />
        </div>
      </div>
    );
  }

  if (activeTab === 'Inversion') {
    return (
      <div className={`${containerStyles} flex flex-col md:flex-row bg-[#E2E3DE]`}>
        <div className={imageLeftColumn}>
          <img src={inversionhome} alt="Inversiones" className="w-full max-w-sm rounded w-auto h-auto" />
        </div>
        <div className={contentLeftColumn}>
          <h2 className="text-4xl font-extrabold mt-40 mb-20 ml-20 mr-10">ABRE TU CUENTA DE INVERSIÓN HOY</h2>
          <p className="ml-20 mb-6">Accede a fondos de inversión nacionales e internacionales</p>
          <div className='ml-20'>
            <Button
              text="VER FONDOS DE INVERSIÓN"
              color="bg-[#c954a5]"
              paddingX="px-20"
              paddingY="py-2"
              textSize="text-2xl"
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
          <h2 className="text-4xl font-extrabold mt-40 mb-20 ml-20 mr-10">CREA UN FUTURO CON NOSOTROS</h2>
          <p className="ml-20 mb-6">Abre una cuenta de pensión hoy y ahorra para la vejez</p>
          <div className='ml-20'>
            <Button text="VER FONDOS DE PENSIONES" color="bg-[#c954a5]" paddingX="px-20" paddingY="py-2" textSize="text-2xl" />
          </div>
        </div>
        <div className={image2RightColumn}>
          <img src={pensionesHome} alt="Pensiones" className="w-full max-w-md  rounded-3xl w-auto h-auto" />
        </div>
      </div>
    );
  }

  return null;
};

export default TabContent;
