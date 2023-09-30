import React from 'react'
import './Card.css'
import star from './Star 1.png'

const Card = ({image, rating, location, name, money}) => {
  return (
    <div className='card'>
          <img src={image} alt='Pic' className='card--image'/>
          <div className='card--stats'>
              <img src={star} alt='star' className='card--star'/>
              <span>{rating}</span>
              <span className='gray'>(6)</span>
              <span className='gray'>{location}</span>
          </div>
          <p>{name}</p>
          <p> <span className='bold'>{money} </span>/ person</p>
    </div>
  )
}

export default Card
