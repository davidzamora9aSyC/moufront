import skandia from '../../assets/images/skandia.png';
import Lista from '../../components/Lista';

function FondosListados() {
    const titulos = ['Nombre portafolio', 'Tipo de inversión', 'Perfil de riesgo', 'Pago mínimo de entrada', 'Valor de fondo'];
    const datos = [
        ['FPV acciones global', 'RV', 'Alto', '1 MM COP', '50 000MM COP'],
        ['FPV acciones tecnología', 'RV', 'Alto', '1 MM COP', '50 000MM COP'],
        ['FPV Skandia', 'RV', 'Alto', '1 MM COP', '50 000MM COP'],
        ['FPV strategist conservador', 'RV', 'Alto', '1 MM COP', '50 000MM COP']
    ];
    const colores = ['#0015CD', 'black', 'black', 'black', 'black'];

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-72 bg-white font-sans">
            <div className="flex justify-between items-center mt-20">
                <h1 className="text-5xl font-semibold text-[#002bc8]">Portafolios disponibles</h1>
                <img src={skandia} alt="Skandia Logo" className="h-16" />
            </div>
            <div className="w-full mt-24 mb-40">
                <Lista titles={titulos} data={datos} colors={colores} />
            </div>
        </div>
    );
}

export default FondosListados;
