import React, { useState } from 'react';
import PieChart from './PieChart';
import DetailsBox from './Details';

const Dashboard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        { label: 'Acciones', value: 50, color: '#8a2be2' },
        { label: 'Bonos', value: 10, color: '#daa520' },
        { label: 'Commodities', value: 15, color: '#dc143c' },
        { label: 'Liquido', value: 25, color: '#008b8b' }
    ];

    const handleSelect = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="flex divide-x divide-gray-300 my-12">
            <div className="w-1/2 py-5 flex flex-col items-center space-y-6 px-20">
                <h2 className="text-center text-lg font-bold mb-8">Distribución general de los activos</h2>
                <div className="w-1/3 mb-8"> 
                    <PieChart data={data} onSelect={handleSelect} />
                </div>
                <div className='pt-12'>
                    <DetailsBox data={data} />
                </div>

            </div>
            <div className="w-1/2 py-5 flex flex-col items-center space-y-6 px-20">
                <div className="flex justify-between items-center w-full mb-8">
                    <h2 className="text-lg font-bold">Detalles</h2>
                    <select className="border border-gray-300 rounded p-2 text-sm">
                        <option>Acciones</option>
                        <option>Bonos</option>
                        <option>Commodities</option>
                        <option>Liquido</option>
                    </select>
                </div>
                <div className="w-1/3 mb-8"> 
                    <PieChart data={[data[activeIndex]]} />
                </div>
                <div className='pt-12'>
                    <DetailsBox data={[data[activeIndex]]} />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
