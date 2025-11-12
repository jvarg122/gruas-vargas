import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function About() {
  const images = [
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about4.jpg",
    "/images/about5.jpg",
  ];

  return (
    <section
      id="quienes"
      className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-16 gap-10"
    >
      {/* LEFT: Image Slider */}
      <div className="w-full md:w-1/2">
        <Swiper
          loop
          autoplay={{ delay: 3000 }}
          navigation
          modules={[Autoplay, Navigation]}
          className= "shadow-lg overflow-hidden"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Imagen ${i + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Quiénes Somos</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          <b>Gruas Vargas</b> es una empresa que se especializa en la venta de cabezales y
          maquinaria para construcción: excavadoras, retroexcavadores, patroles, rodos,
          montacargas y otros.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          Contamos con un personal profesional y altamente capacitado, encargado de satisfacer sus
          necesidades a través de un servicio con altos estándares de calidad.
        </p>
      </div>
    </section>
  );
}
