import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults'
import GameBanner from '../GameBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([])
    const [status, setStatus] = React.useState("running")

    function handleSubmitGuess(tentativeGuess) {
      const nextGuesses = [...guesses, tentativeGuess]
      setGuesses(nextGuesses)

      guessesLength = nextGuesses ? nextGuesses.length : 0

       if (guessesLength <= NUM_OF_GUESSES_ALLOWED) {
            if (tentativeGuess == answer) {
              setStatus("won")
            }
      }
      
      if (guessesLength == NUM_OF_GUESSES_ALLOWED) {
          setStatus("lost")
        }
  }

    
  return (
    <>
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput handleSubmitGuess={handleSubmitGuess}/>
    <GameBanner status={status} answer={answer} guesses={guesses}></GameBanner>
    </>
  )
}

export default Game;
