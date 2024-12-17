import React from 'react';
import Button from './Button';

const DejanosCorreo = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16 md:mt-28">
        <hr className="w-[70vw] my-8 border-black" />
      </div>

      <div className="flex flex-col items-center my-28">
        <h3 className="text-5xl font-semibold mb-10 mx-8 md:mx-0 text-center">
          Déjanos tu correo
        </h3>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-20">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="border rounded-full py-3 px-5 border-gray-300 w-[80vw] md:w-[40vw]"
          />
          <Button
            onClick={() => console.log('Correo enviado')}
            text="Enviar"
            paddingX="px-10"
            paddingY="py-3"
            color="bg-[#002bc8]"
            className="w-[80vw] md:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default DejanosCorreo;
