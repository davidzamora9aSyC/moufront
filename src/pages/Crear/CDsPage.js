import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import couplehouse from '../../assets/images/coupleHouse.jpg';

function CDsPage() {
  const navigate = useNavigate();

  const goToCDs = () => navigate('/CDTs');

  return (
    <div className="mx-6 my-16 sm:mx-10 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-40 3xl:px-60 4xl:px-80">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-10 xl:space-x-20 2xl:space-x-40">
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mb-4">
            Explora tus opciones de Certificados de Depósito con MOU Investments
          </h1>
          <p className="text-gray-700 text-base sm:text-lg xl:text-xl mb-10">
            Invertir en certificados de depósito es una manera segura de aumentar tus ahorros.
          </p>
          <div className="flex flex-col gap-4">
            <Button
              text="VER CERTIFICADOS DE DEPÓSITO"
              color="bg-blue-500 hover:bg-blue-600"
              paddingX="px-10"
              paddingY="py-2"
              textSize="text-lg"
              onClick={goToCDs}
            />
          </div>
          <p className="text-gray-600 text-sm sm:text-base xl:text-lg mt-6 mb-12">
            Los certificados de depósito ofrecen una rentabilidad fija y segura, permitiéndote planificar tus finanzas con más precisión. Son una excelente opción si buscas evitar riesgos en tus inversiones.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img
            src={couplehouse}
            alt="Investing in CDs"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full text-gray-600 mt-12 xl:mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Beneficios de Invertir en Certificados de Depósito
        </h2>
        <ul className="list-disc list-inside text-sm sm:text-base xl:text-lg mb-6">
          <li>Seguridad: Los CDs ofrecen un retorno garantizado sin riesgo de pérdida del capital invertido.</li>
          <li>Rendimiento Predecible: Sabrás exactamente cuánto dinero ganarás al final del plazo del CD.</li>
          <li>Flexibilidad de Plazos: Puedes elegir diferentes plazos de inversión que se adecuen a tus necesidades financieras.</li>
          <li>Facilidad de Inversión: Es fácil comenzar a invertir en CDs, ideal para nuevos inversores.</li>
        </ul>
        <h3 className="text-xl sm:text-2xl font-bold mb-2">Abre un CDT con MOU Investments</h3>
        <p className="text-sm sm:text-base xl:text-lg mb-4">
          Descubre cómo nuestros Certificados de Depósito pueden ayudarte a crecer tus ahorros de forma segura y estable. Compara diferentes opciones, elige la mejor para ti y comienza a invertir con confianza.
        </p>
        <p className="text-sm sm:text-base xl:text-lg">
          En MOU Investments, te facilitamos el proceso de inversión en CDs para que puedas hacerlo de manera simple y directa. ¡Comienza hoy y haz que tu dinero trabaje para ti!
        </p>
      </div>
    </div>
  );
}

export default CDsPage;
