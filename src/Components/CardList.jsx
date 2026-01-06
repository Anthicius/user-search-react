import React from 'react'
import Card from './Card'

const CardList = (props) => {
  return (
    <ul>
    {props.users.map((user)=>(
        <Card userData={user} key = {user.id}/>
    ))}
    </ul>
  )
}

export default CardList