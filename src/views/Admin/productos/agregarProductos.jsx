import React, { useState } from 'react';
import axios from 'axios';
import Fot from "../../../components/Footer";
import Barra from "../../../components/Navegacion/barraAdmin";

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    vchNombreProducto: '',
    vchDescripcion: '',
    Existencias: '',
    IdCategoria: '',
    IdMarca: '',
    Precio: '',
    image: null
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file
    });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('vchNombreProducto', formData.vchNombreProducto);
    form.append('vchDescripcion', formData.vchDescripcion);
    form.append('Existencias', formData.Existencias);
    form.append('IdCategoria', formData.IdCategoria);
    form.append('IdMarca', formData.IdMarca);
    form.append('Precio', formData.Precio);
    form.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:3000/productos/Crear_productos', form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Limpiar el formulario después de la creación exitosa
      setFormData({
        vchNombreProducto: '',
        vchDescripcion: '',
        Existencias: '',
        IdCategoria: '',
        IdMarca: '',
        Precio: '',
        image: null
      });
      setPreviewImage(null);
      alert('Producto creado exitosamente');
    } catch (error) {
      console.error(error);
      alert('Error al crear el producto');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Barra />
      <div className="flex-grow container mx-auto px-2 sm:px-4 lg:px-6 py-28">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Crear Producto</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Nombre del Producto:</label>
            <input
              type="text"
              name="vchNombreProducto"
              value={formData.vchNombreProducto}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Descripción:</label>
            <input
              type="text"
              name="vchDescripcion"
              value={formData.vchDescripcion}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Existencias:</label>
            <input
              type="number"
              name="Existencias"
              value={formData.Existencias}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Categoría:</label>
            <input
              type="text"
              name="IdCategoria"
              value={formData.IdCategoria}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Marca:</label>
            <input
              type="text"
              name="IdMarca"
              value={formData.IdMarca}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Precio:</label>
            <input
              type="number"
              name="Precio"
              value={formData.Precio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Imagen del Producto:</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          {previewImage && (
            <div className="mb-4">
              <img src={previewImage} alt="Preview" className="w-full h-auto rounded-lg" />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Crear Producto
          </button>
        </form>
      </div>
      <Fot />
    </div>
  );
};

export default CreateProductForm;
