import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Busqueda({ busqueda, setBusqueda, handleSearch }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(false);

  const handleFocus = () => {
    setShowSearchIcon(true);
  };

  const handleBlur = () => {
    setShowSearchIcon(false);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="flex items-center rounded-full">
      {showSearchBar ? (
        <div className="flex">
          <div className="bg-white rounded-l-full py-2 pl-2 flex items-center">
            {showSearchIcon && <AiOutlineSearch className="w-5 h-5" />}
            <input
              type="text"
              placeholder="Buscar"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="flex-grow outline-none bg-transparent placeholder-gray-500 pl-3"
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
      ) : (
        <div className="bg-gray-400 rounded-full py-2 px-3">
          <button
            type="button"
            onClick={toggleSearchBar}
            className="flex items-center justify-center"
          >
            <AiOutlineSearch className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Busqueda;
