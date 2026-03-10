import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GameBanner({answer, guesses}) {
  function TypeOfBanner(answer, guesses) {
    guessesLength = guesses ? guesses.length : 0
    let lastGuess = [...guesses].pop()

    if (guessesLength <= NUM_OF_GUESSES_ALLOWED) {
      if (lastGuess == answer) {
          return (
                  <div className="happy banner">
                  <p>
                  <strong>Congratulations!</strong> Got it in {" "}
                  <strong>{guessesLength} guesses</strong>.
                  </p>
                  </div>)
      }

    if (guessesLength == NUM_OF_GUESSES_ALLOWED) {
      return(<div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
      )
    }

    }}

  return (  
    TypeOfBanner(answer, guesses)
  )
}

export default GameBanner;
