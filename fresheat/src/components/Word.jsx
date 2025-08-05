import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';

const Word = () => {
     const items = [
    "GRILLED CHICKEN",
    "CHICKEN PIZZA",
    "BURGER",
    
  ];
   const [activeIndex, setActiveIndex] = useState(null);


  const isMobile = window.innerWidth < 1024;

  const handleMobileTap = (index) => {
    if (isMobile) {
      setActiveIndex(prev => (prev === index ? null : index));
    }
  };

  return (
<div className='w-full bg-[#F4F1EA]'>
     <div className='max-w-7xl mx-auto'>
           <motion.div
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay:0.5}}
                className="w-full bg-[#F4F1EA] py-12 overflow-hidden">
               <motion.div
                className="flex gap-10 text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] font-extrabold text-black whitespace-nowrap"
                animate={{ x: ["100%", "-100%"] }}
                transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
               }}
              >
                {[...items,...items,...items, ...items, ...items].map((text, index) => (
                <span
            key={index}
            onClick={() => handleMobileTap(index)} 
            className={`mr-10 font-bold text-7xl bg-[#F4F1EA] relative group cursor-pointer 
              ${
                activeIndex === index ? "text-red-600 " : ""
              } group-hover:text-red-600 hover:text-red-600 `}
          >
            {text}
            <span
              className={`absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-500
                ${activeIndex === index ? "w-full" : "w-0"} 
                group-hover:w-full`}
            ></span>
          </span>
               ))}
               </motion.div>
          </motion.div>
    </div>
    </div>
  )
}

export default Word