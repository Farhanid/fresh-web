import React, { useEffect, useState } from "react"
import { FiArrowRight } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"
import bgimg from "../assets/ask17.PNG"
import big from '../assets/chik.png'
import veg2 from '../assets/ve2.png'
import veg3 from '../assets/ve3.png'


const Hero = () => {
const titles = [
    "CHICAGO DEEP BURGER KING",
    "SPICY FRIED CHICKEN",
    "CHICAGO DEEP PIZZA KING",
];
const [current, setCurrent] = useState(0);
const DURATION = 4000; 

useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % titles.length);
    }, DURATION);
    return () => clearInterval(interval);
}, [titles.length]);


const titleVariants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
};

const buttonVariants = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
};

  return (
    <>
<div className="relative pt-[95px] z-10">
     <div className="min-h-screen  xl:min-h-[400px] relative bg-cover z-0 bg-center"
         style={{ backgroundImage: `url(${bgimg})` }}
       >
    
         <div className="xl:hidden absolute left-4 md:left-12 lg:left-16   top-[160px] text-white overflow-hidden">
               <AnimatePresence mode="wait">
                  <motion.div
                         key={current}
                         variants={titleVariants}
                         initial="enter"
                         animate="center"
                         exit="exit"
                         transition={{ duration: 0.9, ease: "easeInOut" }}
                         className="px-4 md:px-10 lg:px-12"
                      >
                       <h1 className="text-md md:text-xl text-[#FC791A] font-medium md:font-bold mb-2">
                           WELCOME FRESHEAT
                        </h1>
                        <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold md:font-extrabold">
                             {titles[current]}
                        </h1>
                  </motion.div>
          



           
     
               </AnimatePresence>
         </div>

   
     <div className=" xl:hidden absolute top-[70%] md:top-[55%] lg:top-[80%] left-10 md:left-20   xl:top-[47%] lg:left-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={buttonVariants}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <motion.button
              initial="initial"
              whileHover="hover"
              whileTap="hover"
              className="relative cursor-pointer z-10 overflow-hidden px-3 py-1.5 md:px-6 md:py-3 font-semibold text-white bg-[#EB0029]"
            >
              <span className="flex items-center gap-2 relative z-10">
                ORDER NOW
                <FiArrowRight className="text-md md:text-xl bg-white p-1 text-red-500" />
              </span>
              <motion.div
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 origin-left z-0"
              />
              <motion.div
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-500 origin-right z-0"
              />
            </motion.button>
           
          </motion.div>
        </AnimatePresence>
     </div>


                       {/* */}
      <div className=" hidden xl:block">
           <div className="flex xl:px-16 xl:py-30">
              <div className="flex flex-col">
                 <AnimatePresence mode="wait">
                     <motion.div
                         key={current}
                         variants={titleVariants}
                         initial="enter"
                         animate="center"
                         exit="exit"
                         transition={{ duration: 0.9, ease: "easeInOut" }}
                         className=""
                        >
                         <h1 className="text-md md:text-xl text-[#FC791A] font-medium md:font-bold mb-2">
                            WELCOME FRESHEAT
                         </h1>
                         <h1 className="text-4xl md:text-5xl text-white lg:text-8xl font-extrabold md:font-extrabold">
                             {titles[current]}
                         </h1>
                      </motion.div>   
                 </AnimatePresence>
                 <AnimatePresence mode="wait">
                      <motion.div
                        key={current}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={buttonVariants}
                         transition={{ duration: 0.9, ease: "easeInOut" }}
                          >
            <motion.button
              initial="initial"
              whileHover="hover"
              className="relative z-10 mt-8 overflow-hidden px-3 py-1.5 md:px-6 md:py-3 font-semibold text-white bg-[#EB0029]"
            >
              <span className="flex items-center gap-2 relative z-10">
                ORDER NOW
                <FiArrowRight className="text-md md:text-xl bg-white p-1 text-red-500" />
              </span>
              <motion.div
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 origin-left z-0"
              />
              <motion.div
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 w-full h-1/2 bg-orange-500 origin-right z-0"
              />
            </motion.button>
           
                      </motion.div>
                  </AnimatePresence>
               </div>

       <div>
          <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={buttonVariants}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          >
            <motion.img
              initial="initial"
              src={big}
              whileHover="hover"
              className="relative z-10 overflow-hidden px-3 py-1.5 md:px-6 md:py-3 font-semibold text-white "
            >
              
            </motion.img>
           
          </motion.div>
          </AnimatePresence>
       </div>
        </div>

      </div>

   <motion.img
                     src={veg2}
                     alt=""
                     animate={{ x: [0, -40, 0] }}
                     transition={{
                       duration: 1,               
                       times: [0, 0, 0],       
                       repeat: Infinity,
                       repeatType: "loop",
                       ease: ["linear", "easeOut"]
                     }}
                     className="hidden xl:block z-0 absolute top-5 -left-0" 
                   />

         <motion.img
                            src={veg3}
                            alt=""
                           animate={{ y: [0, -40, 0] }}
                          transition={{
                            duration: 1,
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                          }}
                          
                            className="hidden xl:block absolute bottom-1 -left-2" 
                          />
                          <img src={veg3} alt=""  className="hidden xl:block absolute bottom-1 -right-4"  />

    </div>
  </div>
    </>

 
   
  );
};

export default Hero;
