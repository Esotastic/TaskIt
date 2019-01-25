import React from "react";
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
      <form>
        
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
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
};