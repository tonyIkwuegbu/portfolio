import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/NavBar";
//import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Loading from "../src/components/Loading"

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout (() => {
setLoading(false);
  }, 2000)
  
}, [])


  return (
    <Router>
   {loading? <Loading/> :
      <div className="app">
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About/>} />
          {/* <Route exact path="/skills" element={<Skills/>}/>  */}
          <Route exact path="#" element={<Gallery/>} />
          <Route exact path="/contact" element={<Contact/>}/> 
          
        </Routes>
        <Footer/>
      </div>}
     
    </Router>
  );
}

export default App;
