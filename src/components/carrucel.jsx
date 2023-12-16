import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagen from '../img/logo.jpg';
import an from '../img/an.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-400 rounded-lg shadow-md relative">
      <Slider {...settings} className="carousel">
        <div className="">
          <img
            src={an}
            alt="Imagen 1"
            className="w-80 h-22 object-cover rounded-md flex items-center"
          />
        </div>
        <div className="p-2">
          <img
            src={imagen}
            alt="Imagen 2"
            className="w-52 h-22 object-cover rounded-md"
          />
        </div>
        {/* Agrega más imágenes según tus necesidades */}
      </Slider>

      {/* Botón izquierdo */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => this.slider.slickPrev()}
      >
        {'<'}
      </button>

      {/* Botón derecho */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => this.slider.slickNext()}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
