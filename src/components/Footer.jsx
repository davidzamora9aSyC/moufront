import sfcSandbox from '../assets/images/sfcSandbox.jpg';

function Footer() {
    return (
        <footer className="w-full bg-[#8295B2] py-16 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-6 md:mb-0">
                        <a href="#" className="text-sm text-white">Sobre nosotros</a>
                        <a href="#" className="text-sm text-white">Fondos de inversión</a>
                        <a href="#" className="text-sm text-white">CDTs</a>
                        <a href="#" className="text-sm text-white">Fondos de pensión</a>
                    </div>

                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <img 
                            src={sfcSandbox} 
                            alt="SFC Sandbox" 
                            className="h-20 mx-auto mb-4"
                        />
                        <p className="text-xs text-white">
                            Este servicio se presta actualmente bajo el amparo de SFC Sandbox
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-end space-x-4">
                        <a href="#" className="text-sm text-white">Regulaciones</a>
                        <a href="#" className="text-sm text-white">Servicio al cliente</a>
                        <a href="#" className="text-sm text-white">Artículos</a>
                        <a href="#" className="text-sm text-white">Inversión</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
