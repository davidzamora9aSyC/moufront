import React from 'react';
import fondoCDT from '../assets/images/cdts.jpg';
import Button from '../components/Button';
import DejanosCorreo from '../components/DejanosCorreo';

const ArticuloCDT = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="font-bold text-4xl mb-8 text-center">CDTs en Colombia: Un Instrumento Clave para el Ahorro y la Inversión</h1>
            <img src={fondoCDT} alt="CDTs en Colombia" className="mt-4 mb-20 h-[50vh] mx-auto" />
            <div className="text-left mx-40">
                <p className='mt-5 mb-16'>
                    Los Certificados de Depósito a Término (CDTs) son una de las alternativas más populares para el ahorro e inversión en Colombia. Estos instrumentos financieros 
                    permiten a los individuos y empresas depositar una cantidad de dinero en una entidad financiera durante un período determinado, obteniendo a cambio un interés fijo. 
                    A continuación, se detalla cómo funcionan, sus características, ventajas y lo que se debe tener en cuenta al invertir en ellos.
                </p>

                <h2 className="font-bold text-lg mt-20 mb-2">Funcionamiento y características de los CDTs</h2>
                <p className='mb-16'>
                    Los CDTs son productos de renta fija ofrecidos por bancos y entidades financieras, que garantizan un retorno sobre la inversión al final del plazo acordado. 
                    Al abrir un CDT, el inversionista acuerda con la entidad financiera un monto y un plazo específicos, que pueden ir desde 30 días hasta varios años. Durante ese 
                    período, el dinero depositado no puede ser retirado sin incurrir en penalidades. El interés se paga al vencimiento o, en algunos casos, de forma periódica según 
                    lo acordado. La tasa de interés de un CDT está determinada por varios factores, incluyendo el plazo del depósito, la cantidad invertida y las condiciones del mercado. 
                    En general, a mayor plazo y monto, más alta será la tasa de interés ofrecida.
                </p>

                <div className='flex justify-center'>
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="Registrarme"
                        paddingX="px-40"
                        paddingY="py-3"
                        color="bg-[#002bc8]"
                    />
                </div>

                <h2 className="font-bold text-lg mt-20 mb-2">Factores a considerar antes de invertir en un CDT</h2>
                <p className='mb-16'>
                    Al decidir invertir en un CDT, es importante evaluar diversos aspectos para maximizar los beneficios:
                </p>
                <ul className='list-disc ml-6 mb-16'>
                    <li><strong>Plazo y tasa de interés:</strong> Es crucial comparar las tasas de interés ofrecidas por diferentes entidades y elegir un plazo que se adapte a los objetivos financieros del inversionista. Los plazos más largos suelen ofrecer mejores tasas, pero implican una menor flexibilidad.</li>
                    <li><strong>Condiciones de cancelación anticipada:</strong> Algunos CDTs permiten el retiro anticipado bajo ciertas condiciones, mientras que otros imponen fuertes penalidades. Evaluar estas políticas es importante en caso de que se presenten necesidades de liquidez imprevistas.</li>
                    <li><strong>Reinversión de intereses:</strong> Optar por reinvertir los intereses en lugar de retirarlos periódicamente puede ayudar a capitalizar los rendimientos, generando ganancias mayores al final del plazo.</li>
                </ul>
                <p className='mt-5 mb-20'>
                    Los CDTs son una herramienta valiosa para quienes buscan una opción de inversión segura y con retornos predecibles en Colombia. Si bien ofrecen protección del capital 
                    y tasas de interés fijas, es fundamental considerar sus limitaciones en cuanto a liquidez y rentabilidad. Evaluar cuidadosamente los plazos, tasas y condiciones 
                    específicas de cada entidad ayudará a optimizar los beneficios y a tomar decisiones financieras informadas.
                </p>

                <div className='flex justify-center mt-20'>
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="Registrarme"
                        paddingX="px-40"
                        paddingY="py-3"
                        color="bg-[#002bc8]"
                    />
                </div>
            </div>
            <DejanosCorreo />
        </div>
    );
}

export default ArticuloCDT;
