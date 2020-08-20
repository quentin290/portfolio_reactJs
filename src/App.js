import React from 'react';
//Import thhe BrowserRouter, Route and link components
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Home from './Home.js';
import './App.css';


function App() {
  
  
  return (
    
    <BrowserRouter>
      
      { /* Set up the Router */}
      <Route path="/projects" component={Projects} />
      <Route path="/skills" component={Skills} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      
      

      <div className="navigation">

        {/* Set up the links */}
        
        <Link to="/" className="item itemHome">Home</Link>
        <Link to="/about" className="item itemAbout">About</Link>
        <Link to="/projects" className="item itemProjects">Project</Link>
        <Link to="/skills" className="item itemSkills">Skills</Link>
        <Link to="/contact" className="item itemContact">Contact</Link>

      </div>

    </BrowserRouter>
  );
}

export default App;
