import Error from '../err/error404.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center animate-fadeInUp">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Oops, parece que te perdiste.
      </h1>
      <img src={Error} alt="Descripción de la imagen" className="w-36 h-28"/>
      <p className="text-lg text-gray-600">
        La página que estás buscando no se encuentra.
      </p>
      {/* Puedes agregar más contenido, como imágenes o enlaces */}
    </div>
  );
};

export default NotFound;
