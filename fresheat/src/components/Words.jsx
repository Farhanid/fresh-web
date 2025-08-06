import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';

const Words = () => {
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
    <motion.div 
    initial ={{opacity: 0, y: 40 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:0.5}}
                     viewport={{once:true}}
    className='w-full '>
    <div className='max-w-7xl mx-auto'>
        <div className="w-full bg-[#181818]   py-16 overflow-hidden">
  <motion.div
    className="flex gap-10 pt-5 text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] font-extrabold text-black whitespace-nowrap"
    animate={{ x: ["100%", "-100%"] }}
    transition={{
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    }}
  >
    {[...items, ...items, ...items].map((text, index) => (
      <span
        key={index}
         onClick={() => handleMobileTap(index)} 
       className={`mr-10 font-bold text-5xl md:text-8xl  relative group cursor-pointer 
              ${
                activeIndex === index ? "text-red-600 " : ""
              } group-hover:text-red-600 hover:text-red-600 `}
      >
        {text}
       
      </span>
    ))}
  </motion.div>
</div>
    </div>
    </motion.div>
  )
}

export default Words