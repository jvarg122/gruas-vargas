export default function Contact() {
  return (
    <>
      <section
        id="contacto"
        className="
          relative px-6 py-28 scroll-mt-20
          bg-gradient-to-b from-gray-700 via-black to-gray-900
          text-white
        "
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight">
              CONTÁC<span className="text-yellow-500">TENOS</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4"></div>

            <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto">
              Envía tu mensaje y nuestro equipo se pondrá en contacto contigo para brindarte la mejor asistencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">

            <div className="p-10 h-full bg-black/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-800 space-y-6">

              <h3 className="text-3xl font-bold mb-2">INFORMACIÓN</h3>
              <div className="w-20 h-1 bg-yellow-600 mb-6"></div>

              <p className="flex items-start gap-4 text-gray-300 text-lg">
                <i className="fa-solid fa-location-dot text-yellow-500 text-3xl"></i>
                Carretera Al Atlántico Km 137, Río Hondo Zacapa
              </p>

              <p className="flex items-center gap-4 text-gray-300 text-lg">
                <i className="fa-solid fa-phone text-yellow-500 text-3xl"></i>
                TEL: (+502) 5865-3835
              </p>

              <p className="flex items-center gap-4 text-gray-300 text-lg">
                <i className="fa-solid fa-phone text-yellow-500 text-3xl"></i>
                PBX: (+502) 7934-0541
              </p>

              <p className="flex items-center gap-4 text-gray-300 text-lg">
                <i className="fa-solid fa-envelope text-yellow-500 text-3xl"></i>
                <a href="mailto:gruasvargaszacapa@yahoo.es" className="text-yellow-400 hover:underline">
                  gruasvargaszacapa@yahoo.es
                </a>
              </p>
            </div>

            <form className="p-10 h-full bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl text-white space-y-5">

              <div className="flex gap-4">
                <div className="flex-1 flex items-center bg-black/40 border border-gray-700 rounded-xl px-3 py-2">
                  <i className="fa-solid fa-user text-yellow-500 text-xl mr-2"></i>
                  <input type="text" placeholder="Nombre *" className="flex-1 bg-transparent outline-none" required />
                </div>

                <div className="flex-1 flex items-center bg-black/40 border border-gray-700 rounded-xl px-3 py-2">
                  <i className="fa-solid fa-envelope text-yellow-500 text-xl mr-2"></i>
                  <input type="email" placeholder="E-mail *" className="flex-1 bg-transparent outline-none" required />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 flex items-center bg-black/40 border border-gray-700 rounded-xl px-3 py-2">
                  <i className="fa-solid fa-phone text-yellow-500 text-xl mr-2"></i>
                  <input type="text" placeholder="Teléfono *" className="flex-1 bg-transparent outline-none" required />
                </div>

                <div className="flex-1 flex items-center bg-black/40 border border-gray-700 rounded-xl px-3 py-2">
                  <i className="fa-solid fa-tag text-yellow-500 text-xl mr-2"></i>
                  <input type="text" placeholder="Asunto" className="flex-1 bg-transparent outline-none" />
                </div>
              </div>

              <div className="flex items-start bg-black/40 border border-gray-700 rounded-xl px-3 py-3">
                <i className="fa-solid fa-comment text-yellow-500 text-xl mt-1 mr-3"></i>
                <textarea placeholder="Mensaje *" rows={4} className="flex-1 bg-transparent outline-none" required></textarea>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl text-lg shadow-lg transition">
                ENVIAR
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* MAP */}
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
