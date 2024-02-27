import InfoPersonal from "./InfoPersonal";
import RCorreo from "./RCorreo";
import RContraseña from "./RContraseña";
import RDireccion from "./RDireccion";
import { useState } from "react";
import { RegistroProvider } from "./RegistroContext";

const RegistroPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCurrentPageValid, setIsCurrentPageValid] = useState(false);

  const handleNext = () => {
    // Verificar si el formulario actual es válido
    if (isCurrentPageValid) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      console.log("El formulario actual no es válido.");
    }
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleValidationChange = (isValid) => {
    // Actualizar el estado de validación del formulario actual
    setIsCurrentPageValid(isValid);
  };

  return (
    <RegistroProvider>
      <div>
        {currentPage === 1 && (
          <InfoPersonal onNext={handleNext} onBack={handleBack} onValidationChange={handleValidationChange} />
        )}
        {currentPage === 2 && (
          <RCorreo onNext={handleNext} onBack={handleBack} onValidationChange={handleValidationChange} />
        )}
        {currentPage === 3 && (
          <RContraseña onNext={handleNext} onBack={handleBack} onValidationChange={handleValidationChange} />
        )}
        {currentPage === 4 && (
          <RDireccion onNext={handleNext} onBack={handleBack} onValidationChange={handleValidationChange} />
        )}
      </div>
    </RegistroProvider>
  );
};

export default RegistroPage;
