import React, { Component } from "react"

class Home extends Component {

  componentDidMount() {
    document.body.classList.add('home-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('home-page');
  }

  render(){

    const logo1 = require('./images/icons-codepen.png');
    const logo2 = require('./images/icons-github.png');
    const logo3 = require('./images/icons-linkedin.png');
    const photoProfil = require('./images/owl.png');

    return (
    <div className="header">
      <img src={photoProfil} className="App-logo" alt="logo" />
        <h1>Quentin Brisset<span>Web développer</span></h1>
        <div>
          <a href=""><img src={logo1}/></a>
          <a href=""><img src={logo2}/></a>
          <a href=""><img src={logo3}/></a>
        </div>
    </div>
    )

  }
 
}
 
export default Home;