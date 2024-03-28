import { useState } from 'react';
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate  } from "react-router-dom";
import imagen from "../img/logo.png";
/* import carrito from "../img/carrit.png"; */
import burgerMenu from "../img/burgerMenu.png";
import { FaShoppingCart } from 'react-icons/fa';

function App() {
  const [busqueda, setBusqueda] = useState('');
  const lentes = [
    { id: 1, nombre: 'Lente 1', seccion: 'lente1' },
    { id: 2, nombre: 'Lente 2', seccion: 'lente2' },
    // ... otros productos
  ];
  const navigate = useNavigate();
  const handleSearch = () => {
    console.log("Barra de búsqueda:", busqueda);
    // Realiza la lógica de búsqueda y determina la ruta del producto encontrado
    // Puedes ajustar esta lógica según la estructura de tus datos y cómo almacenas tus productos
    console.log("Datos de lentes:", lentes);
    const productoEncontrado = lentes.find(lente => lente.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    
    console.log("Producto Encontrado:", productoEncontrado);
    
    if (productoEncontrado) {
      navigate(`/${productoEncontrado.seccion}/${productoEncontrado.id}`);
    } else {
      console.log("Producto no encontrado");
    }
  };


  return (
    <div className="container mt-[88px]">
      <nav
        className="flex flex-col md:flex-row fixed w-full top-0 bg-turquesa py-1"
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center justify-between w-full md:w-auto md:pl-8 pr-8 md:pr-0">
          <Link to="/" className="flex items-center">
            <img
              className="w-18 md:w-25 h-16 md:h-20 flex-wrap rounded-md"
              src={imagen}
              alt="logo"
            />
          </Link>
          <img
            className="w-16 h-16 cursor-pointer md:hidden ml-auto"
            src={burgerMenu}
            alt="Menu hamburguesa"
          />
        </div>

        <div className="hidden md:flex flex-grow items-center justify-between ml-4 md:ml-13">
          <div className="flex items-center justify-end gap-8">
            <Link
              to="/inicio"
              className="hover:border-b-2 border-blue-700 text-black px-2 py-2 font-bold flex items-center text-xl"
            >
              {" "}
              <AiOutlineHome size={20} className="mr-1" /> Inicio{" "}
            </Link>
            {/* <Link to="/lentes" className="hover:border-b-2 border-blue-700 text-black px-2 py-2 font-bold flex items-center text-xl">
               Lentes </Link> */}
            <Link
              to="/lentesS"
              className="hover:border-b-2 border-blue-700 text-black px-2 py-2 font-bold flex items-center text-xl"
            >
              {" "}
              Lentes{" "}
            </Link>
            <Link
              to="/accesorios"
              className="hover:border-b-2 border-blue-700 text-black px-2 py-2 font-bold flex items-center text-xl"
            >
              Accesorios
            </Link>
          </div>

          {/* barra de busqueda */}

          <div className="flex items-center ms-12">
            <div className="hidden md:flex items-center">
              <input
                type="text"
                placeholder="Buscar..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="rounded-md px-2 py-1"
              />
              <button type="button" onClick={handleSearch}>
                <AiOutlineSearch className="text-white ml-2 bg-black w-6 h-6 rounded-md" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 ml-4 md:ml-32 -translate-x-16">
            <Link
              to="/gestionarCi"
              className="bg-aRey hover:bg-blue-900 text-black rounded-lg px-3 py-2 font-bold flex text-center text-xl"
            >
              Citas
            </Link>
            <Link
              to="/inicioS"
              className="bg-aRey hover:bg-blue-900 text-black rounded-lg px-3 py-2 font-bold flex w-40 justify-center items-center text-xl"
            >
              {" "}
              Iniciar Sesión{" "}
            </Link>
            <Link
              to="/RegistroPage"
              className="bg-aRey hover:bg-blue-900 text-black rounded-lg px-4 py-2 font-bold flex text-xl"
            >
              {" "}
              Registrarse{" "}
            </Link>
            <Link to="/carrito" className="relative inline-block">
              <FaShoppingCart
                size={30}
                className="rounded-md text-gray-800"
                alt="carrito"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
