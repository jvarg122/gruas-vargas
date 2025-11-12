export default function Navbar() {
  return (
    <header className="bg-white text-black py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          GRUAS <span className="text-orange-500">VARGAS</span>
        </h1>
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
