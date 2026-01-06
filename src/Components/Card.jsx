import React from 'react'

const Card = ({userData}) => {
  return (
    <li className='card'>
        <h1>{userData.name}</h1>
        <p>{userData.email}</p>
    </li>
  )
}

export default Card