export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative bg-cover bg-center py-16 text-center text-white"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Contáctanos</h2>
        <p className="mb-8 text-lg">
          Llámanos al <b>(+502) 7934-0541</b> o envíanos un mensaje y te responderemos pronto.
        </p>

        <form className="max-w-xl mx-auto grid gap-4">
          <input
            type="text"
            placeholder="Nombre"
            className="border p-3 rounded text-black"
            required
          />
          <input
            type="email"
            placeholder="Correo"
            className="border p-3 rounded text-black"
            required
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            className="border p-3 rounded text-black"
            required
          ></textarea>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
