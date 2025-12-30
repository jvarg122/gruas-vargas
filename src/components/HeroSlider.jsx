import { useEffect, useState } from "react";

export default function HeroSlider() {
  const slidesData = [
    {
      title: "Potencia Industrial",
      text: "Grúas de alta capacidad diseñadas para soportar los desafíos más extremos.",
      image: "/images/slider1.jpg",
      btn: "Ver Equipos",
      targetId: "servicios",
    },
    {
      title: "Operación Segura",
      text: "Tecnología confiable y personal certificado para proyectos críticos.",
      image: "/images/slider2.jpg",
      btn: "Conocer Más",
      targetId: "quienes-somos",
    },
    {
      title: "Experiencia Comprobada",
      text: "Años brindando soluciones para construcción, industria y mega proyectos.",
      image: "/images/slider3.jpg",
      btn: "Contáctanos",
      targetId: "contacto",
    },
  ];

  const [current, setCurrent] = useState(0);

  const goTo = (index) => {
    setCurrent((index + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="hero-slider">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay"></div>

          <div className="experience-box font-[Oswald]">
            <p>VENTA DE TODO TIPO DE MAQUINARIA, SERVICIO DE GRÚAS TELESCÓPICAS Y REMOLQUE</p>
          </div>

          <div className="content">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            <button
              onClick={() => {
                document.getElementById(slide.targetId)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn"
            >
              {slide.btn}
            </button>
          </div>
        </div>
      ))}

      <div className="controls">
        <span className="prev" onClick={() => goTo(current - 1)}>
          &#10094;
        </span>
        <span className="next" onClick={() => goTo(current + 1)}>
          &#10095;
        </span>
      </div>

      <div className="indicators">
        {slidesData.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          ></div>
        ))}
      </div>

      <style jsx>{`
        .hero-slider {
          position: relative;
          width: 100%;
          height: 85vh;
          overflow: hidden;
          color: #fff;
          font-family: "Montserrat", sans-serif;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .slide.active {
          opacity: 1;
          z-index: 2;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(10, 10, 10, 0.45);
          top: 0;
          left: 0;
        }

        .experience-box {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          padding: 50px 100px;
          border-radius: 0;
          text-align: center;
          max-width: 90%;
          width: auto;
          z-index: 3;
          opacity: 0;
          animation: fadeUp 1s ease forwards;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .slide.active .experience-box {
          opacity: 1;
        }

        .experience-box p {
          margin: 0;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1;
        }

        .content {
          position: absolute;
          bottom: 18%;
          left: 7%;
          right: 7%;
          max-width: none;
          width: auto;
          opacity: 0;
          animation: fadeUp 1s ease forwards;
        }

        .slide.active .content {
          opacity: 1;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h2 {
          font-size: 3.2rem;
          margin-bottom: 10px;
          letter-spacing: 1px;
          font-weight: 700;
          text-transform: uppercase;
        }

        p {
          font-size: 1.15rem;
          margin-bottom: 25px;
          line-height: 1.5;
        }

        .btn {
          padding: 12px 28px;
          background: #ffb400;
          color: #111;
          font-weight: 700;
          text-decoration: none;
          border-radius: 3px;
          transition: background 0.3s;
          cursor: pointer;
        }

        .btn:hover {
          background: #ffc94d;
        }

        .controls {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 5;
          pointer-events: none;
        }

        .controls span {
          pointer-events: auto;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 15px;
          cursor: pointer;
          font-size: 30px;
          color: #fff;
          transition: 0.3s;
          user-select: none;
        }

        .prev {
          left: 15px;
        }
        .next {
          right: 15px;
        }

        .controls span:hover {
          color: #ffb400;
        }

        .indicators {
          position: absolute;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: #aaa;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
        }

        .dot.active {
          background: #ffb400;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2.2rem;
          }
          p {
            font-size: 1rem;
          }
          .hero-slider {
            height: 70vh;
          }
          .experience-box p {
            font-size: 1rem;
          }
        }


        @media (max-width: 768px) {
        .hero-slider {
          height: 65vh;
        }

        h2 {
          font-size: 1.8rem;
        }

        p {
          font-size: 0.95rem;
        }

        /* FIX for Caja Transparente */
        .experience-box {
          top: 5%;
          padding: 18px 25px;
          width: 90%;
          max-width: 400px;
          white-space: normal; /* allows text wrapping */
        }

        .experience-box p {
          font-size: 0.85rem;
          line-height: 1.2;
        }

        /* Content adjustments */
        .content {
          bottom: 14%;
          left: 5%;
          right: 5%;
        }
      }

      `}</style>
    </section>
  );
}
