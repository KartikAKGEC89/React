import React from 'react'
import './Jokes.css'

const Jokes = ({img, heading}) => {
  return (
    <div className='jump'>
          <img src={ img } alt='Jokes'/>
          <h2>
            {heading}  
          </h2>
    </div>
  )
}

export default Jokes;
