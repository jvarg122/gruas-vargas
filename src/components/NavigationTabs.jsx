import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function NavigationTabs() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const hoverTimeout = useRef(null);

  const links = [
    { name: "GRÚAS", slug: "gruas", hasDropdown: true },
    { name: "MONTACARGAS", slug: "montacargas", hasDropdown: true },
    { name: "CAMIONES CON RASTRAS Y LOWBOYS", slug: "camionesconrastrasylowboys", hasDropdown: true },
    { name: "MAQUINARIA", slug: "maquinaria", hasDropdown: true },
    { name: "ACCESORIOS", slug: "accesorios", hasDropdown: false },
  ];

  const handleMouseEnter = (i) => {
    clearTimeout(hoverTimeout.current);
    setHoverDropdown(i);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoverDropdown(null);
    }, 300);
  };

  return (
    <>
    
      <nav className="w-full bg-green-600 text-white shadow-md relative z-50 md:relative md:top-auto sticky top-0">

    
      <div
        className="
          absolute right-4 
          -top-14 md:-top-20 
          bg-yellow-400 text-black font-extrabold text-lg 
          px-6 py-3 flex flex-col items-center
          rounded-2xl shadow-xl
        "
        style={{ fontFamily: "Oswald, sans-serif" }}
      >
        <span>PBX: (502) 7934-0541</span>
      </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-2">
      
          <div className="hidden md:flex gap-8 font-medium justify-center w-full">
            {links.map((link, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                {link.hasDropdown ? (
                  <button className="flex items-center gap-1 hover:text-gray-200 transition">
                    {link.name}
                    <FiChevronDown className="text-sm mt-[1px]" />
                  </button>
                ) : (
                  <Link
                    className="hover:text-gray-200 transition"
                    to={`/${link.slug}`}
                  >
                    {link.name}
                  </Link>
                )}

            
                {link.hasDropdown && hoverDropdown === i && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 z-50">
                    <div
                      className="
                        bg-green-500 shadow-xl rounded-xl w-64
                        animate-fadeSlide
                      "
                    >
                      <div className="p-4 flex flex-col gap-3">
                        <Link
                          to={`/${link.slug}/venta`}
                          className="hover:bg-green-600 p-2 rounded-md transition font-semibold text-sm"
                        >
                          VENTA DE {link.name}
                        </Link>
                        <Link
                          to={`/${link.slug}/renta`}
                          className="hover:bg-green-600 p-2 rounded-md transition font-semibold text-sm"
                        >
                          RENTA DE {link.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl text-white self-end"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        
        {mobileOpen && (
          <div className="md:hidden bg-green-600 border-t border-green-700 px-6 py-4 flex flex-col gap-4 shadow-inner text-white sticky top-0 z-50">
            {links.map((link, i) => (
              <div key={i} className="w-full">
                <button
                  className="flex justify-between items-center w-full font-semibold py-2"
                  onClick={() =>
                    setOpenDropdown(openDropdown === i ? null : i)
                  }
                >
                  {link.name}
                  {link.hasDropdown && (
                    <FiChevronDown
                      className={`transition ${openDropdown === i ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {link.hasDropdown && openDropdown === i && (
                  <div className="ml-3 mt-1 flex flex-col gap-2 pb-3">
                    <Link
                      to={`/${link.slug}/venta`}
                      className="text-sm hover:text-gray-200"
                    >
                      VENTA DE {link.name}
                    </Link>
                    <Link
                      to={`/${link.slug}/renta`}
                      className="text-sm hover:text-gray-200"
                    >
                      RENTA DE {link.name}
                    </Link>
                  </div>
                )}

                {!link.hasDropdown && (
                  <Link
                    to={`/${link.slug}`}
                    className="text-sm ml-1 block hover:text-gray-200"
                  >
                    Ir a {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.18s ease-out;
        }
      `}</style>
    </>
  );
}
