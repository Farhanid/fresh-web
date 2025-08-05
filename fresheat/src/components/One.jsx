import React from 'react'
import imgg from '../assets/din.svg'
import img1 from '../assets/ha.png'
import img2 from '../assets/ha2.png'
import img3 from '../assets/ha3.png'
import img4 from '../assets/h5.png'
import {motion} from 'framer-motion'
import { FiArrowRight} from 'react-icons/fi'
import imga from '../assets/f1.png'
import imgb from '../assets/f2.png'
import imgc from '../assets/f3.png'
import imgd from '../assets/f4.png'
import imge from '../assets/f5.png'
import {useEffect, useState, useRef } from "react"
import {useAnimation} from "framer-motion"
import piz from '../assets/piz.png'
import bur from '../assets/burge.png'
import veg from '../assets/vegg.png'



const One = () => {
 
const img = [imga,imgb,imgc,imgd,imge] 
const price = [26.99, 28, 100.99, 20.99, 26.99]
const title = ["Chicken Fried Rice", "Chicken Pasta", "Chicken Pizza", "Chicken Noodles", "Grilled Chicken"]
const items = img.map((src, i) => ({
    img: src,
    title: title[i],
    price: price[i],
  }));
const [windowItems, setWindowItems] = useState(items.slice(0, 5)); 
const indexRef = useRef(5);
const controls = useAnimation();
const CARD_WIDTH = 220; 
const GAP = 16; 
const SHIFT = CARD_WIDTH + GAP;

  useEffect(() => {
    let mounted = true;
    const cycle = async () => {
      while (mounted) {
        await new Promise((r) => setTimeout(r, 4000));
        await controls.start({
          x: -SHIFT,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
   
        setWindowItems((prev) => {
          const next = items[indexRef.current % items.length];
          indexRef.current += 1;
          return [...prev.slice(1), next];
        });
        controls.set({ x: 0 });
      }
    };

    cycle();
    return () => {
      mounted = false;
    };
  }, [controls, items]);

 
  return (
<div className='bg-[#F4F1EA] w-full relative   py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-6 xl:px-0'>
   <div className='max-w-7xl mx-auto'>
             <div className='place-items-center'>
                     <motion.div
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{delay:0.2}}
                        className="flex justify-center items-center gap-2 text-[#FC791A]  font-semibold text-sm mb-1 md:mb-2">
                                           <img src={imgg} alt="" />
                                           <span className='font-bold text-lg'>Best Food</span>
                                           <img src={imgg} alt="" />
                     </motion.div>
                      <motion.h2
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{delay:0.4}}
                        className="text-3xl text-center  md:text-4xl font-bold text-[#0f172a] mb-4 md:mb-8 leading-tight">
                               Popular Food Items
                      </motion.h2>
             </div>


            <motion.div 
                 initial={{opacity:0, y:50}}
                 whileInView={{opacity:1, y:0}}
                 viewport={{once:true}}
                 transition={{delay:0.2}}
                 className="flex  justify-center relative px-4 items-center mt-4 md:mt-12 ">
                   <div className="overflow-hidden">
                       <motion.div
                           animate={controls}
                           className="flex gap-4"
                           style={{ width: (CARD_WIDTH + GAP) * 4 }} 
                        >
                      {windowItems.map((item, idx) => (
            <div
                            key={`${item.title}-${idx}`}
                            className="w-[220px] bg-white  rounded-2xl shadow-lg flex flex-col items-center pt-6 pb-8 relative flex-shrink-0"
                           >
                   <div className=''>
                         <div className="relative">
                             <img
                               src={item.img}
                               alt={item.title}
                               className="rounded-full w-32 h-32 object-cover"
                              />
                             <motion.div
                                className="absolute inset-0 flex justify-center items-center pointer-events-none"
                                animate={{ rotate: 360 }}
                                transition={{
                                repeat: Infinity,
                                duration: 6,
                                ease: "linear",
                                  }}
                              >
                              <div className="rounded-full border-2 border-dashed border-red-500 p-2 box-content">
                                 <div className="w-32 h-32" />
                                 </div>
                             </motion.div>
                         </div>
                    </div>

                     <div className="mt-6 text-center px-4 flex-1 flex flex-col justify-between">
                        <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">The Registration Fee</p>
                        <span className="text-xl font-bold text-red-600 mt-2">
                           ${item.price}
                         </span>
                     </div>
            </div>
          ))}
                      </motion.div>
                   </div>
            </motion.div> 


      <div className='mt-4 md:mt-16'>
            <div className='flex flex-col w-full mx-auto gap-6 md:flex-row flex-wrap max-w-[1050px]'>
                <motion.div
                   initial={{opacity:0, y:50}}
                   whileInView={{opacity:1, y:0}}
                   viewport={{once:true}}
                   transition={{delay:0.4}}
                   className='relative  bg-[url(https://gramentheme.com/html/fresheat/assets/img/bg/offerBG1_1.jpg)] bg-cover w-full md:h-[270px] md:w-[500px]'>
                      <div className='flex flex-col-reverse items-center md:flex-row relative '>
                          <div className='flex flex-col mt-16 py-5  md:mt-14 mx-6 space-y-3 md:space-y-5'>
                             <div className=' space-y-3 font-epilogue md:space-y-3 '>
                                 <h3 className='text-[#EB0029] text-[12px] font-semibold font-epoilogue'>ON THIS WEEK</h3>
                                 <h2 className='text-white leading-[1] text-[24px] font-black font-epilogue '>SPICY FRIED CHICKEN</h2>
                                 <h3 className='text-[#FC791A]  text-[12px]  font-semibold font-epoligue'>Limits Time Offer</h3>
                             </div>

                          <div className=''>
                              <motion.div
                                 initial={{opacity:0, y:50}}
                                 whileInView={{opacity:1, y:0}}
                                 viewport={{once:true}}
                                 className="flex  relative"
                                >
                                  <motion.button
                                      initial="initial"
                                      whileHover="hover"
                                      whileTap="hover"
                                      className="relative cursor-pointer z-10 overflow-hidden px-3 py-1.5 md:px-6 md:py-3 hover:border-1 hover:border-red-600  font-semibold text-white bg-red-600"
                                   >
                                 <span className="flex items-center gap-2 relative z-10">
                                    ORDER NOW
                                   <FiArrowRight className="text-2xl font-bold p-1  text-white" />
                                 </span>
             
                                <motion.div
                                     variants={{
                                     initial: { scaleX: 0 },
                                     hover: { scaleX: 1 },
                                     }}
                                     transition={{ duration: 0.6, ease: 'easeInOut' }}
                                     className="absolute top-0 left-0 w-full h-1/2 bg-gray-800 origin-left z-0"
                                />
                                 <motion.div
                                    variants={{
                                    initial: { scaleX: 0 },
                                    hover: { scaleX: 1 },
                                     }}
                                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                                    className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-800 origin-right z-0"
                                 />
                                  </motion.button>
                              </motion.div>

                         </div>
                          </div>
                      <div className=' relative flex flex-col md:items-end'>
                        <motion.img src={img3} alt=""
                              animate={{ x: [ -0, -40, 0]}}
                              transition={{
                              duration:8,
                              repeat: Infinity,
                             repeatType: "loop",
                             ease: "easeInOut"
                             }}
                             className=' absolute top-12 md:-top-15 left-9 md:left-1 md:right-20' />
                         <img src={img1} alt="" className=' relative top-17 md:top-3 right-1 w-full  md:max-w-[120px] md:max-h-[140px]' />
                      </div>


 


                      </div>
                </motion.div>

      
       <motion.div 
             initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.5}}
            className='relative  bg-[url(https://gramentheme.com/html/fresheat/assets/img/bg/offerBG1_1.jpg)] bg-cover w-full md:h-[270px] md:w-[500px]'>
        <div className='flex flex-col-reverse items-center md:flex-row relative '>
             <div className='flex flex-col mt-16 py-5  md:mt-14 mx-6 space-y-3 md:space-y-5'>
           <div
             
            className=' space-y-3 font-epilogue md:space-y-3 '>
              <h3 className='text-[#EB0029] text-[12px] font-semibold font-epoilogue'>WELCOME FRESHEAT</h3>
              <h2 className='text-white leading-[1] text-[24px] font-black font-epilogue '>TODAY SPECIAL FOOD</h2>
              <h3 className='text-[#FC791A]  text-[12px]  font-semibold font-epoligue'>Limits Time Offer</h3>
            </div>

            <div className=''>
           

             <motion.div
                    initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
                   className="flex  relative"
                 >
                   <motion.button
                     initial="initial"
                     whileHover="hover"
                      whileTap="hover"
                     className="relative cursor-pointer z-10 overflow-hidden px-3 py-1.5 md:px-6 md:py-3 hover:border-1 hover:border-red-600  font-semibold text-white bg-[#FC791A]"
                   >
                     <span className="flex items-center gap-2 relative z-10">
                      ORDER NOW
                       <FiArrowRight className="text-2xl font-bold p-1  text-white" />
                     </span>
             
                    
                     <motion.div
                       variants={{
                         initial: { scaleX: 0 },
                         hover: { scaleX: 1 },
                       }}
                       transition={{ duration: 0.6, ease: 'easeInOut' }}
                       className="absolute top-0 left-0 w-full h-1/2 bg-gray-800 origin-left z-0"
                     />
             
                  
                     <motion.div
                       variants={{
                         initial: { scaleX: 0 },
                         hover: { scaleX: 1 },
                       }}
                       transition={{ duration: 0.6, ease: 'easeInOut' }}
                       className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-800 origin-right z-0"
                     />
                   </motion.button>
                 </motion.div>

            </div>
            </div>
            <div className=' relative flex flex-col md:items-end'>
  <motion.img src={img3} alt=""
  animate={{ x: [ -0, -40, 0]}}
  transition={{
    duration:8,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
   className=' absolute top-12 md:-top-15 left-9 md:left-1 md:right-20' />
  <img src={img2} alt="" className=' relative top-17 md:top-3 right-1 w-full  md:max-w-[120px] md:max-h-[140px]' />
</div>


 


        </div>
       </motion.div>

      <motion.div 
      initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.6}}
      className='relative  bg-[url(https://gramentheme.com/html/fresheat/assets/img/bg/offerBG1_1.jpg)] bg-cover w-full md:h-[270px] md:w-[500px]'>
        <div className='flex flex-col-reverse items-center md:flex-row relative '>
             <div className='flex flex-col mt-16 py-5  md:mt-14 mx-6 space-y-3 md:space-y-5'>
           <div
             
            className=' space-y-3 font-epilogue md:space-y-3 '>
              <h3 className='text-[#EB0029] text-[12px] font-semibold font-epoilogue'>ON THIS WEEK</h3>
              <h2 className='text-white leading-[1] text-[24px] font-black font-epilogue '>SPECIAL CHICKEN ROLL</h2>
              <h3 className='text-[#FC791A]  text-[12px]  font-semibold font-epoligue'>Limits Time Offer</h3>
            </div>

            <div className=''>
           

             <motion.div
                   initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
                   className="flex  relative"
                 >
                   <motion.button
                     initial="initial"
                     whileHover="hover"
                      whileTap="hover"
                     className="relative cursor-pointer z-10 overflow-hidden px-3 py-1.5 md:px-6 md:py-3 hover:border-1 hover:border-red-600  font-semibold text-white bg-red-600"
                   >
                     <span className="flex items-center gap-2 relative z-10">
                      ORDER NOW
                       <FiArrowRight className="text-2xl font-bold p-1  text-white" />
                     </span>
             
                 
                     <motion.div
                       variants={{
                         initial: { scaleX: 0 },
                         hover: { scaleX: 1 },
                       }}
                       transition={{ duration: 0.6, ease: 'easeInOut' }}
                       className="absolute top-0 left-0 w-full h-1/2 bg-gray-800 origin-left z-0"
                     />
             
                 
                     <motion.div
                       variants={{
                         initial: { scaleX: 0 },
                         hover: { scaleX: 1 },
                       }}
                       transition={{ duration: 0.6, ease: 'easeInOut' }}
                       className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-800 origin-right z-0"
                     />
                   </motion.button>
                 </motion.div>

            </div>
            </div>
            <div className=' relative flex flex-col md:items-end'>
  <motion.img src={img3} alt=""
  animate={{ x: [ -0, -40, 0]}}
  transition={{
    duration:8,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
   className=' absolute top-12 md:-top-15 left-9 md:left-1 md:right-20' />
  <img src={img4} alt="" className=' relative top-17 md:top-3 right-1 w-full  md:max-w-[120px] md:max-h-[140px]' />
</div>


 


        </div>
      </motion.div>



         
            </div>
         
      </div>


  </div>
    

                          {/*  */}
     <img src={veg} alt="" className=' hidden xl:block absolute  top-305 z-40 left-90' />
    
       <motion.img src={piz}
         alt=""
         animate={{ x: [0, -40, 0] }}
         transition={{
         duration: 1,              
         times: [0, 0, 0],       
         repeat: Infinity,
         repeatType: "loop",
         ease: ["linear", "easeOut"] 
         }}
         className="hidden xl:block absolute top-30 right-14" 
       />
  
       <motion.img   src={bur}
          alt=""
          animate={{ y: [0, -40, 0] }}
          transition={{
          duration: 1,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
          }}
          className="hidden xl:block absolute top-90 left-23" 
        />
                           {/*  */}
</div>
  )
}

export default One


