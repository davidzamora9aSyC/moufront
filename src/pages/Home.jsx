import Navbar from '../components/Navbar';
import Button from '../components/Button';
import homePersonas from '../assets/images/homePersonas.jpg';
import trescol1 from '../assets/images/trescol1.jpg';
import trescol2 from '../assets/images/trescol2.jpg';
import trescol3 from '../assets/images/trescol3.jpg';
import sfcSandbox from '../assets/images/sfcSandbox.jpg';
import Footer from '../components/Footer';
import fondoInversion from '../assets/images/fondosDeInversion.jpg';
import DejanosCorreo from '../components/DejanosCorreo';
import mouLogo from '../assets/images/mouLogo4.png';
function Home() {
    return (
        <div className="overflow-x-hidden">
            <div className="flex flex-col md:flex-row w-full h-[80vh]">
                <div className="md:w-1/2 h-full">
                    <img
                        src={homePersonas}
                        alt="Home Personas"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="md:w-1/2 h-full flex items-center justify-center bg-white p-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-center text-black mx-5 md:mx-10 mt-5 md:mt-10">
                        Construye tu futuro financiero con <br />
                        <img
                            src={mouLogo}
                            alt="MOU Management Logo"
                            className="inline-block h-auto w-auto max-h-40 max-w-full mt-8 md:mt-10"
                        />
                    </h1>

                </div>
            </div>


            <div className="flex flex-col items-center my-10 md:my-28">
                <Button
                    onClick={() => console.log('Registro iniciado')}
                    text="Registrarme"
                    paddingX="px-20"
                    paddingY="py-4"
                />
            </div>

            <div className="flex flex-col items-center">
                <p className="text-center text-xl md:text-3xl text-black mt-8 mx-8 md:mx-24 md:mb-12">
                    En <span className="font-bold">MOU Management</span> creemos que la libertad económica es alcanzable para todos, y para lograrla, nos enfocamos en tres pilares clave: el ahorro, la inversión y la planificación para la vejez. Puedes acceder a estos tres pilares a través de nuestros servicios.
                </p>
            </div>

            <div className="flex flex-col items-center my-10 md:my-20">
                <hr className="w-[70vw] my-8 border-black" />
            </div>

            <div className="flex flex-col items-center my-0 md:my-16">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 md:mb-40">
                    Servicios
                </h2>
                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 px-6 md:px-16">
                    <div className="text-center md:w-1/3">
                        <h3 className="text-3xl font-bold mb-10 my:mb-20">Inversión inteligente</h3>
                        <p className="text-lg md:text-xl text-gray-700 mx-10 md:mx-20 mb-10 md:mb-0">
                            Ofrecemos acceso a fondos de inversión privados, tanto nacionales como internacionales. Entre los fondos nacionales puedes acceder a los ofrecidos por Skandia. Los fondos internacionales incluyen opciones reconocidas globalmente.
                        </p>
                    </div>
                    <div className="text-center md:w-1/3">
                        <h3 className="text-3xl font-bold  mb-10 my:mb-20">Ahorro</h3>
                        <p className="text-lg md:text-xl text-gray-700  mx-10 md:mx-20 mb-10 md:mb-0">
                            A través de nuestros servicios, puedes acceder a Certificados de Depósito a Término (CDTs), una opción segura y confiable para el crecimiento de tus ahorros. El ahorro es el primer paso hacia la construcción de una base financiera sólida.
                        </p>
                    </div>
                    <div className="text-center md:w-1/3">
                        <h3 className="text-3xl font-bold  mb-10 my:mb-20">Planificación para la Vejez</h3>
                        <p className="text-lg md:text-xl text-gray-700  mx-10 md:mx-20 mb-10 md:mb-0">
                            Facilitamos el acceso a fondos de pensión privados, garantizando que puedas planificar tu retiro con seguridad. Nuestro objetivo es que tengas la tranquilidad financiera necesaria para disfrutar de tu futuro.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-20 md:mt-40 md:mb-28">
                <Button
                    onClick={() => console.log('Registro iniciado')}
                    text="Registrarme"
                    paddingX="px-20"
                    paddingY="py-4"
                    color="bg-[#002bc8]"
                />
            </div>

            <div className="flex flex-col items-center my-20">
                <hr className="w-[70vw] my-8 border-black" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-center my-20 md:my-48">
                Servicios a tu mano
            </h2>

            <div className="flex flex-col items-center space-y-10 md:space-y-0 md:space-x-10 md:flex-row my-10 mx-10 md:mx-20">
                <div className="md:flex-1 flex justify-center items-center">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold mb-10">Olvida las filas</h3>
                        <p className="text-lg mx-8 md:mx-32">Accede a una amplia gama de servicios financieros esenciales desde una única plataforma intuitiva y eficaz, sin trámites complejos ni papeleo innecesario. Nuestros clientes disfrutan de la facilidad para administrar sus inversiones, ahorros y planes de pensión con solo unos pocos clics, eliminando la necesidad de hacer largas filas en los bancos o enfrentarse a procesos tediosos y burocráticos.</p>
                    </div>
                </div>
                <div className="md:flex-1 flex justify-center">
                    <img src={trescol1} alt="Olvida las filas" className="rounded-lg max-w-xs md:max-w-lg" />
                </div>
            </div>

            <div className="flex flex-col items-center space-y-10 md:space-y-0 md:space-x-10 md:flex-row-reverse my-20 md:my-40 mx-10 md:mx-20">
                <div className="md:flex-1 flex justify-center items-center">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold mb-10">Gestiona tu portafolio</h3>
                        <p className="text-lg mx-8 md:mx-32">Explora las características y rentabilidades históricas de diversos fondos de inversión y selecciona el que mejor se ajusta a tus necesidades. Permite que MOU te asesore y recomiende la opción que más se alinea con tu perfil de inversión, optimizando tus oportunidades de crecimiento financiero.</p>
                    </div>
                </div>
                <div className="md:flex-1 flex justify-center">
                    <img src={trescol2} alt="Gestiona tu portafolio" className="rounded-lg max-w-xs md:max-w-lg" />
                </div>
            </div>

            <div className="flex flex-col items-center space-y-10 md:space-y-0 md:space-x-10 md:flex-row my-10 mx-10 md:mx-20">
                <div className="md:flex-1 flex justify-center items-center">
                    <div className="text-center">
                        <h3 className="text-4xl font-bold mb-10">Adquiere CDTs</h3>
                        <p className="text-lg mx-8 md:mx-32">MOU te ayudará a identificar el producto financiero que mejor se adapta a tu perfil y necesidades. Gestiona tus CDTs de manera sencilla a través de la aplicación, donde podrás consultar plazos y rentabilidades esperadas, facilitando así tu planeación financiera a largo plazo.</p>
                    </div>
                </div>
                <div className="md:flex-1 flex justify-center">
                    <img src={trescol3} alt="Adquiere CDTs" className="rounded-lg max-w-xs md:max-w-lg" />
                </div>
            </div>

            <DejanosCorreo />

        </div>
    );
}

export default Home;
