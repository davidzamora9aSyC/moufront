import React from 'react';
import Colpensiones from '../assets/images/Colpensiones.jpg';
import Button from '../components/Button';
import DejanosCorreo from '../components/DejanosCorreo';

const ArticuloFondoPensionObligatoria = () => {
    return (
        <div className="mx-6 my-16 xl:mx-20 2xl:mx-40 3xl:px-60 4xl:px-80">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-20 lg:px-20">
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">Fondos de pensión obligatoria</h1>
                    <h2 className="font-semibold text-lg mb-4">¿Qué son y cómo funcionan?</h2>
                    <p className="text-gray-600 mb-6">
                        En Colombia, los fondos de pensión obligatoria son una pieza clave del sistema de seguridad social, creado para garantizar el ahorro para la vejez de los trabajadores. Este sistema permite a los ciudadanos acceder a una pensión en la jubilación, protegiéndolos en caso de invalidez o muerte. A continuación, se explica cómo funcionan, sus características principales y los aspectos a considerar para maximizar los beneficios.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={Colpensiones} alt="Fondos de Pensión" className="rounded-lg shadow-lg" />
                </div>
            </div>

            <div className="w-full text-gray-600 lg:px-20 mb-20">
                <div className="flex flex-col items-center mt-20 md:my-16">
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="REGISTRARME"
                        paddingX="px-32"
                        paddingY="py-3"
                        color="bg-[#002bc8]"
                    />
                </div>
                <h2 className="text-2xl font-bold mb-4">¿Qué son los fondos de pensión obligatoria?</h2>
                <p className="mb-6">
                    Los fondos de pensión obligatoria son cuentas individuales donde se acumulan los aportes realizados por los trabajadores y sus empleadores a lo largo de la vida laboral. Estos aportes son invertidos por las Administradoras de Fondos de Pensiones (AFP), empresas especializadas en la gestión de estos recursos, con el fin de generar rendimientos y así incrementar el valor de los ahorros.
                </p>

                <h2 className="text-2xl font-bold mt-16 mb-4">Tipos de régimen en el sistema pensional</h2>
                <p className="mb-6">
                    Colombia tiene dos regímenes de pensiones que coexisten y que los trabajadores pueden elegir según su conveniencia:
                </p>
                <ol className="list-decimal list-inside mb-6">
                    <li><strong>Régimen de Ahorro Individual con Solidaridad (RAIS):</strong> Administrado por las AFP, el RAIS se basa en la acumulación de aportes y rendimientos en una cuenta individual. La pensión final depende del monto acumulado en la cuenta al momento de la jubilación.</li>
                    <li><strong>Régimen de Prima Media con Prestación Definida (RPM):</strong> Administrado por Colpensiones, es un sistema público donde los aportes de los trabajadores activos financian las pensiones de los jubilados.</li>
                </ol>

                <h2 className="text-2xl font-bold mt-16 mb-4">Funcionamiento de los aportes</h2>
                <p className="mb-6">
                    En el sistema de pensión obligatoria, los aportes corresponden al 16% del salario del trabajador, de los cuales el empleador paga el 12% y el trabajador el 4%. Este porcentaje se invierte en distintos portafolios, como renta fija y variable, para maximizar los rendimientos.
                </p>

                <h2 className="text-2xl font-bold mt-16 mb-4">Tipos de fondos en el RAIS</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Fondo conservador: Bajo riesgo, con inversiones principalmente en renta fija.</li>
                    <li>Fondo moderado: Riesgo medio, combinando renta fija y variable.</li>
                    <li>Fondo de mayor riesgo: Alto riesgo, enfocado en renta variable.</li>
                    <li>Fondo de retiro programado: Diseñado para quienes ya están pensionados.</li>
                </ul>

                <div className="flex flex-col items-center mt-16">
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="REGISTRARME"
                        paddingX="px-32"
                        paddingY="py-3"
                        color="bg-[#002bc8]"
                    />
                </div>
            </div>
            <DejanosCorreo />
        </div>
    );
};

export default ArticuloFondoPensionObligatoria;
