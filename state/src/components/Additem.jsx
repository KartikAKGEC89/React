import React from 'react'

const Additem = () => {
    const [array, setArray] = React.useState(["1", "1"])
    
    function add() {
        setArray([...array, 1])
    }

    const thingsElements = array.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div>
          <button onClick={add}> ADD</button>
          {thingsElements}
    </div>
  )
}

export default Additem
