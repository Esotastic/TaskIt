import React from 'react';
import './register.scss';


export default class Register extends React.Component {
    //set initial state for input fields
    state = {
      fullName: '',
      userName: '',
      email: '',
      password: '',
    }

    //on input change the state of the target.name to the target.value
    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    onSubmit = e => {
        //prevent reloading
        e.preventDefault();
        //testing
        console.log(this.state);
        this.setState({
          fullName: '',
          userName: '',
          email: '',
          password: '',
        });

    }
  render() {
    return (
      <form className="center" method="post" action="/">

        <input
        type="text" 
        name="fullName"
        placeholder='Full Name' 
        value={this.state.fullName} 
        onChange={e => this.change(e)} 
        tabIndex="1" />
        <br/>
        <input 
        type="text" 
        name="userName"
        placeholder='Username' 
        value={this.state.userName} 
        onChange={e => this.change(e)} 
        tabIndex="2" />
        <br/>
        <input 
        type="email" 
        name="email"
        placeholder='Email@provider.com' 
        value={this.state.email} 
        onChange={e => this.change(e)} 
        tabIndex="3" />
        <br/>
        <input 
        type="password" 
        name="password"
        placeholder='password' 
        value={this.state.password} 
        onChange={e => this.change(e)} 
        tabIndex="4" />
        <br/>
        <button onClick={
        e => this.onSubmit(e)}>Register</button>
      </form>
    )
  }
}
