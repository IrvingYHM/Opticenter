import { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto de autenticación
const AuthContext = createContext();

// Creamos un hook personalizado para acceder al contexto
export const useAuth = () => useContext(AuthContext);

// Creamos el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);

  // Función para iniciar sesión
  const login = () => {
    setUsuarioLogueado(true);
  };

  // Función para cerrar sesión
  const logout = () => {
    setUsuarioLogueado(false);
  };

  // Proporcionamos el contexto y las funciones a los componentes hijos
  return (
    <AuthContext.Provider value={{ usuarioLogueado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
