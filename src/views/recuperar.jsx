/* import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';

function Recuperar() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <>
      <div className='my-28 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Recuperación de contraseña</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="correoRe" className="block text-sm font-medium text-gray-800 -translate-x-12">
                  Ingrese su correo electrónico:
                </label>
                <input
                  type="text"
                  id="correoRe"
                  {...register("correoRe", { required: true })}
                  className="mt-1 p-2 border rounded-md w-72 "
                  placeholder='Correo electrónico'
                />
                {errors.correoRe && <span className="text-red-500 text-sm mt-1">Este campo es requerido</span>}
              </div>
              <button
                style={{ backgroundColor: 'green', color: 'white' }}
                className='bg-blue-700 border-2 border-black hover:bg-green-400 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
                type="submit" // Cambia el tipo a "submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Recuperar;
 */