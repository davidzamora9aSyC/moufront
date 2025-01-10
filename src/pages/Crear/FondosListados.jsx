import React, { useEffect, useState } from 'react';
import skandia from '../../assets/images/skandia.png';
import Lista from '../../components/Lista';

function FondosListados() {
    const titulos = ['Nombre portafolio', 'Tipo de inversión', 'Perfil de riesgo', 'Pago mínimo de entrada', 'Valor de fondo'];
    const [datos, setDatos] = useState([]); // Estado para los datos
    const colores = ['#0015CD', 'black', 'black', 'black', 'black'];

    useEffect(() => {

        fetch('https://mouback.endomedicos.com/fondos-skandia')
            .then((response) => response.json())
            .then((data) => {
                const datosFormateados = data.map((fondo) => [
                    fondo.nombre_portafolio,
                    fondo.tipo_inversion,
                    fondo.perfil_riesgo,
                    `${fondo.pago_minimo_entrada.toLocaleString()} COP`,
                    `${fondo.valor_fondo.toLocaleString()} COP`
                ]);
                setDatos(datosFormateados);
            })
            .catch((error) => console.error('Error al cargar los fondos:', error));
    }, []);

    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-72 bg-white font-sans">
            <div className="flex justify-between items-center mt-20">
                <h1 className="text-5xl font-semibold text-[#002bc8]">Portafolios disponibles</h1>
                <img src={skandia} alt="Skandia Logo" className="h-16" />
            </div>
            <div className="w-full mt-24 mb-40">
                {datos.length > 0 ? (
                    <Lista titles={titulos} data={datos} colors={colores} />
                ) : (
                    <p className="text-center text-gray-500">Cargando fondos de inversión...</p>
                )}
            </div>
        </div>
    );
}

export default FondosListados;
