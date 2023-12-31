import React from 'react'
import Card from './components/Card'
import logo from './image 12.png'
import weding from './wedding-photography 1.png'
import bike from './mountain-bike 1.png'
import './App.css'

const App = () => {
  return (
    <div className='cardmain'>
          <Card 
              image={logo}
              rating="5.0"
              location="U.S.A"
              name="Life lessons with Katie Zaferes"
        money="From $136 "
        openspot={0}
          />
          <Card 
              image={weding}
              rating="5.0"
              location="U.S.A"
              name="Learn wedding photography"
        money="From $125 "
         openspot={2}
          />
          <Card 
              image={bike}
              rating="5.0"
              location="U.S.A"
              name="Group Mountain Biking"
        money="From $150 "
         openspot={6}
          />
          <Card 
              image={weding}
              rating="5.0"
              location="U.S.A"
              name="Learn wedding photography"
        money="From $125 "
         openspot={0}
          />
            <Card 
              image={bike}
              rating="5.0"
              location="U.S.A"
              name="Group Mountain Biking"
        money="From $150 "
         openspot={8}
          />
          <Card 
              image={logo}
              rating="5.0"
              location="U.S.A"
              name="Life lessons with Katie Zaferes"
        money="From $136 "
         openspot={3}
          />
           <Card 
              image={weding}
              rating="5.0"
              location="U.S.A"
              name="Learn wedding photography"
        money="From $125 "
         openspot={0}
      />
    </div>
  )
}

export default App
