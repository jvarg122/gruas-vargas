import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaBullseye, FaEye, FaHardHat } from "react-icons/fa";
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
        px-6 py-28 pb-0
        scroll-mt-20 
        bg-gradient-to-t from-white via-[#f7f7f7] to-[#e9eef5]
        text-[#333]
      "
    >
      {/* -------------------------------------- */}
      {/*               TOP ROW                   */}
      {/* -------------------------------------- */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-stretch">

        {/* ---------------- SLIDER ---------------- */}
        <div className="relative w-full h-[500px] shadow-2xl overflow-hidden rounded-none">

          {/* Left Arrow */}
          <button
            className="
              absolute left-4 top-1/2 -translate-y-1/2 z-30
              w-12 h-12
              bg-black hover:bg-yellow-400
              text-yellow-400 hover:text-black
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
              absolute right-4 top-1/2 -translate-y-1/2 z-30
              w-12 h-12
              bg-black hover:bg-yellow-400
              text-yellow-400 hover:text-black
              flex items-center justify-center
              text-3xl font-bold
              shadow-md
            "
            onClick={() => window.aboutSlider.slideNext()}
          >
            ❯
          </button>

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
                  className="w-full h-[500px] object-cover rounded-none"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider Dots */}
          <div className="flex gap-3 mt-4 justify-center absolute bottom-[-40px] left-1/2 -translate-x-1/2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => window.aboutSlider.slideToLoop(i)}
                className={`
                  w-4 h-4 cursor-pointer 
                  transition-all duration-300
                  ${activeIndex === i ? "bg-yellow-500" : "bg-gray-400"}
                `}
              ></div>
            ))}
          </div>
        </div>

        {/* ---------------- QUIENES SOMOS ---------------- */}
        <div className="relative p-12 bg-white shadow-2xl border-l-8 border-black">

          {/* Yellow Vertical Bar Behind Title */}
          <div className="absolute left-0 top-0 h-full w-3 bg-yellow-400"></div>

          {/* Title */}
          <div className="mb-10 relative pl-6">
            <h2 className="text-5xl font-extrabold tracking-tight text-black leading-none">
              QUIÉNES
            </h2>

            <h2 className="text-5xl font-extrabold tracking-tight text-yellow-400 leading-none">
              SOMOS
            </h2>

            {/* Yellow underline */}
            <div className="w-20 h-1 bg-yellow-400 mt-4"></div>
          </div>

          <p className="text-lg leading-relaxed mb-6 text-gray-500">
            Somos una empresa que ofrece servicios de transporte de pasajeros desde Chiquimula a Puerto Barrios y de Chiquimula a la Ciudad Capital de Guatemala, así como transporte de todo tipo de mercadería.
          </p>

          <p className="text-lg leading-relaxed text-gray-500">
            También prestamos servicios de grúas telescópicas hasta de 115 toneladas, renta y venta de maquinaria, maniobras, remolques y más.
          </p>

        </div>
      </div>

      {/* -------------------------------------- */}
      {/*               HISTORIA                 */}
      {/* -------------------------------------- */}

      <div className="max-w-5xl mx-auto mt-40 text-center text-[#333]">

        {/* Diamond with PNG inside — same as Misión / Visión */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 bg-[#f4b400] rotate-45 flex items-center justify-center">
            <img
              src="/images/history-icon.png"
              alt="Icon"
              className="w-30 h-30 -rotate-45"
            />
          </div>
        </div>

        <h3 className="text-4xl font-extrabold tracking-wide">
          NUESTRA <span className="text-yellow-400">HISTORIA</span>
        </h3>

        <div className="w-24 h-2 mx-auto bg-yellow-400 mt-4 mb-12"></div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[Poppins] text-lg leading-relaxed text-gray-500">
            La TEST empresa inició labores en el año de 1990, estableciéndose en el Kilómetro 137, Ruta al Atlántico del municipio de Rio Hondo del Departamento de Zacapa y con sucursal en el Kilómetro 245 en el municipio de Morales del departamento de Izabal, en donde cada día nos unimos y nos esforzamos para ofrecer más y mejores servicios, que se demuestran con más de 25 años de experiencia.
          </p>
        </div>
      </div>


      {/* ---------------------------------------------------------- */}
      {/*        MISIÓN / VISIÓN / NUESTRO EQUIPO GRID             */}
      {/* ---------------------------------------------------------- */}

      <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] mt-12 
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">

        {/* === MISIÓN === */}
        <div className="bg-black text-white px-10 py-20 flex flex-col items-center justify-start min-h-[600px] group">
          <div className="w-32 h-32 bg-yellow-400 rotate-45 flex items-center justify-center mb-8">
            <FaBullseye
              className="-rotate-45 text-5xl text-black transition-all duration-300 group-hover:text-white"
            />
          </div>

          <h3 className="text-4xl font-bold mb-4 tracking-wide">MISIÓN</h3>
          <p className="font-[Open_Sans] text-2xl tracking-wide text-white text-center min-h-[160px]">
            Somos una empresa que se esmera por prestar los mejores servicios de transporte, grúas, renta y venta de maquinaria, satisfaciendo la exigencia de nuestros clientes.
          </p>
        </div>

        {/* === VISIÓN === */}
        <div className="bg-yellow-500 text-black px-10 py-20 flex flex-col items-center justify-start min-h-[600px] group">
          <div className="w-32 h-32 bg-black rotate-45 flex items-center justify-center mb-8">
            <FaEye
              className="-rotate-45 text-5xl text-yellow-400 transition-all duration-300 group-hover:text-white"
            />
          </div>

          <h3 className="text-4xl font-bold mb-4 tracking-wide">VISIÓN</h3>
          <p className="font-[Open_Sans] text-2xl tracking-wide text-black text-center min-h-[160px]">
            Ser la empresa líder del país en la prestación de servicio de transporte, manteniéndonos siempre en la vanguardia en calidad y tecnología, planificando minuciosamente los servicios de traslado y servicio en general.
          </p>
        </div>

        {/* === NUESTRO EQUIPO === */}
        <div className="bg-black text-white px-10 py-20 flex flex-col items-center justify-start min-h-[600px] group">
          <div className="w-32 h-32 bg-yellow-400 rotate-45 flex items-center justify-center mb-8 transition-all duration-300">
            <FaHardHat className="-rotate-45 text-5xl text-black transition-all duration-300 group-hover:text-white" />
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
