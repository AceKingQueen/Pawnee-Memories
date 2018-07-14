import React, { Component } from 'react';
import PawneeCard from "./components/PawneeCard";
import pawnee from "./pawnee.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';

class App extends Component {

  //state used will be imported from pawnee array
  state = {
    topScore: 0,
    curScore: 0,
    pawnee: pawnee,
    unclickedCharacters: pawnee
  };

  // Fisher-Yates shuffle algorithm
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }


  handleClick = name => {
     const clickCharacter = this.state.unclickedCharacters.find(item => item.name === name);

     if (clickCharacter === undefined) {
       this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        unclickedCharacters: pawnee
       });
     } else {
       const newCharacters = this.state.unclickedCharacters.filter(item => item.name !== name);

       this.setState({
         message: "Good Work!",
         topScore: (this.state.curScore + 1 > this.state.topScore) ? this.state.curScore + 1 : this.state.topScore,
         curScore: this.state.curScore + 1,
         unclickedCharacters: newCharacters
       });
     }

      this.shuffleArray(pawnee);
  };

  render() {
    return (
      <Wrapper>
        
      <Title>Welcome to Pawnee
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Seal_of_the_City_of_Pawnee%2C_Indiana.svg/1200px-Seal_of_the_City_of_Pawnee%2C_Indiana.svg.png" />  
      <h3>Click an image to begin!</h3>
        <p className="App-intro">
          Click an image to earn points, but don't click any image more than once.
        </p>
        <div className="message">
        {this.state.message}
        </div>
        <div className="current-score">
        Your Current Score: {this.state.curScore}
        </div>
        <div>
        Your Best Score: {this.state.topScore}
        </div>
      </Title>  
      {this.state.pawnee.map((character, iterator) => (
        <PawneeCard 
        key={iterator}
        handleClick={this.handleClick}
        image={character.image}
        name={character.name}
        curScore={this.state.curScore}
        />
      ))}
      <footer></footer>
      </Wrapper>
    );
  }
}

export default App;
