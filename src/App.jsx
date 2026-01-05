import { useEffect, useState } from 'react'
import './App.css'
import CardList from './Components/CardList'


function App() {
  
  const [users, setUsers] = useState([])

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
  
  
  return (
    <>
      <CardList users = {users}/>
    </>
  )
}

export default App
