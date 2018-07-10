//add click alert for each image and display total clicks
  //add
//check to see if clicked score is 0 
  //if =0, add one point to total
  //if !== 0, game over animate 
    //reset score to zero
    //check high score and compare
      //if recentScore > high score, display it
      //else do nothing
//put images in random order after being clicked

import React, { Component } from 'react';
import PawneeCard from "./components/PawneeCard";
import pawnee from "./pawnee.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import NavPills from "./components/NavPills";
import './App.css';

class App extends Component {

  //state used will be imported from pawnee array
  state = {
    topScore: 0,
    curScore: 0,
    pawnee: pawnee,
    unclickedCharacters: pawnee
  };

  // componentDidMount() {

  // }

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
        pawnee: pawnee,
        unclickedCharacters: pawnee
       });
     } else {
       const newCharacters = this.state.unclickedCharacters.filter(item => item.name !== name);

       this.setState({
         message: "Good Work!",
         curScore: this.state.curScore + 1,
         pawnee: pawnee,
         unclickedCharacters: newCharacters
       });
     }

      this.shuffleArray(pawnee);
  };


  render() {
    return (
      <Wrapper>
        message={this.state.message}
        curScore={this.state.curScore}
        topScore={this.state.topScore}
      
      <Title>Welcome to Pawnee
      <h3>Click an image to begin!</h3>
      <p className="App-intro">
          Click an image to earn points, but don't click any image more than once.
        </p>
      </Title>  
      {this.state.pawnee.map(character => (
        <PawneeCard 
        handleClick={this.handleClick}
        image={character.image}
        name={character.name}
        handleClick={this.state.handleClick}
        curScore={this.state.curScore}
        />
      ))}
      <footer></footer>
      </Wrapper>
    );
  }
}

export default App;
