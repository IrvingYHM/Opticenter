import { useState } from "react";
import Fot from "../../../components/Footer";

import Barra from "../../../components/Navegacion/barraAdmin";
import Web from "../reportes";
import Movil from "../reportemovil";

function App() {
  return (
    <>
      <Barra />

      <div className="flex-center text-center mt-8">
        <div className="my-16">
          <br />
          <Web />

          <Movil />

          <br />
        </div>
      </div>

      <Fot />
    </>
  );
}

export default App;
