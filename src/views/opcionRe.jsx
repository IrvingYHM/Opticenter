import Fot from '../components/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='my-24 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Gestion de citas</p>
        </div>
        <div className='space-y-4 '>
          <div className='flex bg-white h-20 sm:w-80 lg:w-1/2  mx-auto items-center justify-between rounded-md border-4 border-black text-base sm:text-sm lg:text-lg xl:text-xl px-4 font-bold'>Citas agendadas
            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' to='/evento'>Agregar</Link>
          </div>
          <div className='flex bg-white h-20 sm:w-80 lg:w-1/2 items-center justify-between rounded-md mx-auto border-4 border-black px-4 font-bold'>Modificar Citas
          <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' to='/RegistroCorr'>Agregar</Link>

          </div>
          <div className='flex bg-white h-20 sm:w-80 lg:w-1/2 items-center justify-between rounded-md mx-auto border-4 border-black px-4 font-bold'>
            Eliminar Cita
            <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' to='/Contraseña'>Agregar</Link>
          </div>
        </div>
      </div>
      <Fot />
    </div>
  );
}

export default App;