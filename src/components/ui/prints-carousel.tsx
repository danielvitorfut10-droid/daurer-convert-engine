"use client";

const prints = [
  "/feedback1.png.jpeg",
  "/feedback2.png.jpeg",
  "/feedback3.png.jpeg",
  "/feedback4.png.jpeg",
  "/feedback5.png.jpeg",
];

const duplicatedPrints = [...prints, ...prints, ...prints];

export default function PrintsCarousel() {
  return (
    <div className="w-full overflow-hidden py-4">
      <div className="relative w-full overflow-hidden"
           style={{
             maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
             WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
           }}>
        <div className="flex w-max animate-prints-slider items-center gap-6 py-4">
          {duplicatedPrints.map((src, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-sm transition-transform hover:scale-[1.02]"
            >
              <img
                src={src}
                alt={`Print de feedback de cliente ${index + 1}`}
                className="h-auto max-h-[430px] w-auto max-w-[340px] rounded-xl object-contain md:max-h-[520px] md:max-w-[520px]"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
