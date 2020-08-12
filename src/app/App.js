import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./compnents/home/Home";
import Header from "./compnents/header/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <Header />
          <Route exact path='/' component={Home}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
