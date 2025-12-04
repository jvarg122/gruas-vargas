import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white text-black py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">

        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Gruas Vargas Logo"
            className="h-20 w-auto" 
          />

          <span className="text-2xl font-bold tracking-wide flex items-center">
            <span className="text-green-700">GRUAS</span>&nbsp;
            <span className="text-orange-500">VARGAS</span>
          </span>
        </Link>

        <nav className="space-x-6">
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
