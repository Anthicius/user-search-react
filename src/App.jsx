import { useEffect, useState } from 'react'
import './App.css'


const fetchUsers = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/users")
const data = await response.json();
if(!response.ok) throw new Error("There was an issue fetching movies.")
return data;

}

function App() {
  
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const load = async () => {
      try {
        const data = await fetchUsers() 
        setUsers(data)
      } catch (err) {
        console.log(err)
      }
    }
    load();
    
  },[])
  
  
  return (
    <>
    <ul>
      {users.map((user)=>(
        <li key = {user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>

    </>
  )
}

export default App
