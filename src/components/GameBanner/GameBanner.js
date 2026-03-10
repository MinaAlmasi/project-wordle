import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GameBanner({status, answer, guesses}) {
  function TypeOfBanner() {
    if (status == "won"){
          return (
                  <div className="happy banner">
                  <p>
                  <strong>Congratulations!</strong> Got it in {" "}
                  <strong>{guesses.length} guesses</strong>.
                  </p>
                  </div>)
      }

    if (status == "lost") {
      return(<div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            </div>
      )
    }

    }

  return (  
    TypeOfBanner() 
  )
}

export default GameBanner;
