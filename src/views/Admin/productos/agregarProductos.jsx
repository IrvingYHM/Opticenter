import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [existencias, setExistencias] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState(0);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("vchNombreProducto", nombreProducto);
    formData.append("vchDescripcion", descripcion);
    formData.append("Existencias", existencias);
    formData.append("IdCategoria", categoria);
    formData.append("IdMarca", marca);
    formData.append("Precio", precio);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:3000/productos/Crear_productos", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al crear el producto");
      }

      toast.success("Producto creado con éxito");
      navigate("/Productos");
    } catch (error) {
      console.log(error);
      toast.error("Error al crear el producto");
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
          placeholder="Nombre del Producto"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
        />
        <input
          type="number"
          value={existencias}
          onChange={(e) => setExistencias(e.target.value)}
          placeholder="Existencias"
        />
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoría"
        />
        <input
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          placeholder="Marca"
        />
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default AddProduct;
