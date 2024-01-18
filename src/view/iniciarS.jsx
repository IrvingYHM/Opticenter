import Fot from '../components/Footer';
import { useState } from 'react';
import imagen from "../img/paisaje.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
    const [mostrarContra, setMostrarContra] = useState(false);


    return (
    <>
        <div className='flex-center my-8'>
            <div className='w-full h-screen flex items-start'>
                <div className='relative w-1/2 h-full flex flex-col'>
                    <div className='absolute top-[25%] left-[10%] flex flex-col'>

                    </div>
                    <img src={imagen} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-1/2 h-full bg-white flex flex-col p-20 justify-between'>
{/*                     <h1 className='text-xl text-[#060606] font-semibold'> Brad</h1> */}
                    <div className='w-full flex flex-col max-w-[550px]'>
                        <div className='w-full flex flex-col mb-2 text-center'>
                        <h3 className='text-3xl font-semibold mb-4'> Login </h3>
{/*                         <p className='text-base mb-2'> welcome back! Please enter you details</p> */}
                        
                        </div>
                        <div className='w-full flex flex-col'>
                        <label htmlFor="email" className="input-text">Correo Electronico:</label>
                        <input 
                        type='email'
                        placeholder='Correo electronico'
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
                        />
                        <label htmlFor="password" className="input-text">Contraseña:</label>
                        <div className='relative'>
                        <input 
                            type={mostrarContra ? 'text' : 'password'}
                            placeholder='Contraseña'
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' 
                        />
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
                            <button className='w-full text-white bg-black rounded-md p-4 text-center flex items-center justify-center'>
                                Ingresar
                            </button>
                        </div>



                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <p className='text-sm font-normal text-black'>¿No tienes una cuenta? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Registrate gratis </span></p>
                    </div>

                </div>
            </div>
        </div>
    <Fot />

    </>
    )
}

export default App