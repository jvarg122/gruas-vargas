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
        bg-gradient-to-b from-gray-700 via-black to-gray-900
        text-white
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        <div className="relative group flex flex-col items-center w-full">

          <button
            className="
              absolute left-4 top-1/2 -translate-y-1/2 z-20
              w-12 h-12
              bg-yellow-500 hover:bg-yellow-400
              text-black
              rounded-full
              flex items-center justify-center
              text-3xl font-bold
              shadow-xl
            "
            onClick={() => window.aboutSlider.slidePrev()}
          >
            ❮
          </button>

          <button
            className="
              absolute right-4 top-1/2 -translate-y-1/2 z-20
              w-12 h-12
              bg-yellow-500 hover:bg-yellow-400
              text-black
              rounded-full
              flex items-center justify-center
              text-3xl font-bold
              shadow-xl
            "
            onClick={() => window.aboutSlider.slideNext()}
          >
            ❯
          </button>

          <div className="relative overflow-hidden w-full rounded-xl border-4 border-yellow-600 shadow-2xl">
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

          <div className="flex gap-3 mt-5">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => window.aboutSlider.slideToLoop(i)}
                className={`
                  w-4 h-4 cursor-pointer border-2
                  transition-all duration-300 rounded-full
                  ${activeIndex === i ? "bg-yellow-500 border-yellow-300" : "bg-gray-700 border-gray-500"}
                `}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative p-10 bg-black/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-800">

          <h2 className="text-5xl font-extrabold tracking-tight mb-4">
            QUIÉNES <span className="text-yellow-500">SOMOS</span>
          </h2>

          <div className="w-32 h-1 bg-yellow-600 mb-8"></div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Somos una empresa que ofrece servicios de transporte de pasajeros desde Chiquimula a Puerto Barrios y de Chiquimula a la Ciudad Capital de Guatemala, de igual manera prestamos el transporte de toda clase de mercadería dentro y fuera del país. Así mismo, realizamos maniobras para levantar contenedores cargados y remolque de toda clase de vehículos.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Se prestan los servicios de grúas telescópicas hasta de 115 toneladas para realizar trabajos de construcción en minerías, hidroeléctricas u otro tipo de fábricas, colocación de postes, cisternas, contenedores, etc. También contamos con los servicios de renta y venta de maquinaria de construcción y transporte.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-28 text-center">

        <h3 className="text-4xl font-bold">
          NUESTRA <span className="text-yellow-500">HISTORIA</span>
        </h3>

        <div className="w-20 h-1 mx-auto bg-yellow-600 mt-4 mb-12"></div>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          La empresa inició labores en el año de 1990, estableciéndose en el Kilómetro 137, Ruta al Atlántico del municipio de Rio Hondo del Departamento de Zacapa y con sucursal en el Kilómetro 245 en el municipio de Morales del departamento de Izabal, en donde cada día nos unimos y nos esforzamos para ofrecer más y mejores servicios, que se demuestran con más de 25 años de experiencia.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Contamos con un personal altamente calificado, asegurando así la satisfacción total de nuestros clientes, mediante el desarrollo de nuestro personal e innovación tecnológica constante.
        </p>
      </div>

<div className="grid md:grid-cols-2 gap-10 mt-28 max-w-7xl mx-auto">

<div className="group p-10 bg-yellow-600 text-black rounded-2xl shadow-xl border-2 border-yellow-700 hover:-translate-y-2 transition transform">
  <div className="flex items-center gap-4 mb-4">
    <FaBullseye className="text-4xl text-black group-hover:text-white transition-colors duration-300" />
    <h3 className="text-3xl font-bold">MISIÓN</h3>
  </div>
  <p className="text-lg leading-relaxed">
    Somos una empresa que se esmera por prestar los mejores servicios de transporte, grúas, renta y venta de maquinaria, satisfaciendo la exigencia de nuestros clientes.
  </p>
</div>


<div className="group p-10 bg-gray-800 text-white rounded-2xl shadow-xl border-2 border-gray-700 hover:-translate-y-2 transition transform">
  <div className="flex items-center gap-4 mb-4">
    <FaEye className="text-4xl text-yellow-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
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
