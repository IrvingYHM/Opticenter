// clienteAPI.js

const fetchIdCliente = async (email) => {
  try {
    const response = await fetch(
      `http://localhost:3000/clientes/?email=${email}`
    );
    const data = await response.json();
    if (data) {
      return data.intClvCliente;
      /* console.log("ID del cliente:", data.intClvCliente); */
    } else {
      console.log(
        "No se encontró ningún cliente con el correo electrónico proporcionado."
      );
      return null; // Retorna null si no se encontró ningún cliente
    }
  } catch (error) {
    console.error("Error fetching IdCliente:", error);
    return null; // Retorna null en caso de error
  }
};

export default fetchIdCliente;
