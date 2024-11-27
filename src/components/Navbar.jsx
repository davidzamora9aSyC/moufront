// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import mouLogo from '../assets/images/mouLogo4.png';
import Button from './Button';

function Navbar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleRegister = async () => {
        await loginWithRedirect({
            redirectUri: window.location.origin + "/logged-home"
        });
    };

    const handleLogin = async () => {
        await loginWithRedirect();
    };

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    return (
        <nav className="flex justify-between items-center bg-white shadow-lg p-4 pr-16 z-50">
            <div className="flex items-center">
                <Link to="/">
                    <img src={mouLogo} alt="MOU Logo" className="h-12 mr-4 ml-5" />
                </Link>
                <ul className="flex ml-10 space-x-6">
                    <li>
                        <Link to="/about-fondo-pension" className="text-gray-800 hover:text-gray-600 font-bold">
                            Fondos de pensión
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-fondo-inversion" className="text-gray-800 hover:text-gray-600 font-bold">
                            Fondos de inversión
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-CDT" className="text-gray-800 hover:text-gray-600 font-bold">
                            CDTs
                        </Link>
                    </li>
                    <li>
                        <Link to="/about-fondo-pension-obligatoria" className="text-gray-800 hover:text-gray-600 font-bold">
                            Mi cuenta Colpensiones
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-gray-600 font-bold">
                            Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <Link to="/logged-home" className="text-gray-800 hover:text-gray-600 font-bold">
                            Mis inversiones
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                {isAuthenticated ? (
                    <Button onClick={handleLogout} text="Cerrar sesión" color= "bg-[#c954a5]" />
                ) : (
                    <>
                        <Button onClick={handleRegister} text="Registrarme"  />
                        <span 
                            onClick={handleLogin} 
                            className="text-gray-800 hover:text-gray-600 font-bold cursor-pointer"
                        >
                            Iniciar sesión
                        </span>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
