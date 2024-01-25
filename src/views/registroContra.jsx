import Fot from '../components/Footer';
import { useForm, } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm(); // Agrega 'watch' a la desestructuración

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar la lógica de envío del formulario
  };

  const passwordValidation = (value) => {
    // Agrega tus propias validaciones para la contraseña
    const minLength = 6; // Mínimo 6 caracteres
    if (value.length < minLength) {
      return `La contraseña debe tener al menos ${minLength} caracteres`;
    }
    // Puedes agregar más validaciones según tus necesidades
    return true;
  };

  const selectedQuestion = watch("question"); // Obtener el valor seleccionado de la pregunta

  return (
    <>
      <div className='my-28 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de contraseña del contacto</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="contraseña" className="block text-sm font-medium text-gray-800 -translate-x-28">
                  Contraseña:
                </label>

                <input
                  type="password"
                  id="contraseña"
                  name="contraseña"
                  required
                  {...register("contraseña", {
                    validate: passwordValidation,
                  })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder='Contraseña'
                />
              </div>
              {errors.contraseña && <span className='text-red-500 text-sm mt-1'>{errors.contraseña.message}</span>}

              <div className="mb-4">
                <label htmlFor="confirmarContraseña" className="block text-sm font-medium text-gray-800 -translate-x-9">
                  Ingresa nuevamente tu contraseña:
                </label>
                <input
                  type="password"
                  id="confirmarContraseña"
                  name="confirmarContraseña"
                  required
                  {...register("confirmarContraseña", {
                    validate: (value) => value === watch('contraseña') || "Las contraseñas no coinciden",
                  })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder='Confirma tu contraseña'
                />
              </div>
              {errors.confirmarContraseña && <span className='text-red-500 text-sm mt-1'>{errors.confirmarContraseña.message}</span>}

              {/* Pregunta secreta y respuesta */}
              <div className="mb-4">
                <label htmlFor="question" className="block text-sm font-medium text-gray-800 mb-2 -translate-x-9">
                  Selecciona una pregunta secreta:
                </label>
                <select id="question" {...register("question")} className='border border-gray-300 py-4 rounded-lg focus:border-indigo-500 outline-none focus:right-1 focus:ring-indigo-500 w-72 select-selected text-sm '>
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
                    {...register("answer")}
                    className="mt-1 p-2 border rounded-md w-72 text-center"
                    placeholder="Ingresa tu respuesta"
                  />
                </div>
              )}

              {/* Resto del formulario... */}
              <div>
                {/* Agrega aquí los campos adicionales de tu formulario */}
              </div>

              <br/>

              <button
                style={{ backgroundColor: 'green', color: 'white' }}
                className='bg-blue-700 border-2 border-black hover:bg-green-400 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
                type='submit'
              >
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
