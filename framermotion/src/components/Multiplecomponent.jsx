import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const items = [{
    id: 1,
    subtitle: "hello",
    title:"Kartik"
},
{
    id: 2,
    subtitle: "hello",
    title:"Raman"
},{
    id: 3,
    subtitle: "hello",
    title:"Mohan"
},]

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Multiplecomponent = () => {

    const [selectedId, setSelectedId] = React.useState(null)

  return (
      <>
    <motion.ul
    style={{
  width: 150,
  height: 150,
  margin: 0,
  gap: 15,
  padding: 15,
  background: "green",
  radius: 50,
}}
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3].map((index) => (
      <motion.li key={index} className="item" variants={item} style={{background: "white",
  radius: "100"}}/>
    ))}
          </motion.ul>
          

           
{items.map(item => (
  <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    <motion.h5>{item.subtitle}</motion.h5>
    <motion.h2>{item.title}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>
    </>
  )
}

export default Multiplecomponent