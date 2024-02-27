import React, { createContext, useReducer } from "react";
const initialState = {
  infoPersonal: {},
  correo: {},
  contraseña: {},
  direccion: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INFO_PERSONAL":
      return { ...state, infoPersonal: action.payload };
    case "UPDATE_CORREO":
      return { ...state, correo: action.payload };
    case "UPDATE_CONTRASEÑA":
      return { ...state, contraseña: action.payload };
    case "UPDATE_DIRECCION":
      return { ...state, direccion: action.payload };
    default:
      return state;
  }
};

export const RegistroContext = createContext();

export const RegistroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RegistroContext.Provider value={{ state, dispatch }}>
      {children}
    </RegistroContext.Provider>
  );
};
