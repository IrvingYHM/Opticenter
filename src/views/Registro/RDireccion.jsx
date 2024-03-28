import { useForm } from "react-hook-form";
import React, { useContext, useState, useEffect } from "react";
import { RegistroContext } from "./RegistroContext";

const RDireccion = ({ onNext, onBack, onValidationChange }) => {
  const { state, dispatch } = useContext(RegistroContext);
  const [previousPostalCod, setPreviousPostalCod] = useState("");
  const [locationInfo, setLocationInfo] = useState(null);

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleInfoChange = (info) => {
    dispatch({ type: "UPDATE_RDIRECCION", payload: info });
  };

  const fetchLocationData = async (codPostal) => {
    const url = `https://mexico-zip-codes3.p.rapidapi.com/${codPostal}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ebc302487bmsh02cff3265862a58p15694ejsn32377e8b9560",
        "X-RapidAPI-Host": "mexico-zip-codes3.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.length > 0) {
        setLocationInfo(result);
      }
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const handlePostalCodeUp = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    handleInfoChange({ CP: value });
    if (value.length === 5 && value !== previousPostalCod) {
      fetchLocationData(value);
      setPreviousPostalCod(value);
    }
  };

  useEffect(() => {
    console.log(locationInfo);
  }, [locationInfo]);

  return (
    <>
      <div className="pt-24 text-center rounded-lg shadow-md overflow-hidden">
        <div className="container ml-auto mr-auto">
          <div className="bg-white px-12">
            <p className="sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4">
              Formulario de direccion del contacto
            </p>
            <form className="grid grid-cols-2 gap-x-8">
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-800 text-left font-bold"
                >
                  Codigo Postal:
                </label>
                <input
                  type="text"
                  name="CP"
                  id="CP"
                  required
                  maxLength={5}
                  onKeyUp={handlePostalCodeUp}
                  onKeyDown={(e) => {
                    if (!/\d/.test(e.key) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Codigo Postal"
                  {...register("CP")}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-800 text-left font-bold"
                >
                  Estado:
                </label>
                <input
                  type="text"
                  name="Estado"
                  id="Estado"
                  required
                  disabled
                  value={locationInfo ? locationInfo[0]?.d_estado : ""}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-800 text-left font-bold"
                >
                  Municipio:
                </label>
                <input
                  type="text"
                  name="Municipio"
                  id="Municipio"
                  required
                  disabled
                  value={locationInfo ? locationInfo[0]?.D_mnpio : ""}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="Colonia"
                  className="block text-gray-800 text-left font-bold"
                >
                  Colonia:
                </label>
                <select
                  name="Colonia"
                  id="Colonia"
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                  {...register("Colonia")}
                >
                  <option value="">Selecciona la colonia</option>
                  {locationInfo &&
                    locationInfo.map((colonia, index) => (
                      <option key={index} value={colonia?.d_asenta}>
                        {colonia?.d_asenta}
                      </option>
                    ))}
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-800 text-left font-bold"
                >
                  Calle:
                </label>
                <input
                  type="text"
                  name="Calle"
                  id="Calle"
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Calle"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-800 text-left font-bold"
                >
                  Numero exterior:
                </label>
                <input
                  type="text"
                  name="NumExt"
                  id="NumExt"
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Numero exterior"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-800 text-left font-bold"
                >
                  Numero interior:
                </label>
                <input
                  type="text"
                  name="NumInt"
                  id="NumInt"
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Numero interior"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-800 text-left font-bold"
                >
                  Referencia:
                </label>
                <input
                  type="text"
                  name="Referencia"
                  id="Referencia"
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Referencia"
                />
              </div>
            </form>

            <div className="grid grid-cols-2">
              <button
                type="button"
                onClick={onBack}
                className="bg-gray-500 border border-black hover:bg-gray-400 text-white rounded-lg font-bold flex px-4 py-2 my-5 justify-center mx-auto items-center"
              >
                Regresar
              </button>
              <button
                type="submit"
                className="bg-blue-700 border border-black hover:bg-blue-600 text-white rounded-lg font-bold flex px-4 py-2 my-5 justify-center mx-auto items-center"
                disabled={Object.keys(errors).length > 0}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RDireccion;
