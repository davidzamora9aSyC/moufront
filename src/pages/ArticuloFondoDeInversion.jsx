import React from 'react';
import fondoInversion from '../assets/images/inversion.jpg';
import Button from '../components/Button';
import DejanosCorreo from '../components/DejanosCorreo';

const ArticuloFondosDeInversion = () => {
    return (
        <div className="mx-6 my-16 xl:mx-20 2xl:mx-40 3xl:px-60 4xl:px-80">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-20 lg:px-20">
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">
                        Fondos de Inversión en Colombia: Una Alternativa para Potenciar el Ahorro
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Los fondos de inversión son instrumentos financieros diseñados para reunir el capital de múltiples inversores y administrarlo de manera conjunta, con el objetivo de generar rendimientos a través de diferentes activos, como acciones, bonos, o bienes inmuebles. En Colombia, estos fondos son una opción popular para quienes buscan diversificar su portafolio y maximizar sus ahorros sin la necesidad de gestionar individualmente sus inversiones.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Los fondos de inversión permiten a los inversores acceder a mercados que, de forma individual, podrían ser difíciles de gestionar por falta de conocimiento o capital. Están gestionados por profesionales que buscan optimizar los rendimientos a partir de un conjunto de estrategias y análisis del mercado.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={fondoInversion} alt="Fondos de Inversión" className="rounded-lg shadow-lg" />
                </div>
            </div>

            <div className="w-full text-gray-600 lg:px-20 mb-20">
                <div className="flex flex-col items-center my-10 md:my-16">
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="REGISTRARME"
                        paddingX="px-32"
                        paddingY="py-3"
                        color="bg-[#002bc8]"
                    />
                </div>
                <h2 className="text-2xl font-bold mb-4">Tipos de Fondos de Inversión en Colombia</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        <strong>Fondos Abiertos y Cerrados</strong>
                        <ul className="list-disc ml-6">
                            <li><strong>Fondos Abiertos:</strong> Permiten la entrada y salida de inversionistas en cualquier momento, con una liquidez considerable.</li>
                            <li><strong>Fondos Cerrados:</strong> Tienen un plazo definido y no permiten retiros hasta el final del periodo.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Fondos de Renta Fija y Variable</strong>
                        <ul className="list-disc ml-6">
                            <li><strong>Renta Fija:</strong> Rendimientos estables y predecibles, ideales para perfiles conservadores.</li>
                            <li><strong>Renta Variable:</strong> Inversión en acciones con mayor rentabilidad potencial, pero con riesgo más alto.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Fondos Multiactivos</strong>
                        <p>Combinan renta fija y variable, adaptándose a los objetivos y tolerancia al riesgo de los inversores.</p>
                    </li>
                </ul>

       
                <h2 className="text-2xl font-bold mt-16 mb-4">Beneficios de los Fondos de Inversión</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Diversificación: Permiten invertir en una amplia variedad de activos, reduciendo el riesgo individual.</li>
                    <li>Acceso a Mercados: Facilitan el acceso a inversiones complejas para individuos con menor capital.</li>
                    <li>Administración Profesional: Gestionados por expertos que buscan maximizar rendimientos.</li>
                </ul>
                <p className="mb-6">
                    Empieza a invertir hoy mismo con MOU Management y potencia tus ahorros con estrategias adaptadas a tus objetivos financieros. Tu futuro financiero comienza con las decisiones de hoy.
                </p>
            </div>
            <DejanosCorreo />
        </div>
    );
};

export default ArticuloFondosDeInversion;
