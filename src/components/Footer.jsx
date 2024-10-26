// src/components/Footer.jsx
import sfcSandbox from '../assets/images/sfcSandbox.jpg';

function Footer() {
    return (
        <footer className="w-full bg-[#8295B2] py-16">
            <div className="max-w-7xl mx-auto px-0">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-10">
                        <a href="#" className="text-sm text-white mr-4">Sobre nosotros</a>
                        <a href="#" className="text-sm text-white mr-4">Fondos de inversión</a>
                        <a href="#" className="text-sm text-white mr-4">CDTs</a>
                        <a href="#" className="text-sm text-white mr-4">Fondos de pensión</a>
                    </div>
                    <div>
                        <img src={sfcSandbox} alt="SFC Sandbox" className="h-20 mx-auto mb-10" />
                        <p className="text-xs text-white mt-4 items-center justify-between">Este servicio se presta actualmente bajo el amparo de SFC Sandbox</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-sm text-white ml-4">Regulaciones</a>
                        <a href="#" className="text-sm text-white ml-10">Servicio al cliente</a>
                        <a href="#" className="text-sm text-white ml-10">Artículos</a>
                        <a href="#" className="text-sm text-white ml-10">Inversión</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
