import React, { useState } from "react";
import Fot from "../../components/Footer";
import { RegistroProvider } from "./RegistroContext";
import InfoPersonal from "./InfoPersonal";
import RCorreo from "./RCorreo";
import RContraseña from "./RContraseña";
import RDireccion from "./RDireccion";

const RegistroPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCurrentPageValid, setIsCurrentPageValid] = useState(false);

  const handleNext = () => {
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
    setIsCurrentPageValid(isValid);
  };

  return (
    <RegistroProvider>
      <div className="bg-black">
        <div className="bg-slate-200">
          <div className="flex justify-center my-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`h-10 w-10 flex justify-center items-center rounded-full border-4 ${step === currentPage ? 'border-blue-500' : 'border-gray-300'} text-lg font-semibold ${step < currentPage ? 'text-blue-500' : 'text-gray-500'} mr-4`}>{step}</div>
              {step < 4 && <div className={`h-2 w-16 bg-${step < currentPage ? 'blue' : 'gray'}-500`} />}
            </div>
          ))}
        </div>
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
      </div>
      <Fot/>
    </RegistroProvider>
  );
};

export default RegistroPage;
