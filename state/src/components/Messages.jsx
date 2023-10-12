import React from 'react'

const Messages = () => {
    const [message, setMessage] = React.useState([])
    function handle() {
         setMessage()
     }

  return (
    <div>
          {
              message.length === 0 ?
                  <h1>You have not any Message</h1> :
                  <h1> You have { message.length} to read</h1>
        }
    </div>
  )
}

export default Messages
