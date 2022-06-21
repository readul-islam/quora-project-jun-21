
import { Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <>
    <Navbar/>
  
    <>
     
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>

      </Routes>
      
    </>
    </>
  );
}

export default App;
