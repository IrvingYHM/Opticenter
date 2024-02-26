import './App.css'
import Barra from './components/BarraNavegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './views/inicio';
import Lentes from './views/lentes';
import LenteS from './views/lentesS';
import Accesorios from './views/accesorios';
import AvisoP from './views/avisoP';
import Cookies from './views/cookies';
import IniciarS from './views/iniciarS';
import TerminoC from './views/terminosC';
import GestionarC from './views/gestionarCi';
import InfoPersonal from './views/Registro/InfoPersonal';
import Carrito from './views/carrito';
import OpcionRe from './views/opcionRe';
import RCorreo from './views/Registro/RCorreo';
import RContraseña from './views/Registro/RContraseña';
import RDireccion from './views/Registro/RDireccion';
import RegistroPage from "./views/Registro/RegistroPage";

import NotFound from './components/err/NotFound';

//import Piepa from './components/foother';

function App() {


  return (
  <>
  <BrowserRouter>
  <Barra/>
  
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/lentes' element={<Lentes/>}/>
      <Route path='/lentesS' element={<LenteS/>}/>
      <Route path='/accesorios' element={<Accesorios/>}/>
      <Route path='/gestionarCi' element={<GestionarC/>} />
      <Route path='/registrarseL' element={<InfoPersonal/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
      <Route path='/inicio/avisoP' element={<AvisoP/>}/>
      <Route path='/inicio/cookies' element={<Cookies/>}/> 
      <Route path='/inicioS' element={<IniciarS/>}/>
      <Route path='/inicio/terminosC' element={<TerminoC/>}/>
      <Route path='/opcionesRe' element={<OpcionRe/>}/>
      <Route path='/RCorreo' element={<RCorreo/>}/>
      <Route path='/Contraseña' element={<RContraseña/>} />
      <Route path='/RDireccion' element={<RDireccion/>}/>
      <Route path='/RegistroPage' element={<RegistroPage/>}/>

      {/* Agrega la ruta NotFound para manejar errores 404 */}
       <Route path='*' element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>


  </>
  )
}

export default App
