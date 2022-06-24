import React, { useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const BackToUp = () => {
    const location = useLocation()
    console.log(location);
    const [scroll, setScroll] = useState(false);
    
    window.onscroll = function() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }
    const scrollTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
   
    return (
        <div
      onClick={scrollTop}
        className={` bottom-10 fixed z-50 right-7 ${(location.pathname === '/login' || location.pathname === '/register'  ) && 'hidden'}`}
      >
        <BsFillArrowUpCircleFill size={35} className='text-red-500 hover:shadow-red-500 rounded-full  hover:shadow-lg' />
      </div>
    );
};

export default BackToUp;