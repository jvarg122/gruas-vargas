import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-black shadow-md relative z-50">   
    
      <div className="container mx-auto flex justify-between items-center px-6 py-3 md:py-4 h-auto">
      

    <Link to="/" className="flex items-center gap-6 relative">
      <img
        src="/images/logo.png"
        alt="Logo"
        className="h-20 md:h-24 w-auto"
      />
        <h1
          className="
            text-4xl md:text-6xl font-extrabold uppercase tracking-wider
            text-green-600 relative relative ml-3
          "
          style={{
            textShadow: `
              0.5px 0.5px 0 #FF6D00,
              1px 1px 0 #FF6D00,
              1.5px 1.5px 0 #FF6D00,
              2px 2px 0 #FF6D00,
              2.5px 2.5px 0 #FF6D00,
              3px 3px 0 #FF6D00,
              3.5px 3.5px 0 #FF6D00,
              4px 4px 0 #FF6D00,
              4.5px 4.5px 0 #FF6D00,
              5px 5px 0 #FF6D00
            `
          }}
        >
          GRUAS VARGAS
        </h1>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#inicio" className="font-bold uppercase hover:text-gray-600 transition">
            Inicio
          </a>
          <a href="#quienes-somos" className="font-bold uppercase hover:text-gray-600 transition">
            Quiénes Somos
          </a>
          <a href="#servicios" className="font-bold uppercase hover:text-gray-600 transition">
            Servicios
          </a>
          <a href="#contacto" className="font-bold uppercase hover:text-gray-600 transition">
            Contacto
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-8 bg-black transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span className={`block h-1 w-8 bg-black transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
          <span
            className={`block h-1 w-8 bg-black transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a
              href="#inicio"
              className="font-bold uppercase hover:text-gray-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#quienes-somos"
              className="font-bold uppercase hover:text-gray-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Quiénes Somos
            </a>
            <a
              href="#servicios"
              className="font-bold uppercase hover:text-gray-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="font-bold uppercase hover:text-gray-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </div>
        </nav>
      )}

      <div className="w-full mb-5">
        <div className="h-[10px] bg-orange-500"></div>
        <div className="h-[2px] bg-white"></div>
        <div className="h-[10px] bg-green-900"></div>
        <div className="h-[2px] bg-white"></div>
        <div className="h-[10px] bg-green-700"></div>
      </div>
    </header>
  );
}
