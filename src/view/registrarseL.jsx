import Fot from '../components/Footer';


function App() {




    return (
    <>
          <div className='my-28 text-center'>
          <div className='container ml-auto mr-auto flex items-center justify-center'>
            <div className='w-full md:w-1/2'>
            <form className='bg-white px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <div className='grid grid-flow-row sm:grid-flow-col gap-3'>
                <div className='sm:col-span-4 justify-center'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nya'>Nombre y apellidos</label>
                <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>

              </div>
            </div>


            </form>
            </div>

          </div>
          </div>
    <Fot />

    </>

    )
  }
  
  export default App
  