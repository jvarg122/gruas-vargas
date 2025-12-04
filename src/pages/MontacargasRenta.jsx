import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function MontacargasRenta() {

  const forklift = [
    {
      title: "MONTACARGA 3.5 TONELADAS",
      desc:
        "Montacargas compacto y eficiente, ideal para maniobras rápidas y carga de pallets en bodegas y patios industriales.",
      images: ["/images/montacarga35toneladas1.jpg", "/images/montacarga35toneladas2.jpg"],
    },
    {
      title: "MONTACARGA 3.3 TONELADAS",
      desc:
        "Equipo ágil y versátil para operaciones de carga ligera y mediana en espacios reducidos.",
      images: ["/images/montacarga33toneladas1.jpg", "/images/montacarga33toneladas2.jpg"],
    },
    {
      title: "MONTACARGA TAYLOR 8 TONELADAS",
      desc:
        "Montacargas robusto de alta capacidad, diseñado para mover cargas pesadas en entornos industriales exigentes.",
      images: ["/images/montacargataylor8toneladas1.jpg", "/images/montacargataylor8toneladas2.jpg"],
    },
    {
      title: "MONTACARGA TELESCOPICO TELEHANDLER",
      desc:
        "Equipo telescópico multifuncional con gran alcance vertical y horizontal, perfecto para construcción, agricultura y manejo de materiales en altura.",
      images: ["/images/montacargatelescopico1.jpg","/images/montacargatelescopico2.jpg"],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const selected = forklift[selectedIndex];

  const nextImage = () => {
    setImageIndex((i) =>
      (i + 1) % selected.images.length
    );
  };

  const prevImage = () => {
    setImageIndex((i) =>
      (i - 1 + selected.images.length) % selected.images.length
    );
  };

  
  return (
    <div className="w-full pt-16 pb-24 font-[Oswald]">

      <div className="w-full flex justify-center">
        <div className="inline-block text-center">
          <h1 className="text-5xl font-extrabold tracking-wide">
            MONTACARGAS EN RENTA
          </h1>
          <div className="w-full h-[3px] bg-yellow-400 mt-2"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">

        <div className="relative bg-black text-white p-12 rounded-xl shadow-2xl">

          <div className="absolute -top-4 left-6 bg-yellow-400 px-5 py-2 text-black font-bold text-sm rounded leading-tight">
            {selected.title}
          </div>

          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            {selected.desc}
          </p>

          <button
            onClick={prevImage}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition"
          >
            <FaArrowLeft size={18} />
          </button>
        </div>

        <div className="relative rounded-xl overflow-visible shadow-2xl">
          <img
            src={selected.images[imageIndex]}
            className="w-full h-[330px] object-cover"
          />

          <button
            onClick={nextImage}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 px-4 grid grid-cols-2 md:grid-cols-3 gap-6">

        {forklift.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              setImageIndex(0);
            }}
            className={`relative group rounded-xl overflow-hidden cursor-pointer shadow-xl 
              ${selectedIndex === i ? "ring-4 ring-yellow-400" : "opacity-60"}
            `}
          >
            <img
              src={item.images[0]}
              className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">


              <span
                className="text-white font-extrabold block text-sm drop-shadow-lg"
                dangerouslySetInnerHTML={{
                  __html: item.title.replace(/([\d.]+ TONELADAS)/, "<br>$1"),
                }}
              ></span>

              {selectedIndex === i && (
                <div className="w-full h-[3px] bg-yellow-400 mt-1"></div>
              )}
            </div>
          </div>
        ))}

      </div>

      <div className="max-w-7xl mx-auto mt-20 px-6 flex items-center gap-3">
        <FaArrowLeft className="text-yellow-400" size={20} />
        <Link
          to="/"
          className="text-black font-bold text-xl tracking-wide hover:text-yellow-600 transition"
        >
          REGRESAR
        </Link>
      </div>

    </div>
  );
}
