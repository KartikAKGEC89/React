import React from 'react'

const Isgoingout = () => {
    const [Isgoingout, setIsgoingout] = React.useState(true)
    
    function Goingout() {
        setIsgoingout(!Isgoingout)
    }
  return (
    <div>
          <button onClick={Goingout}>{Isgoingout ? "yes" : "no"}</button>
          {/* Turniary operator */}
    </div>
  )
}

export default Isgoingout
