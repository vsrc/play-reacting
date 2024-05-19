import {  useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const API_USERS_URL = "https://randomuser.me/api/?results=20";

interface UserName {
  first: string;
}
interface User {
  name: UserName;
}


function App() {

  const [users, setUsers] = useState<User[]>([])

  useEffect(() =>{
    axios
    .get(API_USERS_URL)
    .then(r => {
      setUsers(r.data.results)
    })
    .catch(e => console.error(e))

  }, [])

  return (
    <>
      <h1>Users</h1>
      <div>
        {users.map((u, i) => (
          <div key={i}>{u.name.first}</div>
        ))}
      </div>
    </>
  )
}

export default App
