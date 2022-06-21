import React from "react";
import gril from "../../assets/banner-gril.PNG";
import { motion } from "framer-motion";
import PrimaryBtn from "../Shared/PrimaryBtn";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Banner = () => {
  const imgVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: { x: 0, opacity: 1,transition:{damping: 30,duration: 0.9} },
  };
  return (
    <div className="bg-gradient-to-tr  from-accent to-neutral">
      <section className="max-w-7xl mx-auto pb-4 ">
        <div className=" md:flex  h-screen flex-row-reverse items-center px-8">
          <motion.div initial="hidden" animate="visible" variants={imgVariants}>
            <img src={gril} alt="" />
          </motion.div>
          <div>
            <motion.p 
            initial={{y:20, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{ duration: 0.6,}}
            className="text-[#FC6565] text-xl font-semibold italic pb-8">
              Your E-learning fature
            </motion.p>
            <motion.div
              initial={{y:20, opacity: 0}}
              animate={{y:0, opacity: 1}}
              transition={{delay:0.9, duration: 0.9,}}
            className="text-xl md:text-3xl lg:text-5xl pb-6 text-secondary font-bold font-serif">
              {" "}
              <p
              
              >Online Learning Now</p> <p>In Your Fingertips</p>{" "}
            </motion.div>
            <motion.div 
            initial={{y:20, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{delay:1.9, duration: 0.9,}}
            className="text-secondary ">
              <p>
                Quora is a online learning platform that offers various premium
              </p>{" "}
              <p>courses for your skill development</p>
            </motion.div>
            <motion.div
             initial={{y:20, opacity: 0}}
             animate={{y:0, opacity: 1}}
             transition={{delay:2.9, duration: 0.9,}}
            className="flex items-center py-6 space-x-10">
              <PrimaryBtn>Try now</PrimaryBtn>
              <p>Play Video</p>
            </motion.div>
          </div>
        </div>
        {/* card */}
        <div class="card w-full 
         bg-white text-primary-content shadow-xl py-4 mt-10 ">
          <div
          
          
          class=" md:flex p-4 md:justify-around items-center text-center md:space-y-0 space-y-4 ">
            <div className="text-secondary font-serif font-bold text-xl">
              <p>Over 500 Plus course</p>
              <p> in one place</p>
            </div>
            <p className="font-bold text-3xl ">Coursore</p>
            <p className="font-bold text-3xl">Udemy</p>
            <p className="font-bold text-3xl">SkillShare</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
