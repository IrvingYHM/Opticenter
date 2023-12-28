import Navbar from '../components/BarraNavegacion';
import ImgInicio from '../home/ImgInicio';
import Fot from '../components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <div className='flex-center text-center mt-16'> {/* Ajusta la clase mt-16 según el espacio que desees */}
        <div className='my-32'>
          <ImgInicio />
        </div>
      </div>

      <Fot />
    </>
  );
}

export default App;