import skandia from '../../assets/images/skandia.png';
import Lista from '../../components/Lista';

function ListedCDs() {
    const titulos = ['Nombre del CD', 'Duración', 'Tasa de interés', 'Pago mínimo de entrada', 'Valor del CD'];
    const datos = [
        ['CD Término Corto', '1 año', '3.5%', '1.000.000 COP', '5 000MM COP'],
        ['CD Término Medio', '3 años', '4.0%', '1.000.000 COP', '15 000MM COP'],
        ['CD Término Largo', '5 años', '4.5%', '1.000.000 COP', '25 000MM COP'],
        ['CD Tasa Variable', '3 años', '3.0% a 4.5%', '1.000.000 COP', '10 000MM COP']
    ];
    const colores = ['#0057B7', 'black', 'black', 'black', 'black'];

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-72 bg-white font-sans">
            <div className="flex justify-between items-center mt-20">
                <h1 className="text-5xl font-semibold text-[#4A90E2]">Certificados de Depósito Disponibles</h1>
                <img src={skandia} alt="Skandia Logo" className="h-16" />
            </div>
            <div className="w-full mt-24 mb-40">
                <Lista titles={titulos} data={datos} colors={colores} />
            </div>
        </div>
    );
}

export default ListedCDs;
