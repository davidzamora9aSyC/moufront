import React from 'react';
import Colpensiones from '../assets/images/Colpensiones.jpg';
import Button from '../components/Button';
import DejanosCorreo from '../components/DejanosCorreo';

const ArticuloFondoPensionObligatoria = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <img src={Colpensiones} alt="Fondos de Pensión Obligatoria en Colombia" className="mt-4 mb-20 mx-auto" />
            <div className="text-left mx-40">
                <h1 className="font-bold text-2xl mb-2">Fondos de pensión obligatoria</h1>
                <h2 className="font-semibold text-lg mb-4">¿Qué son y cómo funcionan?</h2>
                <p className='mt-5 mb-16'>
                    En Colombia, los fondos de pensión obligatoria son una pieza clave del sistema de seguridad social, creado para garantizar el ahorro para la vejez de los trabajadores. 
                    Este sistema permite a los ciudadanos acceder a una pensión en la jubilación, protegiéndolos en caso de invalidez o muerte. A continuación, se explica cómo funcionan, 
                    sus características principales y los aspectos a considerar para maximizar los beneficios.
                </p>

                <h2 className="font-bold text-lg mt-20 mb-2">¿Qué son los fondos de pensión obligatoria?</h2>
                <p className='mb-16'>
                    Los fondos de pensión obligatoria son cuentas individuales donde se acumulan los aportes realizados por los trabajadores y sus empleadores a lo largo de la vida laboral. 
                    Estos aportes son invertidos por las Administradoras de Fondos de Pensiones (AFP), empresas especializadas en la gestión de estos recursos, con el fin de generar rendimientos 
                    y así incrementar el valor de los ahorros.
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

                <h2 className="font-bold text-lg mt-20 mb-2">Tipos de régimen en el sistema pensional</h2>
                <p className='mb-16'>
                    Colombia tiene dos regímenes de pensiones que coexisten y que los trabajadores pueden elegir según su conveniencia:
                </p>
                <ol className='list-decimal ml-6 mb-16'>
                    <li><strong>Régimen de Ahorro Individual con Solidaridad (RAIS):</strong> Administrado por las AFP, el RAIS se basa en la acumulación de aportes y rendimientos en una cuenta individual. La pensión final depende del monto acumulado en la cuenta al momento de la jubilación. Los fondos son administrados por entidades privadas, y el trabajador puede cambiar de AFP si lo desea.</li>
                    <li><strong>Régimen de Prima Media con Prestación Definida (RPM):</strong> Administrado por Colpensiones, el RPM es un sistema público en el cual los aportes de los trabajadores activos financian las pensiones de los jubilados. La pensión se determina con base en el salario y el tiempo de cotización.</li>
                </ol>

                <h2 className="font-bold text-lg mt-20 mb-2">Funcionamiento de los aportes</h2>
                <p className='mb-16'>
                    En el sistema de pensión obligatoria, los aportes corresponden al 16% del salario del trabajador, de los cuales el empleador paga el 12% y el trabajador el 4%. 
                    Este porcentaje se destina al fondo escogido, donde se invierte en distintos portafolios, como renta fija y variable, para maximizar los rendimientos.
                </p>

                <h2 className="font-bold text-lg mt-20 mb-2">Tipos de fondos en el RAIS</h2>
                <ul className='list-disc ml-6 mb-16'>
                    <li>Dentro del régimen RAIS, las AFP ofrecen cuatro tipos de fondos para que los afiliados elijan en función de su perfil de riesgo:</li>
                    <li>1. Fondo conservador: Bajo riesgo, con inversiones principalmente en renta fija.</li>
                    <li>2. Fondo moderado: Riesgo medio, con una combinación de renta fija y variable.</li>
                    <li>3. Fondo de mayor riesgo: Alto riesgo, enfocado en renta variable para quienes buscan un equilibrio entre riesgo y rentabilidad.</li>
                    <li>4. Fondo de retiro programado: Diseñado para quienes ya están pensionados.</li>
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

export default ArticuloFondoPensionObligatoria;
