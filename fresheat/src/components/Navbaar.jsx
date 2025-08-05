import React, { useEffect, useState, useRef } from "react"
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi"
import img1 from "../assets/navaa1.svg"
import img2 from "../assets/lohom.svg"
import { FiPlus } from "react-icons/fi"
import { FaClock } from "react-icons/fa"
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'


const Navbaar = () => {
    
      const [hidden, setHidden] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const lastScrollY = useRef(0);
      const hideTimeout = useRef(null); 

      useEffect(() => {
        const handleScroll = () => {
          const currentScroll = window.scrollY;
            if (currentScroll > lastScrollY.current) {
            setHidden(true);
            if (hideTimeout.current) clearTimeout(hideTimeout.current);
            hideTimeout.current = setTimeout(() => {
              setHidden(false);
              hideTimeout.current = null;
            }, 1000);
          } 
          else {
            if (hideTimeout.current) {
              clearTimeout(hideTimeout.current);
              hideTimeout.current = null;
            }
            setHidden(false);
          }
          setScrolled(currentScroll > 0);
          lastScrollY.current = currentScroll;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
          window.removeEventListener("scroll", handleScroll);
          if (hideTimeout.current) clearTimeout(hideTimeout.current);
        };
      }, []);


  return (

<div className='w-full'>
     <div className=''>
              <div className="bg-[#2d2d2d] w-full  fixed top-0 left-0 z-50  flex items-center justify-between px-4 sm:px-6 md:px-8 xl:px-14 py-2 xl:py-0">
                     <div className="flex-shrink-0">
                       <img src={img1} alt="Logo" className="w-[100px] sm:w-[120px] md:w-[140px]" />
                     </div>

                    <div className="">
                       <button className=" bg-[#82b440] hover:bg-green-500 text-white text-sm px-4 py-2 rounded">
                         Buy now
                       </button>
                    </div>
                      
                    
               </div>
               <div className="h-[54px] xl:h-9 " />
               {/* */}    
               <nav
                  className={` xl:hidden fixed top-[54px]  left-0 w-full bg-white shadow z-40 transition-all duration-500  ${hidden ? "-translate-y-full" : "translate-y-0"}  ${scrolled ? "py-2" : "py-6"}
                       `}
                     >
                    <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 xl:px-14">
                           <div className="flex-shrink-0">
                              <img src={img2} alt="Secondary logo" className="w-[100px] sm:w-[120px] md:w-[140px]" />
                           </div>
               
                           <div className="flex items-center gap-4">
                        
                               <button aria-label="search" className="p-2 rounded hover:bg-gray-100">
                                 <FiSearch className="text-xl text-slate-700" />
                               </button>
                                       
                           <div className="relative">
                                 <button aria-label="cart" className="p-2 rounded hover:bg-gray-100">
                                    <FiShoppingCart className="text-xl text-slate-700" />
                                 </button>
                                 <span className="absolute -top-3 -right-2 bg-orange-500 text-white text-xs px-1 py-[0.5px] rounded-full">
                                    3
                                 </span>
                           </div>
               
                      
                                 <button aria-label="menu" className="p-2 rounded hover:bg-gray-100">
                                      <FiMenu className="text-2xl text-slate-700" />
                                 </button>
                           </div>
                     </div>
                 </nav>

                             {/* */}   


          <div className="hidden xl:block -mb-30 pb-0">
              <div className="relative ">
                            <div className="inline-block relative  z-30 gap-4 bg-white shadow-md px-14 py-15">
                               <img src={img2} alt="Secondary logo" className="w-[100px] sm:w-[120px] md:w-[240px]" />
                            </div>

                      <div className=" absolute z-0 top-0">
                              <div className="ml-80 flex text-white space-x-24 justify-between py-5 px-12 bg-[#EB0029]">
                                   <div className="flex gap-2">
                                        <FaClock size={26} color="white"  />
                                        <p>09.00 am - 06.00 pm</p>
                                   </div>
                                   <div className="flex space-x-8 ">
                                         <p>Follow US:</p>
                                         <div className='flex items-center gap-8'>                                        
                                                   <FaFacebookF className='text-white ' />                                        
                                                   <FaTwitter className='text-white ' />                                    
                                                   < FaLinkedinIn className='text-white ' />                                            
                                                   < FaYoutube className='text-white ' />                       
                                         </div>
                                   </div>
                               </div>

                           <div className="ml-87 flex space-x-24 justify-between py-12 px-10 bg-[#010F1C]">
                                    <div className="flex items-center gap-4 text-white">
                                          <div className="flex items-center gap-2">
                                              <h1 className="font-epilogue text-lg font-semibold">Home</h1>
                                              <FiPlus size={20} />
                                          </div>
                                          <div className="flex items-center gap-2">
                                               <h1 className="font-epilogue text-lg font-semibold">About Us</h1>
                                               <FiPlus size={20} />
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <h1 className="font-epilogue text-lg font-semibold">Shop</h1>
                                                <FiPlus size={20} />
                                          </div>
                                          <div className="flex items-center gap-2">
                                                 <h1 className="font-epilogue text-lg font-semibold">Pages</h1>
                                                 <FiPlus size={20} />
                                           </div>
                                           <div className="flex items-center gap-2">
                                                  <h1 className="font-epilogue text-lg font-semibold">Blog</h1>
                                                  <FiPlus size={20} />
                                           </div>
                                           <div className="flex items-center gap-2">
                                                   <h1 className="font-epilogue text-lg font-semibold">Contact Us</h1>
                                                   <FiPlus size={20} />
                                           </div>
                                    </div>  
                                    <div className="flex  items-center gap-4">
                        
                                         <button aria-label="search" className="p-2 rounded hover:bg-gray-100">
                                            <FiSearch className="text-xl text-white" />
                                         </button>                         
                                         <div className="relative">
                                             <button aria-label="cart" className="p-2 rounded hover:bg-gray-100">
                                             <FiShoppingCart className="text-xl text-white" />
                                             </button>
                                             <span className="absolute -top-3 -right-2 bg-orange-500 text-white text-xs px-1 py-[0.5px] rounded-full">
                                                3
                                             </span>
                                        </div>
               
                                         <button aria-label="menu" className="p-2 rounded hover:bg-gray-100">
                                              <FiMenu className="text-2xl text-white" />
                                         </button>
                                    </div>


                           </div>
                      </div>


               </div>
          </div>
    </div>
</div>

  )
}

export default Navbaar