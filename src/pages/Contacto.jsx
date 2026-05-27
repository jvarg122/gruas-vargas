import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const WHATSAPP_NUMBER = "50258653835";

const equipmentOptions = [
  "Renta de Grúas",
  "Venta de Grúas",
  "Montacargas",
  "Maquinaria Pesada",
  "Transporte / Lowboys",
  "Asistencia Vial",
  "Otro",
];

const locations = [
  { name: "Zacapa", address: "Km 137 CA-9, Río Hondo, Zacapa", phone: "+502 7934-0541" },
  { name: "Izabal", address: "Km 245 CA-9, Morales, Izabal", phone: "+502 5865-3835" },
  { name: "Petén",  address: "Km 383 CA-13, Poptén, Petén",  phone: "+502 5865-3835" },
];

function FormField({ label, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-heading font-semibold text-xs uppercase tracking-[0.15em] text-ink-fog">
        {label}
      </label>
      {children}
      {error && (
        <p className="font-body text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}

const inputClass = `
  w-full bg-surface-iron border border-surface-iron
  focus:border-brand-orange focus:outline-none
  font-body text-sm text-ink-cream placeholder:text-ink-ash
  px-4 py-3 transition-colors duration-200
`;

export default function Contacto() {
  const { t, i18n } = useTranslation();
  const isES = i18n.language?.startsWith("es");

  const [form, setForm] = useState({
    nombre: "", empresa: "", email: "", telefono: "", equipo: "", mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, amount: 0.2 });

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Campo requerido";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Email inválido";
    if (!form.telefono.trim()) e.telefono = "Campo requerido";
    if (!form.mensaje.trim()) e.mensaje = "Campo requerido";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ nombre: "", empresa: "", email: "", telefono: "", equipo: "", mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  const whatsappMsg = encodeURIComponent(
    isES
      ? "Hola, me gustaría solicitar información sobre sus servicios de grúas y equipos."
      : "Hello, I'd like to request information about your crane and equipment services."
  );

  return (
    <div className="bg-surface-base min-h-screen">

      {/* ── Hero ── */}
      <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
        <img src="/images/slider2.jpg" alt="Contacto" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/55 to-black/40" />
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-semibold text-xs uppercase tracking-[0.28em] text-brand-orange mb-3"
            >
              {t("cta.eyebrow")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display text-ink-cream leading-none"
            >
              CONTACTO
            </motion.h1>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left col — contact info */}
          <div className="lg:col-span-2 space-y-12">

            {/* WhatsApp — primary */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-4">
                Respuesta rápida
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-surface-steel border border-surface-iron hover:border-[#25D366] group transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[#25D366] flex items-center justify-center shrink-0">
                  <FaWhatsapp size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-ink-cream uppercase tracking-wide">WhatsApp</p>
                  <p className="font-body text-xs text-ink-fog mt-0.5">+502 5865-3835 · Respuesta en &lt;2h</p>
                </div>
                <ArrowUpRight size={16} className="ml-auto text-ink-fog group-hover:text-ink-cream transition-colors" />
              </a>
            </motion.div>

            {/* Direct contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-4">
                Contacto directo
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone size={14} className="text-brand-orange shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-xs uppercase tracking-widest text-ink-fog">PBX</p>
                    <a href="tel:+50258653835" className="font-body text-sm text-ink-cream hover:text-brand-orange transition-colors">+502 5865-3835</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={14} className="text-brand-orange shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-xs uppercase tracking-widest text-ink-fog">TEL</p>
                    <a href="tel:+50279340541" className="font-body text-sm text-ink-cream hover:text-brand-orange transition-colors">+502 7934-0541</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} className="text-brand-orange shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-xs uppercase tracking-widest text-ink-fog">Email</p>
                    <a href="mailto:gruasvargaszacapa@yahoo.es" className="font-body text-sm text-ink-cream hover:text-brand-orange transition-colors break-all">gruasvargaszacapa@yahoo.es</a>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-4">
                Sedes
              </p>
              <ul className="space-y-5">
                {locations.map((loc) => (
                  <li key={loc.name} className="flex items-start gap-3">
                    <MapPin size={14} className="text-brand-orange mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-xs uppercase tracking-widest text-ink-cream mb-0.5">{loc.name}</p>
                      <p className="font-body text-sm text-ink-fog leading-snug">{loc.address}</p>
                      <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-body text-xs text-ink-fog hover:text-ink-cream transition-colors">{loc.phone}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right col — form */}
          <div ref={formRef} className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-heading font-semibold text-xs uppercase tracking-[0.25em] text-brand-orange mb-2">
                Formulario
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-ink-cream leading-none mb-10">
                ENVIAR MENSAJE
              </h2>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-16 px-8 bg-surface-steel border border-surface-iron"
                  >
                    <CheckCircle size={48} className="text-brand-green mb-6" strokeWidth={1.5} />
                    <h3 className="font-display text-3xl text-ink-cream mb-3">MENSAJE ENVIADO</h3>
                    <p className="font-body text-base text-ink-fog max-w-sm">
                      Gracias por contactarnos. Te responderemos en menos de 2 horas.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 font-heading font-bold text-xs uppercase tracking-[0.15em] border border-surface-iron hover:border-ink-cream text-ink-cream px-6 py-3 transition-colors duration-200"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="Nombre completo *" error={errors.nombre}>
                        <input
                          name="nombre" value={form.nombre} onChange={handleChange}
                          placeholder="Juan Pérez"
                          className={inputClass}
                        />
                      </FormField>
                      <FormField label="Empresa">
                        <input
                          name="empresa" value={form.empresa} onChange={handleChange}
                          placeholder="Constructora XYZ (opcional)"
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField label="Correo electrónico *" error={errors.email}>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="correo@empresa.com"
                          className={inputClass}
                        />
                      </FormField>
                      <FormField label="Teléfono / WhatsApp *" error={errors.telefono}>
                        <input
                          name="telefono" value={form.telefono} onChange={handleChange}
                          placeholder="+502 0000-0000"
                          className={inputClass}
                        />
                      </FormField>
                    </div>

                    <FormField label="Tipo de equipo">
                      <select
                        name="equipo" value={form.equipo} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Seleccionar...</option>
                        {equipmentOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Mensaje *" error={errors.mensaje}>
                      <textarea
                        name="mensaje" value={form.mensaje} onChange={handleChange}
                        rows={5} placeholder="Describe tu proyecto o consulta..."
                        className={inputClass + " resize-none"}
                      />
                    </FormField>

                    {status === "error" && (
                      <div className="flex items-center gap-3 p-4 bg-red-950/40 border border-red-800/50">
                        <AlertCircle size={16} className="text-red-400 shrink-0" />
                        <p className="font-body text-sm text-red-400">
                          Ocurrió un error. Intenta de nuevo o contáctanos por WhatsApp.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto font-heading font-bold text-sm uppercase tracking-[0.15em] bg-brand-orange hover:bg-brand-orange-warm disabled:opacity-60 disabled:cursor-not-allowed text-ink-cream px-10 py-4 transition-colors duration-300 flex items-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-ink-cream/30 border-t-ink-cream rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Solicitud <ArrowUpRight size={14} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
