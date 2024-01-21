import Fot from '../components/Footer';
import { Link } from 'react-router-dom';

function App() {




    return (
    <>
          <div className='my-28 text-center'>
          <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de correo electronico del contacto</p>

            <form>
            <div className="mb-4">
              <label htmlFor="correoElectronico" className="block text-sm font-medium text-gray-800 -translate-x-20">
                Correo electronico:
              </label>
              <input
                type="email"
                id="correoElectronico"
                name="correoElectronico"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Correo Electronico'
              />
            </div>

            <div className="mb-4">
              <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-800 -translate-x-20">
                Numero de telefono:
              </label>
              <input
                type="tel"
                id="numeroTelefono"
                name="numeroTelefono"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Numero de telefono'
              />
            </div>

           
          </form>

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
  