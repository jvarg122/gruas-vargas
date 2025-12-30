import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import { FaBullseye, FaEye, FaHardHat } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import "../swiper-custom.css";

export default function About() {
  const images = [
    "/images/about1.png",
    "/images/about2.png",
    "/images/about3.png",
    "/images/about4.png",
    "/images/about5.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="quienes-somos"
      className="relative px-6 pb-0 scroll-mt-20 bg-gradient-to-t from-white via-[#f7f7f7] to-[#e9eef5] text-[#333]"
    >

    <section
      className="
        w-screen
        relative left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw]
        bg-neutral-900
        flex items-center justify-center
        h-[260px]
        mb-20
      "
    >
    <h1 className="text-white text-[42px] font-bold tracking-wide">
        Quiénes Somos
    </h1>

    </section>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* IMAGE SLIDER */}
        <div className="flex flex-col w-full">
          {/* Slider */}
          <div className="relative w-full h-[500px] shadow-2xl overflow-hidden">
            <Swiper
              loop
              navigation
              pagination={{
                clickable: true,
                el: ".custom-swiper-pagination",
                renderBullet: (index, className) => {
                  return `<span class="${className} swiper-bullet-custom"></span>`;
                },
              }}
              modules={[Navigation, Pagination]}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => (window.aboutSlider = swiper)}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Imagen ${i + 1}`}
                    className="w-full h-[500px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Left/Right arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black hover:bg-yellow-400 text-yellow-400 hover:text-black flex items-center justify-center text-3xl font-bold shadow-md"
              onClick={() => window.aboutSlider.slidePrev()}
            >
              ❮
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black hover:bg-yellow-400 text-yellow-400 hover:text-black flex items-center justify-center text-3xl font-bold shadow-md"
              onClick={() => window.aboutSlider.slideNext()}
            >
              ❯
            </button>
          </div>

          <div className="custom-swiper-pagination flex justify-center mt-4">
          </div>
        </div>

        <div className="flex flex-col justify-start relative">
          <span className="uppercase tracking-widest text-gray-500 font-medium mb-4">
            Sobre Nosotros
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
            Transporte y Soluciones Industriales
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light leading-snug mb-8">
            Experiencia, seguridad y capacidad para cada proyecto.
          </p>

          <div className="h-[6px] w-24 bg-yellow-500 mb-8"></div>

          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Somos una empresa que ofrece servicios de <span className="font-semibold text-black"> grúas telescópicas hasta de 115 toneladas, renta y venta de maquinaria, maniobras, remolques y más</span>.
            </p>

            <p>
              También prestamos servicios de transporte de pasajeros desde{" "}
              <span className="font-semibold text-black">Chiquimula a Ciudad de Guatemala</span>, así como transporte de todo tipo de mercadería.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
            <div className="text-left">
              <p className="text-3xl md:text-4xl font-extrabold text-black leading-none">30+</p>
              <p className="text-xs tracking-wider text-gray-500 uppercase mt-1">Años de Experiencia</p>
            </div>

            <div className="text-left">
              <p className="text-3xl md:text-4xl font-extrabold text-black leading-none">115T</p>
              <p className="text-xs tracking-wider text-gray-500 uppercase mt-1">Capacidad de Grúas</p>
            </div>

            <div className="text-left">
              <p className="text-3xl md:text-4xl font-extrabold text-black leading-none">24/7</p>
              <p className="text-xs tracking-wider text-gray-500 uppercase mt-1">Operación</p>
            </div>
          </div>
        </div>
      </div>

      {/* NUESTRA HISTORIA */}
      <div className="max-w-5xl mx-auto mt-12 text-center text-[#333]">
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 bg-yellow-400 rotate-45 flex items-center justify-center">
            <img
              src="/images/history-icon.png"
              alt="Icono Historia"
              className="w-20 h-20 -rotate-45"
            />
          </div>
        </div>

        <h3 className="text-4xl font-extrabold tracking-wide">
          NUESTRA <span className="text-yellow-400">HISTORIA</span>
        </h3>
        <div className="w-24 h-2 mx-auto bg-yellow-400 mt-4 mb-12"></div>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
          La empresa inició labores en el año de 1990, estableciéndose en el Kilómetro 137, Ruta al Atlántico del municipio de Rio Hondo del Departamento de Zacapa y con sucursal en el Kilómetro 245 en el municipio de Morales del departamento de Izabal. En donde cada día nos unimos y nos esforzamos por ofrecer más y mejores servicios, que se demuestran con más de 30 años de experiencia.
        </p>
      </div>

      {/* MISIÓN VISIÓN NUESTRO EQUIPO */}
      <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] mt-12 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">

        {/* MISIÓN */}
        <div className="bg-black text-white px-10 py-20 flex flex-col items-center justify-start min-h-[600px] group">
          <div className="w-32 h-32 bg-yellow-400 rotate-45 flex items-center justify-center mb-8">
            <FaBullseye className="-rotate-45 text-5xl text-black transition-all duration-300 group-hover:text-white"/>
          </div>

          <h3 className="text-4xl font-bold mb-4 tracking-wide">MISIÓN</h3>
          <p className="font-[Open_Sans] text-2xl tracking-wide text-white text-center min-h-[160px]">
            Somos una empresa que se esmera por prestar los mejores servicios de transporte, grúas, renta y venta de maquinaria, satisfaciendo la exigencia de nuestros clientes.
          </p>
        </div>

        {/* VISIÓN */}
        <div className="bg-yellow-500 text-black px-10 py-20 flex flex-col items-center justify-start min-h-[600px] group">
          <div className="w-32 h-32 bg-black rotate-45 flex items-center justify-center mb-8">
            <FaEye className="-rotate-45 text-5xl text-yellow-400 transition-all duration-300 group-hover:text-white"/>
          </div>

          <h3 className="text-4xl font-bold mb-4 tracking-wide">VISIÓN</h3>
          <p className="font-[Open_Sans] text-2xl tracking-wide text-black text-center min-h-[160px]">
            Ser la empresa líder del país en la prestación de servicio de transporte, manteniéndonos siempre en la vanguardia en calidad y tecnología, planificando minuciosamente los servicios de traslado y servicio en general.
          </p>
        </div>

        {/* NUESTRO EQUIPO */}
        <div className="bg-black text-white px-10 py-20 flex flex-col items-center justify-start min-h-[600px] group">
          <div className="w-32 h-32 bg-yellow-400 rotate-45 flex items-center justify-center mb-8 transition-all duration-300">
            <FaHardHat className="-rotate-45 text-5xl text-black transition-all duration-300 group-hover:text-white"/>
          </div>

          <h3 className="text-4xl font-bold mb-4 tracking-wide">NUESTRO EQUIPO</h3>
          <p className="font-[Open_Sans] text-2xl tracking-wide text-white text-center min-h-[160px]">
            Contamos con un personal altamente calificado, asegurando así la satisfacción total de nuestros clientes, mediante el desarrollo de nuestro personal e innovación tecnológica constante.
          </p>
        </div>
      </div>
    </section>
  );
}