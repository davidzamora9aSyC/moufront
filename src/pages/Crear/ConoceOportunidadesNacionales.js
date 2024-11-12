import React from 'react';
import skandia from '../../assets/images/skandia.png';
import conoceOportunidadesInversion from '../../assets/images/conoceOpcionesinversion.png';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';


function NationalInvestmentOptions() {
  const navigate = useNavigate();
  const financialEntityName = "Skandia";
  return (
    <div className="mx-auto px-56 bg-white font-sans">

      <div className="w-full flex justify-between items-start mt-20">
        <div>
          <h1 className="text-5xl font-semibold text-[#c954a5] mb-12 ">Conoce las opciones</h1>
          <p className="text-gray-700 text-2xl ">
            Encuentra una selección de fondos de inversión nacionales, gestionados por Skandia,
            una entidad reconocida por su solidez y experiencia en el mercado financiero.
          </p>
        </div>
        <img src={skandia} alt="Skandia Logo" className="h-16 self-start" />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-20 mb-20">

        <div className=" md:col-span-3 pr-36">
          <h2 className="text-4xl font-semibold text-[#c954a5] mb-12">Elige tu perfil de riesgo</h2>
          <p className="text-gray-700 mb-4 text-lg">
            El perfil de riesgo es una evaluación de la capacidad y disposición de un inversor para asumir
            pérdidas potenciales en busca de retornos, influenciado por factores como tolerancia al riesgo,
            horizonte temporal y objetivos financieros.
          </p>

          <div className="space-y-3 mt-20">
            <p className="text-lg font-semibold"><span className="font-bold">Bajo:</span> retornos esperados de 2-5% EA. Pérdida dentro del 95% de confianza de 0.1% EA</p>
            <p className="text-lg font-semibold"><span className="font-bold">Medio:</span> retornos esperados de 5-12% EA. Pérdida dentro del 95% de confianza de 3% EA</p>
            <p className="text-lg font-semibold"><span className="font-bold">Alto:</span> retornos esperados de 12-20% EA. Pérdida dentro del 95% de confianza de 5% EA</p>
          </div>

          <div className="mt-4 pt-10 col-span-2 ">
            <Button
              text="SIGUIENTE"
              onClick={() => navigate(`/national-funds/${financialEntityName}`)}
              color="bg-[#3b82f6]"
              textColor="text-white"
              fullWidth={true}
              paddingY="py-3"
              textSize="text-lg"  
            />
          </div>
        </div>

        <div className="md:col-span-2 flex justify-end items-start">
          <img src={conoceOportunidadesInversion} alt="Conoce Oportunidades de Inversión" className="h-96 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default NationalInvestmentOptions;
