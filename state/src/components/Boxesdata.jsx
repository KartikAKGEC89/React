import React from 'react'
import boxes from '../data/boxes'
import './Box.css'
import Box from './Box'

const Boxesdata = () => {
  const [box] = React.useState(boxes)


  const squareElements = box.map(square => (
    <Box key={square.id} on={square.on} />
   
  ))
  return (
    <div>
      <button >{ squareElements}</button>
    </div>
  )
}

export default Boxesdata

