import React from 'react'
import Textanimation from './components/textanimation.jsx'
import Boxanimation from './components/boxanimation.jsx'
import Dragableanimation from './components/Dragableanimation.jsx'

const App = () => {
  return (
    <>
      <h1>Framer Motion Package use</h1>
      <Textanimation />
      <Boxanimation />
      <Dragableanimation />
    </>
  )
}

export default App