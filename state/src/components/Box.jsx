import React from 'react'
import './Box.css'

const Box = ({ on }) => {
    const [ into, setInto] = React.useState(on)

    
    const styles = {
        backgroundColor: into ? "black" : "green"
    }
function toggle() {
          setInto( !into)
    }
    return (
    <div>
       <div style={styles} className="box" onClick={toggle}></div>
    </div>
  )
}

export default Box
