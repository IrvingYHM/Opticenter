import Navbar from '../components/BarraNavegacion';
import Slider from '../home/slider';
import Fot from '../components/Footer';
import imagen from "../img/logo.jpg";
/* import Chatbot from '../views/carrito'; */

function App() {
  return (
    <>
      <Navbar />
      <script src="//code.tidio.co/lr3byfcdvywtakcwkxqmh0yvvnggymum.js" async></script>
      <div className='flex-center text-center mt-16'>
{/*         <br />
        <br />
      <Chatbot /> */}

        <div className='my-32 '>
          <Slider />
          <br />
          <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img className="w-full" src={imagen} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ver más</span>
            </div>
          </div>
          <br />
        </div>
      </div>
      <Fot />
    </>
  );
}

export default App;
