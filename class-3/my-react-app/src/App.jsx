import { useState } from 'react'
import './App.css'
import DashBoard from './components/Dashboard';
import Login from './components/Login';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isAdmin = false;

  function handleLogout() {
    console.log("handleLogout fn");
    setIsLoggedIn(false);
  }

  function handleLogin() {
    console.log("handleLogin fn");
    setIsLoggedIn(true);
  }
  return (
    <>
      {/* <h1>Hello React!</h1>
      <p>My first React Application using vite</p> */}
      {/* {isLoggedIn ? <h1>DashBoard Component</h1> : <h1>Login Component</h1>} */}

      {/* {isLoggedIn ? <DashBoard /> : <Login />}
      {isAdmin && <button>Delete</button>}
      {isAdmin && <button> Edit</button>} */}

      {isLoggedIn ? (
        <div>
          <h1>Welcome, Bhargava</h1>
          <p>You are logged in.</p>
          <button onClick={handleLogout}> Logout</button>
        </div>) : (
        <div>
          <h2>Please login</h2>
          <button onClick={handleLogin}> Login</button>
        </div>
      )}

      
    </>
  )
}

export default App
