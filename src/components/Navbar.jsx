import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white text-black shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-6 h-24">
        {/* Logo + Text Logo */}
        <Link to="/" className="flex items-center gap-3 relative">
          {/* Main Logo */}
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-20 w-auto z-10"
          />

          {/* Text Logo (very large) */}
          <img
            src="/images/gruas-vargas-text.png"
            alt="Gruas Vargas"
            className="h-60 w-auto -mt-20 -mb-16 z-10"
          />
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 flex items-center h-full">
          <a
            href="#inicio"
            className="font-bold uppercase hover:text-gray-600 transition"
          >
            Inicio
          </a>
          <a
            href="#quienes-somos"
            className="font-bold uppercase hover:text-gray-600 transition"
          >
            Quiénes Somos
          </a>
          <a
            href="#servicios"
            className="font-bold uppercase hover:text-gray-600 transition"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="font-bold uppercase hover:text-gray-600 transition"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
