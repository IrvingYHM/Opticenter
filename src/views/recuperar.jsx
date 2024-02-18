import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from "react-toastify"; // Importa ToastContainer
import "react-toastify/dist/ReactToastify.css";

function Recuperar() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data,e) => {
    e.preventDefault(); // Evita la recarga de la página
    try {
      const response = await fetch("http://localhost:3000/clientes/recuperar-contrasena", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Este correo si existe");
        setTimeout(() => {
          window.location.href = "/Direccion";
        }, 3000);

      } else {
        toast.error("Error correo no existente");
      }
    } catch (error) {
      toast.error("Error de red al recuperar la contraseña:", error);
    }
  };

  return (
    <>
      <div className='my-28 text-center'>
        <div className='container ml-auto mr-auto flex items-center justify-center'>
          <div>
            <p className='sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4'>Recuperación de contraseña</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="vchCorreo" className="block text-sm font-medium text-gray-800 -translate-x-12">
                  Ingrese su correo electrónico:
                </label>
                <input
                  type="text"
                  id="vchCorreo"
                  {...register("vchCorreo", { required: true })}
                  className="mt-1 p-2 border rounded-md w-72 "
                  placeholder='Correo electrónico'
                />
              </div>
              {errors.vchCorreo && <span className="text-red-500 text-sm mt-1">Este campo es requerido</span>}
              <button
                className='bg-blue-700 border-2 border-black hover:bg-blue-600 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center'
                type="submit" // Cambia el tipo a "submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
        position="top-center" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />

      </div>
      <Footer />
    </>
  );
}

export default Recuperar;
