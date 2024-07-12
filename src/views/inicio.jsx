import { useState } from "react";
/* import Navbar from "../components/BarraNavegacion"; */
import Slider from "../home/slider";
import Fot from "../components/Footer";
import imagen from "../img/Venta.png";
import imagen2 from "../img/lentes2.png";
import Scrool from '../components/scroll';
import Barra from "../components/Navegacion/barra";


function App() {
  const [mostrarElemento, setMostrarElemento] = useState(false);
  const [mostrarElemento2, setMostrarElemento2] = useState(false);
  const [mostrarElemento3, setMostrarElemento3] = useState(false);
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);

  const handleMouseOver1 = () => {
    setIsZoomed1(true);
  };

  const handleMouseOut1 = () => {
    setIsZoomed1(false);
  };

  const handleMouseOver2 = () => {
    setIsZoomed2(true);
  };

  const handleMouseOut2 = () => {
    setIsZoomed2(false);
  };

  const handleMouseOver3 = () => {
    setIsZoomed3(true);
  };

  const handleMouseOut3 = () => {
    setIsZoomed3(false);
  };

  return (
    <>
{/*       <Navbar /> */}

  <Barra/>
      <script
        src="//code.tidio.co/lr3byfcdvywtakcwkxqmh0yvvnggymum.js"
        async
      ></script>
      <div className="flex-center text-center mt-16">
        <div className="my-32 ">
          <Slider />
          <br />

          
          <div className="flex flex-col md:flex-row">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8">



              
              <img
                className={`w-full ${isZoomed1 ? "zoom" : ""}`}
                src={imagen}
                onMouseOver={handleMouseOver1}
                onMouseOut={handleMouseOut1}
                alt="Sunset in the mountains"
                style={{
                  width: isZoomed1 ? "120%" : "100%",
                  height: isZoomed1 ? "50%" : "30%",
                  objectFit: "cover",
                }}
              />




              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ">
                  The Coldest Sunset
                </div>
                <p className="text-gray-700 text-justify">
                  Estos lentes ofrecen un estilo único y moderno que te hará
                  destacar en cualquier ocasión. Con su diseño elegante y
                  funcional, podrás disfrutar de la máxima protección UV y una
                  visión nítida y clara en todo momento.
                  <button
                    onClick={() => setMostrarElemento(!mostrarElemento)}
                  ></button>
                  {mostrarElemento && (
                    <div>
                      Su montura ligera y resistente garantiza una comodidad
                      duradera, mientras que sus cristales de alta calidad te
                      brindan una visión sin igual. ¡Prepárate para lucir
                      increíble con los lentes The Coldest Sunset!
                    </div>
                  )}
                </p>
              </div>
              <div className="px-6 pt-4 pb-4">
                <button
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  onClick={() => setMostrarElemento(!mostrarElemento)}
                >
                  {mostrarElemento ? "Ocultar" : "Ver más"}
                </button>
              </div>
            </div>


            

            {/* Aquí empieza El segundo */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8">
              <img
                className={`w-full ${isZoomed2 ? "zoom" : ""}`}
                src={imagen2}
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}
                alt="Sunset in the mountains"
                style={{
                  width: isZoomed2 ? "120%" : "100%",
                  height: isZoomed2 ? "50%" : "30%",
                  objectFit: "cover",
                }}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ">
                  The Coldest Sunset
                </div>
                <p className="text-gray-700 text-justify">
                  Estos lentes ofrecen un estilo único y moderno que te hará
                  destacar en cualquier ocasión. Con su diseño elegante y
                  funcional, podrás disfrutar de la máxima protección UV y una
                  visión nítida y clara en todo momento.
                  <button
                    onClick={() => setMostrarElemento2(!mostrarElemento2)}
                  ></button>
                  {mostrarElemento2 && (
                    <div>
                      Su montura ligera y resistente garantiza una comodidad
                      duradera, mientras que sus cristales de alta calidad te
                      brindan una visión sin igual. ¡Prepárate para lucir
                      increíble con los lentes The Coldest Sunset!
                    </div>
                  )}
                </p>
              </div>
              <div className="px-6 pt-4 pb-4">
                <button
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  onClick={() => setMostrarElemento2(!mostrarElemento2)}
                >
                  {mostrarElemento2 ? "Ocultar" : "Ver más"}
                </button>
              </div>
            </div>
            
            {/* Aquí empieza el tercero */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-8">
              <img
                className={`w-full ${isZoomed3 ? "zoom" : ""}`}
                src={imagen}
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut3}
                alt="Sunset in the mountains"
                style={{
                  width: isZoomed3 ? "120%" : "100%",
                  height: isZoomed3 ? "50%" : "30%",
                  objectFit: "cover",
                }}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ">
                  The Coldest Sunset
                </div>
                <p className="text-gray-700 text-justify">
                  Estos lentes ofrecen un estilo único y moderno que te hará
                  destacar en cualquier ocasión. Con su diseño elegante y
                  funcional, podrás disfrutar de la máxima protección UV y una
                  visión nítida y clara en todo momento.
                  <button
                    onClick={() => setMostrarElemento3(!mostrarElemento3)}
                  ></button>
                  {mostrarElemento3 && (
                    <div>
                      Su montura ligera y resistente garantiza una comodidad
                      duradera, mientras que sus cristales de alta calidad te
                      brindan una visión sin igual. ¡Prepárate para lucir
                      increíble con los lentes The Coldest Sunset!
                    </div>
                  )}
                </p>
              </div>
              <div className="px-6 pt-4 pb-4">
                <button
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  onClick={() => setMostrarElemento3(!mostrarElemento3)}
                >
                  {mostrarElemento3 ? "Ocultar" : "Ver más"}
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
        
      </div>
      <Scrool/>

      <Fot />
    </>
  );
}

export default App;
