import React from 'react';
import skandia from '../../assets/images/skandia.png';
import conoceOportunidadesInversion from '../../assets/images/conoceOpcionesinversion.png';
import Button from '../../components/Button';

function NationalInvestmentOptions() {
  return (
    <div className="mx-auto px-40 bg-white font-sans">

      <div className="w-full flex justify-between items-center mt-20">
        <div>
          <h1 className="text-3xl font-semibold text-[#c954a5] mb-2">Conoce las opciones</h1>
          <p className="text-gray-700">
            Encuentra una selección de fondos de inversión nacionales, gestionados por Skandia,
            una entidad reconocida por su solidez y experiencia en el mercado financiero.
          </p>
        </div>
        <img src={skandia} alt="Skandia Logo" className="h-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        
        <div className="md:col-span-1 md:w-2/3">
          <h2 className="text-2xl font-semibold text-[#c954a5] mb-2">Elige tu perfil de riesgo</h2>
          <p className="text-gray-700 mb-4">
            El perfil de riesgo es una evaluación de la capacidad y disposición de un inversor para asumir
            pérdidas potenciales en busca de retornos, influenciado por factores como tolerancia al riesgo,
            horizonte temporal y objetivos financieros.
          </p>

          <div className="space-y-3">
            <p className="text-lg font-semibold"><span className="font-bold">Bajo:</span> retornos esperados de 2-5% EA. Pérdida dentro del 95% de confianza de 0.1% EA</p>
            <p className="text-lg font-semibold"><span className="font-bold">Medio:</span> retornos esperados de 5-12% EA. Pérdida dentro del 95% de confianza de 3% EA</p>
            <p className="text-lg font-semibold"><span className="font-bold">Alto:</span> retornos esperados de 12-20% EA. Pérdida dentro del 95% de confianza de 5% EA</p>
          </div>

          <div className="mt-4">
            <Button
              text="SIGUIENTE"
              onClick={() => console.log("Botón SIGUIENTE presionado")}
              color="bg-[#3b82f6]"
              textColor="text-white"
              paddingX="px-10"
              paddingY="py-3"
              textSize="text-lg"
            />
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center items-start">
          <img src={conoceOportunidadesInversion} alt="Conoce Oportunidades de Inversión" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default NationalInvestmentOptions;
