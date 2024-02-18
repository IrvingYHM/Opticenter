import Footer from '../components/Footer';
import { useState } from 'react';

function Recuperar() {
  const [recoveryMethod, setRecoveryMethod] = useState(null);

  const handleRecoveryMethod = (method) => {
    setRecoveryMethod(method);
    // Aquí puedes realizar acciones adicionales si se elige un método de recuperación
  };

  return (
    <>
      <div className='my-28 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Recuperación de contraseña</p>
            <div className="mb-4">
              <button
                onClick={() => handleRecoveryMethod('question')}
                className='bg-blue-700 border-2 border-black hover:bg-blue-600 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
              >
                Mediante pregunta secreta
              </button>
            </div>
            <div className="mb-4">
              <button
                onClick={() => handleRecoveryMethod('code')}
                className='bg-blue-700 border-2 border-black hover:bg-blue-600 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
              >
                Mediante código
              </button>
            </div>
            {recoveryMethod === 'question' && (
              <div>
                {/* Aquí puedes mostrar el formulario para recuperar mediante pregunta secreta */}
                <p>Formulario para recuperar mediante pregunta secreta</p>
              </div>
            )}
            {recoveryMethod === 'code' && (
              <div>
                {/* Aquí puedes mostrar el formulario para recuperar mediante código */}
                <p>Formulario para recuperar mediante código</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Recuperar;
