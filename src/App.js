import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pawnee</h1>
          <h3>Click an image to begin!</h3>
        </header>
        <p className="App-intro">
          Click an image to earn points, but don't click any image more than once.
        </p>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
