import React, { Component } from "react"
import { findAllByDisplayValue } from "@testing-library/react"
 
class About extends Component {

  componentDidMount() {
    document.body.classList.add('about-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('about-page');
  }

  render(){
    return (
    <div className="about">
      <h1>Présentation</h1>
      <h2>Qui suis-je?</h2>
      <p>Je m'appell Quentin Brisset et j'ai 32ans. Je suis développeur web full stack, en formation a Talis business school. Je suis un grand passionné par les nouvelles technologies, l'informatique le web et la programmation. J'aime voyager, le cinéma et le sport. J'ai eu la chance de pouvoir visiter certain pays telle que Andorre, l'Espagne, l'Itali, la Tunisie et le Sénegal. Grace à ces expériences de voyages, j'ai pu découvrir différentes cultures qui m'on ouvert l'esprit et enrichir mes compétences en langue étrangére (Anglais, Espagnol).</p>
      <h2>Mon parcours</h2>
      <p></p>
      <h2>En savoir plus</h2>
      <p></p>

    </div>
    )
  }
 
}
 
export default About;