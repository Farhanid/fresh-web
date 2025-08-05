import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import piz from '../assets/piz1.png'

import img1 from "../assets/cli1.png";
import img2 from "../assets/cli2.png";
import img3 from "../assets/cli3.png";
import img4 from "../assets/cli4.png";
import img5 from "../assets/cli5.png";

const Clients = () => {
  const Logos = [img1, img2, img3, img4, img5];
  const logos = [...Logos, ...Logos, ...Logos, ...Logos];

  const controls = useAnimation();
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const runLoop = async () => {
      let xPos = 0; 

      while (mountedRef.current) {
      
        await controls.start({
          x: xPos - 200, 
          transition: { duration: 5, ease: "linear" },
        });

        xPos -= 200;

        await new Promise((r) => setTimeout(r, 2000));

       
        const totalWidth = logos.length * 120; 
        if (Math.abs(xPos) >= totalWidth / 2) {
          xPos = 0;
          controls.set({ x: 0 });
        }
      }
    };

    runLoop();

    return () => {
      mountedRef.current = false;
    };
  }, [controls, logos.length]);

  return (
    <div className="px-4 relative bg-[#F4F1EA] py-4 md:py-10 lg:py-12 sm:px-6 md:px-8 lg:px-20 xl:px-24">
    <motion.div
      initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.4}}
     className="w-full overflow-hidden py-8  ">
      <motion.div
        className="flex gap-10"
        animate={controls}
        style={{ width: "max-content" }}
      >
        {logos.map((logo, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={logo}
              alt={`Client ${idx}`}
              className=" h-12 md:h-20 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </motion.div>

    <motion.img
      src={piz}
      alt=""
      animate={{ x: [0, -40, 0] }}
      transition={{
        duration: 1,             
        times: [0, 0, 0],      
        repeat: Infinity,
        repeatType: "loop",
        ease: ["linear", "easeOut"] 
      }}
      className="hidden xl:block absolute top-30 right-4" 
    />
    </div>
  );
};

export default Clients;
