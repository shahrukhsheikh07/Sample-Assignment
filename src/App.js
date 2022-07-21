import React from 'react';
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter , Routes , Route  } from 'react-router-dom' 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './component/Home';
import Service from './component/Service';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';


const App = () => {
  return (
  <>
  <Navbar/>
  {/* Using Router for Routing to other pages on UI  */}
 <BrowserRouter>
  <Routes>
    <Route exact path = "/" element= {<Home/>} />
    <Route exact path = "home" element= {<Home/>} />
    <Route exact path = "service" element= {<Service/>} />
    <Route exact path = "about" element= {<About/>} />
    <Route exact path = "contact" element= {<Contact/>} />
    {/* <Navigate to= "/"  /> */}
  </Routes>
 </BrowserRouter>
 <Footer/>
  </>
  )
};

export default App;