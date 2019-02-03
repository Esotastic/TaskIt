import React, { Component } from "react";
import Landing from './components/Landing/Landing.js';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;