
import './App.css';
import {Routes , Route} from "react-router-dom";
import HomePage from './components/home/home';
import Test from "./components/test/Test";
import Level0 from "./components/test/testPages/test0";
import Aboutus from "./components/About/about";
import Contact from "./components/ContactUs/Contact";
import Result from "./components/result/Result";
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/test' element={<Test/>} />
      <Route path='/level0' element={<Level0/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Results' element={<Result/>}/>
    </Routes>
  );
}

export default App;
