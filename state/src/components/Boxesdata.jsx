import React from 'react'
import boxes from '../data/boxes'
import './Box.css'

const Boxesdata = () => {
  const [box, setBox] = React.useState(boxes)

  const squareElements = box.map(square => (
        <div className="box" key={square.id}></div>
    ))
  return (
    <div>
      { squareElements}
    </div>
  )
}

export default Boxesdata

