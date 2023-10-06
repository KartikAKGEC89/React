import React from 'react'
import {useState} from 'react'

const App = () => {
  
  // const [isImportant, setIsImportant] = React.useState("Yes")

    const [isImportant, setIsImportant] = useState("Yes")
  
  function handleclick() {
    setIsImportant("No")
  }

  return (
    <div>
      <button onClick={handleclick}>{isImportant}</button>
    </div>
  )
}

export default App

