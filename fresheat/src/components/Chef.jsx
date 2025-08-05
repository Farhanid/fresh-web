import React from 'react'
import img1 from '../assets/chef1.png'
import img2 from '../assets/chef2.png'
import img3 from '../assets/chef3.png'
import { FiShare2 } from 'react-icons/fi'
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa"
import imga from '../assets/din.svg'
import {motion} from 'framer-motion'
import img6 from '../assets/veg6.png'

const Chef = () => {
  
  return (
    <>
    <div className=' bg-[#F4F1EA] relative  md:place-items-center  sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12'> 
 
          <div className=' pb-15 md:pb-30'>
            <motion.div
               initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.2}}
              className="flex justify-center items-center gap-2 text-[#FC791A]  font-semibold text-sm mb-1 md:mb-2">
                                 <img src={imga} alt="" />
                                 <span className='font-bold font-epilogue text-md md:text-lg'>OUR CHEFE</span>
                                 <img src={imga} alt="" />
             </motion.div>
              <motion.h2
               initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.25}}
              className="text-2xl text-center font-epilogue md:text-5xl font-black text-[#0f172a] mb-4 md:mb-8 leading-tight">
                     Meet Our Expert Chefe
                 </motion.h2>

           
          </div>

      <div className='grid grid-cols-1 md:gap-16 md:grid-cols-2 xl:grid-cols-3 md:mt-24'>
  
   <motion.div
     initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.2}}

    className=' relative mt-40 md:mt-0    '>
    
     <div className="relative max-w-[350px] mx-4 md:mx-0 md:w-[400px] bg-white rounded-t-[85px] overflow-hidden shadow-lg">
    
      
      <div className="relative   w-full h-[60px] md:h-[80px]">
        <div className="absolute inset-0 bg-white" />

       
       
      </div>

      <div className='flex justify-center relative z-25 items-center'>
      <div className=" group flex gap-4  text-4xl ">
    
      <FaLinkedinIn className=" hidden group-hover:block text-black hover:bg-red-600 hover:text-white  transition duration-400  bg-white p-2 rounded-full" /> 
      <FiShare2 className="text-white hover:bg-red-600 hover:text-white  transition duration-400  bg-[#FC791A] p-2 rounded-full" />       {/* LinkedIn */}
      <FaFacebookF className="hidden group-hover:block text-black hover:bg-red-600 hover:text-white  transition duration-400 bg-white p-2 rounded-full" />     {/* Facebook */}
    </div>
    </div>

      <div className="pt-8 pb-6 px-6 font-epilogue text-center">
        <h2 className="text-2xl font-bold hover:text-red-600 transition duration-400 text-gray-900">Ralph Edwards</h2>
        <p className="text-md text-gray-500 mt-1">Chef Lead</p>
      </div>
    </div>
    <div className='absolute -top-49 left-12 md:left-8'>
      <img src={img1} alt="" className='w-full max-w-[300px] overflow-x-hidden' />
      
</div>
    </motion.div>


   
  <motion.div
   initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.4}}
   className=' relative mt-60 md:mt-0    '>
    
     <div className="relative max-w-[350px] mx-4 md:mx-0 md:w-[400px] bg-white rounded-t-[85px] overflow-hidden shadow-lg">

      
      <div className="relative   w-full h-[60px] md:h-[80px]">
        <div className="absolute inset-0 bg-white" />

       
       
      </div>

      <div className='flex justify-center relative z-25 items-center'>
      <div className=" group flex gap-4  text-4xl ">
    
      <FaLinkedinIn className=" hidden group-hover:block text-black hover:bg-red-600 hover:text-white  transition duration-400  bg-white p-2 rounded-full" /> 
      <FiShare2 className="text-white hover:bg-red-600 hover:text-white  transition duration-400  bg-[#FC791A] p-2 rounded-full" />       {/* LinkedIn */}
      <FaFacebookF className="hidden group-hover:block text-black hover:bg-red-600 hover:text-white  transition duration-400 bg-white p-2 rounded-full" />     {/* Facebook */}
    </div>
    </div>

    
      <div className="pt-8 pb-6 px-6 font-epilogue text-center">
        <h2 className="text-2xl font-bold hover:text-red-600 transition duration-400 text-gray-900">Leslie Alexander</h2>
        <p className="text-md text-gray-500 mt-1">Chef Assistant</p>
      </div>
    </div>
    <div className='absolute -top-49 left-12 md:left-8'>
      <img src={img2} alt="" className='w-full max-w-[300px] overflow-x-hidden' />
      
</div>
    </motion.div>
    

     <motion.div
             initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.6}}
      className=' relative mt-60 md:mt-45 xl:mt-0   '>
    
     <div className="relative max-w-[350px] mx-4 md:mx-0 md:w-[400px] bg-white rounded-t-[85px] overflow-hidden shadow-lg">
   
      
      <div className="relative   w-full h-[60px] md:h-[80px]">
        <div className="absolute inset-0 bg-white" />

       
       
      </div>
      
      <div className='flex justify-center relative z-25 items-center'>
      <div className=" group flex gap-4  text-4xl ">
   
      <FaLinkedinIn className=" hidden group-hover:block text-black hover:bg-red-600 hover:text-white  transition duration-400  bg-white p-2 rounded-full" /> 
      <FiShare2 className="text-white hover:bg-red-600 hover:text-white  transition duration-400  bg-[#FC791A] p-2 rounded-full" />       {/* LinkedIn */}
      <FaFacebookF className="hidden group-hover:block text-black hover:bg-red-600 hover:text-white  transition duration-400 bg-white p-2 rounded-full" />     {/* Facebook */}
    </div>
    </div>

   
      <div className="pt-8 pb-6 px-6 font-epilogue text-center">
        <h2 className="text-2xl font-bold hover:text-red-600 transition duration-400 text-gray-900">Ronald Richards</h2>
        <p className="text-md text-gray-500 mt-1">Chef Assistant</p>
      </div>
    </div>
    <div className='absolute -top-49 left-12 md:left-8'>
      <img src={img3} alt="" className='w-full max-w-[300px] overflow-x-hidden' />
      
</div>
    </motion.div>

     

</div>

  
   <motion.img
     src={img6}
     alt=""
    animate={{ y: [0, -40, 0] }}
   transition={{
     duration: 1,
     times: [0, 0.5, 1],
     repeat: Infinity,
     repeatType: "loop",
     ease: "linear"
   }}
   
     className='hidden xl:block absolute top-15 left-0 '
   />
    </div>
    </>
  )
}

export default Chef
