import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import imagen from "../img/logo.jpg";
import carrito from "../img/carrit.png";
import burgerMenu from '../img/burgerMenu.png'
//import closeBtn from '../img/icon-menu-close.svg'


function App() {

 // const [menuClicked, setMenuClicked] = useState(true)

/*   const handleClick = () => {
    setMenuClicked(prevState => !prevState)
  } */



  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log("Realizar búsqueda...");
  };

  return (
    <div className="container mt-5" >
      <nav className="flex flex-col md:flex-row fixed w-full top-0 bg-turquesa py-1" style={{ zIndex: 1000 }}>
    <div className="flex ">
        <Link to="/" className="flex items-center ml-8 mb-4 md:mb-0 md:mr-8">
          <img
            className="w-18 md:w-25 h-16 md:h-20 flex-wrap rounded-md"
            src={imagen}
            alt="logo"
          />
        </Link>
        <img className='w-16 h-16 cursor-pointer sm:hidden ml-auto' src={burgerMenu} alt="Menu hamburguesa" />
        </div>



        <div className="md:flex-row items-end justify-between w-full ml-4 md:ml-13">
          <div className="mb-4 md:mb-0 flex items-center">
            {/* Barra de búsqueda con icono a la derecha */}
            <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Barra de búsqueda"
              className="rounded-md px-24 py-1"
            />
          <button
            type="button"
            onClick={handleSearch}
            
          >
            <AiOutlineSearch className="text-white ml-4 bg-black w-8 h-7 rounded-md" />
          </button>
          </div>
          </div>

          <div className="flex items-end justify-end gap-12">
            <div className="hidden md:flex items-end justify-end mb-4 md:mb-0 md:ml-auto gap-2 md:ml-16">
              <Link
                to="/inicio"
                className="hover:bg-blue-900 text-black rounded-md px-4 py-2 font-bold flex items-center"
              >
                {" "}
                <AiOutlineHome size={20} className="mr-2" /> Inicio
              </Link>
              <Link
                to="/lentes"
                className="hover:bg-blue-900 text-black rounded-md px-4 py-2 font-bold flex items-center"
              >

                Lentes
              </Link>
              <Link
                to="/lentesS"
                className=" hover:bg-blue-900 text-black rounded-md px-2 py-2 font-bold flex items-center"
              >
                Lentes solares
              </Link>
              <Link
              to="/accesorios"
              className="hover:bg-blue-900 text-s rounded-md px-4 py-2 font-bold flex items-center">
                Accesorios
              </Link>
            </div>
            <div className=" hidden md:flex items-end justify-end gap-2 ml-4 md:ml-32">
              <Link
              to="/gestionarCi"
                className="bg-aRey hover:bg-blue-900 text-white rounded-md px-4 py-2 font-bold flex"
              >
                Gestionar Cita
              </Link>
              <Link
                to="/inicioS"
                className="bg-aRey hover:bg-blue-900 text-white rounded-md px-4 py-2 font-bold flex"
              >
                Iniciar Sesion
              </Link>
              <Link
              to="/registrarseL"
                className="bg-aRey hover:bg-blue-900 text-white rounded-md px-4 py-2 font-bold"
                
              >
                Registrarse
              </Link>
              <Link 
              to="/carrito">
                <img
                  src={carrito}
                  className="w-10 h-10 ml-2 rounded-md m-1"
                  alt="carrito"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Ícono para dispositivos pequeños */}
{/*         <button
          type="button"
          className="md:hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="mega-menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button> */}

      </nav>
    </div>
  );
}

export default App;