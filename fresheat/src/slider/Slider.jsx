import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

import h12 from '../assets/h12.jpg';
import h13 from '../assets/h13.jpg';
import h14 from '../assets/h14.jpg';
import h17 from '../assets/h17.jpg';
import h18 from './f18.jpg';
import { FaInstagram } from 'react-icons/fa';

const IMAGE_WIDTH = 200; 
const GAP = 16; 
const STEP = IMAGE_WIDTH + GAP; 
const VISIBLE_COUNT = 5;

const Slider = () => {
  const controls = useAnimation();
  const images = [h12, h13, h18, h14, h17];
  const displayArray = [...images, ...images];
  const shiftRef = useRef(0); 

  useEffect(() => {
    let mounted = true;

    const loop = async () => {
      while (mounted) {
       
        shiftRef.current -= STEP;
        await controls.start({
          x: `${shiftRef.current}px`,
          transition: { duration: 2, ease: 'linear' },
        });

        
        await new Promise((r) => setTimeout(r, 2000));

        
        if (Math.abs(shiftRef.current) >= images.length * STEP) {
          shiftRef.current = 0;
          controls.set({ x: 0 });
        }
      }
    };

    loop();
    return () => {
      mounted = false;
    };
  }, [controls, images.length]);

  return (
    <motion.div
     initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{delay:0.2}}
     className="overflow-hidden  bg-[#f3efe9]">
      <div
        className="mx-auto"
        style={{
          width: VISIBLE_COUNT * IMAGE_WIDTH + (VISIBLE_COUNT - 1) * GAP,
          overflow: 'hidden',
        }}
      >
        


        
<motion.div
  className="flex gap-4 w-max"
  animate={controls}
  initial={{ x: 0 }}
  style={{ willChange: 'transform' }}
>
  {displayArray.map((img, idx) => (
    <div key={idx} className="relative">
      <img
        src={img}
        alt={`slider-${idx}`}
        className="w-[200px] h-auto hover:scale-110 flex-shrink-0 object-contain"
      />
      <div className="absolute inset-0 mx-3 bg-gray-800/60 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <FaInstagram className="text-white text-4xl" />
      </div>
    </div>
  ))}
</motion.div>

      </div>
    </motion.div>
  );
};

export default Slider;



