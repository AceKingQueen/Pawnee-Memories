import React, { Component } from 'react';
import pawnee from "./pawnee.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";



import './App.css';

class App extends Component {

  //state used will be imported from pawnee array
  state = {
    pawnee
  };


  render() {
    return (
      <Wrapper>
      <Title>Welcome to Pawnee
      <h3>Click an image to begin!</h3>
      <p className="App-intro">
          Click an image to earn points, but don't click any image more than once.
        </p>
      </Title>  
        <header className="App-header">
        </header>
       
        <footer className="App-footer">
        </footer>
     
      </Wrapper>
    );
  }
}

export default App;
