import React from 'react'
import { useState } from 'react'
import Window from './components/Window'

const App = () => {
  
  // const [isImportant, setIsImportant] = React.useState("Yes")

  const [isImportant, setIsImportant] = useState("Yes")
  const [width, setWidth] = React.useState(true)
  
  function handleclick() {
    setIsImportant("No")
  }

  function toggle() {
    setWidth(!width)
  }

  return (
    <div>
      <button onClick={handleclick}>{isImportant}</button>
      <br />
      <br />
      <button onClick={toggle}> Tell me size of window { <Window />}</button>
    </div>
  )
}

export default App

