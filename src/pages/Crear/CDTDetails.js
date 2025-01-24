import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Simulator from './Simulator';

function CDTDetails() {
    const { Name } = useParams(); 
    const navigate = useNavigate(); 

    const cdtsData = {
        "CD Término Corto": {
            duration: '1 año',
            rate: '3.5%',
            minEntry: '1.000.000 COP',
            value: '5 000MM COP',
            entity: 'Skandia',
            description: 'Ideal para inversiones de corto plazo con retorno moderado.',
            benefits: ['Alta liquidez al vencimiento', 'Bajo riesgo', 'Disponibilidad inmediata al vencimiento'],
            penalty: 'No permite redención anticipada.',
            interestPayment: 'Al vencimiento.',
            taxes: 'Retención del 4% sobre intereses generados.',
            risk: 'Muy bajo'
        },
        "CD Término Medio": {
            duration: '3 años',
            rate: '4.0%',
            minEntry: '1.000.000 COP',
            value: '15 000MM COP',
            entity: 'Skandia',
            description: 'Ofrece un buen balance entre duración y rentabilidad.',
            benefits: ['Tasa de interés competitiva', 'Protección ante inflación', 'Opción de renovación automática'],
            penalty: 'Penalización del 10% de intereses si se retira antes de 1 año.',
            interestPayment: 'Anualmente.',
            taxes: 'Retención del 4% sobre intereses generados.',
            risk: 'Bajo'
        },
        "CD Término Largo": {
            duration: '5 años',
            rate: '4.5%',
            minEntry: '1.000.000 COP',
            value: '25 000MM COP',
            entity: 'Skandia',
            description: 'Maximiza tus ganancias a largo plazo con una tasa competitiva.',
            benefits: ['Intereses más altos', 'Ideal para planear inversiones a largo plazo', 'Opciones de renovación'],
            penalty: 'No permite redención anticipada.',
            interestPayment: 'Semestral.',
            taxes: 'Retención del 4% sobre intereses generados.',
            risk: 'Moderado'
        },
        "CD Tasa Variable": {
            duration: '3 años',
            rate: '3.0% a 4.5%',
            minEntry: '1.000.000 COP',
            value: '10 000MM COP',
            entity: 'Skandia',
            description: 'Una opción flexible con tasas ajustadas al mercado.',
            benefits: ['Ajuste de tasa según mercado', 'Ideal para perfiles moderados', 'Mayor potencial de rendimiento'],
            penalty: 'Penalización variable según tiempo restante.',
            interestPayment: 'Cada trimestre.',
            taxes: 'Retención del 4% sobre intereses generados.',
            risk: 'Variable según tasa del mercado'
        }
    };

    const cdt = cdtsData[Name] || null;

    const handleGoBack = () => {
        navigate('/logged-home');
    };

    const parseCurrencyToNumber = (currencyString) => {
        return parseInt(currencyString.replace(/\D/g, ''), 10);
    };

    if (!cdt) {
        return (
            <div className="text-center mt-20">
                <h1 className="text-3xl font-bold text-red-500">CDT no encontrado</h1>
                <p className="mt-4 text-lg">Verifica la información y vuelve a intentar.</p>
                <Button
                    onClick={handleGoBack}
                    text="Volver al inicio"
                    color="bg-blue-500"
                    textColor="text-white"
                    paddingX="px-8"
                    paddingY="py-3"
                />
            </div>
        );
    }

    const minAmount = parseCurrencyToNumber(cdt.minEntry); // Convertir "1.000.000 COP" a 1000000

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-72 bg-white font-sans mt-20">
            <h1 className="text-4xl font-semibold text-[#4A90E2] text-center">
                Detalles del Certificado de Depósito
            </h1>
            <div className="mt-12 border p-8 shadow-md bg-gray-50 rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{Name}</h2>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Entidad financiera:</span> {cdt.entity}
                </p>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Duración:</span> {cdt.duration}
                </p>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Tasa de interés:</span> {cdt.rate}
                </p>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Pago mínimo de entrada:</span> {cdt.minEntry}
                </p>
                <p className="text-lg mb-2">
                    <span className="font-semibold">Valor total:</span> {cdt.value}
                </p>
                <p className="text-lg mb-4">
                    <span className="font-semibold">Descripción:</span> {cdt.description}
                </p>
                <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Beneficios:</h3>
                    <ul className="list-disc list-inside mt-2 text-lg">
                        {cdt.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                </div>
                <p className="text-lg mt-4">
                    <span className="font-semibold">Penalización por retiro anticipado:</span> {cdt.penalty}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Frecuencia de pago de intereses:</span> {cdt.interestPayment}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Retenciones e impuestos:</span> {cdt.taxes}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Riesgo estimado:</span> {cdt.risk}
                </p>
                <Simulator rate={cdt.rate} duration={cdt.duration} interestPayment={cdt.interestPayment} minAmount={minAmount} />
                <div className="mt-8">
                    <Button
                        onClick={handleGoBack}
                        text="Adquirir"
                        color="bg-blue-500"
                        textColor="text-white"
                        paddingX="px-8"
                        paddingY="py-3"
                    />
                </div>
            </div>
        </div>
    );
}

export default CDTDetails;
