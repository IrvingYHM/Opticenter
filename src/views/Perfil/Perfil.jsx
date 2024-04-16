import React, { useState, useEffect } from "react";

function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Realizar la solicitud para obtener los datos del usuario desde la API
    const obtenerDatosUsuario = async () => {
      try {
        const response = await fetch(
          "http://tu-api.com/endpoint-para-obtener-datos-de-usuario"
        );
        if (response.ok) {
          const data = await response.json();
          setUsuario(data); // Establecer los datos del usuario en el estado
        } else {
          console.error("Error al obtener los datos del usuario");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    obtenerDatosUsuario();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Configuración del Perfil</h2>
      {usuario ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">
            Información del Usuario
          </h3>
          <p>
            <strong>Nombre:</strong> {usuario.vchNomCliente}{" "}
            {usuario.vchAPaterno} {usuario.vchAMaterno}
          </p>
          <p>
            <strong>Correo Electrónico:</strong> {usuario.vchCorreo}
          </p>
          <p>
            <strong>Sexo:</strong> {usuario.chrSexo}
          </p>
          <p>
            <strong>Fecha de Nacimiento:</strong> {usuario.dtFechaNacimiento}
          </p>
          <p>
            <strong>Teléfono:</strong> {usuario.vchTelefono}
          </p>
          {/* Agregar más campos según sea necesario */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Perfil;
