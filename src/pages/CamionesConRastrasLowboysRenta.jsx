import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CamionesRenta() {
  const items = [
    {
      title: "",
      desc: "",
      images: [
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
      ],
    },
    {
      title: "",
      desc: "",
      images: [
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
      ],
    },
    {
      title: "",
      desc: "",
      images: [
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
      ],
    },
    {
      title: "",
      desc: "",
      images: [
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
        "/images/.jpg",
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
      RENTA DE CAMIONES
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
