import React, { Component, Fragment } from "react";
import Landing from './components/Landing/Landing.js';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Footer />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;