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

  
    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    onSubmit = e => {
      const { fullName, userName, email, password } = this.state;
      console.log(this.state);
      fetch("backend/routes/api/users.js", {
        method: "POST",
        body: JSON.stringify({fullname: fullName, userName: userName, email: email, password: password}),
        headers: {
          "Content-Type": "application/json"
        }

      }).then(res => res.json(res))
      .then(res => console.log('Successfully registered new user: ', JSON.stringify(res)))
      .catch(error => console.error('Error: ', error));
      }

  render() {
    return (
      <div class="container">
      <form id="register" class="col s12 blue-grey lighten-5 z-depth-3 center-align text-center-align">
        <div class="row">
          <div class="input-field col s6 offset-s3">
            <i class="material-icons prefix">account_circle</i>
            <input className="fullName" id="icon_prefix" type="text" />
            <label for="icon_prefix">Full Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 offset-s3">
            <i class="material-icons prefix">email</i>
            <input id="icon_prefix" type="email" />
            <label for="icon_prefix">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 offset-s3">
            <i class="material-icons prefix">contacts</i>
            <input id="icon_prefix" type="text" />
            <label for="icon_prefix">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 offset-s3">
            <i class="material-icons prefix">security</i>
            <input id="icon_prefix" type="password"/>
            <label for="icon_prefix">Password</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light" type="submit" name="action">Register
          <i class="material-icons right">send</i>
        </button>
        
      </form>
    </div>
    );
  }
};