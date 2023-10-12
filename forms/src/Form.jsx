import React from 'react'

const Form = () => {
    const [name, setName] = React.useState("")
    const [ lastName, setLastName] = React.useState("")
    console.log(name)
    console.log(lastName)

    function handledata(event) {
        setName(event.target.value)
    }

    function handlelast(event) {
        setLastName(event.target.value)
    }
  return (
    <div>
          <input type='text' placeholder='name' onChange={handledata} /> 
          <input type='text' placeholder='last name' onChange={handlelast} />
    </div>
  )
}

export default Form
