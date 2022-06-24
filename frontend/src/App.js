

import { Route, Routes } from "react-router-dom";
import './App.css';
import BackToUp from "./BackToUp";
import About from "./components/About/About";
import AllCourses from "./components/AllCourses/AllCourses";


import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Pricing from "./components/Pricing/Pricing";
import Register from "./components/Register/Register";
import TosterContainer from "./TosterContainer";


function App() {
 
  return (
    <>
    
      <>
      <BackToUp/>
        <Routes>
          {['/', 'home'].map((path) => (
            <Route path={path} element={<Home />} >
        </Route>
          ))}
           <Route path='/courses' element={<AllCourses />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
        <TosterContainer/>
      </>
     
    </>
  );
}

export default App;
