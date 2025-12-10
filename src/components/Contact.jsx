import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <section
        id="contacto"
        className="
        relative 
        px-6 py-28 
        scroll-mt-20
        bg-gradient-to-t from-white via-[#f7f7f7] to-[#e9eef5]
        text-[#333]
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold tracking-tight text-[#222]">
              CONTÁC<span className="text-orange-400">TENOS</span>
            </h2>

            <div className="w-24 h-1 bg-orange-400 mx-auto mt-4"></div>

            <p className="text-[#555] text-lg mt-5 max-w-2xl mx-auto">
              Envía tu mensaje y nuestro equipo se pondrá en contacto contigo para brindarte la mejor asistencia.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch">

            {/* INFORMATION CARD */}
            <div className="p-10 bg-white shadow-xl h-full">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-20 bg-orange-400"></div>

                <div className="flex flex-col leading-none">
                  <h3 className="text-3xl font-bold text-[#222]">INFORMACIÓN</h3>
                </div>
              </div>

              {/* Contact info aligned */}
              <div className="flex flex-col gap-4 text-lg text-[#555]">

                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-location-dot text-orange-400 w-10 text-3xl"></i>
                  <span>Km 137 Carretera Al Atlántico, Río Hondo Zacapa</span>
                </div>

                <div className="flex items-center gap-4">
                  <FaWhatsapp size={40} className="text-orange-400 w-10" />
                  <span>PBX: (+502) 7934-0541</span>
                </div>

                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-phone text-orange-400 w-10 text-3xl"></i>
                  <span>TEL: (+502) 5865-3835</span>
                </div>

                <div className="flex items-center gap-4">
                  <i className="fa-solid fa-envelope text-orange-400 w-10 text-3xl"></i>
                  <a
                    href="mailto:gruasvargaszacapa@yahoo.es"
                    className="text-orange-600 hover:underline"
                  >
                    gruasvargaszacapa@yahoo.es
                  </a>
                </div>

              </div>
            </div>

            {/* FORM CARD */}
            <form className="p-10 bg-white shadow-xl h-full text-[#333] space-y-6">

              {/* NEW TITLE + ICON */}
              <div className="flex items-center gap-3 mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-8 h-8 text-orange-400"
                >
                  <path d="M476 3.2L12 234.5c-22 11-20.6 42.8 1.9 51.3l111.5 40.2L401.7 121 210.6 345.8V456c0 22.2 26.8 32.4 40.9 16.9l62.8-68.1 107.9 38.9c23 8.3 47.4-9.8 47.4-34.3V31.7c-.1-23.4-24.8-39.6-43.6-28.5z"/>
                </svg>
                <h3 className="text-3xl font-bold text-[#222]">Contáctenos</h3>
              </div>

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Nombre *"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-3 outline-none"
                  required
                />

                <input
                  type="email"
                  placeholder="E-mail *"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-3 outline-none"
                  required
                />
              </div>

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Teléfono *"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-3 outline-none"
                  required
                />

                <input
                  type="text"
                  placeholder="Asunto"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-3 outline-none"
                />
              </div>

              <textarea
                placeholder="Mensaje *"
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 outline-none"
                required
              ></textarea>

              <button className="w-full bg-orange-400 hover:bg-orange-300 text-black font-bold py-3 rounded-lg text-lg shadow-md transition">
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
        />
      </section>
    </>
  );
}
