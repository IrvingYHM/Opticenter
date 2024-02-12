import { useState, useEffect } from "react";

const AlertComponent = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Oculta la alerta después de 3 segundos
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } transform transition-transform ease-out duration-300 bg-blue-500 text-white text-sm font-bold px-4 py-3`}
      role="alert"
    >
      <p className="text-center">{message}</p>
    </div>
  );
};

export default AlertComponent;
