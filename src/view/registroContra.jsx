import Fot from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const handleQuestionChange = (event) => {
    setSelectedQuestion(event.target.value);
    };
    const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
    };






    return (
    <>
          <div className='my-28 text-center'>
          <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de contraseña del contacto</p>

            <form>
            <div className="mb-4">
              <label htmlFor="contraseña" className="block text-sm font-medium text-gray-800 -translate-x-28">
                Contraseña:
              </label>

              <input
                type="password"
                id="contraseña"
                name="contraseña"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Contraseña'
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="confirmarContraseña" className="block text-sm font-medium text-gray-800 -translate-x-9">
                Ingresa nuevamente tu contraseña:
              </label>
              <input
                type= 'password'
                id="confirmarContraseña"
                name="confirmarContraseña"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Confirma tu contraseña'
              />
            </div>
            <div>
            <label htmlFor="question" className="block text-sm font-medium text-gray-800 mb-2 -translate-x-9">Selecciona una pregunta secreta:</label>
            <select id="question" value={selectedQuestion} onChange={handleQuestionChange} className='border border-gray-300 py-4 rounded-lg focus:border-indigo-500 outline-none focus:right-1 focus:ring-indigo-500 w-72 select-selected text-sm '>
            <option value="" className=''>Selecciona uno</option>
            <option value="infancia">¿Cuál es el nombre de tu mejor amigo?</option>
            <option value="mascota">¿Cuál es el nombre de tu mascota?</option>
            <option value="comida">¿Cuál es tu comida favorita?</option>
            </select>
        </div>
        {selectedQuestion !== '' && (
            <div>
            <label htmlFor="answer" className="block text-sm font-medium text-gray-800 -translate-x-28">Respuesta:</label>
            <input
                type="text"
                id="answer"
                value={answer}
                onChange={handleAnswerChange}
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder="Ingresa tu respuesta"
            />
            </div>
        )}
          </form>
            <br/>
          <button className='bg-green-700 border-2 border-black hover:bg-green-400 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
         /*  type='submit' */>
          <Link to=''>Guardar</Link>
          </button>
          </div>
      </div>
  </div>
    <Fot />

    </>

    )
  }
  
  export default App
  