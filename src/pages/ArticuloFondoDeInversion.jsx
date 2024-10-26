import React from 'react';
import fondoInversion from '../assets/images/inversion.jpg';
import Button from '../components/Button';
import DejanosCorreo from '../components/DejanosCorreo';

const ArticuloFondosDeInversion = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <img src={fondoInversion} alt="Fondos de Inversión en Colombia" className="mt-4 mb-20 mx-auto" />
            <div className="text-left mx-40">
                <h1 className="font-bold text-2xl mb-2">Fondos de Inversión en Colombia: Una Alternativa para Potenciar el Ahorro</h1>
                <p className='mt-5 mb-16'>
                    Los fondos de inversión son instrumentos financieros diseñados para reunir el capital de múltiples inversores y administrarlo de manera conjunta, 
                    con el objetivo de generar rendimientos a través de diferentes activos, como acciones, bonos, o bienes inmuebles. En Colombia, estos fondos son una 
                    opción popular para quienes buscan diversificar su portafolio y maximizar sus ahorros sin la necesidad de gestionar individualmente sus inversiones. 
                    A continuación, se analiza su funcionamiento, tipos y aspectos relevantes para elegir el fondo adecuado.
                </p>
                <p className='mb-16'>
                    Los fondos de inversión permiten a los inversores acceder a mercados que, de forma individual, podrían ser difíciles de gestionar por falta de 
                    conocimiento o capital. Están gestionados por profesionales que buscan optimizar los rendimientos a partir de un conjunto de estrategias y análisis 
                    del mercado. Los inversionistas compran participaciones en el fondo, y sus rendimientos se basan en el comportamiento de los activos subyacentes.
                </p>
                <div className='flex justify-center'>
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="Registrarme"
                        paddingX="px-40"
                        paddingY="py-3"
                        color="bg-[#C512C9]"
                    />
                </div>

                <h2 className="font-bold text-lg mt-20 mb-2">Tipos de Fondos de Inversión en Colombia</h2>
                <p className='mt-5 mb-16'>
                    En Colombia, existen varios tipos de fondos que se adaptan a diferentes perfiles de riesgo y objetivos financieros:
                </p>
                <ul className='list-disc ml-6 mb-16'>
                    <li><strong>Fondos Abiertos y Cerrados</strong>
                        <ul className='list-disc ml-6'>
                            <li><strong>Fondos Abiertos:</strong> Permiten la entrada y salida de inversionistas en cualquier momento, con una liquidez considerable. El valor de la participación cambia diariamente con base en el valor de mercado de los activos.</li>
                            <li><strong>Fondos Cerrados:</strong> Tienen un plazo definido y no permiten el retiro hasta que finalice el período estipulado. Son adecuados para inversiones a mediano o largo plazo y suelen invertir en activos menos líquidos, como bienes raíces o infraestructura.</li>
                        </ul>
                    </li>
                    <li className='mt-4'><strong>Fondos de Renta Fija y Variable</strong>
                        <ul className='list-disc ml-6'>
                            <li><strong>Renta Fija:</strong> Invierten en instrumentos como bonos o deuda pública, donde los rendimientos son relativamente estables y predecibles. Son ideales para inversionistas con un perfil conservador.</li>
                            <li><strong>Renta Variable:</strong> Se enfocan en activos como acciones, cuyo valor fluctúa según las condiciones del mercado. Ofrecen un potencial de rentabilidad mayor, pero con un riesgo más alto, siendo adecuados para perfiles agresivos.</li>
                        </ul>
                    </li>
                    <li className='mt-4'><strong>Fondos Multiactivos</strong>
                        <p>Combinan renta fija y variable para crear un portafolio equilibrado, adaptándose a los objetivos y tolerancia al riesgo de los inversores. Estos fondos diversifican la inversión en diferentes clases de activos, buscando maximizar el rendimiento con un riesgo moderado.</p>
                    </li>
                </ul>

                <div className='flex justify-center mt-20'>
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="Registrarme"
                        paddingX="px-40"
                        paddingY="py-3"
                        color="bg-[#C512C9]"
                    />
                </div>
            </div>
            <DejanosCorreo />
        </div>
    );
}

export default ArticuloFondosDeInversion;
