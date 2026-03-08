import React from 'react';

function GuessInput() {
    const [guess, setGuess] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();
    
        console.log({guess})

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
