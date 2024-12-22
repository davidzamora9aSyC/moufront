import skandia from '../../assets/images/skandia.png';
import Lista from '../../components/Lista';

function FondosListados() {
    const titulos = ['Nombre portafolio', 'Tipo de inversión', 'Perfil de riesgo', 'Pago mínimo de entrada', 'Valor de fondo'];
    const datos = [
        ['Fondo Pensional Global', 'RV', 'Alto', '1 MM COP', '50 000MM COP'],
        ['Fondo Pensional Tecnología', 'RV', 'Alto', '1 MM COP', '50 000MM COP'],
        ['Fondo Pensional Skandia', 'RV', 'Alto', '1 MM COP', '50 000MM COP'],
        ['Fondo Pensional Conservador', 'RV', 'Bajo', '1 MM COP', '50 000MM COP']
    ];
    const colores = ['#0015CD', 'black', 'black', 'black', 'black'];

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-72 bg-white font-sans">
            <div className="flex flex-wrap justify-center sm:justify-between items-center mt-20">
                <img src={skandia} alt="Skandia Logo" className="h-16 mb-4 sm:mb-0 sm:mr-4" />
                <h1 className="text-5xl font-semibold text-[#002bc8] text-center sm:text-left">
                    Portafolios disponibles
                </h1>
            </div>
            <div className="w-full mt-24 mb-40">
                <Lista titles={titulos} data={datos} colors={colores} />
            </div>
        </div>
    );
}

export default FondosListados;
