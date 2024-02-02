import React from 'react'
import Textanimation from './components/textanimation.jsx'
import Boxanimation from './components/boxanimation.jsx'
import Dragableanimation from './components/Dragableanimation.jsx'
import Multiplecomponent from './components/Multiplecomponent.jsx'
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  
  return (
    <>
      <motion.div style={{
        scaleX,
      position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: 10,
  background: "red",
  transformOrigin: "0%"}} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <h1>Framer Motion Package use</h1>
      <Textanimation />
      <Boxanimation />
      <Dragableanimation />
      <br />
      <Multiplecomponent />
    </>
  )
}

export default App