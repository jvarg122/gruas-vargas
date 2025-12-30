import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMobileAlt,
  FaPhoneVolume
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section
        id="contacto"
        className="bg-white px-6 mb-20"
      >
        <section
          className="
            w-screen
            relative left-1/2 right-1/2
            -ml-[50vw] -mr-[50vw]
            bg-neutral-900
            flex items-center justify-center
            h-[260px]
            mb-20
          "
        >
          <h1 className="text-white text-[42px] font-bold tracking-wide">
            Contacto
          </h1>
        </section>

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-16 max-w-3xl">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              Información de contacto
            </h3>

            <h2 className="text-4xl font-extrabold text-black mb-4">
              Estamos listos para ayudarte
            </h2>

            <div className="w-12 h-[3px] bg-green-600 mb-6"></div>

            <p className="text-gray-600">
              Ponte en contacto con nuestro equipo para solicitar información
              sobre nuestros servicios de grúas y transporte especializado.
            </p>
          </div>

      
          <div className="grid md:grid-cols-3 gap-12">

            {/* LOCATION */}
            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-black mb-3">
                  Nuestras Ubicaciones
                </h4>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-black mb-1">
                    Oficina Principal
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Km 137 Carretera al Atlántico, Río Hondo, Zacapa, Guatemala
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-black mb-1">
                    Predios Operativos
                  </p>

                  <ul className="space-y-2 text-gray-600 text-sm leading-relaxed">
                    <li>Km 245 CA-9, Ruta al Atlántico, La Ruidosa, Morales, Izabal</li>
                    <li>Km 383 CA-13, Poptún, Petén</li>
                    <li>Km 137 CA-9, Ruta al Atlántico, Río Hondo, Zacapa</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
            
              <FaMobileAlt className="text-green-600 text-2xl mt-1" />

              <div>
                <h4 className="font-bold text-black mb-2">Teléfono</h4>


              <div className="flex items-center gap-3">
                <div className="w-6 flex justify-center">
                  <FaWhatsapp className="text-green-600 text-2xl" />
                </div>
                <a
                  href="https://wa.me/50258653835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 text-sm font-semibold hover:text-green-600 transition"
                >
                  PBX: (+502) 5865-3835
                </a>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <div className="w-6 flex justify-center">
                  <FaPhoneAlt className="text-green-600 text-lg" />
                </div>
                <a
                  href="tel:+50279340541"
                  className="text-gray-600 text-sm font-semibold hover:text-green-600 transition"
                >
                  TEL: (+502) 7934-0541
                </a>
              </div>
            </div>
          </div>


            <div className="flex gap-4">
              <FaEnvelope className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-bold text-black mb-1">Escríbenos</h4>
                <a
                  href="mailto:gruasvargaszacapa@yahoo.es"
                  className="text-gray-600 text-sm font-semibold hover:text-green-600 transition"
                >
                  gruasvargaszacapa@yahoo.es
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-24">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">
            ENVÍANOS UN MENSAJE
          </h2>

          <div className="w-12 h-[3px] bg-green-600 mx-auto mb-6"></div>

          <p className="text-gray-600">
            Nuestro equipo se pondrá en contacto contigo lo antes posible.
          </p>
        </div>

        <form className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Nombre *" className="border px-4 py-3 focus:border-green-600" required />
          <input type="email" placeholder="Email *" className="border px-4 py-3 focus:border-green-600" required />
          <input type="text" placeholder="Teléfono" className="border px-4 py-3 focus:border-green-600" />
          <input type="text" placeholder="Asunto" className="border px-4 py-3 focus:border-green-600" />

          <textarea
            rows={6}
            placeholder="Mensaje..."
            className="md:col-span-2 border px-4 py-3 focus:border-green-600"
          />

          <div className="md:col-span-2 text-center mt-6">
            <button className="bg-green-600 hover:bg-black text-white font-bold px-12 py-4 transition">
              Enviar mensaje
            </button>
          </div>
        </form>
      </section>

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
