import React from 'react';

function GuessInput() {
    const [guess, setGuess] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();
    
        setGuess(event.target.value)
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
          id='guess-input'
          type="text"
          value={guess} 
          onChange={event => {
          setGuess(event.target.value.toUpperCase());
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
