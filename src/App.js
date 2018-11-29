import React, { Component } from 'react';
import './App.css';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
         <Switch>
           <Route exact path="/" component={Home}/>
         </Switch>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
