import React from 'react';
import GuessInput from '../GuessInput';
import PreviousGuesses from '../PreviousGuesses'

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([{guess: "HELLO", id: "1234"}, {guess: "MINAS", id: "12345"}])
    
  return (
    <>
    <PreviousGuesses guesses={guesses}/>
    <GuessInput guesses={guesses} setGuesses={setGuesses}/>
    </>
  )
}

export default Game;
