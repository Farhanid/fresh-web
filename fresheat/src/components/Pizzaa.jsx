import React from 'react'
import img from '../assets/pizza.png'
import { motion } from "framer-motion";
import { FiArrowRight } from 'react-icons/fi';
import veg1 from '../assets/ve1.png'
import veg2 from '../assets/ve2.png'
import veg3 from '../assets/ve3.png'

const Pizzaa = () => {
  return (
    <div>
      <div className='w-full bg-[url(https://gramentheme.com/html/fresheat/assets/img/bg/offerBG1_1.jpg)]  '>
                  <div className='max-w-7xl mx-auto '>
                     <div className='min-h-screen xl:min-h-[680px]  px-12 py-12 sm:px-6 md:px-16 lg:px-24 xl:px-0 pb-20 md:pb-120 lg:pb-170 xl:pb-0 relative  '>
                     
      <div className='xl:hidden flex flex-col  w-full relative'>
        
                     <motion.div
                        initial ={{opacity: 0, y: 150 }} 
                           whileInView={{opacity: 1, y: 0 }}
                           transition={{duration:0.9}}
                           viewport={{once:true}} >
                           <motion.img
            src={img}
            alt="Pizza"
          
                 
            
            className=' absolute w-full flex items-center justify-center  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl  object-contain '
            animate={{
              x: [ 10,  -10, 0 ], 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              
            }}
          />        </motion.div>
          
                          <div className='absolute xl:left-8 top-45 md:top-67  lg:top-110 space-y-4 sm:space-y-6 xl:space-y-8 '>
                          <motion.h1
                           initial ={{opacity: 0, y: 50 }} 
                           whileInView={{opacity: 1, y: 0 }}
                           transition={{duration:0.6}}
                           viewport={{once:false, amount:0.3}}
                           className='font-epilogue text-sm lg:text-xl font-semibold text-[#EB0029] font-epilogue'>WELCOME FRESHEAT</motion.h1>     
                          <motion.h1
                            initial ={{opacity: 0, y: 50 }} 
                           whileInView={{opacity: 1, y: 0 }}
                           transition={{duration:0.7, delay:0.2}}
                           viewport={{once:false, amount:0.3}} 
                           className='font-epilogue text-xl lg:text-5xl font-extrabold text-white'>TODAY SPECIAL FOOD</motion.h1>    
                          <motion.h4 
                           initial ={{opacity: 0, y: 50 }} 
                           whileInView={{opacity: 1, y: 0 }}
                           transition={{duration:0.8, delay:0.2}}
                           viewport={{once:false, amount:0.3}} 
                           className='font-epilogue text-sm lg:text-xl font-semibold text-[#FC791A] font-epilogue'>Limits Time Offer </motion.h4>  
                            <div className="flex   mt-4 md:mt-8">
                                             
                                              {/* */}
                                               <motion.div
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{duration:0.7, delay:0.2}}
                                                    viewport={{once:false, amount:0.3}} 
                                                    className="flex justify-center relative"
                                                  >
                                                    <motion.button
                                                      initial="initial"
                                                      whileHover="hover"
                                                      whileTap="hover"
                                                      className="relative cursor-pointer z-10 overflow-hidden px-6 py-3  font-semibold text-white bg-[#EB0029]"
                                                    >
                                                      <span className="flex items-center gap-2 relative z-10">
                                                        ORDER NOW
                                                        <FiArrowRight className="text-xl bg-white p-1  text-red-500" />
                                                      </span>
                                              
                                                      {/* TOP background (left to right) */}
                                                      <motion.div
                                                        variants={{
                                                          initial: { scaleX: 0 },
                                                          hover: { scaleX: 1 },
                                                        }}
                                                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                                                        className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 origin-left z-0"
                                                      />
                                              
                                                      {/* BOTTOM background (right to left) */}
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
                                            </div>
                          </div> 
                       
      </div>


        <div className='hidden xl:block xl:px-20 '>

 <div className='flex  flex-wrap space-x-4 pt-20'>
            <div className='space-y-2 sm:space-y-4 xl:space-y-8  '>
                          <motion.h1
                           initial ={{opacity: 0, y: 50 }} 
                           whileInView={{opacity: 1, y: 0 }}
                           transition={{duration:0.6}}
                           viewport={{once:false, amount:0.3}}
                           className='font-epilogue text-sm lg:text-xl font-semibold text-[#EB0029] font-epilogue'>WELCOME FRESHEAT</motion.h1>     
                          <motion.h1
                            initial ={{opacity: 0, y: 50 }} 
                           whileInView={{opacity: 1, y: 0 }}
                           transition={{duration:0.7, delay:0.2}}
                           viewport={{once:false, amount:0.3}} 
                           className='font-epilogue text-xl lg:text-5xl font-extrabold text-white'>TODAY SPECIAL FOOD</motion.h1>    
                          <motion.h4 
                           initial ={{opacity: 0, y: 50 }} 
                           whileInView={{opacity: 1, y: 0 }}
                           transition={{duration:0.8, delay:0.2}}
                           viewport={{once:false, amount:0.3}} 
                           className='font-epilogue text-sm lg:text-xl font-semibold text-[#FC791A] font-epilogue'>Limits Time Offer </motion.h4>  
                            <div className="flex   mt-4 md:mt-8">
                                             
                                              {/* */}
                                               <motion.div
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{duration:0.7, delay:0.2}}
                                                    viewport={{once:false, amount:0.3}} 
                                                    className="flex justify-center relative"
                                                  >
                                                    <motion.button
                                                      initial="initial"
                                                      whileHover="hover"
                                                      className="relative z-10 overflow-hidden px-6 py-3  font-semibold text-white bg-[#EB0029]"
                                                    >
                                                      <span className="flex items-center gap-2 relative z-10">
                                                        ORDER NOW
                                                        <FiArrowRight className="text-xl bg-white p-1  text-red-500" />
                                                      </span>
                                              
                                                      {/* TOP background (left to right) */}
                                                      <motion.div
                                                        variants={{
                                                          initial: { scaleX: 0 },
                                                          hover: { scaleX: 1 },
                                                        }}
                                                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                                                        className="absolute top-0 left-0 w-full h-1/2 bg-orange-500 origin-left z-0"
                                                      />
                                              
                                                      {/* BOTTOM background (right to left) */}
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
                                            </div>
                          </div> 

            <motion.div
                        initial ={{opacity: 0, y: 150 }} 
                           whileInView={{opacity: 1, y: 0 }}
                           transition={{duration:0.9}}
                           viewport={{once:true}} >
                           <motion.img
            src={img}
            alt="Pizza"
          
                 
            
            className=' absolute w-full flex  justify-center  max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-3xl  object-contain '
            animate={{
              x: [ 10,  -10, 0 ], 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              
            }}
          />  </motion.div>
          </div>
        </div>

        <motion.img
                     src={veg1}
                     alt=""
                    animate={{ y: [0, -40, 0] }}
                   transition={{
                     duration: 1,
                     times: [0, 0.5, 1],
                     repeat: Infinity,
                     repeatType: "loop",
                     ease: "linear"
                   }}
                   
                     className="hidden xl:block absolute bottom-5 -right-2" 
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
                   
                     className="hidden xl:block absolute bottom-5 -left-2" 
                   />

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
                     className="hidden xl:block absolute top-5 -left-0" 
                   />

                  
        


                     </div>
      
                  </div>
      </div>
    </div>
  )
}

export default Pizzaa