import React from 'react'

const Form = () => {
    const [name, setName] = React.useState({firstname: "", lastName: "", email:""})
    // const [ lastName, setLastName] = React.useState("")
    console.log(name)
    // console.log(lastName)

    function handledata(event) {
      setName(prevname => {
        // return prevname = {
        //   ...prevname,
        //   [event.target.name]: event.target.value
        // }
        return {
          ...prevname,
          [event.target.name]: event.target.value
          }
        })
    }

    // function handlelast(event) {
    //     setLastName(event.target.value)
    // }
  return (
    <div>
      <input type='text' placeholder='name' onChange={handledata} name='firstname' value={name.firstname}/> 
      <input type='text' placeholder='lastname' onChange={handledata} name='lastName' value={name.lastName}/>
      <input type='email' placeholder='email' onChange={handledata} name='email' value={name.email} />
    </div>
  )
}

export default Form
