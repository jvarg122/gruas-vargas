import { Link } from "react-router-dom";

export default function NavigationTabs() {
  const links = [
    { name: "GRÚAS", slug: "gruas", hasDropdown: true },
    { name: "MONTACARGAS", slug: "montacargas", hasDropdown: true},
    { name: "CAMIONES", slug: "camiones", hasDropdown: true },
    { name: "MAQUINARIA", slug: "maquinaria", hasDropdown: true },
    { name: "RASTRAS Y LOWBOYS", slug: "rastras-lowboys", hasDropdown: true },
    { name: "ACCESORIOS", slug: "accesorios", hasDropdown: false },
  ];

  return (
    <>
      <div className="w-full mb-5">
        <div className="h-[10px] bg-orange-500"></div>
        <div className="h-[2px] bg-white"></div>
        <div className="h-[10px] bg-green-900"></div>
        <div className="h-[2px] bg-white"></div>
        <div className="h-[10px] bg-green-700"></div>
      </div>

      <div className="w-full bg-green-900 py-3 relative">
        
        <div
          className="absolute right-6 -top-6 bg-yellow-400 text-black font-extrabold text-lg px-6 py-3 flex flex-col items-center rounded-2xl"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          <span>PBX: (502) 7934-0541</span>
        </div>

        <div className="max-w-6xl mx-auto flex items-center justify-center gap-10 text-white font-bold text-sm tracking-wide relative">

          {links.map((link, i) => (
            <div key={i} className="relative group">

              {link.hasDropdown ? (
                <button className="hover:text-gray-300 transition cursor-pointer">
                  {link.name}
                </button>
              ) : (
                <Link
                  to={`/${link.slug}`}
                  className="hover:text-gray-300 transition"
                >
                  {link.name}
                </Link>
              )}

              {i !== links.length - 1 && (
                <span className="absolute -right-5 top-0 text-white/60">|</span>
              )}

              {link.hasDropdown && (
                <div
                  className="
                    absolute left-0 top-full
                    hidden group-hover:block
                    bg-green-900 text-white
                    rounded-md shadow-lg w-56 z-50
                    border border-green-700
                    overflow-hidden
                    pt-2
                  "
                >
                  <Link
                    to={`/${link.slug}/venta`}
                    className="block px-4 py-3 hover:bg-green-800 transition font-semibold"
                  >
                    VENTA DE {link.name.toUpperCase()}
                  </Link>

                  <div className="h-[1px] bg-white/70 w-full"></div>

                  <Link
                    to={`/${link.slug}/renta`}
                    className="block px-4 py-3 hover:bg-green-800 transition font-semibold"
                  >
                    RENTA DE {link.name.toUpperCase()}
                  </Link>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
