import React from "react";

const trackItems = [
  "Copywriting Premium",
  "Análise Estratégica",
  "Sites Responsivos",
  "Tráfego Pago",
  "Landing Pages"
];

export const DaurerMarquee = () => {
  return (
    <>
      <section className="daurer-marquee z-10 relative">
        <div className="daurer-marquee-track">
          {[...trackItems, ...trackItems, ...trackItems, ...trackItems].map((item, index) => (
            <div className="daurer-marquee-item" key={index}>
              <span className="daurer-check">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .daurer-marquee {
          width: 100%;
          overflow: hidden;
          background: #020617;
          border-top: 1px solid rgba(0, 153, 255, 0.18);
          border-bottom: 1px solid rgba(0, 153, 255, 0.18);
          padding: 18px 0;
          position: relative;
        }

        .daurer-marquee::before,
        .daurer-marquee::after {
          content: "";
          position: absolute;
          top: 0;
          width: 120px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .daurer-marquee::before {
          left: 0;
          background: linear-gradient(to right, #020617, transparent);
        }

        .daurer-marquee::after {
          right: 0;
          background: linear-gradient(to left, #020617, transparent);
        }

        .daurer-marquee-track {
          display: flex;
          align-items: center;
          gap: 80px;
          width: max-content;
          animation: daurerMarquee 60s linear infinite;
        }

        .daurer-marquee-item {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        .daurer-marquee-item p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.2px;
          white-space: nowrap;
          font-family: inherit;
        }

        .daurer-check {
          width: 34px;
          height: 34px;
          border: 3px solid #008cff;
          border-radius: 999px;
          color: #008cff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 900;
          box-shadow: 0 0 18px rgba(0, 140, 255, 0.45);
          flex-shrink: 0;
        }

        @keyframes daurerMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .daurer-marquee {
            padding: 14px 0;
          }

          .daurer-marquee-track {
            gap: 50px;
            animation-duration: 45s;
          }

          .daurer-marquee-item p {
            font-size: 14px;
          }

          .daurer-check {
            width: 30px;
            height: 30px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};
