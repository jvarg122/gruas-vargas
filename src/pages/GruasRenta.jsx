import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function GruasRenta() {
  const items = [
    {
      title: "GRÚA GROVE 115 TONELADAS",
      desc: "Grúa de alta capacidad ideal para montajes industriales pesados y elevaciones de gran alcance.",
      images: [
        "/images/gruagrove1.jpg",
        "/images/gruagrove2.jpg",
        "/images/gruagrove3.jpg",
        "/images/gruagrove4.jpg",
        "/images/gruagrove5.jpg",
      ],
    },
    {
      title: "GRÚA LIEBHERR LTM 1080 80 TONELADAS",
      desc: "Equipo versátil con excelente movilidad y precisión para trabajos en obra civil y estructuras metálicas.",
      images: [
        "/images/grualiebherr1.jpg",
        "/images/grualiebherr2.jpg",
        "/images/grualiebherr3.jpg",
        "/images/grualiebherr4.jpg",
        "/images/grualiebherr5.jpg",
      ],
    },
    {
      title: "GRÚA LINK BELT HTC 855 55 TONELADAS",
      desc: "Grúa confiable y eficiente para elevaciones medianas en espacios urbanos y proyectos industriales.",
      images: [
        "/images/grualinkbelt1.jpg",
        "/images/grualinkbelt2.jpg",
        "/images/grualinkbelt3.jpg",
        "/images/grualinkbelt4.jpg",
        "/images/grualinkbelt5.jpg",
      ],
    },
    {
      title: "GRÚA LIEBHERR LTM 1050 50 TONELADAS",
      desc: "Grúa compacta con gran potencia, perfecta para trabajos donde se requiere maniobrabilidad y precisión.",
      images: [
        "/images/grualiebherr10501.jpg",
        "/images/grualiebherr10502.jpg",
        "/images/grualiebherr10503.jpg",
        "/images/grualiebherr10504.jpg",
        "/images/grualiebherr10505.jpg",
      ],
    },
    {
      title: "GRÚA INTERNACIONAL 36 TONELADAS",
      desc: "Equipo práctico y robusto, ideal para maniobras rápidas y trabajos generales de construcción.",
      images: [
        "/images/gruainternacional1.jpg",
        "/images/gruainternacional2.jpg",
        "/images/gruainternacional3.jpg",
        "/images/gruainternacional4.jpg",
        "/images/gruainternacional5.jpg",
      ],
    },
    {
      title: "GRÚA CAMIÓN 30 TONELADAS",
      desc: "Grúa montada en camión, diseñada para operaciones versátiles con fácil desplazamiento entre obras.",
      images: [
        "/images/gruacamion1.jpg",
        "/images/gruacamion2.jpg",
        "/images/gruacamion3.jpg",
        "/images/gruacamion4.jpg",
        "/images/gruacamion5.jpg",
      ],
    },
    {
      title: "GRÚA COMANDO 6X6 30 TONELADAS",
      desc: "Grúa todo terreno con tracción 6x6, ideal para terrenos difíciles y operaciones en zonas remotas.",
      images: [
        "/images/gruacomando1.jpg",
        "/images/gruacomando2.jpg",
        "/images/gruacomando3.jpg",
        "/images/gruacomando4.jpg",
        "/images/gruacomando5.jpg",
      ],
    },
    {
      title: "GRÚA LINK BELT HSP-8022 22 TONELADAS",
      desc: "Grúa confiable y maniobrable, perfecta para trabajos ligeros y de apoyo en construcción.",
      images: [
        "/images/grualinkbelthsp80221.jpg",
        "/images/grualinkbelthsp80222.jpg",
        "/images/grualinkbelthsp80223.jpg",
        "/images/grualinkbelthsp80224.jpg",
        "/images/grualinkbelthsp80225.jpg",
      ],
    },
    {
      title: "GRÚA FORD",
      desc: "Grúa montada en chasis Ford, adecuada para trabajos de carga ligera y maniobras urbanas.",
      images: [
        "/images/gruaford1.jpg",
        "/images/gruaford2.jpg",
        "/images/gruaford3.jpg",
        "/images/gruaford4.jpg",
        "/images/gruaford5.jpg",
      ],
    },
    {
      title: "GRÚA 18 TONELADAS",
      desc: "Equipo compacto para elevaciones ligeras y trabajos rápidos en espacios reducidos.",
      images: [
        "/images/grua18toneladas1.jpg",
        "/images/grua18toneladas2.jpg",
        "/images/grua18toneladas3.jpg",
        "/images/grua18toneladas4.jpg",
        "/images/grua18toneladas5.jpg",
      ],
    },
    {
      title: "GRÚA 30 TONELADAS",
      desc: "Grúa versátil de capacidad media, ideal para proyectos de construcción y mantenimiento industrial.",
      images: [
        "/images/grua30toneladas1.jpg",
        "/images/grua30toneladas2.jpg",
        "/images/grua30toneladas3.jpg",
        "/images/grua30toneladas4.jpg",
        "/images/grua30toneladas5.jpg",
      ],
    },
    {
      title: "GRÚA GROVE 10 TONELADAS",
      desc: "Grúa ligera y altamente maniobrable, perfecta para tareas de servicio y elevaciones pequeñas.",
      images: [
        "/images/gruagrove10toneladas1.jpg",
        "/images/gruagrove10toneladas2.jpg",
        "/images/gruagrove10toneladas3.jpg",
        "/images/gruagrove10toneladas4.jpg",
        "/images/gruagrove10toneladas5.jpg",
      ],
    },
    {
      title: "MANLIFT",
      desc: "Plataforma elevadora ideal para trabajos en altura en mantenimiento, construcción y operaciones industriales.",
      images: [
        "/images/manlift1.jpg",
        "/images/manlift2.jpg",
        "/images/manlift3.jpg",
        "/images/manlift4.jpg",
        "/images/manlift5.jpg",
      ],
    },
  ];


  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const selected = items[selectedIndex];

  const nextImage = () => {
    setImageIndex((i) => (i + 1) % selected.images.length);
  };

  const prevImage = () => {
    setImageIndex((i) => (i - 1 + selected.images.length) % selected.images.length);
  };

  return (
    <div className="w-full pt-16 pb-24">

<div className="w-full flex justify-center">
  <div className="inline-block text-center">
    <h1 className="text-5xl font-extrabold tracking-tight text-black">
      GRÚAS EN RENTA
    </h1>

    <div className="mt-2 flex flex-col">
      <div className="h-2 bg-orange-500"></div>
      <div className="h-[2px] bg-white"></div>  
      <div className="h-2 bg-green-900"></div>
      <div className="h-[2px] bg-white"></div>  
      <div className="h-2 bg-green-700"></div>
    </div>
  </div>
</div>


      <div className="font-[Oswald] max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">

        <div className="relative bg-black text-white p-12 rounded-xl shadow-2xl">
          <div className="absolute -top-4 left-6 bg-yellow-400 px-5 py-2 text-black font-bold text-sm rounded leading-tight">
            {selected.title}
          </div>

          <p className="mt-6 text-lg leading-relaxed text-gray-200">
            {selected.desc}
          </p>
        </div>

        <div className="relative shadow-2xl">
          <div className="w-full h-[330px] flex items-center bg-[#1f1f1f] relative">
            
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition z-10"
            >
              <FaArrowLeft size={18} />
            </button>

            <img
              src={selected.images[imageIndex]}
              className="max-h-full max-w-full mx-auto object-contain"
            />

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition z-10"
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="font-[Oswald] max-w-7xl mx-auto mt-20 px-4 grid grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              setImageIndex(0);
            }}
            className={`relative group rounded-xl overflow-hidden cursor-pointer shadow-xl 
              ${selectedIndex === i ? "ring-4 ring-yellow-400" : "opacity-60"}`}
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
                  __html: item.title.replace(
                    /([\d.]+ TONELADAS)/,
                    "<br>$1"
                  ),
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-black font-bold text-xl tracking-wide hover:text-yellow-600 transition"
        >
          REGRESAR
        </Link>
      </div>
    </div>
  );
}
