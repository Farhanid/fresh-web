import React, { useEffect, useState, useRef } from "react";
import { FaUser, FaTags } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion, useAnimation } from "framer-motion";
import img from "../assets/din.svg"; 
import img1 from "./v1.jpg";
import img2 from "./v2.jpg";
import img3 from "./v3.jpg";
import piz from '../assets/piz1.png'

const Latest = () => {

  const date = [15, 17, 25];
  const images = [img1, img2, img3];
  const head = [
    "Fast Food Frenzy: A Taste of Convenience",
    "Benefits of Health and Safety Measures",
    "Quick Craving: Unraveling FastFood Delights",
  ];

  const items = images.map((imgSrc, i) => ({
    img: imgSrc,
    date: date[i],
    title: head[i],
    author: "Admin",
    tag: "Chicken",
  }));

  const [windowItems, setWindowItems] = useState(items.slice(0, 3));
  const indexRef = useRef(3);
  const controls = useAnimation();


  const CARD_WIDTH = 420; 
  const GAP = 16; 
  const VISIBLE = 2;
  const SHIFT = CARD_WIDTH + GAP;

  useEffect(() => {
    let active = true;
    const cycle = async () => {
      while (active) {
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
      active = false;
    };
  }, [controls, items]);

  return (
    <div className="py-12 relative bg-[#f3efe9]  flex flex-col items-center">
  
      <motion.div
       initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{delay:0.3}}
       className="text-center mb-6 md:mb-12">
        <div className="flex justify-center items-center gap-2 text-[#FC791A] font-semibold text-sm mb-2">
          <img src={img} alt="decoration" className="h-5 w-auto" />
          <span className="font-bold text-lg">Latest News</span>
          <img src={img} alt="decoration" className="h-5 w-auto" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-[#0f172a] leading-tight">
          Our latest Foods News
        </h2>
      </motion.div>

      <motion.div 
       initial={{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             transition={{delay:0.6}}
      className="flex justify-center mb-5 px-4 w-full">
        <div
          className="overflow-hidden"
          style={{ width: (CARD_WIDTH + GAP) * VISIBLE }}
        >
          <motion.div
            animate={controls}
            className="flex gap-4"
            style={{ width: (CARD_WIDTH + GAP) * 3 }} 
          >
            {windowItems.map((it, idx) => (
              <div
                key={`${it.title}-${idx}`}
                className="flex flex-col flex-shrink-0"
                style={{ width: CARD_WIDTH }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    src={it.img}
                    alt={it.title}
                    className="object-cover w-full"
                    style={{ height: "220px" }}
                  />
                </div>
                <div className="bg-white border border-gray-100 p-6 w-full">
                  <div className="flex justify-center items-center gap-4">
                 
                    <div className="bg-[#EB0029] text-white text-center p-2 w-16 rounded">
                      <p className="text-lg font-bold">{it.date}</p>
                      <p className="text-sm">Dec</p>
                    </div>

                  
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <span className="flex items-center gap-1">
                          <FaUser className="text-red-600" />
                          By {it.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaTags className="text-red-600" />
                          {it.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mt-4 leading-tight mb-3">
                    {it.title}
                  </h3>

                  <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer hover:text-red-600">
                    Read More <HiArrowUpRight />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <img src={piz} alt=""  className="hidden xl:block absolute top-20 right-8" />
    </div>
  );
};

export default Latest;
























