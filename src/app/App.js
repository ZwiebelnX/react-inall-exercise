import React, {Component} from 'react';
import './app.less';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./compnents/home/Home";
import Header from "./compnents/header/Header";
import Calculator from "./compnents/calculator/Calculator";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/calculator' component={Calculator} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
