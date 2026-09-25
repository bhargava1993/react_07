import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'

import { UserContext } from './context/UserContext'

function App() {
  const [username, setUsername] = useState("Harsha")
  return (

    <UserContext.Provider value={{ username, setUsername }}>
      <div style={{ padding: "20px", border: "2px solid black" }}>
        <h2>App component</h2>
        <Profile />
      </div>
    </UserContext.Provider>


  )
}

export default App
