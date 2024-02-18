import Footer from '../components/Footer';
import { useState } from 'react';

function Recuperar() {
  const [recoveryMethod, setRecoveryMethod] = useState(null);
  const [answer, setAnswer] = useState("");

  const handleRecoveryMethod = (method) => {
    setRecoveryMethod(method);
    // Aquí podrías enviar un código por correo si se selecciona el método 'code'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar la respuesta y verificar si es correcta
    console.log("Respuesta:", answer);
  };

  return (
    <>
      <div className='my-28 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Recuperación de contraseña</p>
            {recoveryMethod === null && (
              <>
                <div className="mb-4">
                  <button
                    onClick={() => handleRecoveryMethod('question')}
                    className='bg-blue-700 border-2 border-black hover:bg-blue-600 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
                  >
                    Recuperar mediante pregunta secreta
                  </button>
                </div>
                <div className="mb-4">
                  <button
                    onClick={() => handleRecoveryMethod('code')}
                    className='bg-blue-700 border-2 border-black hover:bg-blue-600 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
                  >
                    Recuperar mediante código
                  </button>
                </div>
              </>
            )}
            {recoveryMethod === 'question' && (
              <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="answer" className="block text-sm font-medium text-gray-800">
                    Respuesta a la pregunta secreta:
                  </label>
                  <input
                    type="text"
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="mt-1 p-2 border rounded-md w-72"
                    placeholder="Respuesta"
                  />
                  <button
                    className='bg-blue-700 border-2 border-black hover:bg-blue-600 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center mt-4'
                    type="submit"
                  >
                    Enviar respuesta
                  </button>
                </form>
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
