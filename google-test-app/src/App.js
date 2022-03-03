import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  renderRouter(){
    return (
        <div>Hi This is app</div>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;
