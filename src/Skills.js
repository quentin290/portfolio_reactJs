import React, { Component } from "react"
// import { render } from "@testing-library/react";
 
class Skills extends React.Component {

  componentDidMount() {
    document.body.classList.add('skills-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('skills-page');
  }

  state = {
        technos:[
          {id: 1, nom: "HTML", logo: require('./images/html-5.png')},
          {id: 2, nom: "CSS", logo: require('./images/css3.png')},
          {id: 3, nom: "Boostrap", logo: require('./images/bootstrap.png')},
          {id: 4, nom: "js", logo: require('./images/js.png')},
          {id: 5, nom: "jQuery", logo: require('./images/jquery.png')},
          {id: 6, nom: "Gulp", logo: require('./images/gulp.png')},
          {id: 7, nom: "PHP", logo: require('./images/php.png')},
          {id: 8, nom: "Wordpress", logo: require('./images/wordpress.png')}
        ]
  }
  
  render(){
    const skills = this.state.technos.map((techno) => <li className="skill"><h3 className="title">{techno.nom}</h3><img src={techno.logo}></img></li>)

    // function handleClick(){
    //     alert('skill clique!');
    // }
    return (
    <div className="techno">
      <h1>Technologies</h1>
      <div id="response"></div>
      
      <ul className="skills">
        {skills}
      </ul>

    </div>
  )
  }
  
}
 
export default Skills;