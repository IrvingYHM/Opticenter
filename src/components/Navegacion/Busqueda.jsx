import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineAudio } from "react-icons/ai";

function Busqueda({ busqueda, setBusqueda, handleSearch }) {
  const [isListening, setIsListening] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    // Ejecuta la búsqueda cada vez que el estado 'busqueda' cambie, pero no borra el texto
    if (busqueda && busqueda.trim() !== "") {
      handleSearch();
    }
  }, [busqueda, handleSearch]);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("El reconocimiento de voz no está soportado en este navegador.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.start();

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      // Solo actualiza el estado si el texto reconocido no es vacío
      if (transcript.trim()) {
        setBusqueda(transcript);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div className="flex items-center w-full max-w-sm mx-auto px-2 space-x-2">
      <div className="flex items-center w-full bg-white rounded-full shadow-md px-2 py-1 md:py-2">
        <AiOutlineSearch className="w-4 h-4 md:w-5 md:h-5 text-gray-500 ml-2" />
        
        <input
          type="text"
          placeholder="Buscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow outline-none bg-transparent placeholder-gray-500 text-sm md:text-base px-2 "
        />

        {/* Botón de micrófono para búsqueda por voz */}
        <button
          type="button"
          onClick={startListening}
          className="bg-gray-200 rounded-full p-1 md:p-2 mr-1"
          disabled={isListening}
        >
          <AiOutlineAudio
            className={`w-4 h-4 md:w-5 md:h-5 ${isListening ? "text-red-500" : "text-gray-500"}`}
          />
        </button>

        {/* Botón de búsqueda tradicional */}
        <button
          type="button"
          onClick={handleSearch}
          className="bg-gray-200 rounded-full p-1 md:p-2 mr-2"
        >
          <AiOutlineSearch className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export default Busqueda;
