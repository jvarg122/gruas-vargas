import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { img: "/images/slider1.jpg", text: "Asistencia 24/7 en carretera" },
  { img: "/images/slider2.jpg", text: "Rápido, seguro y profesional" },
  { img: "/images/slider3.jpg", text: "Tu confianza, nuestra prioridad" },
];

export default function HeroSlider() {
  return (
    <section id="inicio" className="mt-16 relative">

      <div
        className="
          absolute top-4 right-4 z-20 
          bg-black/70 text-white 
          px-24 py-12 text-center 
          uppercase font-bold text-[17px] 
          whitespace-nowrap shadow-xl
        "
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        VENTA DE TODO TIPO DE MAQUINARIA, SERVICIO DE GRÚAS TELESCÓPICAS Y REMOLQUE
      </div>

    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 z-30">
      <a
        href="#contacto"
        className="
          bg-transparent
          text-white font-semibold 
          w-[340px]
          h-[80px]
          flex items-center justify-center
          text-center
          border-2 border-white
          rounded-none
          shadow-xl
          transition-all duration-200

          hover:bg-green-900/90    
          hover:border-green-900     
          text-[20px]
        "
      >
        Cotice o realice su solicitud aquí
      </a>
    </div>

      <Swiper
        loop
        autoplay={{ delay: 3000 }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="z-10 relative"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[85vh] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div
                className="
                  bg-black/70 text-white px-14 py-8 
                  text-center uppercase font-bold 
                  text-[40px] leading-[60px] shadow-xl
                "
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {s.text}
              </div>
            </div>
          </SwiperSlide>
        ))}

<div className="custom-prev absolute top-0 left-0 h-full z-20 flex items-center">
  <div className="group relative h-24 w-10 flex items-center justify-center cursor-pointer">
    
    <svg
      className="w-3 h-5 z-10"
      viewBox="0 0 8 12"
      fill="none"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="butt" 
      strokeLinejoin="miter"
    >
      <polyline points="6,1 2,6 6,11" />
    </svg>

    
    <div className="absolute top-0 left-0 h-full w-full bg-green-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
  </div>
</div>

<div className="custom-next absolute top-0 right-0 h-full z-20 flex items-center">
  <div className="group relative h-24 w-10 flex items-center justify-center cursor-pointer">
    
    <svg
      className="w-3 h-5 z-10"
      viewBox="0 0 8 12"
      fill="none"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="butt"
      strokeLinejoin="miter"
    >
      <polyline points="2,1 6,6 2,11" />
    </svg>

    <div className="absolute top-0 left-0 h-full w-full bg-green-900 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
  </div>
</div>

      </Swiper>
    </section>
  );
}
