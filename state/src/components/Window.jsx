import React from 'react'

const Window = () => {
  const [show, setShow] = React.useState(window.innerWidth)

  React.useEffect(() => {
    function watchwidth() {
     setShow(window.innerWidth)
    }
    window.addEventListener("resize" , watchwidth)
  }, [])
  return (
    <div>
          <h1>Window { window.innerWidth}</h1>
    </div>
  )
}

export default Window
