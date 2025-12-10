export default function Hero() {
  return (
<section
  className="relative min-h-[70vh] flex items-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/hero-bg.jpg')",
    backgroundAttachment: "fixed",
  }}
>
  {/* dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#00271f]/95 via-[#003b2c]/80 to-transparent"></div>

  <div className="relative max-w-xl pl-20">
    <p className="text-orange-500 font-semibold tracking-widest uppercase">
      Grúas Vargas
    </p>

    <h1 className="text-white font-bold text-5xl leading-tight">
      ¡Eficiencia, garantía y cumplimiento!
    </h1>

    <p className="text-orange-500 mt-4 font-bold text-2xl">
      ¡Atención de calidad e inmediata!
    </p>

    <p className="text-white/90 mt-6 leading-relaxed">
      Servicio de grúas, asistencia vial, y remolque en toda Guatemala.
      contáctanos para apoyo urgente y soluciones confiables.
    </p>

    <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded">
      Contáctanos ahora
    </button>
  </div>
</section>

  );
}
