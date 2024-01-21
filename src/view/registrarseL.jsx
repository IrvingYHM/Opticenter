import Fot from '../components/Footer';
import { Link } from 'react-router-dom';

function App() {




    return (
    <>
          <div className='my-28 text-center'>
          <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de informacion personal</p>

            <form>
{/*             <div className="mb-4">
              <label htmlFor="id" className="block text-sm font-medium text-gray-800 -translate-x-36">
                Id:
              </label>
              <input
                type="text"
                id="id"
                name="id"
                placeholder="Id"
                className="mt-1 p-2 border rounded-md w-72 text-center"
              />
            </div> */}

            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-800 -translate-x-32">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-800 -translate-x-24">
                Apellido Paterno:
              </label>
              <input
                type="text"
                id="apellidoPaterno"
                name="apellidoPaterno"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-800 -translate-x-24">
                Apellido Materno:
              </label>
              <input
                type="text"
                id="apellidoMaterno"
                name="apellidoMaterno"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-800 -translate-x-20">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                required
                max="2004-12-31" 
                className="mt-1 p-2 border rounded-md w-72 text-center"
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
  