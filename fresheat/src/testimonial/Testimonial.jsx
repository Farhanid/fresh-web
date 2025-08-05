
import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import img1 from '../assets/man2.png'
import img2 from '../assets/man3.png'
import img from '../assets/din.svg'
import {motion} from 'framer-motion'
import Circle from '../components/Circle';
import imgman from '../assets/manfre.png'

import{ useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
  import { FaArrowLeft, FaArrowRight } from "react-icons/fa";






const Testimonial = () => {
 
   const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Albert Flores",
      role: "Web Designer",
      content: "Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt",
      img:imgman
    },
    {
      name: "Albert Flores",
      role: "Web Designer",
      content: "Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt",
      img:imgman
    }
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='w-full '>
      
<div className='max-w-7xl mx-auto'>
  <div className='bg-[#181818]  relative flex md:pb-10  '>
     <div className="w-full min-h-screen  md:w-[80%] overflow-hidden  ">
        <img 
          src={img1} 
          alt="Main Image"
          className="w-full min-h-screen md:h-full object-cover md:object-contain"
        />
      </div>

      <div className="hidden md:block md:w-[20%]    mt-50">
        <img 
          src={img2} 
          alt="Side Image"
          className="w-full  md:h-full  object-contain"
        />
      </div>

       <div className='absolute px-8 md:px-1 lg:px-8  top-[40%] md:left-[30%] md:top-[30%] lg:top-[25%]'>
           <motion.div
                        initial ={{opacity: 0, y: 50 }} 
                               whileInView={{opacity: 1, y: 0 }}
                               transition={{duration:0.6, delay:0.1}}
                               viewport={{once:true}} 
                        className="flex justify-center items-center gap-2 text-[#FC791A]  font-semibold text-sm mb-1 md:mb-2">
                                           <img src={img} alt="" />
                                           <span className='font-bold text-lg'>TESTIMONIALS</span>
                                           <img src={img} alt="" />
                       </motion.div>
                        <motion.h2
                         initial ={{opacity: 0, y: 50 }} 
                               whileInView={{opacity: 1, y: 0 }}
                               transition={{duration:0.7, delay:0.2}}
                               viewport={{once:true}}  
                        className="text-3xl text-center  md:text-5xl font-black text-white mb-4 md:mb-8 leading-tight">
                               What Our Clients Say
                           </motion.h2>
       </div>


 



    <motion.div
    initial ={{opacity: 0, y: 150 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:0.6}}
                     viewport={{once:true}}
     className="flex absolute px-4 top-[60%] md:top-[55%] lg:top-[46%] w-full justify-center">
      <div className="relative w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 1, 
                ease: "easeInOut" 
              } 
            }}
            exit={{ 
              opacity: 0, 
              x: -100,
              transition: { 
                duration: 1,
                ease: "easeInOut" 
              }
            }}
            className="absolute top-0 left-0 right-0 mx-auto"
          >
            <div className="max-w-2xl bg-white rounded-2xl shadow-md p-6 md:px-6 lg:px-10 md:py-6 lg:py-16 relative overflow-hidden mx-auto">
              <div className="absolute  top-4 right-4 text-orange-500 text-7xl font-extrabold">
                <span>”</span>
              </div>
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <img 
                  src={testimonials[currentIndex].img}
                  alt="user"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                  <div className="flex text-orange-400 mt-1">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                {testimonials[currentIndex].content}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>








 <div className='hidden md:block'>

    <div className=" absolute -bottom-[8%] left-[40%] flex gap-4  p-6">

      <button className="w-15 h-15 flex items-center justify-center rounded-full border border-red-500 text-red-500 hover:bg-white hover:text-black transition">
        <FaArrowLeft />
      </button>

      <button className="w-15 h-15 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-white hover:text-black transition">
        <FaArrowRight />
      </button>
    </div>
</div>

 
  
  

 






   




<motion.div
initial ={{opacity: 0, y: 60 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:0.6}}
                     viewport={{once:true}}
 className='absolute top-[7%] left-[35%] md:left-[48%]'>
<Circle
  size={120}
  ringGap={20}
  label="PLAY VIDEO"
  repeat={4}
  spinDuration={4}
  textFontSize={14}
  textColor="#fff"
  playIconSize={32} playIconColor="white"
/>

</motion.div>
    


  </div>
 </div>  
    </div>
  )
}

export default Testimonial 