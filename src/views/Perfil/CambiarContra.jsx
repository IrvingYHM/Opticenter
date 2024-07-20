import React, { useState, useEffect } from "react";
import Barra from "../../components/Navegacion/barra";
import Fot from "../../components/Footer";


function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function App() {
  const [userType, setUserType] = useState(null);
  const [clienteId, setClienteId] = useState("");


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = parseJwt(token);
      setUserType(decodedToken.userType);
      setClienteId(decodedToken.clienteId);
    }
  }, []);




  return (
    <div>
      <Barra />
      <div className="flex flex-col items-center justify-center min-h-screen py-32 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">Cambiar Contraseña</h1>
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="current-password" className="block text-gray-700">Contraseña Actual</label>
            <input
              type="password"
              id="current-password"
              name="current-password"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-gray-700">Nueva Contraseña</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-gray-700">Confirmar Nueva Contraseña</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Cambiar Contraseña
          </button>
        </form>
      </div>
      <Fot />
    </div>
  );
}

export default App;
