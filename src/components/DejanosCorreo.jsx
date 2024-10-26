import React from 'react';
import Button from './Button'; 

const DejanosCorreo = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-28">
        <hr className="w-[70vw] my-8 border-black" />
      </div>

      <div className="flex flex-col items-center my-28">
        <h3 className="text-5xl font-semibold mb-20">Déjanos tu correo</h3>
        <div className="flex items-center space-x-20">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="border rounded-full py-3 px-5 border-gray-300 w-[40vw]"
          />
          <Button
            onClick={() => console.log('Correo enviado')}
            text="Enviar"
            paddingX="px-10"
            paddingY="py-3"
            color="bg-[#C512C9]"
          />
        </div>
      </div>
    </>
  );
}

export default DejanosCorreo;
