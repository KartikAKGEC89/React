import React from 'react'

const Plus = () => {
    const [plus, setPlus] = React.useState(0)

    function plusClick() {
        setPlus(plus + 1)
    }
    function minus() {
        setPlus(plus-1)
    }

    // const [minus, setMinus] = React.useState(0)
    
    // function minusClick() {
    //     setMinus(minus - 1)
    // }
  return (
    <div>
          <button onClick={plusClick}> Plus</button>
          <p>{plus}</p>
          <button onClick={minus}>
              Minus
          </button>
          {/* <p>{ minus}</p> */}
    </div>
  )
}

export default Plus
