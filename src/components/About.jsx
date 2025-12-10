import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaBullseye, FaEye } from "react-icons/fa";
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

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="quienes-somos"
      className="
        relative 
        px-6 py-28 
        scroll-mt-20 
        bg-gradient-to-b from-white via-[#f7f7f7] to-[#e9eef5]
        text-[#333]
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-stretch">

        {/* Slider */}
        <div className="relative group flex flex-col items-center w-full h-[500px]">

          {/* Left Arrow */}
          <button
            className="
              absolute left-4 top-1/2 -translate-y-1/2 z-20
              w-12 h-12
              bg-yellow-400 hover:bg-yellow-300
              text-black
              flex items-center justify-center
              text-3xl font-bold
              shadow-md
            "
            onClick={() => window.aboutSlider.slidePrev()}
          >
            ❮
          </button>

          {/* Right Arrow */}
          <button
            className="
              absolute right-4 top-1/2 -translate-y-1/2 z-20
              w-12 h-12
              bg-yellow-400 hover:bg-yellow-300
              text-black
              flex items-center justify-center
              text-3xl font-bold
              shadow-md
            "
            onClick={() => window.aboutSlider.slideNext()}
          >
            ❯
          </button>

          {/* Slider Container */}
          <div className="relative overflow-hidden w-full bg-white shadow-xl h-[500px]">
            <Swiper
              loop
              navigation={false}
              modules={[Navigation]}
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
          </div>

          {/* Slider Dots */}
          <div className="flex gap-3 mt-5">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => window.aboutSlider.slideToLoop(i)}
                className={`
                  w-4 h-4 cursor-pointer 
                  transition-all duration-300
                  ${activeIndex === i
                    ? "bg-yellow-500"
                    : "bg-gray-400"
                  }
                `}
              ></div>
            ))}
          </div>
        </div>

        {/* Text Box */}
        <div className="relative p-10 bg-white shadow-xl h-[500px] flex flex-col justify-center">

<div className="flex items-center gap-4 mb-6">
  {/* Vertical Yellow Bar */}
  <div className="w-2 h-20 bg-yellow-400"></div>

  <div className="flex flex-col items-center leading-none">
    <h2 className="text-5xl font-extrabold tracking-tight text-[#222]">
      QUIÉNES
    </h2>

    <h2 className="text-5xl font-extrabold tracking-tight text-yellow-400">
      SOMOS
    </h2>
  </div>
</div>

          <p className="text-lg leading-relaxed mb-6 text-[#555]">
            Somos una empresa que ofrece servicios de transporte de pasajeros desde Chiquimula a Puerto Barrios y de Chiquimula a la Ciudad Capital de Guatemala, de igual manera prestamos el transporte de toda clase de mercadería dentro y fuera del país. Así mismo, realizamos maniobras para levantar contenedores cargados y remolque de toda clase de vehículos.
          </p>

          <p className="text-lg leading-relaxed text-[#555]">
            Se prestan los servicios de grúas telescópicas hasta de 115 toneladas para realizar trabajos de construcción en minerías, hidroeléctricas u otro tipo de fábricas, colocación de postes, cisternas, contenedores, etc. También contamos con los servicios de renta y venta de maquinaria de construcción y transporte.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="max-w-5xl mx-auto mt-28 text-center text-[#333]">

        <h3 className="text-4xl font-bold">
          NUESTRA <span className="text-yellow-400">HISTORIA</span>
        </h3>

        <div className="w-20 h-1 mx-auto bg-yellow-400 mt-4 mb-12"></div>

        <p className="text-lg leading-relaxed mb-6 text-[#555]">
          La empresa inició labores en el año de 1990, estableciéndose en el Kilómetro 137, Ruta al Atlántico del municipio de Rio Hondo del Departamento de Zacapa y con sucursal en el Kilómetro 245 en el municipio de Morales del departamento de Izabal, en donde cada día nos unimos y nos esforzamos para ofrecer más y mejores servicios, que se demuestran con más de 25 años de experiencia.
        </p>

        <p className="text-lg leading-relaxed text-[#555]">
          Contamos con un personal altamente calificado, asegurando así la satisfacción total de nuestros clientes, mediante el desarrollo de nuestro personal e innovación tecnológica constante.
        </p>
      </div>

    {/* Misión y Visión */}
    <div className="grid md:grid-cols-2 gap-10 mt-28 max-w-7xl mx-auto">

      {/* MISIÓN – ORANGE */}
      <div className="group p-10 bg-orange-500 text-white shadow-xl hover:-translate-y-2 transition transform">
        <div className="flex items-center gap-4 mb-4">
          <FaBullseye className="text-4xl text-white group-hover:text-black transition-colors duration-300" />
          <h3 className="text-3xl font-bold">MISIÓN</h3>
        </div>
        <p className="text-lg leading-relaxed">
          Somos una empresa que se esmera por prestar los mejores servicios de transporte, grúas, renta y venta de maquinaria, satisfaciendo la exigencia de nuestros clientes.
        </p>
      </div>

      {/* VISIÓN – GREEN */}
      <div className="group p-10 bg-green-700 text-white shadow-xl hover:-translate-y-2 transition transform">
        <div className="flex items-center gap-4 mb-4">
          <FaEye className="text-4xl text-yellow-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          <h3 className="text-3xl font-bold">VISIÓN</h3>
        </div>
        <p className="text-lg leading-relaxed">
          Ser la empresa líder del país en la prestación de servicio de transporte, manteniéndonos siempre en la vanguardia en calidad y tecnología, planificando minuciosamente los servicios de traslado y servicio en general.
        </p>
      </div>

    </div>
    </section>
  );
}
