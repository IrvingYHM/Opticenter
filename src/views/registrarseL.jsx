import Fot from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const validateName = (value) => /^[A-Za-z\s]+$/.test(value) || value === '';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [state, setState] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
  });

  const handleChangeInput = (evento) => {
    const { name, value } = evento.target;

    if ((name === 'nombre' || name === 'apellidoPaterno' || name === 'apellidoMaterno') && !validateName(value)) {
      console.log('es numero');
      return;
    }

    console.log(name, value);
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSubmit = (data) => {
    const fechaNacimiento = new Date(data.fechaNacimiento);
    const fechaActual = new Date();
    const diferenciaAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (diferenciaAnios < 18) {
      alert("Debes tener al menos 18 años para registrarte.");
      return;
    }

    console.log(data);
    // Aquí puedes manejar la lógica de envío del formulario
  };

  return (
    <>
      <div className='my-28 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de información personal</p>

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
                  placeholder='Nombre'
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
                    value: /^[A-Za-z\s]+$/,
                    message: "Solo se permiten letras de la A a la Z"
                }
                  }
                  
                  )}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  onChange={handleChangeInput}
                  value={state.nombre}
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
                  placeholder='Apellido Paterno'
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
                  onChange={handleChangeInput}
                  value={state.apellidoPaterno}
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
                  placeholder='Apellido Materno'
                  required
                  {...register("apellidoMaterno", {                     
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
              } })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  onChange={handleChangeInput}
                  value={state.apellidoMaterno}
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
