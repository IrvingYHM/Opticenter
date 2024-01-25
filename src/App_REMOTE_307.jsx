import './App.css'
import Barra from './components/BarraNavegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './vistas/inicio';
import Lentes from './vistas/lentes';
import LenteS from './vistas/lentesS';
import Accesorios from './vistas/accesorios';
import AvisoP from './vistas/avisoP';
import Cookies from './vistas/cookies';
import IniciarS from './vistas/iniciarS';
import TerminoC from './vistas/terminosC';
import GestionarC from './vistas/gestionarCi';
import RegistrarseLo from './vistas/registrarseL';
import Carrito from './vistas/carrito';

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
      <Route path='/inicio/terminosC' element={<TerminoC/>} />
      
    </Routes>
  </BrowserRouter>


  </>
  )
}

export default App
