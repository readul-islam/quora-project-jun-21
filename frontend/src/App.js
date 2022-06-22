
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </>
    </>
  );
}

export default App;
