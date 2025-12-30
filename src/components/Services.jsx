import {
  FaRoadCircleCheck,
  FaBus
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Servicios() {
  const servicios = [
    { nombre: "Grúas Telescopicas", icon: "/images/hydraulic-crane.png" },
    { nombre: "Grúas de Remolque", icon: "/images/tow-truck.png" },
    { nombre: "Montacargas", icon: "/images/loader.png" },
    { nombre: "Maquinaria", icon: "/images/excavator.png" },
    { nombre: "Camiónes con Lowboys y Rastras", icon: "/images/lowboy.png" },
    { nombre: "Accesorios", icon: "/images/jackhammer.png" },
    {
      nombre: "Asistencia en Ruta 24/7",
      icon: (
        <FaRoadCircleCheck className="text-5xl text-black group-hover:text-green-600 transition-colors duration-300" />
      ),
    },
    {
      nombre: "Buses",
      icon: (
        <FaBus className="text-5xl text-black group-hover:text-green-600 transition-colors duration-300" />
      ),
    },
  ];

  return (
    <section id="servicios" className="bg-gray-50 text-gray-800 px-6 pb-0">

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
          Servicios
        </h1>
      </section>

    
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          NUESTROS SERVICIOS
        </h3>

        <h2 className="text-4xl font-extrabold text-black mb-4">
          Soluciones disponibles
        </h2>

        <div className="w-12 h-[3px] bg-green-600 mx-auto mb-6"></div>

        <p className="text-gray-600">
          <span className="font-semibold text-black">Grúas Vargas S.A.</span> es una empresa especializada en
          la renta de <span className="font-semibold text-black">grúas telescópicas y de remolque</span>, transporte pesado y maquinaria
          para construcción: excavadoras, retroexcavadores, montacargas y más. Contamos con un personal profesional, altamente capacitado y comprometido con la excelencia.
        </p>
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {servicios.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group flex flex-col items-center justify-center bg-white border border-gray-200 rounded-2xl py-8 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            
            <div className="mb-4">
              {typeof s.icon === "string" ? (
                <div
                  className="
                    w-16 h-16
                    bg-black
                    group-hover:bg-green-600
                    transition-colors duration-300
                  "
                  style={{
                    WebkitMaskImage: `url(${s.icon})`,
                    maskImage: `url(${s.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
              ) : (
                s.icon
              )}
            </div>

          
            <p className="font-semibold text-center text-gray-800 group-hover:text-green-600 transition-colors duration-300">
              {s.nombre}
            </p>
          </motion.div>
        ))}
      </div>

    
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-black">
            LO QUE NOS HACE DIFERENTES
          </h3>
          <div className="w-10 h-1 bg-green-600 mt-2 mb-4"></div>
          <p className="text-gray-600">
            En Grúas Vargas brindamos servicios de calidad, rapidez y seguridad a nuestros clientes.
          </p>
        </div>

        <div className="text-gray-700">
          <ul className="space-y-2 list-disc list-inside">
            <li>Transportar vehículos y maquinaria de manera segura y puntual</li>
            <li>Asistencia en ruta rápida y confiable 24/7</li>
            <li>Equipo moderno y en excelente estado</li>
            <li>Operadores con experiencia real en grúas y transporte pesado</li>
            <li>Responsabilidad, honestidad y compromiso</li>
            <li>Soluciones eficientes que apoyan el desarrollo del país</li>
          </ul>
        </div>
      </div>
      

      <div
        className="
          w-screen relative left-1/2 right-1/2
          -ml-[50vw] -mr-[50vw]
          mt-24 mb-0
        "
      >
        <div
          className="relative w-full min-h-[420px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/service-bgs.png')" }}
        >

          
          <div className="relative max-w-6xl mx-auto px-6 py-20">
            <div className="relative max-w-xl text-white">

              
              <div className="absolute -top-6 left-8 bg-green-600 text-black px-4 py-2 text-xs font-bold tracking-widest">
                Satisfacción
              </div>

              <div className="border border-white/20 p-10 bg-black/80">

                
                <div className="flex items-center gap-8 mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-green-600 flex items-center justify-center text-4xl font-black">
                    “
                  </div>

                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-600 text-black text-sm font-bold">
                      5.0
                    </span>
                    <span className="px-3 py-1 border border-white/30 text-sm">
                      EXCELENCIA
                    </span>
                  </div>
                </div>

                
                <p className="text-xl leading-relaxed text-white/90">
                  La calidad en un producto o servicio no es lo que tú le pones…
                  <span className="text-green-400 font-semibold">
                    {" "}sino lo que el cliente obtiene.
                  </span>
                </p>

              
                <div className="mt-10 flex items-center gap-4">

                  <p className="font-bold tracking-wide">
                  — Peter Drucker
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
