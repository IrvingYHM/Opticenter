import Fot from '../components/Footer';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {

    const fechaNacimiento = new Date(data.fechaNacimiento);
    const fechaActual = new Date();

    // Comparar años
    const diferenciaAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (diferenciaAnios < 18) {
      alert("Debes tener al menos 18 años para registrarte.");
      return; // Detener la función aquí si hay un error
    }
    console.log(data);
    // Aquí puedes manejar la lógica de envío del formulario
  };


  return (
    <>
      <div className='my-28 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de informacion personal</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-800 -translate-x-32">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  {...register("nombre", 
                  { 
                    required:{
                      value:true,
                      message:"El campo es requerido"
                  },
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres"
                   },
                   pattern:{
                    value: /^[A-Za-z]+$/,
                    message: "Solo se permiten letras de la A a la Z"
                }
                  }
                  
                  )}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                />

              </div>
              {errors.nombre && <span className='text-red-500 text-sm mt-1'>{errors.nombre.message}</span>}

              <div className="mb-4">
                <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-800 -translate-x-24">
                  Apellido Paterno:
                </label>
                <input
                  type="text"
                  id="apellidoPaterno"
                  name="apellidoPaterno"
                  required
                  {...register("apellidoPaterno", {                     required:{
                    value:true,
                    message:"El campo es requerido"
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres"
                 },
                 pattern:{
                  value: /^[A-Za-z]+$/,
                  message: "Solo se permiten letras de la A a la Z"
              } })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                />
              </div>
              {errors.apellidoPaterno && <span className='text-red-500 text-sm mt-1'>{errors.apellidoPaterno.message}</span>}

              <div className="mb-4">
                <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-800 -translate-x-24">
                  Apellido Materno:
                </label>
                <input
                  type="text"
                  id="apellidoMaterno"
                  name="apellidoMaterno"
                  required
                  {...register("apellidoMaterno", {                     required:{
                    value:true,
                    message:"El campo es requerido"
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres"
                 },
                 pattern:{
                  value: /^[A-Za-z]+$/,
                  message: "Solo se permiten letras de la A a la Z"
              } })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                />
              </div>
              {errors.apellidoMaterno && <span className='text-red-500 text-sm mt-1'>{errors.apellidoMaterno.message}</span>}

              <div className="mb-4">
                <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-800 -translate-x-20">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  id="fechaNacimiento"
                  name="fechaNacimiento"
                  required
                  {...register("fechaNacimiento", { required: "El campo es requerido" })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                />
              </div>
              {errors.fechaNacimiento && <span className='text-red-500 text-sm mt-1'>{errors.fechaNacimiento.message}</span>}

              <button
              style={{ backgroundColor: 'green', color: 'white' }}
              className='bg-blue-700 border-2 border-black hover:bg-green-400 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
               type='submit'>
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Fot />
    </>
  );
}

export default App;
