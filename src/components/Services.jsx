import { Wrench, Car, Clock, Shield } from "lucide-react";

const services = [
  { icon: Car, title: "Remolque de vehículos", desc: "Servicio rápido y seguro en carretera." },
  { icon: Wrench, title: "Asistencia mecánica", desc: "Soporte básico para que sigas tu viaje." },
  { icon: Clock, title: "Servicio 24/7", desc: "Estamos disponibles a cualquier hora del día." },
  { icon: Shield, title: "Seguridad y confianza", desc: "Tu vehículo en manos expertas." },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <Icon className="mx-auto text-orange-500 mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
