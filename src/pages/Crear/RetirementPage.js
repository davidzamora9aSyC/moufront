import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import couplehouse from '../../assets/images/coupleHouse.jpg'; 

function RetirementPage() {
  const navigate = useNavigate();

  const goToPensionFunds = () => navigate('/retirement-funds');

  return (
    <div className="mx-6 my-16 sm:mx-10 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-40 3xl:px-60 4xl:px-80">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-10 xl:space-x-20 2xl:space-x-40">
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-4">Explora tus opciones de fondos de pensión con MOU Pensions</h1>
          <p className="text-gray-700 text-base sm:text-lg xl:text-xl mb-10">Preparar tu retiro con fondos de pensión adecuados es crucial para asegurar tu futuro financiero.</p>
          <div className="flex flex-col gap-4">
            <Button
              text="VER FONDOS DE PENSION"
              color="bg-blue-500 hover:bg-blue-600" 
              paddingX="px-10"
              paddingY="py-2"
              textSize="text-lg"
              onClick={goToPensionFunds}
            />
          </div>
          <p className="text-gray-600 text-sm sm:text-base xl:text-lg mt-6 mb-12">
            Los fondos de pensión son una herramienta esencial para planificar tu jubilación. Dependiendo de tus objetivos de retiro y perfil de riesgo, puedes elegir entre diversos tipos de fondos que se adecuen a tus necesidades y te permitan disfrutar de un retiro seguro y estable.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={couplehouse} alt="Pension planning" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
      <div className="w-full text-gray-600 mt-12 xl:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-4">Beneficios de Invertir en Fondos de Pensión</h2>
          <ul className="list-disc list-inside text-sm sm:text-base xl:text-lg mb-6">
            <li>Diversificación: Los fondos de pensión te permiten diversificar tus inversiones entre una variedad de activos para minimizar riesgos.</li>
            <li>Gestión Profesional: Al igual que los fondos de inversión, los fondos de pensión son manejados por profesionales que se encargan de maximizar los rendimientos de acuerdo a las condiciones del mercado.</li>
            <li>Beneficios Fiscales: Muchos fondos de pensión ofrecen beneficios fiscales que pueden reducir la carga impositiva durante los años de acumulación.</li>
            <li>Liquidez: Algunos fondos permiten retiradas parciales o totales bajo condiciones específicas, ofreciendo flexibilidad durante tu retiro.</li>
          </ul>
          <h3 className="text-xl sm:text-2xl font-bold">Crea una Cuenta en un Fondo de Pensión con MOU Pensions</h3>
          <p className="text-sm sm:text-base xl:text-lg mb-4">Si estás preparando tu futuro financiero, te invitamos a conocer MOU Pensions, nuestra plataforma de servicios financieros especializada en fondos de pensión. Compara diferentes fondos, elige el más adecuado para ti y comienza a construir un retiro seguro y cómodo.</p>
          <p className="text-sm sm:text-base xl:text-lg mb-4">Con MOU Pensions, la gestión de tu retiro es fácil y eficiente. Te proporcionamos acceso a herramientas avanzadas para que puedas planificar con anticipación y te asesoramos para que tomes decisiones informadas sobre tu futuro financiero.</p>
          <p className="text-sm sm:text-base xl:text-lg">¡No esperes más para comenzar a planificar tu retiro! Crea hoy mismo una cuenta en un fondo de pensión a través de MOU Pensions y toma el control de tu futuro financiero.</p>
        </div>
    </div>
  );
}

export default RetirementPage;
