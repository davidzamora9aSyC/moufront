import { useState } from 'react';
import Button from '../../components/Button';

function CDTSimulator({ rate, duration, interestPayment, minAmount }) {
    const [amount, setAmount] = useState(minAmount);
    const [finalAmount, setFinalAmount] = useState(null);
    const [gain, setGain] = useState(null); // Nueva variable para almacenar la ganancia
    const maxAmount = 1000000000;

    const handleSimulation = () => {
        const rateDecimal = parseFloat(rate.replace('%', '')) / 100;
        const years = parseInt(duration);
        const compoundedInterest = interestPayment.toLowerCase() === 'anualmente';

        let total;
        if (compoundedInterest) {
            total = amount * Math.pow(1 + rateDecimal, years);
        } else {
            total = amount * (1 + rateDecimal * years);
        }

        setFinalAmount(total.toFixed(2));
        setGain((total - amount).toFixed(2)); // Calcular y guardar la ganancia
    };

    const handleSliderChange = (value) => {
        const transformedValue = parseFloat(value);
        const adjustedValue = Math.pow(transformedValue, 4.5);
        setAmount(adjustedValue);
    };

    return (
        <div className="mt-12 border p-8 shadow-md bg-white rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Simula cómo crecerá tu inversión en el tiempo</h3>
            <p className="text-lg font-medium text-gray-700 mb-4">
                Monto de inversión: <span className="text-blue-600 font-bold">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(amount)} COP</span>
            </p>
            <input
                type="range"
                min={Math.pow(minAmount, 1 / 4.5)}
                max={Math.pow(maxAmount, 1 / 4.5)}
                value={Math.pow(amount, 1 / 4.5)}
                onChange={(e) => handleSliderChange(e.target.value)}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />

            <p className="text-sm text-gray-600 text-right mt-2">Máximo: {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(maxAmount)} COP</p>
            <Button
                onClick={handleSimulation}
                text="Simular"
                color="bg-blue-500"
                textColor="text-white"
                paddingX="px-6"
                paddingY="py-3"
                fullWidth
            />
            {finalAmount && (
                <div className="mt-8 p-6  border border-blue-50 rounded-lg text-center shadow-md">
                    <h4 className="text-xl font-semibold text-blue-800">Resumen de inversión</h4>
                    <p className="text-lg mt-2">
                        <span className="font-semibold">Monto final estimado:</span>{' '}
                        <span className="text-black">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(finalAmount)} COP</span>
                    </p>
                    <p className="text-lg mt-2">
                        <span className="font-semibold">Ganancia obtenida:</span>{' '}
                        <span className="font-bold">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(gain)} COP</span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default CDTSimulator;
