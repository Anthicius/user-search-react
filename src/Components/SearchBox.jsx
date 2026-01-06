import React from 'react'

const SearchBox = ({onSearchChange, searchField}) => {
  return (
    <input type='search' placeholder='Search for Users' value={searchField} onChange={(e)=>onSearchChange(e)}/>
  )
}

export default SearchBox