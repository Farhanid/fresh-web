import React, { useEffect, useState } from 'react';

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    }, 16); 

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          border: '1px solid #FC791A', 
          backgroundColor: 'transparent', 
          borderRadius: '50%',
          transform: `translate(${dotPosition.x - 10}px, ${dotPosition.y - 10}px)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        
        <div
          style={{
            width: '5px',
            height: '5px',
            backgroundColor: '#FC791A', 
            borderRadius: '50%',
          }}
        />
      </div>
    </div>
  );
};

export default Mouse;



