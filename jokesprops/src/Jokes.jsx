import React from 'react'
import './Jokes.css'

const Jokes = ({ img, heading }) => {
  const [isShown, setIsShown] = React.useState(false)
  
  function toggle() {
    setIsShown( !isShown)
  }
  return (
    <div className='jump'>
      <img src={img} alt='Jokes' />
      {/* Important */}
      {isShown && <h2> {heading} </h2>}
      <button onClick={toggle}> Joke </button>
    </div>
  )
}

export default Jokes;
