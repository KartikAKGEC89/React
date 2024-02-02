import {motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { useState } from 'react';

const Boxanimation = () => {

    const [show, setShow] = useState(true)

  return (
    <>
          <div
              style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap:"10px"
          }}>
            <h1>
                Box In Out transation
              </h1>
              <AnimatePresence>
                  {show && <motion.div
                      style={{ width: 100, height: 100, background: "green", position: "center" }}
                      initial={{ x: 0, opacity: 0 }}
                      animate={{ x: 100, opacity: 1 }}
                      exit={{ x: -150, opacity: 0 }}
                      transition={{
                          delay:"1"
                      }}
                  >    
                  </motion.div>}
                  <button onClick={()=>setShow(!show)}>{show ? "Hide Box" : "Show Box"}</button>
              </AnimatePresence>
        </div>
    </>
  )
}

export default Boxanimation