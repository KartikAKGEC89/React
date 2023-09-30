import React from 'react'
import Jokes from './Jokes'
import './App.css'
import pic from './images.jpeg'

const App = () => {
  return (
    <div className='jokes'>
      <Jokes 
        img={pic}
        heading=" What did the left eye say to the 
        right eye? Between us, something smells!"
      />
       <Jokes 
        img={pic}
        heading="  Why did the student eat his homework? 
        Because the teacher told him it was a piece of cake."
      />
       <Jokes 
        img={pic}
        heading=" What did the left eye say to the right eye? 
        Between us, something smells!"
      />
       <Jokes 
        img={pic}
        heading="  Why did the student eat his homework? 
        Because the teacher told him it was a piece of cake."
      />
    </div>
  )
}

export default App

