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
  return (
    <section id="inicio" className="mt-16 relative">
      {/* ✅ Overlay text in top-right corner */}
      <div className="absolute top-6 right-6 z-20 bg-black/60 text-white p-4 rounded-lg max-w-sm text-right uppercase font-bold leading-snug">
        VENTA DE TODO TIPO DE MAQUINARIA,
        <br />
        SERVICIO DE GRÚAS TELESCÓPICAS
        <br />
        Y REMOLQUE
      </div>

      {/* ✅ The slider */}
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
              className="h-[85vh] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="bg-black/50 p-6 rounded-xl">{s.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
