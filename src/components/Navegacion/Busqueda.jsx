import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Busqueda({ busqueda, setBusqueda, handleSearch }) {

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-full">
      {/* Barra de búsqueda que se ajusta a todos los tamaños de pantalla */}
      <div className="flex items-center w-full">
        <div className="bg-white rounded-l-full py-2 pl-2 flex items-center w-full">
          <AiOutlineSearch className="w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow outline-none bg-transparent placeholder-gray-500 pl-1"
          />
        </div>
        <div className="bg-gray-400 pl-1.5 rounded-r-full py-2 pr-3">
          <button
            type="button"
            onClick={handleSearch}
            className="flex items-center justify-center"
          >
            <AiOutlineSearch className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Busqueda;
