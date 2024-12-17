import React from 'react';
import fondoInversion from '../assets/images/fondosDeInversion.jpg';
import Button from '../components/Button';
import DejanosCorreo from '../components/DejanosCorreo';

const ArticuloFondoDePension = () => {
    return (
        <div className="p-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-40">
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">Fondos de Pensión</h1>
                    <p className="font-semibold mb-10">Funcionamiento y detalles para el usuario</p>
                    <p className="text-gray-600 mb-6">
                        En Colombia, los fondos de pensión son un mecanismo esencial para garantizar un ingreso en la vejez. Existen dos tipos principales: <b>obligatorios</b> y <b>voluntarios</b>, con reglas específicas.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-10">
                        <li>Régimen de Prima Media (RPM): Administrado por Colpensiones, basado en un fondo común.</li>
                        <li>Régimen de Ahorro Individual (RAIS): Cuenta individual en fondos privados con rendimientos.</li>
                    </ul>
                </div>
                <div className="lg:w-1/2">
                    <img src={fondoInversion} alt="Fondos de Inversión" className="rounded-lg shadow-lg" />
                </div>
            </div>

            <div className="w-full text-gray-600 px-72 mt-16 mb-20">
                <div className="flex flex-col mx-96 my-10">
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="REGISTRARME"
                        paddingX="px-10"
                        paddingY="py-2"
                        color="bg-[#002bc8]"
                        textSize="text-lg"
                    />
                </div>
                <h2 className="text-2xl font-bold mb-4">Beneficios de los Fondos de Pensión</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Ahorro para la vejez: Garantía de ingreso en la jubilación.</li>
                    <li>Rendimientos: Incremento del capital acumulado.</li>
                    <li>Beneficios tributarios: Incentivos fiscales al ahorrar.</li>
                </ul>
                <h3 className="text-xl font-bold mb-2">Crea una Cuenta con MOU Management</h3>
                <p className="mb-6">
                    MOU Management facilita la comparación de fondos de pensión voluntarios, ayudándote a elegir la mejor opción para asegurar tu futuro financiero. ¡Empieza hoy mismo!
                </p>
                <h2 className="text-2xl font-bold mt-16 mb-4">Cuántos Fondos de Pensión Obligatorios Puede Tener una Persona?</h2>
                <p className="mb-6">
                    Una persona solo puede estar afiliada a un fondo de pensión obligatorio a la vez. Esto significa que, ya sea que elija el Régimen de Prima Media (Colpensiones) o un fondo privado en el Régimen de Ahorro Individual, debe optar por uno solo. No es posible estar afiliado simultáneamente a más de un fondo de pensión obligatorio.
                </p>
                <h2 className="text-2xl font-bold mt-16 mb-4">Cuántos Fondos de Pensión Voluntarios Puede Tener una Persona?</h2>
                <p className="mb-6">
                    En el caso de los fondos de pensión voluntarios, puedes tener tantos como desees. No existe una limitación en cuanto a la cantidad de fondos voluntarios a los que puedes afiliarte. Esto permite a las personas diversificar su inversión, aprovechando las diferentes estrategias y productos financieros que ofrecen los fondos.
                </p>
                <h2 className="text-2xl font-bold mt-16 mb-4">Beneficios de Afiliarse a un Fondo de Pensión</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Ahorro para la Vejez: Ya sea en un fondo obligatorio o voluntario, permiten garantizar un ingreso en tu jubilación.</li>
                    <li>Rendimientos: Los aportes generan rendimientos al ser invertidos en diferentes activos financieros.</li>
                    <li>Beneficios Tributarios: Los aportes pueden ser deducibles de impuestos, lo que representa un incentivo adicional.</li>
                </ul>
                <p className="mb-6">
                    Crea hoy mismo una cuenta en un fondo de pensión voluntario a través de MOU Management y empieza a construir tu futuro con tranquilidad. Recuerda, tu jubilación depende de las decisiones que tomes hoy. ¡Hazlo con MOU Management!
                </p>
            </div>
            <DejanosCorreo />
        </div>
    );
};

export default ArticuloFondoDePension;
