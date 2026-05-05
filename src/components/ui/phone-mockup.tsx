import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface PhoneMockupProps {
  progress: MotionValue<number>;
  images: string[];
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ progress, images }) => {
  // Map the 0-1 progress to a horizontal translateX value
  // We move from 0% to -(images.length - 1) * 100%
  const x = useTransform(
    progress,
    [0, 1],
    ["0%", `-${(images.length - 1) * 100}%`]
  );

  return (
    <div className="relative w-[260px] h-[530px] md:w-[300px] md:h-[600px] mx-auto">
      {/* Phone Screen Content */}
      <div className="absolute top-[2%] left-[4.5%] w-[91%] h-[96%] overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border-[6px] border-[#1a1a1a]">
        <motion.div 
          className="flex h-full w-full"
          style={{ x }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full h-full flex-shrink-0">
              <img
                src={img}
                className="w-full h-full object-cover"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop`;
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* iPhone Frame Mockup overlay - Expecting /iphone.png or fallback */}
      <div className="absolute inset-0 w-full h-full pointer-events-none border-[10px] border-[#1a1a1a] rounded-[3.5rem] shadow-2xl">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1a1a1a] rounded-b-2xl z-20" /> 
      </div>
    </div>
  );
};
