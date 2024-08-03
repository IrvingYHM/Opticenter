export async function obtenerProductos() {
    try {
      const response = await fetch("https://edbb-201-97-61-85.ngrok-free.app/productos/Productos");
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