import React from 'react';
import Lista from '../Lista';


const DashboardMovimientos = () => {
    const titles = ['Tipo', 'Tamaño de Depósito', 'Medio'];
    const data = [
        ['Deposito', '5000 USD', 'PSE'],
        ['Retiro', '5000 USD', 'Stripe'],
        ['Deposito', '7000 USD', 'PayPal'],
        ['Retiro', '3000 USD', 'Bank Transfer'],
    ];
    const colors = ['#4CAF50', 'black', 'black']; // Verde para "Deposito", negro para los demás

    // Cambia el color de "Retiro" a rojo dinámicamente
    const formattedData = data.map(row => {
        const colorRow = [...colors];
        if (row[0] === 'Retiro') colorRow[0] = 'red';
        return { row, colorRow };
    });

    return (
        <div className="px-8 py-4">
            <h2 className="text-xl font-bold mb-4">Movimientos</h2>
            <Lista
                titles={['Tipo', 'Tamaño de Depósito', 'Medio']}
                data={data}
                colors={['black', 'black', 'black']}
                hideColumnDividers={true}
                dynamicFirstColumnColors={true} 
            />

        </div>
    );
};

export default DashboardMovimientos;
