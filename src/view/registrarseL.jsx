import Fot from '../components/Footer';


function App() {




    return (
    <>
          <div className='my-28 text-center'>
            <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de registro</p>

            <form >
          <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-800">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="mt-1 p-2 border rounded-md w-72 text-center"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-800">
            Apellido Paterno:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="mt-1 p-2 border rounded-md w-72 text-center"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-800">
            Apellido Materno:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="mt-1 p-2 border rounded-md w-72 text-center"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-800">
            
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="mt-1 p-2 border rounded-md w-72 text-center"
          />
        </div>



        </form>

          </div>
          </div>
    <Fot />

    </>

    )
  }
  
  export default App
  