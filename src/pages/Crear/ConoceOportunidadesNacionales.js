import React from 'react';
import skandia from '../../assets/images/skandia.png';
import conoceOportunidadesInversion from '../../assets/images/conoceOpcionesinversion.png';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

function NationalInvestmentOptions() {
  const navigate = useNavigate();
  const financialEntityName = "Skandia";

  return (
    <div className="mx-6 my-16 sm:mx-10 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-40 3xl:px-60 4xl:px-80 bg-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
        <div>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#002bc8] mb-6 lg:mb-12">Conoce las opciones</h1>
          <p className="text-gray-700 text-base sm:text-lg xl:text-2xl">
            Encuentra una selección de fondos de inversión nacionales, gestionados por Skandia,
            una entidad reconocida por su solidez y experiencia en el mercado financiero.
          </p>
        </div>
        <img src={skandia} alt="Skandia Logo" className="h-12 sm:h-16 self-start" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12 md:mt-20 mb-12 md:mb-20">
        <div className="md:col-span-3">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-[#002bc8] mb-6 lg:mb-12">Elige tu perfil de riesgo</h2>
          <p className="text-gray-700 text-sm sm:text-base xl:text-lg mb-4">
            El perfil de riesgo es una evaluación de la capacidad y disposición de un inversor para asumir
            pérdidas potenciales en busca de retornos, influenciado por factores como tolerancia al riesgo,
            horizonte temporal y objetivos financieros.
          </p>

          <div className="space-y-3 mt-8 md:mt-20">
            <p className="text-sm sm:text-lg font-semibold">
              <span className="font-bold">Bajo:</span> retornos esperados de 2-5% EA. Pérdida dentro del 95% de confianza de 0.1% EA
            </p>
            <p className="text-sm sm:text-lg font-semibold">
              <span className="font-bold">Medio:</span> retornos esperados de 5-12% EA. Pérdida dentro del 95% de confianza de 3% EA
            </p>
            <p className="text-sm sm:text-lg font-semibold">
              <span className="font-bold">Alto:</span> retornos esperados de 12-20% EA. Pérdida dentro del 95% de confianza de 5% EA
            </p>
          </div>

          <div className="mt-6 pt-10">
            <Button
              text="SIGUIENTE"
              onClick={() => navigate(`/national-funds/${financialEntityName}`)}
              color="bg-[#3b82f6] hover:bg-[#2563eb]"
              textColor="text-white"
              fullWidth={true}
              paddingY="py-3"
              textSize="text-base sm:text-lg"  
            />
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center md:justify-end items-start">
          <img src={conoceOportunidadesInversion} alt="Conoce Oportunidades de Inversión" className="h-72 sm:h-80 md:h-96 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default NationalInvestmentOptions;
