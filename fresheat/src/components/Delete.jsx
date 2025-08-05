import React from 'react'
import img from '../assets/din.svg'
import img1 from '../assets/g1.png'
import img2 from '../assets/g2.png'
import img3 from '../assets/g3.png'
import img4 from '../assets/g4.png'
import img5 from '../assets/g5.png'
import img6 from '../assets/g6.png'
import img7 from '../assets/g7.png'
import img8 from '../assets/g8.png'
import img9 from '../assets/g9.png'
import img10 from '../assets/g10.png'
import img11 from '../assets/g11.png'
import img12 from '../assets/g12.png'
import img13 from '../assets/g13.png'
import img14 from '../assets/g14.png'
import { motion } from "framer-motion"
import ff from '../assets/ffri.png'
import bur from '../assets/burge.png'

const Delete = () => {
     
const image = [img1, img2, img3, img4];
const text = ["text-red-500", "text-black", "text-black", "text-black"]
const name = ["Fast Food", "Drink & Juice", "Chicken Pizza", "Fresh Pasta"]
const images= [img5,img6,img7,img8,img9,img10,img11,img12,img13,img14]
const price = [15.99, 65.99, 25.99, 135.99,115.99,95.99,154.99,75.99,55.99,44.99 ]
const nme = ["Chinese Pasta", "Egg and Cucumber", "Chicken Fried Rice", "Chicken White Rice", "Chicken Pizza", "Spatial Burger", "Chicken Noodles", "Vegetables Burger", "Grilled Chicken", "Brief Chicken"]


  return (
    <div className='w-full relative bg-[#F4F1EA] px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 pt-12 lg:pt-24'>
        <div className='mx-auto max-w-7xl'>
            <div className='bg-white rounded-2xl  px-4 lg:px-15 py-8 place-items-center'>
                 <motion.div
                  initial ={{opacity: 0, y: 50 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:0.2}}
                     viewport={{once:true}}
                  className="flex justify-center items-center gap-2 mt-5 md:mt-8 text-[#FC791A]  font-semibold text-sm mb-4">
                      <img src={img} alt="" />
                      <span className='font-bold text-lg'>FOOD MENU</span>
                      <img src={img} alt="" />
                 </motion.div>
                 <motion.h2
                  initial ={{opacity: 0, y: 50 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:0.4}}
                     viewport={{once:true}}
                  className="text-xl sm:text-2xl md:text-4xl font-black text-[#0f172a] mb-6 leading-tight">
                                      FRESHEAT FOODS MENU
                 </motion.h2>

                           
                <motion.div
                 initial ={{opacity: 0, y: 50 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:0.9}}
                     viewport={{once:true}}
                 className='flex flex-col md:flex-row gap-4 flex-wrap md:px-20 lg:justify-center xl:justify-start'>
                    {image.map((imag,index) => (
                       
                             <div
                             
                              key={index} className='flex items-center justify-center gap-4'>
                                             <img src={imag} alt="" />
                                             <p className={`text-xl ${text[index]} font-bold font-epilogue `}>{name[index]}</p>
                                             <div className="border-l border-dashed border-gray-400 h-10"></div>
                                         </div> 

                     
                    ))}
                    
                </motion.div> 

                 <div className='h-[1px] mt-6 md:mt-10 w-full bg-gray-200'></div>


                 

         {/* */}

       <motion.div
       initial ={{opacity: 0, y: 50 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:1.2}}
                     viewport={{once:true}}
        className='flex flex-wrap justify-center gap-6 mt-4 md:mt-12'>
  {images.map((img, index) => (
    <div key={index} className='w-full md:w-2/5'>
  
      <motion.div
      initial ={{opacity: 0, y: 50 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:0.5}}
                     viewport={{once:true}}
       className='flex items-center gap-4'>
        
        <img src={img} alt="" className='h-[70px] w-[70px]' />

    
        <div className='flex flex-col flex-1'>
          <h1 className='font-bold font-epilogue text-lg md:text-2xl'>{nme[index]}</h1>
          <h3 className='text-sm font-medium'>Its a testament to our</h3>
        </div>

      
        <p className='hidden md:block font-medium text-lg md:ml-auto'>
          ${price[index]}
        </p>
      </motion.div>

      <p className='block md:hidden mt-2 text-left font-medium text-md'>
        ${price[index]}
      </p>

    </div>
  ))}
</motion.div>


                                    

            </div>
        </div>

        <img src={ff} alt="" className='hidden xl:block absolute top-110 right-4' />
         <img src={bur} alt="" className='hidden xl:block absolute top-120 left-4' />
    </div>
  )
}

export default Delete

/* */