import React, { Component } from "react";
import Register from "./components/register/Register";
<<<<<<< HEAD
import Header from "./components/Header/Header";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
=======
>>>>>>> 8f468742d6ee20548ec836d46a44ac0d261bd058

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