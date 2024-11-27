import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import couplehouse from '../../assets/images/coupleHouse.jpg';

function CDsPage() {
  const navigate = useNavigate();

  const goToCDs = () => navigate('/CDTs');

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-40">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Explora tus opciones de Certificados de Depósito con MOU Investments</h1>
          <p className="mb-10">Invertir en certificados de depósito es una manera segura de aumentar tus ahorros.</p>
          <div className="flex flex-col gap-4">
            <Button
              text="VER CERTIFICADOS DE DEPÓSITO"
              color="bg-blue-500" 
              paddingX="px-10"
              paddingY="py-2"
              textSize="text-lg"
              onClick={goToCDs}
            />
          </div>
          <p className="mt-6 text-gray-600 mb-12">
            Los certificados de depósito ofrecen una rentabilidad fija y segura, permitiéndote planificar tus finanzas con más precisión. Son una excelente opción si buscas evitar riesgos en tus inversiones.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={couplehouse} alt="Investing in CDs" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="w-full text-gray-600 px-72 mb-20">
          <h2 className="text-2xl font-bold mt-6 mb-4">Beneficios de Invertir en Certificados de Depósito</h2>
          <ul className="list-disc list-inside">
            <li>Seguridad: Los CDs ofrecen un retorno garantizado sin riesgo de pérdida del capital invertido.</li>
            <li>Rendimiento Predecible: Sabrás exactamente cuánto dinero ganarás al final del plazo del CD.</li>
            <li>Flexibilidad de Plazos: Puedes elegir diferentes plazos de inversión que se adecuen a tus necesidades financieras.</li>
            <li>Facilidad de Inversión: Es fácil comenzar a invertir en CDs, ideal para nuevos inversores.</li>
          </ul>
          <h3 className="text-xl font-bold">Abre un CD con MOU Investments</h3>
          <p>Descubre cómo nuestros Certificados de Depósito pueden ayudarte a crecer tus ahorros de forma segura y estable. Compara diferentes opciones, elige la mejor para ti y comienza a invertir con confianza.</p>
          <p>En MOU Investments, te facilitamos el proceso de inversión en CDs para que puedas hacerlo de manera simple y directa. ¡Comienza hoy y haz que tu dinero trabaje para ti!</p>
        </div>
    </div>
  );
}

export default CDsPage;
