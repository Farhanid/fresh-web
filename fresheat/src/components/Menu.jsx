import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBasket3} from 'react-icons/bs';
import { FiEye } from 'react-icons/fi';
import img1 from '../assets/f1.png'
import img2 from '../assets/f2.png'
import img3 from '../assets/f3.png'
import img4 from '../assets/f4.png'
import img5 from '../assets/f5.png'
import img from '../assets/din.svg'
import { FiArrowRight } from 'react-icons/fi';
import {motion} from 'framer-motion'
import veg1 from '../assets/veg1.png'
import veg2 from '../assets/veg2.png'
import { useState } from 'react';


const Menu = () => {
  
    const [showMobileIcons, setShowMobileIcons] = useState(false);

  // 👇 Handle card tap only on mobile
  const handleCardTap = () => {
    if (window.innerWidth < 1024) {
      setShowMobileIcons(prev => !prev);
    }
  };

  const title = ["Chicken Fried Rice", "Chicken Pasta", "Chicken Pizza", "Chicken Noodles", "Grilled Chicken"]
  const price =[ 100.99 ,15.99, 26.99, 39.00, 20.99 ]
  const image = [img1,img2,img3,img4,img5]
  return (
    <div className='bg-[#F4F1EA] relative w-full  px-4 sm:px-6 py-4 md:py-12 md:px-8 lg:px-20 xl:px-24'>
        <div className='place-items-center max-w-7xl mx-auto'>
             <motion.div
               initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.2}}
              className="flex justify-center items-center gap-2 text-[#FC791A]  font-semibold text-sm mb-1 md:mb-2">
                                 <img src={img} alt="" />
                                 <span className='font-bold text-lg'>Popular Dishes</span>
                                 <img src={img} alt="" />
             </motion.div>
              <motion.h2
               initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.25}}
              className="text-3xl text-center  md:text-4xl font-bold text-[#0f172a] mb-4 md:mb-8 leading-tight">
                     Best Selling Dishes
              </motion.h2>
            <div className=' gap-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:gap-12'>
           



       {title.map((menu,index) =>(



    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      onClick={handleCardTap} // 👈 tap the card on mobile
      className={`group relative ${showMobileIcons ? 'bg-gray-950' : 'bg-white' }  hover:bg-gray-950 py-6 md:py-10 px-8 md:px-8 lg:px-12 rounded-xl shadow-md max-w-[260px] md:max-w-[280px] text-center cursor-pointer`}
    >
      
      <div className="absolute bg-[#EB0029] rounded-full p-1 top-3 right-3 z-20">
        <AiOutlineHeart className="text-white text-xl" />
      </div>

    
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={showMobileIcons ? { opacity: 1, y: 0 } : {}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className={`absolute top-12 right-3 space-y-2 z-10
          ${showMobileIcons ? "block lg:hidden" : "hidden"}
          group-hover:block`}
      >
        <div className="bg-white hover:bg-[#EB0029] rounded-full p-1">
          <BsBasket3 className="text-black hover:text-white text-xl" />
        </div>
        <div className="bg-white hover:bg-[#EB0029] rounded-full p-1">
          <FiEye className="text-black hover:text-white text-xl" />
        </div>
      </motion.div>

    
      <img
        src={image[index]}
        alt="Chicken Fried Rice"
        className="mx-auto w-[180px] h-[180px] object-cover rounded-full mb-4"
      />

     
      <div className="space-y-3">
        <h3 className="text-xl font-epilogue font-bold group-hover:text-white text-[#0f172a]">
          {menu}
        </h3>
        <p className="text-gray-400 group-hover:text-white text-lg">
          The Registration Fee
        </p>
        <p className="text-red-600 group-hover:text-white font-bold text-xl mt-2">
          ${price[index]}
        </p>
      </div>
    </motion.div>


 
   
   





   
       ))}
   




            </div>
            
                             


              <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center mt-4 md:mt-8 relative"
    >
      <motion.button
        initial="initial"
        whileHover="hover"
        whileTap="hover"
        className="relative cursor-pointer z-10 overflow-hidden px-6 py-3  font-semibold text-white bg-red-600"
      >
        <span className="flex items-center gap-2 relative z-10">
          VIEW ALL ITEM
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

         
    


        </div>
       
        
        <img src={veg1} alt="" className="hidden xl:block absolute top-230 left-3" />
           <motion.img
             src={veg2}
             alt=""
             animate={{ y: [0, -40, 0] }}
             transition={{
             duration: 1,
             times: [0, 0.5, 1],
             repeat: Infinity,
             repeatType: "loop",
             ease: "linear"
           }}
           
             className="hidden xl:block absolute top-5 right-12" 
           />
    
    </div>
  )
}

export default Menu
