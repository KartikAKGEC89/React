import React from 'react'
import {motion} from 'framer-motion'

const Dragableanimation = () => {
  return (
    <div>
          <h1 style={{ textAlign: "center" }}>Drag able animation components</h1>
          <p>No constraints</p>
          <motion.div
              style={{ width: 100, height: 100, background: "red", position: "center" }}
              drag
          ></motion.div>
        <p>With constraints</p>
          <motion.div
              style={{ width: 100, height: 100, background: "red", position: "center" }}
              drag
              dragConstraints={{left:0, right:100}}
          ></motion.div>
    </div>
  )
}

export default Dragableanimation