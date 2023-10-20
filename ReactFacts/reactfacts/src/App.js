import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
    const [darkmode, setDarkmode] = React.useState(true)

    function toggleDarkMode() {
        setDarkmode(prevMode => !prevMode)
    }
  return (
    <div>
          <Navbar darkmode={darkmode}
              toggleDarkMode={toggleDarkMode}
      />
    <Main darkmode={darkmode}/>
    </div>
  )
}

export default App
