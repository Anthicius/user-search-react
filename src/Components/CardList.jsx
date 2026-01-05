import React from 'react'

const CardList = (props) => {
  return (
    <ul>
    {props.users.map((user)=>(
        <li id={user.id}>{user.name}</li>
    ))}
    </ul>
  )
}

export default CardList