import React, { useState } from "react";
import lentesData from "./lentesData";

const SearchAdvanced = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("all");
  const [resultados, setResultados] = useState([]);

  const buscar = () => {
    const resultadosFiltrados = lentesData.filter((item) => {
      return (
        (nombre === "" ||
          item.nombre.toLowerCase().includes(nombre.toLowerCase())) &&
        (categoria === "all" || item.categoria === categoria)
      );
    });

    setResultados(resultadosFiltrados);
  };

  const mostrarResultados = () => {
    if (resultados.length === 0) {
      return <p>No se encontraron resultados.</p>;
    }

    return resultados.map((item) => (
      <div key={item.nombre}>
        <p>
          {item.nombre} - {item.categoria} - {item.genero} - ${item.precio}
        </p>
        <img
          src={item.imagen}
          alt={item.nombre}
          style={{ maxWidth: "100px" }}
        />
      </div>
    ));
  };

  return (
    <div>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label htmlFor="category">Categoría:</label>
      <select
        id="category"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="all">Todas las categorías</option>
        <option value="sol">Lentes de Sol</option>
        <option value="deporte">Deportivos</option>
        <option value="lectura">Lectura</option>
        <option value="computadora">Gafas de Computadora</option>
        {/* Agregar más opciones según tus necesidades */}
      </select>

      <button onClick={buscar}>Buscar</button>

      <div id="resultados">{mostrarResultados()}</div>
    </div>
  );
};

export default SearchAdvanced;
