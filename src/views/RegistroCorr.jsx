import Fot from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [setGuardado] = useState(false);


  // Función para validar que solo se ingresen números
  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value;
    const onlyNumbers = inputValue.replace(/[^0-9]/g, ''); // Eliminar cualquier caracter no numérico

    // Actualizar el valor del campo de teléfono con solo números
    event.target.value = onlyNumbers;
  };

  const onSubmit = (data) => {
    // Verificar si hay errores en los campos
    if (Object.keys(errors).length === 0) {
      setGuardado(true)
      window.alert('Datos guardados', data);
    } else {
      // Hay errores, no hacer nada o puedes mostrar mensajes de error adicionales si lo deseas
    }
  };

  return (
    <>
      <div className='my-28 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de correo electrónico del contacto</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="correoElectronico" className="block text-sm font-medium text-gray-800 -translate-x-20">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="correoElectronico"
                  name="correoElectronico"
                  required
                  {...register("correoElectronico", 
                    { 
                      required: {
                        value: true,
                        message: "El campo es requerido"
                      },
                      pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/,
                        message: "El formato de correo electrónico no es válido"
                      }
                    }
                  )}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder='Correo Electrónico'
                />
              </div>
              {errors.correoElectronico && <span className='text-red-500 text-sm mt-1'>{errors.correoElectronico.message}</span>}

              <div className="mb-4">
                <label htmlFor="numeroTelefono" className="block text-sm font-medium text-gray-800 -translate-x-20">
                  Número de teléfono:
                </label>
                <input
                  type="tel"
                  id="numeroTelefono"
                  name="numeroTelefono"
                  required
                  {...register("numeroTelefono", 
                    { 
                      required: {
                        value: true,
                        message: "El campo es requerido"
                      },
                      minLength: {
                        value: 10,
                        message: "El número de teléfono debe tener al menos 10 dígitos"
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Solo se permiten números"
                      }
                    }
                  )}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  maxLength={10}  // Establecer la longitud máxima
                  placeholder='Número de teléfono'
                  onChange={handlePhoneNumberChange}  // Agregar el evento onChange para validar y actualizar
                />
              </div>
              {errors.numeroTelefono && <span className='text-red-500 text-sm mt-1'>{errors.numeroTelefono.message}</span>}

              <button
              style={{ backgroundColor: 'green', color: 'white' }}
              className='bg-green-700 border-2 border-black hover:bg-green-400 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center' type='submit'
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
