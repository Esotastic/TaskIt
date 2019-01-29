import React, { Component } from "react";
import Register from "./components/register/Register";
import Header from "./components/Header/Header";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div id="banner-one">
      //   <div className="App">
      //     <div className="container"><Register /></div>
      //   </div>
      // </div>
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;