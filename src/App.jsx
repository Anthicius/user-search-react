import { useEffect, useState } from 'react'
import './App.css'
import CardList from './Components/CardList'
import SearchBox from './Components/SearchBox'


function App() {
  
  const [users, setUsers] = useState([])
  const [searchField, setSearchField] = useState("")

  const handleSearchChange = (e) => {
    setSearchField(e.target.value)
  }

  useEffect(()=>{
    const load = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json() 
        setUsers(data)
      } catch (err) {
        console.log(err)
      }
    }
    load();
    
  },[])
  
  let filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <>
      <SearchBox onSearchChange = {handleSearchChange} searchField={searchField}/>
      <CardList users = {filteredUsers}/>
    </>
  )
}

export default App
