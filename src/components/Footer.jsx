export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Gruas Vargas. Todos los derechos
        reservados, powered by{" "}
        <span className="text-red-500 font-semibold">J&amp;A</span>
      </p>
    </footer>
  );
}
