import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import mouLogo from '../assets/images/mouLogo4.png';
import Button from './Button';

function Navbar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleRegister = async () => {
        await loginWithRedirect({ redirectUri: window.location.origin + "/logged-home" });
    };

    const handleLogin = async () => {
        await loginWithRedirect();
    };

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="flex justify-between items-center bg-white shadow-lg p-4 z-50 relative">

        
            <div className="md:hidden flex items-center w-full">
              
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

    
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link to="/">
                        <img src={mouLogo} alt="MOU Logo" className="h-12" />
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex items-center justify-between w-full">
                
                <div className="flex items-center space-x-6">
                    <Link to="/">
                        <img src={mouLogo} alt="MOU Logo" className="h-12" />
                    </Link>

                    <div className="flex items-center space-x-4">
                        <Link to="/about-fondo-pension" className="text-gray-800 font-bold">Fondos de pensión</Link>
                        <Link to="/about-fondo-inversion" className="text-gray-800 font-bold">Fondos de inversión</Link>
                        <Link to="/about-CDT" className="text-gray-800 font-bold">CDTs</Link>
                        <Link to="/about-fondo-pension-obligatoria" className="text-gray-800 font-bold">Mi cuenta Colpensiones</Link>
                        <Link to="/" className="text-gray-800 font-bold">Sobre nosotros</Link>
                        <Link to="/logged-home" className="text-gray-800 font-bold">Mis inversiones</Link>
                    </div>
                </div>

           
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <Button onClick={handleLogout} text="Cerrar sesión" color="bg-[#002bc8]" />
                    ) : (
                        <>
                            <Button onClick={handleRegister} text="Registrarme" />
                            <span onClick={handleLogin} className="text-gray-800 hover:text-gray-600 font-bold cursor-pointer">
                                Iniciar sesión
                            </span>
                        </>
                    )}
                </div>
            </div>


            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4">
                    <button onClick={toggleMenu} className="text-gray-800 mb-6">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="space-y-4">
                        <li><Link to="/about-fondo-pension" className="text-gray-800 font-bold" onClick={toggleMenu}>Fondos de pensión</Link></li>
                        <li><Link to="/about-fondo-inversion" className="text-gray-800 font-bold" onClick={toggleMenu}>Fondos de inversión</Link></li>
                        <li><Link to="/about-CDT" className="text-gray-800 font-bold" onClick={toggleMenu}>CDTs</Link></li>
                        <li><Link to="/about-fondo-pension-obligatoria" className="text-gray-800 font-bold" onClick={toggleMenu}>Mi cuenta Colpensiones</Link></li>
                        <li><Link to="/" className="text-gray-800 font-bold" onClick={toggleMenu}>Sobre nosotros</Link></li>
                        <li><Link to="/logged-home" className="text-gray-800 font-bold" onClick={toggleMenu}>Mis inversiones</Link></li>
                    </ul>
                    <div className="mt-6">
                        {isAuthenticated ? (
                            <Button onClick={() => { handleLogout(); toggleMenu(); }} text="Cerrar sesión" color="bg-[#002bc8]" />
                        ) : (
                            <>
                                <Button onClick={() => { handleRegister(); toggleMenu(); }} text="Registrarme" />
                                <span onClick={() => { handleLogin(); toggleMenu(); }} className="block mt-4 text-gray-800 font-bold cursor-pointer">
                                    Iniciar sesión
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
