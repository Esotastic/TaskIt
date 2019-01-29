import React, { Component } from "react";
import Register from "./components/register/Register";

class App extends Component {
  render() {
    return (
      <div id="banner-one">
        <div className="App">
          <div className="container"><Register /></div>
        </div>
      </div>
    );
  }
}

export default App;