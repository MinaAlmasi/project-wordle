import React from 'react';

function PreviousGuesses({guesses}) {
  //const guesses = [{guess: "Hello", id:"hello"}, {guess: "yes", id: "YES"}]

  return (
    <>
    <div className="guess-results">
      {guesses.map((item) => (
        <p className="guess" key={item.id}>{item.guess}</p>
      ))}
    </div>
    </>
  );
}

export default PreviousGuesses;
