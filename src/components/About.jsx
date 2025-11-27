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
      className="relative px-6 py-24 scroll-mt-20 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT IMAGE SLIDER */}
        <div className="relative group flex flex-col items-center w-full">

          {/* NEW CIRCULAR ARROWS */}
          <button
            className="
              absolute left-4 top-1/2 -translate-y-1/2
              z-20
              w-10 h-10
              bg-[#333]
              text-[#ddd]
              rounded-full
              flex items-center justify-center
              text-2xl
              cursor-pointer select-none
            "
            onClick={() => window.aboutSlider.slidePrev()}
          >
            ❮
          </button>

          <button
            className="
              absolute right-4 top-1/2 -translate-y-1/2
              z-20
              w-10 h-10
              bg-[#333]
              text-[#ddd]
              rounded-full
              flex items-center justify-center
              text-2xl
              cursor-pointer select-none
            "
            onClick={() => window.aboutSlider.slideNext()}
          >
            ❯
          </button>

          <div className="relative overflow-hidden w-full border border-gray-300">

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
                    className="w-full h-[450px] object-cover rounded-none"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* BLACK SQUARE BUTTONS */}
          <div className="flex gap-3 mt-4">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => window.aboutSlider.slideToLoop(i)}
                className="w-4 h-4 cursor-pointer border-2 transition-all duration-300"
                style={{
                  borderColor: "#000000",
                  backgroundColor: activeIndex === i ? "#ffffff" : "#000000",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* RIGHT — DARK PREMIUM PANEL */}
        <div
          className="
            p-10 
            bg-gray-900
            text-white
            rounded-2xl 
            shadow-2xl 
            border border-gray-700 
            relative 
            overflow-hidden
            transition-transform 
            hover:-translate-y-2 
            hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent)]"></div>

          <h2 className="relative text-5xl font-extrabold text-white tracking-tight font-[Poppins] z-10">
            Quiénes <span className="text-gray-300">Somos</span>
          </h2>

          <div className="relative w-24 h-1 bg-gray-500 rounded-full my-4 z-10"></div>

          <div className="relative text-gray-300 text-lg leading-relaxed space-y-4 z-10">
            Somos una empresa que ofrece servicios de transporte de pasajeros desde Chiquimula a Puerto Barrios y de Chiquimula a la Ciudad Capital de Guatemala, de igual manera prestamos el transporte de toda clase de mercadería dentro y fuera del país. Así mismo, realizamos maniobras para levantar contenedores cargados y remolque de toda clase de vehículos.
            <p></p>
            <p></p>
            Se prestan los servicios de grúas telescópicas hasta de 115 toneladas para realizar trabajos de construcción en minerías, hidroeléctricas u otro tipo de fábricas, colocación de postes, cisternas, contenedores, etc. También contamos con los servicios de renta y venta de maquinaria de construcción y transporte.
            <p></p>
            La empresa inició labores en el año de 1990, estableciéndose en el Kilómetro 137, Ruta al Atlántico del municipio de Rio Hondo del Departamento de Zacapa y con sucursal en el Kilómetro 245 en el municipio de Morales del departamento de Izabal.
            <p></p>
            Contamos con un personal altamente calificado, asegurando así la satisfacción total de nuestros clientes.
          </div>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-7xl mx-auto">

        {/* MISION */}
        <div className="group p-10 bg-orange-600 text-white rounded-2xl shadow-xl border border-orange-700 relative overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <FaBullseye className="absolute top-4 right-4 text-white/20 text-6xl group-hover:text-white/40 transition-opacity duration-200" />
          <h3 className="text-3xl font-bold mb-4">MISIÓN</h3>
          <p className="leading-relaxed text-lg text-orange-100">
            Somos una empresa que se esmera por prestar los mejores servicios de transporte, grúas, renta y venta de maquinaria, satisfaciendo la exigencia de nuestros clientes.
          </p>
        </div>

        {/* VISION */}
        <div className="group p-10 bg-green-900 text-white rounded-2xl shadow-xl border border-green-800 relative overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl">
          <FaEye className="absolute top-4 right-4 text-white/20 text-6xl group-hover:text-white/40 transition-opacity duration-200" />
          <h3 className="text-3xl font-bold mb-4">VISIÓN</h3>
          <p className="leading-relaxed text-lg text-green-100">
            Ser la empresa líder del país en la prestación de servicio de transporte, manteniéndonos siempre en la vanguardia en calidad y tecnología, planificando minuciosamente los servicios de traslado y servicio en general.
          </p>
        </div>

      </div>

    </section>
  );
}
