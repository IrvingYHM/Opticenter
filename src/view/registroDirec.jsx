import Fot from '../components/Footer';
import { Link } from 'react-router-dom';

function App() {


    return (
    <>
          <div className='my-28 text-center'>
          <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de direccion del contacto</p>
            <form>
            <div className="mb-4">
              <label htmlFor="cp" className="block text-sm font-medium text-gray-800 -translate-x-24">
                Codigo Postal:
              </label>
              <input
                type="text"
                id="cp"
                name="cp"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Codigo Postal'
              />
            </div>

            <div className="mb-4">
              <label htmlFor="ciudad" className="block text-sm font-medium text-gray-800 -translate-x-28">
                Ciudad:
              </label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Ciudad'
              />
            </div>

            <div className="mb-4">
              <label htmlFor="colonia" className="block text-sm font-medium text-gray-800 -translate-x-28">
                Colonia:
              </label>
              <input
                type="text"
                id="colonia"
                name="colonia"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Colonia'
              />
            </div>

            <div className="mb-4">
              <label htmlFor="calle" className="block text-sm font-medium text-gray-800 -translate-x-28">
                Calle:
              </label>
              <input
                type="text"
                id="calle"
                name="calle"
                required
                max="2004-12-31" 
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='calle'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numeroExterior" className="block text-sm font-medium text-gray-800 -translate-x-20">
                Numero exterior:
              </label>
              <input
                type="text"
                id="numeroExterior"
                name="numeroExterior"
                required
                max="2004-12-31" 
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Numero exterior'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numeroInterior" className="block text-sm font-medium text-gray-800 -translate-x-20">
                Numero interior:
              </label>
              <input
                type="text"
                id="numeroInterior"
                name="numeroInterior"
                required
                max="2004-12-31" 
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Numero interior'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="estadp" className="block text-sm font-medium text-gray-800 -translate-x-28">
                Estado:
              </label>
              <input
                type="text"
                id="estado"
                name="estado"
                required
                max="2004-12-31" 
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Estado'
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
  