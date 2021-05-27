import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          
        </Switch>
        <Footer/>
      </div>}
     
    </Router>
  );
}

export default App;
