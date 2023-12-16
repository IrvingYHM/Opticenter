// Footer.js

import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-turquesa text-white p-2 text-center fixed bottom-0 w-full">
        <p className="text-sm md:text-base lg:text-lg">
          © 2023 Tu Sitio Web. Todos los derechos reservados.
        </p>
        <div className="mt-2 flex flex-col md:flex-row lg:flex-row items-center justify-center">
          <Link
            to="avisoP"
            className="text-black-600 hover:text-black mx-2 text-sm md:text-base lg:text-lg"
          >
            Aviso de privacidad
          </Link>
          <span className="text-gray-300">/</span>
          <a
            href="#"
            className="text-black-600 hover:text-black mx-2 text-sm md:text-base lg:text-lg"
          >
            Cookies
          </a>
          <span className="text-gray-300">/</span>
          <a
            href="#"
            className="text-black-300 hover:text-black mx-2 text-sm md:text-base lg:text-lg"
          >
            Términos y condiciones
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  