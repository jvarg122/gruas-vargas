export default function NavigationTabs() {
  return (
    <>
      {/* STRIPES */}
      <div className="w-full mb-5">
        <div className="h-[10px] bg-orange-500"></div>
        <div className="h-[2px] bg-white"></div>
        <div className="h-[10px] bg-green-900"></div>
        <div className="h-[2px] bg-white"></div>
        <div className="h-[10px] bg-lime-500"></div>
      </div>

{/* GREEN NAV BAR */}
<div className="w-full bg-green-900 py-3 relative">
  {/* PBX/FAX badge top-right, large bold rounded with black text */}
  <div className="absolute right-6 -top-6 bg-yellow-400 text-black font-extrabold text-lg px-6 py-3 flex flex-col items-center rounded-2xl" style={{ fontFamily: "Oswald, sans-serif" }}>
    <span>PBX: (502) 7934-0541</span>
  </div>

  {/* Nav links */}
  <div className="max-w-6xl mx-auto flex justify-center gap-10 text-white font-bold text-sm tracking-wide">
    <a href="/gruas-montacargas" className="hover:text-gray-300 transition">
      GRÚAS Y MONTACARGAS
    </a>
    <a href="/equipo-transporte" className="hover:text-gray-300 transition">
      EQUIPO DE TRANSPORTE
    </a>
    <a href="/trabajos-especializados" className="hover:text-gray-300 transition">
      TRABAJOS ESPECIALIZADOS
    </a>
    <a href="/alquiler-equipo" className="hover:text-gray-300 transition">
      ALQUILERES Y EQUIPO DISPONIBLE
    </a>
  </div>
</div>


    </>
  );
}
