import React from "react";
<<<<<<< HEAD
import { Button } from 'react-materialize';
import './register.scss';

const url = "/";

=======
import './register.scss';
const url = "/";




>>>>>>> f0fc7f180f2fdb6cb043707ae1ff7a26130bafd5
export default class Register extends React.Component {
  state = {
    fullName: "",
    userName: "",
    email: "",
    password: ""
  };

<<<<<<< HEAD

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { fullName, userName, email, password } = this.state;
    console.log(this.state);
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ fullName: fullName, userName: userName, email: email, password: password }),
      headers: {
        "Content-Type": "application/json"
      }

    }).then(res => res.json(res))
      .then(res => console.log('Successfully registered new user: ', JSON.stringify(res)))
      .catch(error => console.error('Error: ', error));
  }

  render() {
    return (
      <row id="form">

        <input
          name="fullName"
          placeholder="Full Name"
          value={this.state.fullName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="userName"
          placeholder="Username"
          value={this.state.userName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <Button onClick={e => this.onSubmit(e)}>Submit</Button>
      </row>
=======
  
    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    onSubmit = e => {
      const { fullName, userName, email, password } = this.state;
      console.log(this.state);
      fetch(url, {
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
      </form>
    </div>
>>>>>>> f0fc7f180f2fdb6cb043707ae1ff7a26130bafd5
    );
  }
};