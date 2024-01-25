import Fot from '../components/Footer';
import { useState,  } from 'react';
import imagen from "../img/paisaje.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

function App() {
    const [mostrarContra, setMostrarContra] = useState(false);
    
    const {register,handleSubmit,formState: { errors },} = useForm()

    const onSubmit = evento =>{
        console.log(evento);
    }
    const getInputBorderClasses = (error) => {
        if (error) {
          return 'border-red-500 focus:border-red-700';
        } else {
          return 'border-green-500 focus:border-green-900';
        }
      };




    return (
    <>
        <div className='flex-center my-8'>
            <div className='w-full h-22 flex items-start flex-col sm:flex-row'>
                <div className='sm:block relative w-1/2  h-full  flex flex-col'>
                    <div className='absolute top-[25%] left-[10%] flex flex-col'>

                    </div>
                    <div className=' w-full sm:w-1/2 sm:flex-shrink-0 hidden md:block relative'>
                    <img src={imagen} alt="" className='w-full h-full object-cover sm:rounded-lg' />
                    </div>
                </div>
                <div className='w-full sm:w-1.5 bg-white  p-6 sm:p-20'>
                    <div className='max-w-[550px]'>
                        <div className='text-center mb-4'>
                        <div className='sm:hidden relative w-full'>

                    </div>
                    <div className='sm:hidden relative w-full'>
                        <img src={imagen} alt="" className='w-full h-full object-cover sm:rounded-lg p-4' />
                    </div>
                        <h3 className='text-3xl font-semibold'> Login </h3>
                        
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full flex flex-col'>
                        <label htmlFor="email" className="input-text">Correo Electronico:</label>
                        <input 
                        type='email'
                        placeholder='Correo electronico'
                        {...register("email",{
                            required:{
                                value:true,
                                message:"El campo es requerido"
                            },
                            pattern:{
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "El formato no es correcto"
                            }
                        })}
                        className={`w-full text-black py-2 my-2 bg-transparent border-b outline-none focus:outline-none ${getInputBorderClasses(errors.email)}`}
                        />
                        {errors.email && <span className='text-red-500 text-sm mt-1'>{errors.email.message}</span>}
                        <label htmlFor="password" className="input-text">Contraseña:</label>
                        <div className='relative'>
                        <input 
                            type={mostrarContra ? 'text' : 'password'}
                            placeholder='Contraseña'
                            className={`w-full text-black py-2 my-2 bg-transparent border-b outline-none focus:outline-none ${getInputBorderClasses(errors.password)}`}
                            {...register("password",{
                                required:{
                                    value:true,
                                    message:"El campo es requerido"
                                },
                               minLength: {
                                value: 8,
                                message: "La contraseña debe tener al menos 8 caracteres"
                               }
                            })} 
                        />
                        {errors.password && <span className='text-red-500 text-sm mt-1'>{errors.password.message}</span>}

                        <FontAwesomeIcon
                            icon={mostrarContra ? faEye : faEyeSlash}
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                            onClick={() => setMostrarContra(!mostrarContra)}
                        />
                        </div>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <div className='w-full flex items-center'>
                                <input type="checkbox"
                                    className='w-4 h-4 mr-2'
                                />
                                <p className='text-sm'>Recordar contraseñar</p>
                            </div>
                            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>¿Olvidastes tu contraseña?</p>
                        </div>


                        <div className='w-full flex flex-col my-12'>
                            <button
                            style={{ backgroundColor: 'black', color: 'white' }}
                            className='w-full bg-black text-white rounded-md p-4 text-center flex items-center justify-center'
                            type='submit'
                            >
                                Ingresar
                            </button>
                        </div>

                        </form>

                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-sm font-normal text-black'>¿No tienes una cuenta? <span className='font-semibold underline underline-offset-2 cursor-pointer'>
                            <Link to='/opcionesRe'>Registrate gratis</Link>
                             </span></p>
                    </div>

                </div>
            </div>
        </div>
    <Fot />

    </>
    )
}

export default App