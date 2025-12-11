export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Softer dark green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#003b2c]/70 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-2xl px-6 md:pl-20">
        {/* Top badge */}
        <p className="text-green-400 font-semibold tracking-widest uppercase drop-shadow">
          Grúas Vargas
        </p>

        {/* Main title */}
        <h1 className="text-white font-extrabold text-5xl md:text-6xl leading-tight drop-shadow-lg">
          ¡Eficiencia, garantía y cumplimiento!
        </h1>

        <p className="text-green-300 mt-4 font-semibold text-2xl drop-shadow">
          ¡Atención de calidad e inmediata!
        </p>

        {/* Description */}
        <p className="text-white/90 mt-6 leading-relaxed max-w-lg drop-shadow">
          Servicio de grúas, asistencia vial y transporte pesado en toda Guatemala.
          Contáctanos para apoyo urgente y soluciones confiables.
        </p>

        {/* Button */}
        <button className="
          mt-8 bg-green-600 hover:bg-green-700 
          text-white font-semibold 
          px-8 py-3 
          rounded-xl shadow-lg shadow-black/30 
          transition-all
        ">
          Contáctanos ahora
        </button>
      </div>
    </section>
  );
}
