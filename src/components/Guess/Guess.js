import React from 'react';

import { range } from "../../utils";
import { answer } from "../Game";
import { checkGuess } from "../../game-helpers"

function Guess({ value }) {
  const checkedGuess = checkGuess(value, answer)

  function getClassSuffix(num) {
    if (checkedGuess !=  null) {
      const suffix = checkedGuess[num].status
      return suffix
    } else {
      return ''
    }

  }

  return (
    <p className="guess">
      {range(5).map((num) => {
        suffix = getClassSuffix(num)
        return (
        <span key={num} className={`cell ${suffix}`}>
          {value ? value[num] : undefined}
        </span>
        );
      })}
    </p>
  );
}

export default Guess;
