import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 px-4 py-4 hover:bg-gray-900 hover:transition duration-400 rounded-lg bg-[#FC791A]  text-white shadow-lg  ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <FiArrowUp className="text-xl" />
    </button>
  );
};

export default Scroll;
