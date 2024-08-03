export async function obtenerProductos() {
    try {
      const response = await fetch("http://localhost:3000/productos/Productos");
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }