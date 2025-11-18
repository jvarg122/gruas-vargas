export default function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contacto"
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 py-12">
          {/* Title */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-paper-plane text-4xl text-orange-500"></i>
              <span className="text-3xl md:text-4xl font-bold text-orange-500 relative inline-block">
                CONTÁCTENOS
                {/* small centered underline */}
                <span className="absolute left-1/2 -bottom-1 w-12 h-1 bg-orange-500 -translate-x-1/2 rounded"></span>
              </span>
            </div>
            <p className="text-base md:text-lg mt-2">
              Envía tu mensaje y nuestro equipo se pondrá en contacto contigo para brindarte la mejor asistencia.
            </p>
          </div>

          {/* Info + Form Grid */}
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            {/* Left: Contact Info */}
            <div className="md:w-1/2 flex flex-col gap-1 text-base md:text-lg font-semibold leading-tight max-h-[500px] overflow-auto">
              {/* DIRECCIÓN label larger with small orange underline */}
              <p className="uppercase text-2xl inline-block border-b-2 border-orange-500 pb-1 mb-1">
                DIRECCIÓN
              </p>

              <p className="flex items-start gap-2 text-lg">
                <i className="fa-solid fa-location-dot text-orange-500 text-2xl"></i> Carretera Al Atlántico Km 137, Río Hondo Zacapa
              </p>
              <p className="flex items-center gap-2 text-lg">
                <i className="fa-solid fa-phone text-orange-500 text-2xl"></i> TEL: (+502) 5865-3835
              </p>
              <p className="flex items-center gap-2 text-lg">
                <i className="fa-solid fa-phone text-orange-500 text-2xl"></i> PBX: (+502) 7934-0541
              </p>
              <p className="flex items-center gap-2 text-lg">
                <i className="fa-solid fa-envelope text-orange-500 text-2xl"></i>
                <a href="mailto:gruasvargaszacapa@yahoo.es" className="text-white">gruasvargaszacapa@yahoo.es</a>
              </p>
            </div>

            {/* Right: Form */}
            <form className="md:w-1/2 bg-white text-black rounded shadow-md p-4 md:p-6 space-y-3 max-h-[500px] overflow-auto">
              {/* Nombre + Email */}
              <div className="flex gap-2">
                <div className="flex-1 flex items-center border rounded overflow-hidden">
                  <i className="fa-solid fa-user text-gray-400 px-2 text-xl"></i>
                  <input type="text" placeholder="Nombre *" className="flex-1 p-2 outline-none" required />
                </div>
                <div className="flex-1 flex items-center border rounded overflow-hidden">
                  <i className="fa-solid fa-envelope text-gray-400 px-2 text-xl"></i>
                  <input type="email" placeholder="E-mail *" className="flex-1 p-2 outline-none" required />
                </div>
              </div>

              {/* Teléfono + Asunto */}
              <div className="flex gap-2">
                <div className="flex-1 flex items-center border rounded overflow-hidden">
                  <i className="fa-solid fa-phone text-gray-400 px-2 text-xl"></i>
                  <input type="text" placeholder="Teléfono *" className="flex-1 p-2 outline-none" required />
                </div>
                <div className="flex-1 flex items-center border rounded overflow-hidden">
                  <i className="fa-solid fa-tag text-gray-400 px-2 text-xl"></i>
                  <input type="text" placeholder="Asunto" className="flex-1 p-2 outline-none" />
                </div>
              </div>

              {/* Mensaje */}
              <div className="flex items-start border rounded overflow-hidden">
                <i className="fa-solid fa-comment text-gray-400 px-2 pt-2 text-xl"></i>
                <textarea placeholder="Mensaje *" rows={3} className="flex-1 p-2 outline-none" required></textarea>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.0915179029575!2d-89.5826777241204!3d15.04305346608957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6189f38c8abab7%3A0x4303b08347b75b6b!2sGr%C3%BAas%20Vargas!5e0!3m2!1sen!2sgt!4v1763405355527!5m2!1sen!2sgt"
          className="w-full h-[420px] md:h-[450px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
