import React from 'react';

function GuessInput({guesses, setGuesses}) {
    const [guess, setGuess] = React.useState('')

    function addGuess() {
      const newGuess = {
        guess: guess, 
        id: crypto.randomUUID()
      }

      const nextGuesses = [...guesses, newGuess]

      setGuesses(nextGuesses)
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        console.log({guess})
        addGuess()
        setGuess('')
    }

    return (
      <>
      <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit} 
      >
        <label htmlFor='guess-input'>
          Enter guess:
        </label>
        <input 
          required
          id='guess-input'
          type="text"
          value={guess} 
          onChange={event => {
          const newGuess = event.target.value.toUpperCase()
          setGuess(newGuess);
          }}
          pattern="[a-zA-Z]{5}"
          title="Please provide exactly 5 letters"
        >
        </input>
      </form>
    </>
    )
}

export default GuessInput;
