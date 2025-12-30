export default function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-end bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-green-900/50 to-transparent"></div>

      <div className="relative max-w-2xl px-6 md:px-12 lg:px-20 text-right flex flex-col justify-center">
      
        <p className="text-green-400 font-semibold tracking-widest uppercase drop-shadow mb-2">
          GRÚAS VARGAS
        </p>

        <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-snug drop-shadow-lg mb-4">
          ¡Eficiencia, garantía y cumplimiento!
        </h1>

        <p className="text-green-300 font-semibold text-xl md:text-2xl drop-shadow mb-6">
          ¡Atención de calidad e inmediata!
        </p>

        <p className="text-white/90 leading-relaxed max-w-lg drop-shadow mb-8">
          Contamos con grúas de alta capacidad, transporte especializado y asistencia vial inmediata.
          Garantía de seguridad y soluciones confiables en cada proyecto.
        </p>

        <button 
        onClick={() => {
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="
          bg-green-600 hover:bg-green-700 
          text-white font-semibold 
          px-6 py-2  /* reduced from px-8 py-3 */
          text-sm       /* optional: smaller text */
          rounded-xl shadow-lg shadow-black/30 
          transition-all
        ">
          Contáctanos ahora
        </button>
      </div>
    </section>
  );
}
