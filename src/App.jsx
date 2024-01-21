import './App.css'
import Barra from './components/BarraNavegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './view/inicio';
import Lentes from './view/lentes';
import LenteS from './view/lentesS';
import Accesorios from './view/accesorios';
import AvisoP from './view/avisoP';
import Cookies from './view/cookies';
import IniciarS from './view/iniciarS';
import TerminoC from './view/terminosC';
import GestionarC from './view/gestionarCi';
import RegistrarseLo from './view/registrarseL';
import Carrito from './view/carrito';
import OpcionRe from './view/opcionRe';
import RegistroCorr from './view/RegistroCorr';
import RegistroContra from './view/registroContra';
import Direccion from './view/registroDirec';

/* import NotFound from './components/err/NotFound'; */

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
      <Route path='/registrarseL' element={<RegistrarseLo/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
      <Route path='/inicio/avisoP' element={<AvisoP/>}/>
      <Route path='/inicio/cookies' element={<Cookies/>}/> 
      <Route path='/inicioS' element={<IniciarS/>}/>
      <Route path='/inicio/terminosC' element={<TerminoC/>}/>
      <Route path='/opcionesRe' element={<OpcionRe/>}/>
      <Route path='/RegistroCorr' element={<RegistroCorr/>}/>
      <Route path='/Contraseña' element={<RegistroContra/>} />
      <Route path='/Direccion' element={<Direccion/>}/>

      {/* Agrega la ruta NotFound para manejar errores 404 */}
{/*       <Route path='*' element={<NotFound />} /> */} 
    </Routes>
  </BrowserRouter>


  </>
  )
}

export default App
