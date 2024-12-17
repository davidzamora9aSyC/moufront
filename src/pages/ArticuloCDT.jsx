import React from 'react';
import fondoCDT from '../assets/images/cdts.jpg';
import Button from '../components/Button';
import DejanosCorreo from '../components/DejanosCorreo';

const ArticuloCDT = () => {
    return (
        <div className="mx-6 my-16 xl:mx-20 2xl:mx-40 3xl:px-60 4xl:px-80">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-20 lg:px-20">
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">
                        CDTs en Colombia: Un Instrumento Clave para el Ahorro y la Inversión
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Los Certificados de Depósito a Término (CDTs) son una de las alternativas más populares para el ahorro e inversión en Colombia. Estos instrumentos financieros permiten a los individuos y empresas depositar una cantidad de dinero en una entidad financiera durante un período determinado, obteniendo a cambio un interés fijo.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={fondoCDT} alt="CDTs en Colombia" className="rounded-lg shadow-lg" />
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
                <h2 className="text-2xl font-bold mb-4">Funcionamiento y características de los CDTs</h2>
                <p className="mb-6">
                    Los CDTs son productos de renta fija ofrecidos por bancos y entidades financieras, que garantizan un retorno sobre la inversión al final del plazo acordado. Al abrir un CDT, el inversionista acuerda con la entidad financiera un monto y un plazo específicos.
                </p>

                <h2 className="text-2xl font-bold mt-16 mb-4">Factores a considerar antes de invertir en un CDT</h2>
                <p className="mb-6">
                    Al decidir invertir en un CDT, es importante evaluar diversos aspectos para maximizar los beneficios:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li><strong>Plazo y tasa de interés:</strong> Comparar las tasas ofrecidas por diferentes entidades y elegir un plazo acorde a los objetivos financieros.</li>
                    <li><strong>Condiciones de cancelación anticipada:</strong> Evaluar las penalidades por retiro anticipado para evitar sorpresas.</li>
                    <li><strong>Reinversión de intereses:</strong> Optar por reinvertir los intereses ayuda a capitalizar los rendimientos.</li>
                </ul>
                <p className="mb-6">
                    Los CDTs son una herramienta valiosa para quienes buscan una opción de inversión segura y con retornos predecibles en Colombia.
                </p>
                <div className="flex flex-col items-center my-10">
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

export default ArticuloCDT;
