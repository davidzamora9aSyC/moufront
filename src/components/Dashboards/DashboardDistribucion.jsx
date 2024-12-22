import React, { useState } from 'react';
import PieChart from './PieChart';
import DetailsBox from './Details';
import { useMemo, useEffect } from 'react';

const DashboardDistribucion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [colors, setColors] = useState([]);
    const updateColors = (newColors) => {
        setColors(newColors);
    };
    const [colorsMain, setColorsMain] = useState([]);
    const [colorsDetails, setColorsDetails] = useState([]);
    const data = [
        {
            label: 'Acciones',
            value: 50,
            details: [
                { label: 'Tecnología', value: 40 },
                { label: 'Salud', value: 30 },
                { label: 'Finanzas', value: 20 },
                { label: 'Industria', value: 10 }
            ]
        },
        {
            label: 'Bonos',
            value: 10,
            details: [
                { label: 'Gubernamentales', value: 50 },
                { label: 'Corporativos', value: 30 },
                { label: 'Municipales', value: 20 }
            ]
        },
        {
            label: 'Commodities',
            value: 15,
            details: [
                { label: 'Oro', value: 40 },
                { label: 'Petróleo', value: 30 },
                { label: 'Plata', value: 20 },
                { label: 'Cobre', value: 10 }
            ]
        },
        {
            label: 'Liquido',
            value: 25,
            details: [
                { label: 'Depósitos', value: 60 },
                { label: 'Cuentas de Ahorro', value: 40 }
            ]
        }
    ];



    const handleSelect = (index) => {
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };


    const defaultColors = ['#8a2be2', '#daa520', '#dc143c', '#008b8b'];


    const computedColors = useMemo(
        () => data.map((entry, index) => defaultColors[index % defaultColors.length]),
        [data]
    );



    return (
        <div className="flex flex-col lg:flex-row divide-y lg:divide-x lg:divide-y-0 divide-black divide-dotted my-12">
            <div className="w-full lg:w-1/2 py-5 flex flex-col items-center space-y-6 px-6 lg:px-20">
                <h2 className="text-center text-lg font-bold mb-8">Distribución general de los activos</h2>
                <div className="w-2/3 lg:w-1/3 mb-8">
                    <PieChart data={data} onSelect={handleSelect} computedColors={computedColors} />
                </div>
                <div className="pt-12">
                    <DetailsBox data={data} colors={computedColors} />
                </div>
            </div>
            <div className="w-full lg:w-1/2 py-5 flex flex-col items-center space-y-6 px-6 lg:px-20">
                <div className="flex justify-between items-center w-full mb-8">
                    <h2 className="text-lg font-bold">Detalles</h2>
                    <div className="relative">
                        <select
                            className="appearance-none bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-500 text-sm pl-4 pr-8 pb-1"
                            onChange={(e) => handleSelect(e.target.selectedIndex)}
                        >
                            {data.map((item, index) => (
                                <option key={index}>{item.label}</option>
                            ))}
                        </select>
                        <svg
                            className="w-4 h-4 absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                <div className="w-2/3 lg:w-1/3 mb-8">
                    <PieChart data={data[activeIndex].details} computedColors={computedColors} second={true} />
                </div>
                <div className="pt-12">
                    <DetailsBox
                        data={data[activeIndex].details}
                        colors={colorsDetails}
                        withBorder={true}
                        paddingX="px-12"
                        paddingY="py-6"
                    />
                </div>
            </div>
        </div>


    );
};

export default DashboardDistribucion;