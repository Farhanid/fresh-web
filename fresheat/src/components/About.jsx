import React from 'react'
import img from '../assets/din.svg'
 import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi';
import man from '../assets/manp.png'
import woman from '../assets/womenp.png'
import plate1 from '../assets/pla1.png'
import plate2 from '../assets/pla2.png'


const About = () => {
  return (
<motion.div
 initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.1}}
 className='bg-[#F4F1EA] w-full relative px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 py-12 '>
     <div className='max-w-7xl mx-auto'>
         <motion.div
         initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{once:true , delay:0.3}} 
          className='text-center bg-white px-2 py-8 md:py-16'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once:true }}
                className="flex justify-center items-center gap-2 text-[#FC791A] font-semibold text-sm mb-4"
               >
                 <img src={img} alt="" />
                 <span className='font-bold text-md md:text-lg'>ABOUT US</span>
                 <img src={img} alt="" />
              </motion.div>

                 <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      viewport={{ once:true }}
                      className="text-3xl sm:text-3xl md:text-5xl font-black text-[#0f172a] mb-6 leading-tight"
                   >
                         Variety Of Flavours From <br /> American Cuisine
                 </motion.h2>
    
                 <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true}}
                    className="max-w-xl mx-auto text-gray-500 text-sm sm:text-base mb-4 md:mb-10"
                  >
                      It is a long established fact that a reader will be distracted by the readable content of a
                      page when looking at layout. The point is a long established fact that
                 </motion.p>

             
              <motion.div
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true}}
                   className="flex justify-center relative"
                 >
                   <motion.button
                     initial="initial"
                     whileHover="hover"
                     whileTap="hover"
                     className="relative cursor-pointer z-10 overflow-hidden px-6 py-3  font-semibold text-white bg-red-600"
                   >
                     <span className="flex items-center gap-2 relative z-10">
                      ORDER NOW
                       <FiArrowRight className="text-xl bg-white p-1  text-red-500" />
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
         </motion.div>
     </div>
     <img src={man} alt="" className='hidden xl:block absolute -left-10 top-2' />
         <img src={woman} alt="" className='hidden xl:block absolute -right-10 top-2' />

        
      <motion.img
    src={plate1}
    alt=""
    animate={{ rotate: 360 }}
    transition={{
      duration: 80, 
      repeat: Infinity,
      ease: "easeInOut"          
    }}
    className="hidden xl:block absolute top-25 left-7"
    style={{ transformOrigin: "50% 50%" }}
  />
      
      <motion.img
    src={plate2}
    alt=""
    animate={{ rotate: 360 }}
    transition={{
      duration: 80,   
      repeat: Infinity,
      ease: "easeInOut"         
    }}
    className="hidden xl:block absolute top-25 right-7"
    style={{ transformOrigin: "50% 50%" }}
  />
</motion.div>
  )
}

export default About



    
     
     