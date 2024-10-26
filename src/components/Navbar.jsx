// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import mouLogo from '../assets/images/mouLogo.jpg';
import Button from './Button';

function Navbar() {
    const handleRegister = () => {
        console.log('Registro iniciado');
    };

    return (
        <nav className="flex justify-between items-center bg-white shadow p-4 mr-5">
            <div className="flex items-center">
                <Link to="/">
                    <img src={mouLogo} alt="MOU Logo" className="h-10 mr-4 ml-5" />
                </Link>
                <ul className="flex ml-10 space-x-6">
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-gray-600 font-bold">
                            Fondos de pensión
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-fondo-inversion" className="text-gray-800 hover:text-gray-600 font-bold">
                            Fondos de inversión
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-gray-600 font-bold">
                            CDTs
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-gray-600 font-bold">
                            Mi cuenta Colpensiones
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-gray-600 font-bold">
                            Sobre nosotros
                        </Link>
                    </li>
                </ul>
            </div>
            <Button onClick={handleRegister} text="Registrarme" />
        </nav>
    );
}

export default Navbar;
