import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Fot from "../../../components/Footer";
import BarraAd from "../../../components/Navegacion/barraAdmin";

function App() {
  const [empleado, setEmpleado] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/empleados/empleado")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los empleados");
        }
        return response.json();
      })
      .then((data) => {
        setEmpleado(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <BarraAd/>
      <ToastContainer />
      <div className="flex-center my-32">
        <h1 className="sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4 text-center">
          Empleados
        </h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-blue-500 dark:bg-blue-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4 text-center">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 ">
                  NOMBRE COMPLETO
                </th>
                <th scope="col" className="px-6 py-3 ">
                  CORREO ELECTRÓNICO
                </th>
                <th scope="col" className="px-6 py-3">
                  FECHA DE NACIMIENTO.
                </th>
                <th scope="col" className="px-6 py-3">
                  TELÉFONO
                </th>
                <th scope="col" className="px-6 py-3">
                  SEXO
                </th>
                <th scope="col" className="px-6 py-3">
                  ESTADO EMPLEADO
                </th>
                <th scope="col" className="px-6 py-3">
                  PREGUNTA SECRETA
                </th>
                <th scope="col" className="px-6 py-3">
                  RESPUESTA SECRETA
                </th>
{/*                 <th scope="col" className="px-6 py-3">
                  INTENTOS EN EL LOGIN
                </th> */}
                <th scope="col" className="px-6 py-3">
                  ACCIÓN
                </th>
              </tr>
            </thead>
            <tbody>
              {empleado.map((empleado) => (
                <tr
                  key={empleado.intClvEmpleado}
                  className="bg-black border-b dark:bg-white dark:border-black hover:bg-gray-50 dark:hover:bg-gray-300"
                >
                  <td 
                  
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    {empleado.intClvEmpleado}
                  </td>
                  <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                  
                    {`${empleado.vchNombre} ${empleado.vchAPaterno} ${empleado.vchAMaterno}`}
                  </td>
                  <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                    
                    {empleado.vchCorreo}
                  </td>
                  <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                                      
                    {empleado.dtFechaNacimiento}
                  </td>
                  <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                                      
                    {empleado.vchTelefono}
                  </td>
                  <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                                      
                    {empleado.chrSexo}
                  </td>
                  <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                                      
                    {empleado.EstadoEmp}
                  </td>
                  <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                                      
                    {empleado.vchPreguntaSecreta}
                  </td>
                  <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                                      
                    {empleado.vchRespuestaSecreta}
                  </td>
{/*                   <td 
                  className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                                      
                    {cliente.intentosLogin}
                  </td> */}
                  <td className="px-6 py-4 flex items-center">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-3"
                      style={{ cursor: "pointer" }}
                    >
                      Editar
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      style={{ cursor: "pointer" }}
                    >
                      Eliminar
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
              border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            to="/AgEmpleado"
          >
            Agregar{" "}
          </Link>
        </div>
      </div>
      <Fot/>
    </>
  );
}

export default App;
