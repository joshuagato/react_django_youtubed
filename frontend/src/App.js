import React, { Component } from 'react';
import './App.scss';
// import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Homepage />
      </div>
    );
  }
}

export default App;