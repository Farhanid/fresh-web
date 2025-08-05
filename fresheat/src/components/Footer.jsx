import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import img from '../assets/hlogo.svg'
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import { links } from '../assets/Data';
import { menu } from '../assets/Data';
import  { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import veg1 from '../assets/veg8.png'
import imj from '../assets/veg7.png'
import veg2 from '../assets/veg9.svg'


const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <>
    <footer className='bg-[#02142A] relative  w-full px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 pt-12 pb-16  lg:pt-16 lg:pb-24'>
        <div className='mx-auto relative z-40 max-w-7xl'>
            <motion.div
             initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{delay:0.2}}
             className='bg-[#FC791A] p-4 space-y-4 md:space-y-0 md:p-[50px] rounded-3xl mb-[40px]  grid grid-cols-1 md:grid-cols-3'>

               <div className='flex items-center space-x-2 md:space-x-4'>
                 <div className='bg-white rounded-full p-3'>
                      <FaMapMarkerAlt className="text-lg" />           
                 </div>
                 <div className="flex flex-col">
                     <span className="text-[14px] mb-[2px] body-font text-white not-italic font-medium leading-normal capitalize ">Address</span>   
                     <h2 className='text-[20px] text-white font-epilogue not-italic font-medium leading-normal'>4648 Rocky Road Philadelphia</h2> 
                 </div>             
             </div>

                <div className='flex items-center space-x-2 md:space-x-4'>
                 <div className='bg-white rounded-full p-3'>
                 <FaEnvelope className="text-lg" />             
                 </div>
                   <div className="flex flex-col">
                     <span className="text-[14px] mb-[2px] body-font text-white not-italic font-medium leading-normal capitalize ">Send Email</span>   
                     <h2 className='text-[20px] text-white font-epilogue not-italic font-medium leading-normal'>info@exmple.com</h2> 
                   </div>             
               </div>

             <div className='flex items-center space-x-2 md:space-x-4'>
                 <div className='bg-white rounded-full p-3'>
                     <FaPhone className="text-lg" />            
                 </div>
                 <div className="flex flex-col">
                     <span className="text-[14px] mb-[2px] body-font text-white not-italic font-medium leading-normal capitalize ">Call Emergency</span>   
                     <h2 className='text-[20px] text-white font-epilogue not-italic font-medium leading-normal'>+88 0123 654 99</h2> 
                 </div>             
             </div>


            </motion.div>
             <div className='grid grid-cols-1 space-y-6 md:space-y-0 md:grid-cols-3 xl:grid-cols-4 md:mt-16'>
            <motion.div
             initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{delay:0.3}}
             className='space-y-4 md:space-y-8'>
                <img src={img} alt="" />
                <p className='text-[#D2D2D1] '>Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia curabitur lacinia mollis</p>
                <div className='flex items-center gap-2'>
                <div className='flex gap-2 hover:bg-red-500 transition'>
                    <a href="" className='flex items-center justify-center  border border-white/40 shadow-md p-2'>
                    <FaFacebookF className='text-white ' />
                    </a>
                </div>

                 <div className='flex gap-2 hover:bg-red-500 transition'>
                    <a href="" className='flex items-center justify-center  border border-white/40 shadow-md p-2'>
                    <FaTwitter className='text-white ' />
                    </a>
                </div>

                <div className='flex gap-2 hover:bg-red-500 transition'>
                    <a href="" className='flex items-center justify-center  border border-white/40 shadow-md p-2'>
                    < FaLinkedinIn className='text-white ' />
                    </a>
                </div>

                 <div className='flex gap-2 hover:bg-red-500 transition'>
                    <a href="" className='flex items-center justify-center  border border-white/40 shadow-md p-2'>
                    < FaYoutube className='text-white ' />
                    </a>
                </div>

                </div>
            </motion.div>
        
            <motion.div
             initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{delay:0.6}} 
            className=''>
                 <h1 className='font-bold text-white text-2xl mb-5'>Quick Links</h1>
                  <div className="flex w-[100px] h-[3px] overflow-hidden md:mb-7">
                    <div className="w-[30%] bg-orange-500"></div>
                    <div className="w-[10%] bg-black"></div>
                    <div className="w-[60%] bg-white"></div>
                 </div>
                 <div className='mt-4 md:mt-0'>
                {links.map((lin,index) => (
                   <ul key={index} className='flex gap-2  items-center'> 
                     <span className="text-[24px]  text-white">&raquo;</span>
                        <li className=' text-white body-font hover:text-red-500 text-sm sm:text-base md:text-md xl:text-xl leading-7'>
                          {lin}
                        </li>
                    </ul>
                ))}
                </div>

            </motion.div>

             <motion.div
              initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{delay:0.9}}
              className=''>
                  <h1 className='font-bold text-white text-2xl mb-5'>Our Menu</h1>
                 <div className="flex w-[100px] h-[3px] overflow-hidden md:mb-7">
                    <div className="w-[30%] bg-orange-500"></div>
                    <div className="w-[10%] bg-black"></div>
                    <div className="w-[60%] bg-white"></div>
                 </div>


                  <div className='mt-4 md:mt-0'>
                {menu.map((lin,index) => (
                    <ul key={index} className='flex gap-2 items-center'> 
                     <span className="text-[24px]  text-white">&raquo;</span>
                        <li className=' text-white body-font hover:text-red-500  text-sm sm:text-base md:text-md xl:text-xl leading-7'>
                          {lin}
                        </li>
                    </ul>
                ))}
                </div>

            </motion.div>

            <motion.div 
             initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{delay:1.2}}>
                 <h1 className='font-bold text-white text-2xl mb-5'>Contact Us</h1>
                 <div className="flex w-[100px] h-[3px] overflow-hidden md:mb-7">
                    <div className="w-[30%] bg-orange-500"></div>
                    <div className="w-[10%] bg-black"></div>
                    <div className="w-[60%] bg-white"></div>
                 </div>
                 <div className='mt-4 md:mt-0'>
                 <h1 className='text-gray-400 body-font mb-2'>Monday-Friday: <span className='text-[#FC791A]'>8am - 4pm</span></h1>
                 <h1 className='text-gray-400 body-font mb-5'>Saturday: <span className='text-[#FC791A]'>8am - 12am</span></h1>
                 <div className='relative w-[250px] overflow-hidden'>
                  <input type="text" className='bg-white text-md px-4 md:pr-8 md:pl-6 py-4 text-gray-900 rounded-xl ' placeholder="Your email address" />
                  <span className=' rounded-lg bg-[#FC791A] absolute right-11 md:right-7 top-2 px-4 py-3'> < FaArrowRight  className='  text-white' /></span> 
                  </div>
                  <div className='flex gap-2 items-center mt-6'>
                    <input type="checkbox" className='w-5 h-5'  />
                    <h3 className='text-white body-font'> I agree to the <span className='underline'>Privacy Policy</span></h3>
                  </div>
                  </div>
            </motion.div>

            

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
   
     className='z-0 hidden xl:block absolute bottom-3 left-1 '
   />
                <img src={imj} alt="" className='z-0 hidden xl:block absolute bottom-2 left-0 '/>
        <img src={veg2} alt="" className=' hidden xl:block absolute  top-0 -right-4 '/>          



    </footer>

    <div className='w-full bg-[#EB0029]'>
    <div className='max-w-7xl mx-auto'>
     <div className=' body-font px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 py-4 md:py-6 flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between'>
                <h1 className='text-white'>&copy; All Copyrights {year} by Fresh Eat</h1>
                <div className='flex items-center text-white space-x-4'>
                   <h1 className='border border-white/60 p-1.5 rounded-sm'>Terms & Conditions</h1>
                   <h1 className='border  border-white/60  p-1.5 rounded-sm'>Privacy Policy</h1>
                </div>
            </div>
   </div>
   </div>

      </>      
  )
}

export default Footer

/*  */