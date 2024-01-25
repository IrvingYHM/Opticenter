import Fot from '../components/Footer';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';



function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();



    // Función para validar que solo se ingresen números
    const handlePhoneNumberChange = (event) => {
      const inputValue = event.target.value;
      const onlyNumbers = inputValue.replace(/[^0-9]/g, ''); // Eliminar cualquier caracter no numérico
  
      // Actualizar el valor del campo de teléfono con solo números
      event.target.value = onlyNumbers;
    };
    const onSubmit = (data) => {
      // Aquí puedes realizar acciones adicionales si el formulario es válido
      console.log('Formulario enviado con éxito:', data);
    };




    return (
    <>
          <div className='my-28 text-center'>
          <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Formulario de direccion del contacto</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="cp" className="block text-sm font-medium text-gray-800 -translate-x-24">
                Codigo Postal:
              </label>
              <input
                type="text"
                id="cp"
                name="cp"
                required
                {...register("cp", 
                    { 
                      required: {
                        value: true,
                        message: "El campo es requerido"
                      },                      
                      minLength: {
                        value: 2,
                        message: "El campo debe estar completo"
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Solo se permiten números"
                      }
                    }
                  )}
                className="mt-1 p-2 border rounded-md w-72 text-center"
                onChange={handlePhoneNumberChange}  // Agregar el evento onChange para validar y actualizar
                placeholder='Codigo Postal'
                maxLength={5}  // Establecer la longitud máxima

/*                 {...register("cp", {
                  required: {
                    value:true,
                    message: "El campo es requerido"
                  },
                })} */
              />
            </div>
            {errors.cp && <span className='text-red-500 text-sm mt-1'>{errors.cp.message}</span>}


            <div className="mb-4">
              <label htmlFor="ciudad" className="block text-sm font-medium text-gray-800 -translate-x-28">
                Ciudad:
              </label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Ciudad'
                {...register("ciudad", {
                  required: {
                    value:true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 3,
                    message: "Completa el campo"
                  },
                })}
              />


            </div>
            {errors.ciudad && <span className='text-red-500 text-sm mt-1'>{errors.ciudad.message}</span>}

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
                {...register("colonia", {
                  required: {
                    value:true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 3,
                    message: "Completa el campo"
                  },
                })}
              />
            </div>
            {errors.colonia && <span className='text-red-500 text-sm mt-1'>{errors.colonia.message}</span>}

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
                {...register("calle", {
                  required: {
                    value:true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 3,
                    message: "Completa el campo"
                  },

                })}
              />
            </div>
            {errors.calle && <span className='text-red-500 text-sm mt-1'>{errors.calle.message}</span>}
            <div className="mb-4">
              <label htmlFor="numeroExterior" className="block text-sm font-medium text-gray-800 -translate-x-20">
                Numero exterior:
              </label>
              <input
                type="text"
                id="numeroExterior"
                name="numeroExterior"
                required
                {...register("numeroExterior", {
                  required: {
                    value:true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 2,
                    message: "El campo debe estar completo"
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números"
                  }
                })}
                className="mt-1 p-2 border rounded-md w-72 text-center"
                onChange={handlePhoneNumberChange}  // Agregar el evento onChange para validar y actualizar
                placeholder='Numero exterior'
              />
            </div>
            {errors.numeroExterior && <span className='text-red-500 text-sm mt-1'>{errors.numeroExterior.message}</span>}
            <div className="mb-4">
              <label htmlFor="numeroInterior" className="block text-sm font-medium text-gray-800 -translate-x-20">
                Numero interior:
              </label>
              <input
                type="text"
                id="numeroInterior"
                name="numeroInterior"
                required
                {...register("numeroInterior", {
                  required: {
                    value:true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 2,
                    message: "El campo debe estar completo"
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números"
                  }
                })}
                className="mt-1 p-2 border rounded-md w-72 text-center"
                onChange={handlePhoneNumberChange}  // Agregar el evento onChange para validar y actualizar
                placeholder='Numero interior'
              />
            </div>
            {errors.numeroInterior && <span className='text-red-500 text-sm mt-1'>{errors.numeroInterior.message}</span>}
            <div className="mb-4">
              <label htmlFor="estado" className="block text-sm font-medium text-gray-800 -translate-x-28">
                Estado:
              </label>
              <input
                type="text"
                id="estado"
                name="estado"
                required
                className="mt-1 p-2 border rounded-md w-72 text-center"
                placeholder='Estado'
                {...register("estado", {
                  required: {
                    value:true,
                    message: "El campo es requerido"
                  },
                  minLength: {
                    value: 3,
                    message: "Completa el campo"
                  },
                })}
              />
            </div>
            {errors.estado && <span className='text-red-500 text-sm mt-1'>{errors.estado.message}</span>}
            <button
          style={{ backgroundColor: 'green', color: 'white' }}
          className='bg-green-700 border-2 border-black hover:bg-green-400 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
          type='submit' >
          Guardar
          </button>
          </form>


          </div>
      </div>
  </div>
    <Fot />

    </>

    )
  }
  
  export default App
  