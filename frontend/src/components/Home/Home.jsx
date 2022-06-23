import React, { useState } from "react";
import Banner from "./Banner";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Services from './Services'
import Footer from "../Shared/Footer";
import ChartSection from "./ChartSection";
import OurSuccess from "./OurSuccess";
import Courses from "./Courses/Courses";
import Navbar from "../Shared/Navbar";



const Home = () => {
  const [scroll, setScroll] = useState(false);
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  console.log(scroll);
  return (
    <>
     <div
        onClick={scrollTop}
        className={` bottom-10 fixed right-7 ${
          scroll ? "block" : "hidden"
        }`}
      >
        <BsFillArrowUpCircleFill size={35} className='text-red-500 hover:shadow-red-500 rounded-full  hover:shadow-lg' />
      </div>
      <Navbar />
      <Banner />
      <Services/>
      <ChartSection/>
      <OurSuccess/>
    
     <Courses/>
      <Footer/>
     
    </>
  );
};

export default Home;
