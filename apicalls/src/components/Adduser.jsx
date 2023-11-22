import React from 'react'

const Adduser = ({addposts}) => {
   
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    
    const handleSubmit = (event) => {
   event.preventDefault();
       addposts(title, body);
       setTitle('');
       setBody('');
      alert("Data Stored")
}; 
    
  return (
   			<div className="addcontainer">
            <form onSubmit={handleSubmit}>
               <h2>Add title & body</h2>
               <label>Title :- </label>
            <input type="text" className="form-control" value={title}
               onChange={(event) => setTitle(event.target.value)}
               />
               <br />
               <label>Body :- </label>
            <input name="" className="form-control" id="" cols="8" rows="8" 
               value={body} onChange={(event) => setBody(event.target.value)} 
               ></input>
               <br />
            <button type="submit" className='addbutton'>Add</button>
         </form>
         </div>
  )
}

export default Adduser
