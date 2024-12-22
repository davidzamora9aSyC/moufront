import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import couplehouse from '../../assets/images/coupleHouse.jpg'; 

function InvestmentPage() {
  const navigate = useNavigate();

  const goToNationalFunds = () => navigate('/national-funds');
  const goToUSFunds = () => navigate('/us-funds');

  return (
    <div className="mx-6 my-16 sm:mx-10 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-40 3xl:px-60 4xl:px-80">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-10 xl:space-x-20 2xl:space-x-40">
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-4">MOU te permite acceder a fondos de inversión nacionales e internacionales</h1>
          <p className="text-gray-700 text-base sm:text-lg xl:text-xl mb-10">Los fondos internacionales suelen tener un rendimiento mayor.</p>
          <div className="flex flex-col gap-4">
            <Button
              text="VER FONDOS NACIONALES"
              color="bg-[#c954a5] hover:bg-[#b04395]" 
              paddingX="px-10"
              paddingY="py-2"
              textSize="text-lg"
              onClick={goToNationalFunds}
            />
            <Button
              text="VER FONDOS DE ESTADOS UNIDOS"
              color="bg-blue-500 hover:bg-blue-600" 
              paddingX="px-10"
              paddingY="py-2"
              textSize="text-lg"
              onClick={goToUSFunds}
            />
          </div>
          <p className="text-gray-600 text-sm sm:text-base xl:text-lg mt-6 mb-12">
            Los fondos de inversión son instrumentos clave para quienes buscan hacer crecer su patrimonio a través de la inversión en diferentes activos financieros. En Colombia, los fondos de inversión ofrecen una excelente oportunidad para obtener rendimientos de acuerdo con los objetivos y el perfil de riesgo de cada persona. Existen diferentes tipos de fondos, desde los más conservadores hasta los más arriesgados, adaptándose a las necesidades de ahorro y crecimiento de cada individuo.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={couplehouse} alt="Couple with house" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
      <div className="w-full text-gray-600 mt-12 xl:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-4">Tipos de Fondos de Inversión en Colombia</h2>
          <h3 className="text-xl sm:text-2xl font-bold">Fondos de Inversión Colectiva (FIC)</h3>
          <p className="text-sm sm:text-base xl:text-lg mb-4">Los FIC permiten a varias personas reunir sus recursos en un fondo común administrado por una sociedad gestora. Los fondos se invierten en diferentes tipos de activos, como acciones, bonos, y títulos de renta fija, lo que permite diversificar el riesgo y obtener rendimientos de acuerdo con el comportamiento del mercado.</p>
          <h3 className="text-xl sm:text-2xl font-bold">Fondos de Renta Fija</h3>
          <p className="text-sm sm:text-base xl:text-lg mb-4">Estos fondos invierten principalmente en instrumentos de deuda, como bonos gubernamentales o corporativos, que ofrecen pagos periódicos. Son una opción ideal para personas con un perfil de riesgo bajo que buscan estabilidad en sus inversiones.</p>
          <h3 className="text-xl sm:text-2xl font-bold">Fondos de Renta Variable</h3>
          <p className="text-sm sm:text-base xl:text-lg mb-4">En estos fondos, el capital se destina a la compra de acciones de diferentes empresas, por lo que los rendimientos dependen del comportamiento del mercado de valores. Aunque presentan mayor riesgo, también ofrecen mayores posibilidades de ganancia, siendo adecuados para inversionistas dispuestos a asumir volatilidad.</p>
          <h3 className="text-xl sm:text-2xl font-bold">Fondos Balanceados</h3>
          <p className="text-sm sm:text-base xl:text-lg mb-4">Este tipo de fondos combinan inversiones en renta fija y variable, buscando un equilibrio entre riesgo y rendimiento. Son ideales para quienes desean una estrategia diversificada sin inclinarse demasiado hacia un perfil conservador o agresivo.</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-4">¿Cuántos Fondos de Inversión Puede Tener una Persona?</h2>
          <p className="text-sm sm:text-base xl:text-lg mb-4">No existe un límite en cuanto a la cantidad de fondos de inversión en los que una persona puede participar. Puedes invertir en tantos fondos como consideres necesario, lo que te permite diversificar tus inversiones y aprovechar diferentes oportunidades en el mercado. Esta flexibilidad es clave para una estrategia financiera robusta, ya que permite distribuir el riesgo y maximizar las ganancias potenciales.</p>
          <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-4">Beneficios de Invertir en Fondos de Inversión</h2>
          <ul className="list-disc list-inside text-sm sm:text-base xl:text-lg mb-6">
            <li>Diversificación: Uno de los principales atractivos de los fondos de inversión es la diversificación que ofrecen. Al invertir en un fondo, tu dinero se distribuye en diferentes activos, reduciendo el impacto de la volatilidad en un solo tipo de inversión.</li>
            <li>Gestión Profesional: Los fondos de inversión son gestionados por expertos que toman decisiones basadas en análisis exhaustivos del mercado. Esto permite a los inversionistas acceder a una administración especializada sin tener que preocuparse por la gestión diaria de sus inversiones.</li>
            <li>Acceso a Mercados Globales: Algunos fondos de inversión te permiten acceder a mercados internacionales, lo que amplía tus oportunidades de crecimiento y te permite invertir en activos que no están disponibles localmente.</li>
            <li>Liquidez: Muchos fondos de inversión ofrecen la posibilidad de retirar el capital invertido en plazos relativamente cortos, brindando flexibilidad para quienes necesitan liquidez a corto o mediano plazo.</li>
          </ul>
          <h3 className="text-xl sm:text-2xl font-bold">Crea una Cuenta en un Fondo de Inversión con MOU Management</h3>
          <p className="text-sm sm:text-base xl:text-lg mb-4">Si estás considerando diversificar tus inversiones o mejorar tu estrategia financiera, te invitamos a conocer MOU Management, una plataforma intermediaria de servicios financieros. A través de nuestra plataforma, puedes comparar diferentes fondos de inversión y elegir el que mejor se adapte a tus objetivos y perfil de riesgo.</p>
          <p className="text-sm sm:text-base xl:text-lg mb-4">Con MOU Management, gestionar tus inversiones es sencillo y eficiente. Te proporcionamos acceso a herramientas avanzadas para controlar tu futuro financiero y te asesoramos para que puedas tomar decisiones informadas. Nuestra misión es ayudarte a construir un portafolio sólido que te brinde tranquilidad financiera en el futuro.</p>
          <p className="text-sm sm:text-base xl:text-lg">¡No esperes más para empezar a invertir en tu futuro! Crea hoy mismo una cuenta en un fondo de inversión a través de MOU Management y da los primeros pasos para alcanzar tus metas financieras.</p>
        </div>
    </div>
  );
}

export default InvestmentPage;
