import React from 'react';

function GuessInput() {
    const [guess, setGuess] = React.useState([])

    return (
      <>
      <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        
        // fix onchange!!!
        newGuess = {"guess": event.target.value}

        setGuess(newGuess)
        console.log(newGuess)
        setGuess('')
      }} 
      >
        <label htmlFor='guess-input'>
          Enter guess:
        </label>
        <input 
          id='guess-input' 
          type="text" 
          value={guess} 
          onChange={event => {setGuess(event.target.value.toUpperCase())}}
          pattern="[A-Za-z]{5,5}"
          title="Please provide exactly 5 letters"
        >
        </input>
      </form>
    </>
    )
}

export default GuessInput;
