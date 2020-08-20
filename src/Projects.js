import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
import { render } from '@testing-library/react';
 
class Projects extends Component {
  componentDidMount() {
    document.body.classList.add('projects-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('projects-page');
  }

  render(){
    const project1 = require('./images/screen_myCave.jpg');
    return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="my-cave"
        image= {project1}
        title="My cave"
        descrip="Application web "
        techno="PHP SQL"
      />
    </div>
    )
  }
  
}
 
export default Projects;