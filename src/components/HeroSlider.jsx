import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const slides = [
  { img: "/images/slider1.jpg", text: "Asistencia 24/7 en carretera" },
  { img: "/images/slider2.jpg", text: "Rápido, seguro y profesional" },
  { img: "/images/slider3.jpg", text: "Tu confianza, nuestra prioridad" },
];

export default function HeroSlider() {
  const [animate, setAnimate] = useState(false);

  return (
    <section id="inicio" className="mt-16 relative">

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Overlay box top-right */}
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

{/* Crane logo overlapping outside the top of the slider */}
<div
  className="absolute z-30 flex flex-col items-center cursor-pointer"
  style={{
    left: "40px",  // horizontal position from the left
    top: "-90px",  // negative value moves it above the slider
  }}
  onClick={() => setAnimate(!animate)}
>
  {/* Stationary base */}
  <img
    src="/images/logo1.png"
    alt="logo base"
    className="h-48 md:h-64 w-auto drop-shadow-xl"
  />

  {/* Moving crane arm */}
  <img
    src="/images/logo2.png"
    alt="crane arm"
    className={`
      h-48 md:h-64 w-auto 
      absolute top-0 
      drop-shadow-xl
      ${animate ? "float-animation" : ""}
    `}
  />
</div>

      {/* Slider */}
      <Swiper
        loop
        autoplay={{ delay: 3000 }}
        navigation
        modules={[Autoplay, Navigation]}
        className="z-10"
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
      </Swiper>
    </section>
  );
}
