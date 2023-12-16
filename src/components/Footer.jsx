import { BsFacebook } from "react-icons/bs"; 
import logo  from "../img/logo.jpg";
import  caihqr  from "../img/caihqr.png";
import { Link } from "react-router-dom";
import { FaCookieBite } from "react-icons/fa";





export default function Footer() {
  return (
    <footer className="bg-turquesa">
    <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:p-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0 md:flex md:items-center">
          <a className="flex items-center mx-auto md:mx-0">
            <img
              src={caihqr}
              className="h-40 mx-auto rounded-md"
              alt="Logo caih"
            />
          </a>
        </div>
        <div className="mb-6 md:mb-0 md:flex md:items-center">
          <a className="flex items-center mx-auto md:mx-0">
            <img
              src={logo}
              className="h-40 mx-auto md:mx-0 rounded-md"
              alt="Logo caih"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-600 uppercase">
                síguenos
              </h2>
              <ul className="font-medium text-gray-900">
                <li className="mb-4">
                  <a
                    href="https://web.facebook.com/people/CAIH/100043352531874/"
                    target="_blank"
                    className="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Legal
              </h2>
              <ul className="font-medium text-gray-300 space-y-2">
                <li className="mb-4">

                  <Link
                   to="/inicio/avisoP" 
                   className="hover:underline">
                    Politica de privacidad
                  </Link>
                </li>
                <li className="mb-4 flex items-center">
                  <FaCookieBite className="mr-2 "style={{ color: 'black' }} />
                  <a href="#" className="hover:underline">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terminos y condiciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black sm:text-center">
            © 2023 <a>OptiCenter™</a>. Todos los derechos reservados.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://web.facebook.com/people/CAIH/100043352531874/"
              target="_blank"
              className="text-gray-900 hover:animate-bounce text-2xl"
            >
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


{/* <Link
to="avisoP"
className="text-black-600 hover:text-black mx-2 text-sm md:text-base lg:text-lg"
>
Aviso de privacidad
</Link> */}