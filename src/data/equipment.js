// All equipment inventory data.
// Each item has: id, name, capacity, type, desc, images[], available
// Images that don't exist yet are marked with a comment — swap in real files when ready.

export const cranes = [
  {
    id: "grove-115t",
    name: "Grove GMK5115L",
    capacity: "115T",
    type: "Grúa Todo Terreno",
    desc: "Grúa de alta capacidad ideal para montajes industriales pesados y elevaciones de gran alcance. Pluma telescópica de 60m y contraflecha de 18.3m.",
    images: [
      "/images/gruagrove1.jpg",
      "/images/gruagrove2.jpg",
      "/images/gruagrove3.jpg",
      "/images/gruagrove4.jpg",
      "/images/gruagrove5.jpg",
    ],
    available: true,
  },
  {
    id: "liebherr-ltm1080",
    name: "Liebherr LTM 1080",
    capacity: "80T",
    type: "Grúa Telescópica",
    desc: "Equipo versátil con excelente movilidad y precisión para trabajos en obra civil y estructuras metálicas.",
    images: [
      "/images/grualiebherr1.jpg",
      "/images/grualiebherr2.jpg",
      "/images/grualiebherr3.jpg",
      "/images/grualiebherr4.jpg",
      "/images/grualiebherr5.jpg",
    ],
    available: true,
  },
  {
    id: "linkbelt-htc855",
    name: "Link-Belt HTC 855",
    capacity: "55T",
    type: "Grúa Hidráulica",
    desc: "Grúa confiable y eficiente para elevaciones medianas en espacios urbanos y proyectos industriales.",
    images: [
      "/images/grualinkbelt1.jpg",
      "/images/grualinkbelt2.jpg",
      "/images/grualinkbelt3.jpg",
      "/images/grualinkbelt4.jpg",
      "/images/grualinkbelt5.jpg",
    ],
    available: true,
  },
  {
    id: "liebherr-ltm1050",
    name: "Liebherr LTM 1050",
    capacity: "50T",
    type: "Grúa Telescópica",
    desc: "Grúa compacta con gran potencia, perfecta para trabajos donde se requiere maniobrabilidad y precisión.",
    images: [
      "/images/grualiebherr10501.jpg",
      "/images/grualiebherr10502.jpg",
      "/images/grualiebherr10503.jpg",
      "/images/grualiebherr10504.jpg",
      "/images/grualiebherr10505.jpg",
    ],
    available: true,
  },
  {
    id: "internacional-36t",
    name: "Internacional 36T",
    capacity: "36T",
    type: "Grúa Industrial",
    desc: "Equipo práctico y robusto, ideal para maniobras rápidas y trabajos generales de construcción.",
    images: [
      "/images/gruainternacional1.jpg",
      "/images/gruainternacional2.jpg",
      "/images/gruainternacional3.jpg",
      "/images/gruainternacional4.jpg",
      "/images/gruainternacional5.jpg",
    ],
    available: true,
  },
  {
    id: "camion-30t",
    name: "Grúa Camión 30T",
    capacity: "30T",
    type: "Grúa sobre Camión",
    desc: "Grúa montada en camión, diseñada para operaciones versátiles con fácil desplazamiento entre obras.",
    images: [
      "/images/gruacamion1.jpg",
      "/images/gruacamion2.jpg",
      "/images/gruacamion4.jpg",
      "/images/gruacamion5.jpg",
    ],
    available: true,
  },
];

export const forklifts = [
  {
    id: "montacargas-placeholder-1",
    name: "Montacargas Industrial",
    capacity: "5T",
    type: "Montacargas",
    desc: "Montacargas de alta capacidad para almacenes, puertos y proyectos industriales. Operadores certificados disponibles.",
    images: ["/images/IMG_0419.PNG"],
    available: true,
    placeholder: true,
  },
  {
    id: "montacargas-placeholder-2",
    name: "Montacargas Compacto",
    capacity: "3T",
    type: "Montacargas",
    desc: "Ideal para espacios reducidos y maniobras de precisión en entornos industriales y de construcción.",
    images: ["/images/IMG_0420.PNG"],
    available: true,
    placeholder: true,
  },
];

export const machinery = [
  {
    id: "maquinaria-placeholder-1",
    name: "Excavadora Pesada",
    capacity: "30T",
    type: "Maquinaria Pesada",
    desc: "Excavadora de alta capacidad para proyectos de movimiento de tierra, minería y construcción.",
    images: ["/images/IMG_0421.PNG"],
    available: true,
    placeholder: true,
  },
  {
    id: "maquinaria-placeholder-2",
    name: "Maquinaria Especializada",
    capacity: "—",
    type: "Equipo de Construcción",
    desc: "Equipo de construcción especializado disponible para renta. Consultar disponibilidad y especificaciones.",
    images: ["/images/IMG_0423.PNG"],
    available: true,
    placeholder: true,
  },
];

export const trucks = [
  {
    id: "lowboy-placeholder-1",
    name: "Camión con Rastra",
    capacity: "50T",
    type: "Transporte Especializado",
    desc: "Camión con plataforma rastra para traslado de maquinaria pesada y carga sobredimensionada.",
    images: ["/images/gruacamion1.jpg"],
    available: true,
    placeholder: true,
  },
  {
    id: "lowboy-placeholder-2",
    name: "Lowboy Extendible",
    capacity: "70T",
    type: "Lowboy",
    desc: "Plataforma lowboy con cama extendible para transporte de equipos de gran volumen y peso.",
    images: ["/images/gruacamion4.jpg"],
    available: true,
    placeholder: true,
  },
];

export const accessories = [
  {
    id: "acc-eslingas",
    name: "Eslingas de Acero",
    capacity: "—",
    type: "Accesorios de Izaje",
    desc: "Eslingas y cables de acero certificados para operaciones de izaje seguras.",
    images: ["/images/service-bg.jpg"],
    available: true,
    placeholder: true,
  },
  {
    id: "acc-grilletes",
    name: "Grilletes y Aparejos",
    capacity: "—",
    type: "Accesorios de Izaje",
    desc: "Grilletes, polipastos y aparejos para complementar cualquier operación de izaje.",
    images: ["/images/service-bg.jpg"],
    available: true,
    placeholder: true,
  },
];
