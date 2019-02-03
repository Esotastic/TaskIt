import React from "react"
import './register.scss';
const url = "/";




export default class Register extends React.Component {
  state = {
    fullName: "",
    userName: "",
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  };

  onSubmit = e => {
    const { fullName, userName, email, password } = this.state;
    console.log(this.state);
    fetch("http://localhost:3000/register", {
      method: "POST",
      body: JSON.stringify({
        fullName: fullName,
        userName: userName,
        email: email,
        password: password }),
      headers: {
        "Content-Type": "application/json"
      }

    }).then(res => res.json())
      .then(res => console.log('Successfully registered new user: ', JSON.stringify(res)))
      .catch(error => console.error('Error: ', error));
  }

  render() {
    return (
      <div id="banner-register">
        <div className="container">
          <form id="register" className="col s12 blue-grey lighten-5 z-depth-3 center-align text-center-align">
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <i className="material-icons prefix">account_circle</i>
                <input onChange={this.onChange} className="fullName" id="icon_prefix" type="text" />
                <label htmlFor="icon_prefix">Full Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <i className="material-icons prefix">email</i>
                <input onChange={this.onChange} id="icon_prefix" type="email" />
                <label htmlFor="icon_prefix">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <i className="material-icons prefix">contacts</i>
                <input onChange={this.onChange} id="icon_prefix" type="text" />
                <label htmlFor="icon_prefix">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <i className="material-icons prefix">security</i>
                <input onChange={this.onChange} id="icon_prefix" type="password" />
                <label htmlFor="icon_prefix">Password</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action" onSubmit={this.onSubmit}>Register
              <i className="material-icons right">send</i>
            </button>

          </form>
        </div >
      </div>
    );
  }
};