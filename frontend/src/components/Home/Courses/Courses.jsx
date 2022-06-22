import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

const Courses = () => {
    
    return (
        <section className='most-popular-course'>
      
      <div className=''>
        <div class=" flex justify-center">
          <div class=" navbar-center  lg:flex">
            <ul class="menu md:menu-horizontal p-0">
              <li>
                <Link to='all-course'>ALL</Link>
              </li>

              <li>
              <Link to='web-course'>Web</Link>
              </li>
              <li>
                <a>ADVERTISING</a>
              </li>

              <li>
                <a>BRANDING</a>
              </li>
              <li>
                <a>DESIGN</a>
              </li>
              <li>
                <a>PHOTOGRAPHY</a>
              </li>

             
            </ul>
          </div>
        </div>
      </div>
    <div className=" bg-gradient-to-tr  from-accent to-neutral">
    <motion.div layout className='py-12 max-w-[1380px] mx-auto grid lg:grid-cols-4 content-center  md:grid-cols-3 grid-cols-1 gap-x-12 gap-y-10'>
      <AnimatePresence>
        <Outlet/>
        </AnimatePresence>
    </motion.div>
    </div>
            
        </section>
    );
};

export default Courses;