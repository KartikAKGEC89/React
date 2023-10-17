import React from 'react'

const Form = () => {
    const [name, setName] = React.useState({firstname: "", lastName: "", email:"", comments:"", isChecked: false, employee:"", favColour:""})
    // const [ lastName, setLastName] = React.useState("")
    // console.log(name)
    // console.log(lastName)

  function handledata(event) {
       const {name, value, type, checked} = event.target
      setName(prevname => {
        // return prevname = {
        //   ...prevname,
        //   [event.target.name]: event.target.value
        // }
       
        return {
          ...prevname,
          [name]: type === "checkbox" ? checked : value
          }
        })
    }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name)
    if (name.firstname === name.lastName) {
      alert("successfully matched")
    }
  }
  // function handlelast(event) {
    //     setLastName(event.target.value)
    // }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='name' onChange={handledata} name='firstname' value={name.firstname}/> 
      <input type='text' placeholder='lastname' onChange={handledata} name='lastName' value={name.lastName}/>
      <input type='email' placeholder='email' onChange={handledata} name='email' value={name.email} />
      <textarea name='comments' placeholder='comment plz...' onChange={handledata} value={name.comments}/>
      <input type='checkbox'
        id='isChecked'
        name='isChecked'
        checked={name.isChecked}
        onChange={handledata}
       />
      <label htmlFor='isChecked'>Is Checked</label>

      <fieldset>
      <legend>Working or not</legend>

      <input type='radio'
        id='employed'
        name='employee'
        value='Working'
        checked={name.employee === "Working"}
        onChange={handledata}
      />
      <label htmlFor='employed'>Working</label>
      <br />
      
        <input
        type='radio'
        id='parttime'
        name='employee'
        value='PartTime'
        checked={name.employee === "PartTime"}
        onChange={handledata}
      />
      <label htmlFor='parttime'>Part-Time</label>
        <br />
      </fieldset>
      

      <label htmlFor="favColour">What is your favColour</label>
      <select
        id='favColour'
        value={name.favColour}
        onChange={handledata}
        name='favColour'
      >
        <option value="" > -- Choose --</option>
        <option value="Blue" > Blue </option>
        <option value="Red" > Red </option>
        <option value="White" > White </option>

      </select>

      <br />
      <button>Submit</button>
    </form>
  )
}

export default Form
