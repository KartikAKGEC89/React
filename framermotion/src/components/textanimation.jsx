import React from 'react'
import {motion} from 'framer-motion'

const textanimation = () => {
  return (
      <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
              delay: '0.2',
              duration:'5'
          }}
          whileHover={{scale:0.8, opacity:0.2}}
      >It has text animation and framer</motion.h1>
  )
}

export default textanimation