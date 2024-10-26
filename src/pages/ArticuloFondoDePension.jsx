import React from 'react';
import fondoInversion from '../assets/images/fondosDeInversion.jpg';
import Button from '../components/Button';
import DejanosCorreo from '../components/DejanosCorreo';

const ArticuloFondoDePension = () => {
    return (
        <div className="flex flex-col items-center p-4">
            <img src={fondoInversion} alt="Fondos de Inversión" className="mt-4 mb-20 mx-auto" />
            <div className="text-left mx-40">
                <h1 className="font-bold text-2xl mb-2">Fondos de pensión</h1>
                <p className="font-semibold">Funcionamiento y detalles para el usuario</p>
                <p className='mt-5 mb-16'> En Colombia, los fondos de pensión son un mecanismo esencial para garantizar un ingreso en la vejez, permitiendo a los trabajadores ahorrar a lo largo de su vida laboral. Existen dos tipos principales de fondos de pensión: los obligatorios y los voluntarios, cada uno con reglas específicas sobre afiliación y funcionamiento. Tipos de Fondos de Pensión en Colombia Fondos de Pensión Obligatorios Los fondos de pensión obligatorios son aquellos en los que todos los trabajadores deben estar afiliados. Existen dos regímenes principales: Régimen de Prima Media (RPM): Administrado por Colpensiones, este régimen se basa en un fondo común en el que las contribuciones de los trabajadores activos se utilizan para pagar las pensiones de los jubilados actuales. La pensión que una persona recibe está determinada por su salario promedio y los años cotizados. Régimen de Ahorro Individual con Solidaridad (RAIS): En este régimen, administrado por fondos privados, cada trabajador tiene una cuenta individual donde se acumulan sus aportes y los rendimientos generados. La pensión dependerá del monto acumulado, los rendimientos obtenidos y la esperanza de vida al momento de jubilarse. </p>
                <div className='flex justify-center'>
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="Regisrarme"
                        paddingX="px-40"
                        paddingY="py-3"
                        color="bg-[#C512C9]"
                    />
                </div>


                <h2 className="font-bold text-lg mt-20 mb-2">¿Cuántos Fondos de Pensión Obligatorios Puede Tener una Persona?</h2>
                <p>Una persona solo puede estar afiliada a un fondo de pensión obligatorio a la vez. Esto significa que, ya sea que elija el Régimen de Prima Media (Colpensiones) o un fondo privado en el Régimen de Ahorro Individual, debe optar por uno solo. No es posible estar afiliado simultáneamente a más de un fondo de pensión obligatorio. No obstante, es posible cambiar de fondo de pensión cada cinco años o cuando faltan menos de diez años para alcanzar la edad de jubilación (57 años para las mujeres y 62 años para los hombres). Fondos de Pensión Voluntarios A diferencia de los fondos obligatorios, los fondos de pensión voluntarios están diseñados para aquellos que desean ahorrar más allá de los aportes obligatorios, con el fin de mejorar sus condiciones de jubilación o alcanzar otros objetivos financieros a largo plazo. Los fondos voluntarios ofrecen ventajas como mejores rendimientos potenciales y beneficios tributarios.</p>
                <h2 className="font-bold text-lg mt-20 mb-2">¿Cuántos Fondos de Pensión Voluntarios Puede Tener una Persona?</h2>
                <p className='mt-5 mb-20'>En el caso de los fondos de pensión voluntarios, puedes tener tantos como desees. No existe una limitación en cuanto a la cantidad de fondos voluntarios a los que puedes afiliarte. Esto permite a las personas diversificar su inversión, aprovechando las diferentes estrategias y productos financieros que ofrecen los fondos. Beneficios de Afiliarse a un Fondo de Pensión Ahorro para la Vejez: Ya sea en un fondo obligatorio o voluntario, los fondos de pensión permiten a los trabajadores ahorrar y garantizar un ingreso en su jubilación. Rendimientos: En los fondos de ahorro individual y en los fondos voluntarios, los aportes generan rendimientos al ser invertidos en diferentes activos financieros, lo que aumenta el capital acumulado a lo largo del tiempo. Beneficios Tributarios: Los aportes a los fondos de pensión, tanto obligatorios como voluntarios, pueden ser deducibles de impuestos, lo que ofrece un incentivo fiscal adicional para ahorrar. Crea una Cuenta en un Fondo de Pensión con MOU Management Si aún no tienes un fondo de pensión voluntario o estás considerando mejorar tu estrategia de ahorro para la jubilación, te invitamos a conocer MOU Management, una plataforma intermediaria de servicios financieros. A través de nuestra plataforma, puedes comparar diferentes fondos de pensión voluntarios y elegir el que mejor se adapte a tus necesidades. MOU Management te permite gestionar tus inversiones de manera sencilla y eficiente, con acceso a herramientas que facilitan el control de tu futuro financiero. Además, te asesoramos para que puedas tomar decisiones informadas sobre tu ahorro para la jubilación. No esperes más para asegurar tu bienestar financiero a largo plazo. </p>
                <p className='my-10'>
                    ¡Crea hoy mismo una cuenta en un fondo de pensión voluntario a través de MOU Management y empieza a construir tu futuro con tranquilidad! Recuerda, tu jubilación depende de las decisiones que tomes hoy. ¡Hazlo con MOU Management y toma el control de tu futuro!</p>
                <div className='flex justify-center mt-20'>
                    <Button
                        onClick={() => console.log('Registro iniciado')}
                        text="Regisrarme"
                        paddingX="px-40"
                        paddingY="py-3"
                        color="bg-[#C512C9]"
                    />
                </div>
            </div>
            <DejanosCorreo  />
        </div>
    );
}

export default ArticuloFondoDePension;
