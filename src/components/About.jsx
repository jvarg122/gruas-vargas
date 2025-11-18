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

  return (
    <section
      id="quienes-somos"
      className="relative max-w-7xl mx-auto px-6 py-24 scroll-mt-20"
    >

      {/* REMOVED ORANGE SPOT */}

      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT IMAGE SLIDER IN SQUARE STYLE */}
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-br from-orange-500 to-orange-300 rotate-2 rounded-2xl"></div>

          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_-10px_rgba(0,0,0,0.4)] group-hover:scale-[1.03] transition-transform">
            <Swiper loop navigation modules={[Navigation]}>
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Imagen ${i + 1}`}
                    className="w-full h-[450px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* RIGHT SIDE – FULL TEXT BLOCK */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            <span className="text-orange-500">Quiénes</span> Somos
          </h2>

          <div className="w-28 h-1 bg-orange-400 rounded-full"></div>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed whitespace-pre-line">

Somos una empresa que ofrece servicios de transporte de pasajeros desde Chiquimula a la Ciudad Capital de Guatemala, de igual manera prestamos el transporte de toda clase de mercadería dentro y fuera del país. Así mismo, realizamos maniobras para levantar contenedores cargados y remolque de toda clase de vehículos.
<p></p>
<p></p>
Se prestan los servicios de grúas telescópicas hasta de 115 toneladas para realizar trabajos de construcción en minerías, hidroeléctricas u otro tipo de fábricas, colocación de postes, cisternas, contenedores, etc. También contamos con los servicios de renta y venta de maquinaria de construcción y transporte.
<p></p>
La empresa inició labores en el año de 1990, estableciéndose en el Kilómetro 137, Ruta al Atlántico del municipio de Rio Hondo del Departamento de Zacapa y con sucursal en el Kilómetro 245 en el municipio de Morales del departamento de Izabal, en donde cada día nos unimos y nos esforzamos para ofrecer más y mejores servicios, que se demuestran con más de 25 años de experiencia.
<p></p>
Contamos con un personal altamente calificado, asegurando así la satisfacción total de nuestros clientes, mediante el desarrollo de nuestro personal e innovación tecnológica constante.
          </div>
        </div>
      </div>

      {/* MISSION & VISION BELOW – FULL WIDTH */}
      <div className="grid md:grid-cols-2 gap-10 mt-20">

        {/* MISSION CARD */}
        <div className="p-10 bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl shadow-xl border border-orange-300/30 relative overflow-hidden">
          <FaBullseye className="absolute top-4 right-4 text-white/30 text-6xl" />
          <h3 className="text-3xl font-bold mb-4">MISIÓN</h3>
          <p className="leading-relaxed text-lg">
Somos una empresa que se esmera por prestar los mejores servicios de transporte, grúas, renta y venta de maquinaria, satisfaciendo la exigencia de nuestros clientes.
          </p>
        </div>

        {/* VISION CARD */}
        <div className="p-10 bg-gray-900 text-white rounded-2xl shadow-xl border border-gray-700 relative overflow-hidden">
          <FaEye className="absolute top-4 right-4 text-white/20 text-6xl" />
          <h3 className="text-3xl font-bold mb-4">VISIÓN</h3>
          <p className="leading-relaxed text-lg">
Ser la empresa líder del país en la prestación de servicio de transporte, manteniéndonos siempre en la vanguardia en calidad y tecnología, planificando minuciosamente los servicios de traslado y servicio en general.
          </p>
        </div>

      </div>

    </section>
  );
}
