import { useEffect, useState } from "react";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link} from "react-router-dom";
=======
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 9aab8472febf2c120072cf55a622eb3e0f45f15d
import Fot from "../../../components/Footer";
import Barra from "../../../components/Navegacion/barraAdmin";


function App() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState({});
  const [marcas, setMarcas] = useState({});
<<<<<<< HEAD
  
=======
  const navigate = useNavigate();

>>>>>>> 9aab8472febf2c120072cf55a622eb3e0f45f15d
  useEffect(() => {
    fetch("http://localhost:3000/productos/Productos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        return response.json();
      })
      .then((data) => {
        const categoriasMap = {};
        const marcasMap = {};
        data.forEach((producto) => {
<<<<<<< HEAD
            categoriasMap[producto.IdCategoria] = producto.categoria.NombreCategoria;
            marcasMap[producto.IdMarca] = producto.marca.NombreMarca;
=======
          categoriasMap[producto.IdCategoria] = producto.categoria.NombreCategoria;
          marcasMap[producto.IdMarca] = producto.marca.NombreMarca;
>>>>>>> 9aab8472febf2c120072cf55a622eb3e0f45f15d
        });
        setCategorias(categoriasMap);
        setMarcas(marcasMap);
        setProductos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
<<<<<<< HEAD
    <Barra/>
      <ToastContainer />
      <div className="flex-center my-32">
        <h1 className="sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4 text-center">
          Productos
        </h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-blue-500 dark:bg-blue-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4 text-center">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  NOMBRE DEL PRODUCTO
                </th>
                <th scope="col" className="px-6 py-3">
                  IMAGEN
                </th>
                <th scope="col" className="px-6 py-3">
                  DESCRIPCION
                </th>
                <th scope="col" className="px-6 py-3">
                  EXISTENCIA
                </th>
                <th scope="col" className="px-6 py-3">
                  PRECIO
                </th>
                <th scope="col" className="px-6 py-3">
                  Categoria
                </th>
                <th scope="col" className="px-6 py-3">
                  Marca
                </th>
                <th scope="col" className="px-6 py-3">
                  ACCION
                </th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr
                  key={producto.IdProducto}
                  className="bg-black border-b dark:bg-white dark:border-black hover:bg-gray-50 dark:hover:bg-gray-300"
                >
                  <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    {producto.IdProducto}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                  >
                    {producto.vchNombreProducto}
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
                  >
                    {producto.vchNomImagen}
                  </td>
                  <td 
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                  
                    {producto.vchDescripcion}
                  </td>
                  <td className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">
                    {producto.Existencias}
                  </td>
                  <td
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                  
                    {producto.Precio}
                  </td>
                  <td
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                    
                    {categorias[producto.IdCategoria] || 'Sin categoria'}
                  </td>
                  <td
                    className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white">                                                 
                    {marcas[producto.IdMarca] || 'Sin Marca'}
                  </td>
                  <td className="px-6 py-4 flex items-center">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline me-3"
                      style={{ cursor: "pointer" }}
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      style={{ cursor: "pointer" }}
                    >
                      Remove
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
               border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px]hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            to="/ProductosAg">
            Dar de alta{" "}
            
            </Link>
        </div>
      </div>
      <Fot/>
=======
      <Barra />
      <ToastContainer />
      <div className="flex flex-col items-center my-32">
        <h1 className="sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4 text-center">
          Productos
        </h1>
        <div className="flex justify-end w-full mb-8">
          <Link
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            to="/ProductosAg"
          >
            Dar de alta
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <div key={producto.IdProducto} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={producto.vchNomImagen}
                alt={producto.vchNombreProducto}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{producto.vchNombreProducto}</h2>
              <p className="text-gray-600 mb-2">{producto.vchDescripcion}</p>
              <p className="text-gray-800 font-semibold mb-2">Precio: ${producto.Precio}</p>
              <p className="text-gray-600 mb-2">Existencias: {producto.Existencias}</p>
              <p className="text-gray-600 mb-2">Categoría: {categorias[producto.IdCategoria] || 'Sin categoría'}</p>
              <p className="text-gray-600 mb-4">Marca: {marcas[producto.IdMarca] || 'Sin marca'}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/ModificarProducto/${producto.IdProducto}`}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"

                >
                  Editar
                </Link>
                <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
              >
                Desactivar Producto
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Fot />
>>>>>>> 9aab8472febf2c120072cf55a622eb3e0f45f15d
    </>
  );
}

export default App;
