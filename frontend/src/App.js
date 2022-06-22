
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import AllCourses from "./components/AllCourses/AllCourses";
import AllCourse from "./components/Home/Courses/AllCourse";
import WebCourse from "./components/Home/Courses/WebCourse";

import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          {['/', 'home'].map((path) => (
            <Route path={path} element={<Home />} >
              <Route index element={<AllCourse />}></Route>
              <Route path='all-course' element={<AllCourse />}></Route>
              <Route path='web-course' element={<WebCourse />}></Route>
            </Route>
          ))}

          <Route path='/courses' element={<AllCourses />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route ></Route>
        </Routes>
      </>
    </>
  );
}

export default App;
