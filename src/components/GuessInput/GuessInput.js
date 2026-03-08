import React from 'react';

function GuessInput({guesses, setGuesses}) {
    const [tentativeGuess, setTentativeGuess] = React.useState('')

    function addGuess() {
      const newGuess = {
        guess: tentativeGuess, 
        id: crypto.randomUUID()
      }

      const nextGuesses = [...guesses, newGuess]

      setGuesses(nextGuesses)
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        console.log({tentativeGuess})
        addGuess()
        setTentativeGuess('')
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
          value={tentativeGuess} 
          onChange={event => {
          const newGuess = event.target.value.toUpperCase()
          setTentativeGuess(newGuess);
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
