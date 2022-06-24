
import Banner from "./Banner";

import Services from './Services'
import Footer from "../Shared/Footer";
import ChartSection from "./ChartSection";
import OurSuccess from "./OurSuccess";
import Courses from "./Courses/Courses";
import Navbar from "../Shared/Navbar";



const Home = () => {
  
  return (
    <>
     
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
