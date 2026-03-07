import React from 'react';

function GuessInput() {
    const [newGuess, setNewGuess] = React.useState('')

    return (
      <>
      <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
    
        setNewGuess(event.target.value)
        console.log({guess: newGuess})

        setNewGuess('')
      }} 
      >
        <label htmlFor='guess-input'>
          Enter guess:
        </label>
        <input 
          id='guess-input'
          type="text"
          value={newGuess} 
          onChange={event => {
          setNewGuess(event.target.value.toUpperCase());
          }}
          pattern="[A-Z]{5,5}"
          title="Please provide exactly 5 letters"
        >
        </input>
      </form>
    </>
    )
}

export default GuessInput;
