import React from 'react'

const Image = () => {

    const [isFavorite, setIsFavorite] = React.useState("true")

     let starIcon = isFavorite ? 'star.png' : 'star (1).png'

    function handle() {
        setIsFavorite(!isFavorite)
    }
    return (
    <div>
        <img src={`./${starIcon}`} alt='start' onClick={handle} />
        {starIcon}
    </div>
  )
}

export default Image
