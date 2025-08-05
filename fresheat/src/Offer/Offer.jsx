import React, { useState, useEffect } from 'react';
import img from './burg.png'
import {motion} from 'framer-motion'
import img1 from '../assets/din.svg'
import { FiArrowRight } from 'react-icons/fi';
import veg3 from '../assets/veg3.svg'
import veg4 from '../assets/veg4.svg'
import veg5 from '../assets/veg5.svg'


const Offer = () => {
     const targetDate = new Date("2025-12-31T23:59:59");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

   useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const boxStyle = "bg-orange-500 text-white p-1 md:p-4 text-center w-full w-20 sm:w-24";
  const valueStyle = "text-2xl sm:text-3xl font-bold";
  const labelStyle = "mt-1 border-t border-white pt-1 text-xs tracking-wide";

  return (
    <>
    <div className='px-4 relative bg-[#F4F1EA] sm:px-6 md:px-8  lg:px-20 xl:px-24 py-12 md:py-20 '>
      <div className='max-w-7xl mx-auto'>
    <motion.div
      initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.3}}
    className='w-full  px-2 py-4  md:px-10 md:py-20 relative bg-[url(https://gramentheme.com/html/fresheat/assets/img/bg/offerBG1_1.jpg)]'>
  
 
    <div className='flex flex-col gap-4 md:flex-row md:justify-between '>
   <motion.div
   initial ={{opacity: 0, y: 150 }} 
                     whileInView={{opacity: 1, y: 0 }}
                     transition={{duration:1.2}}
                     viewport={{once:true}}
    className='flex mt-24'>

     <div>
      <img src={img} alt="" className=' w-full max-w-[500px]  max-h-[500px]' />
     </div>



     

  </motion.div>
 {/* */}

     <div className="md:max-w-[350px] lg:max-w-[480px]  bg-[#5C6574]/70 text-white  p-8 shadow-lg font-sans">
      <div className="text-center mb-2">

                <div className=''>

              <motion.div
                            initial ={{opacity: 0, y: 50 }} 
                                   whileInView={{opacity: 1, y: 0 }}
                                   transition={{duration:0.6, delay:0.1}}
                                   viewport={{once:false, amount:0.3}} 
                            className="flex justify-center items-center gap-2 text-[#FC791A]  font-semibold text-sm mb-1 md:mb-3 ">
                                               <img src={img1} alt="" />
                                               <span className='font-bold text-lg'>Popular Dishes</span>
                                               <img src={img1} alt="" />
                           </motion.div>
                            <motion.h2
                             initial ={{opacity: 0, y: 50 }} 
                                   whileInView={{opacity: 1, y: 0 }}
                                   transition={{duration:0.7, delay:0.2}}
                                   viewport={{once:false, amount:0.3}}  
                            className="text-3xl text-center mt-3  md:text-4xl font-bold text-white mb-4 md:mb-8  leading-tight">
                                   Get 30% Discount Every Item
                               </motion.h2>

                  </div>           

        <div className="flex flex-col md:flex-row gap-4 items-center  md:justify-center  ">
      <div className={boxStyle}>
        <div className={valueStyle}>{timeLeft.days}</div>
        <div className={labelStyle}>DAYS</div>
      </div>
      <div className={boxStyle}>
        <div className={valueStyle}>{timeLeft.hours}</div>
        <div className={labelStyle}>HRS</div>
      </div>
      <div className={boxStyle}>
        <div className={valueStyle}>{timeLeft.minutes}</div>
        <div className={labelStyle}>MINS</div>
      </div>
      <div className={boxStyle}>
        <div className={valueStyle}>{timeLeft.seconds}</div>
        <div className={labelStyle}>SECS</div>
      </div>
    </div>

    <motion.div
                                                  initial={{ opacity: 0, y: 50 }}
                                                  whileInView={{ opacity: 1, y: 0 }}
                                                  transition={{duration:0.7, delay:0.2}}
                                                  viewport={{once:false, amount:0.3}} 
                                                  className="flex justify-center mt-8 md:mt-12 relative"
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

</div>

    </div>

    </motion.div>

        <img src={veg3} alt="" className='hidden xl:block absolute top-0 right-0 ' />
        <img src={veg4} alt="" className='hidden xl:block absolute top-30 left-15 ' />
         <img src={veg5} alt="" className='hidden xl:block absolute bottom-0 right-0 ' />
    </div>
    </div>


   
    </>

  )
}

export default Offer

