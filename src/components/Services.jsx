import {
  FaTruckMoving,
  FaTrailer,
  FaBoxesPacking,
  FaRoadCircleCheck,
  FaBus,
  FaTractor
} from "react-icons/fa6";

export default function Servicios() {
  const servicios = [
    {
      nombre: "Grúas Telescopicas",
      icon: (
        <img
          src="/images/hydraulic-crane.png"
          alt="Grúas Telescopicas"
          className="w-16 h-16 icon-img"
        />
      )
    },
    {
      nombre: "Grúas de Remolque",
      icon: (
        <img
          src="/images/tow-truck.png"
          alt="Grúas de Remolque"
          className="w-16 h-16 icon-img"
        />
      )
    },
    {
      nombre: "Montacargas",
      icon: (
        <img
          src="/images/loader.png"
          alt="Montacargas"
          className="w-16 h-16 icon-img"
        />
      )
    },
    { nombre: "Maquinaria", icon: <FaTractor className="text-4xl" /> },
    { nombre: "Camiónes con Lowboys y Rastras", icon: <FaTrailer className="text-4xl" /> },
    { nombre: "Accesorios", icon: <FaBoxesPacking className="text-4xl" /> },
    { nombre: "Asistencia en Ruta 24/7", icon: <FaRoadCircleCheck className="text-4xl" /> },
    { nombre: "Buses", icon: <FaBus className="text-4xl" /> },
  ];

  return (
    <section id="servicios" className="bg-white text-black px-6 py-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">NUESTROS SERVICIOS</h2>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-3"></div>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600">
          <span className="font-semibold text-green-600">Grúas Vargas S.A</span> es una empresa que se especializa en la venta de
          <span className="font-semibold text-green-600"> cabezales y maquinaria para construcción</span>:
          excavadoras, retroexcavadores, patroles, rodos, montacargas y otros.
          Contamos con un personal profesional y altamente capacitado, dedicado a
          brindarle un servicio con los más altos estándares de calidad.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {servicios.map((s, i) => (
          <div
            key={i}
            className="group flex flex-col items-center justify-center border rounded-xl py-10 hover:shadow-lg transition-shadow duration-200"
          >
            <div className="mb-4 text-black transition-colors duration-200 group-hover:text-green-600">
              {s.icon}
            </div>
            <p className="font-semibold text-center">{s.nombre}</p>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold">LO QUE NOS HACE DIFERENTES</h3>
          <div className="w-10 h-1 bg-green-600 mt-2 mb-4"></div>
          <p className="text-gray-600">
            En Grúas Vargas brindamos servicios de calidad, rapidez y seguridad a nuestros clientes.
          </p>
        </div>

        <div className="text-gray-700">
          <ul className="space-y-2">
            <li>• Transportar vehículos y maquinaria de manera segura y puntual</li>
            <li>• Asistencia en ruta rápida y confiable 24/7</li>
            <li>• Equipo moderno y en excelente estado</li>
            <li>• Operadores con experiencia real en grúas y transporte pesado</li>
            <li>• Responsabilidad, honestidad y compromiso</li>
            <li>• Soluciones eficientes que apoyan el desarrollo del país</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
