import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Lista = ({ titles, data, colors, hideColumnDividers, dynamicFirstColumnColors }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleRowClick = (fondoName) => {
        const base = location.pathname;
        navigate(`${base}/${encodeURIComponent(fondoName)}`);
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', border: 'none' }}>
                <thead>
                    <tr>
                        {titles.map((title, index) => (
                            <th
                                key={index}
                                style={{
                                    borderBottom: '1px solid black',
                                    borderRight: hideColumnDividers ? 'none' : index === titles.length - 1 ? 'none' : '1px solid black',
                                    padding: '8px',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    fontSize: '1.2rem',
                                }}
                            >
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {rowData.map((cellData, colIndex) => (
                                <td
                                    key={colIndex}
                                    style={{
                                        paddingTop: '24px',
                                        borderRight: hideColumnDividers ? 'none' : colIndex === rowData.length - 1 ? 'none' : '1px solid black',
                                        color:
                                            colIndex === 0 && dynamicFirstColumnColors
                                                ? rowData[0] === 'Deposito'
                                                    ? 'green'
                                                    : rowData[0] === 'Retiro'
                                                        ? 'red'
                                                        : colors[colIndex] || 'black'
                                                : colors[colIndex] || 'black',
                                        textAlign: colIndex === 0 ? 'left' : 'center',
                                        cursor: colIndex === 0 ? 'pointer' : 'default', // Solo la primera columna es clickeable
                                    }}
                                    onClick={colIndex === 0 ? () => handleRowClick(cellData) : undefined}
                                >
                                    {cellData}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lista;
