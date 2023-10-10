import React from 'react'
import boxes from '../data/boxes'
import './Box.css'
import Box from './Box'

const Boxesdata = () => {
  // const [box, setBox] = React.useState(boxes)
   const [box] = React.useState(boxes)

  // function togglee(id) {
  //   setBox(prevBox => {
  //     const newBox = []
  //     for (let i = 0; i < prevBox.length; i++) {
  //       const currentBox = prevBox[i]
  //       if (currentBox.id === id) {
  //         const updatedBox = {
  //           ...currentBox,
  //           on: !currentBox.on
  //         }
  //         newBox.push(updatedBox)
  //       } else {
  //         newBox.push(currentBox)
  //       }
  //     }
  //  })
  // }

  const squareElements = box.map(square => (
    // <Box key={square.id} on={square.on} id={square.id} toggle={togglee} />
    <Box key={square.id} on={square.on} id={square.id} className="box" />
   
  ))
  return (
    <div>
      { squareElements}
    </div>
  )
}

export default Boxesdata

