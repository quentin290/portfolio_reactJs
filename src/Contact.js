import React, { Component } from "react"
 
class Contact extends React.Component {

  componentDidMount() {
    document.body.classList.add('contact-page');
  }

  componentWillUnmount() {
    document.body.classList.remove('contact-page');
  }

  constructor(props){
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: ''
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeMail = this._handleChangeMail.bind(this);
    this._handleChangeMsg = this._handleChangeMsg.bind(this);
  }

  _handleChangeName(e) {
    this.setState({
      contactName: e.target.value,
    });
  }

  _handleChangeMail(e) {
    this.setState({
      contactMail: e.target.value,
    });
  }

  _handleChangeMsg(e) {
    this.setState({
      contactMessage: e.target.value,
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    fetch('http://localhost:3002/send',{
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
    }).then(
        (response) => (response.json())
      ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent.");
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({contactName: '', contactEmail: '', contactMessage: ''})
  }

  render(){
    return (
    <div className="contact" id="contact">

      <h1>Contact</h1>
      <form className="form" onSubmit={this._handleSubmit} id="formContact">
        <label for="formName">Nom, Prénom</label>
        <input type="text" id="formName" name="formName" value={this.state.contactName} onChange={this._handleChangeName} required/>
        <label for="formEmail">Email</label>
        <input type="email" id="formEmail" name="formEmail" value={this.state.contactMail} onChange={this._handleChangeMail} required/>
        <label for="formMessage">Message</label>
        <textarea id="formMessage" name="formMessage" rows="8" cols="30" value={this.state.contactMessage} onChange={this._handleChangeMsg} required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      
    </div>
    )
  }
  
}
 
export default Contact;